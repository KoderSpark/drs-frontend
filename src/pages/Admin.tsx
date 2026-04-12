import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/backend';
import { useAuth } from '../context/AuthContext';
import { Users, MessageSquare } from 'lucide-react';

interface Doctor {
  _id: string;
  name: string;
  email: string;
  phone: string;
  qualification: string;
  status: string;
  passportPhoto: string;
  certificates: string;
  createdAt: string;
}

interface ContactMessage {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  createdAt: string;
}

export default function Admin() {
  const [activeTab, setActiveTab] = useState<'doctors' | 'contacts'>('doctors');
  
  // Doctors state
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'deceased'>('all');
  const [approvalData, setApprovalData] = useState({ disease: '', message: '' });

  // Contacts state
  const [contacts, setContacts] = useState<ContactMessage[]>([]);

  // Shared state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  const navigate = useNavigate();
  const { isAdmin } = useAuth();

  useEffect(() => {
    if (!isAdmin) {
      navigate('/admin/login');
      return;
    }
  }, [isAdmin, navigate]);

  const fetchData = async () => {
    setLoading(true);
    try {
      if (activeTab === 'doctors') {
        const data = await api.doctors.list(filter !== 'all' ? filter : undefined);
        setDoctors(data);
      } else if (activeTab === 'contacts') {
        const data = await api.contacts.list();
        setContacts(data);
      }
    } catch (err: any) {
      setError(err.message || 'Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [activeTab, filter]);

  const handleApprove = async (doctorId: string) => {
    try {
      if (!approvalData.disease) {
        alert('Please enter disease name');
        return;
      }
      await api.doctors.approve(doctorId, {
        disease: approvalData.disease,
        message: approvalData.message
      });
      fetchData();
      setSelectedDoctor(null);
      setApprovalData({ disease: '', message: '' });
    } catch (err: any) {
      alert(err.message || 'Failed to approve doctor');
    }
  };

  const handleMarkDeceased = async (doctorId: string, data: { reason?: string; diseaseName?: string }) => {
    try {
      await api.doctors.deceased(doctorId, data);
      fetchData();
    } catch (err: any) {
      alert(err.message || 'Failed to mark doctor as deceased');
    }
  };

  if (loading && !doctors.length && !contacts.length) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="mt-2 text-gray-600">Manage platform operations and user requests</p>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('doctors')}
              className={`${
                activeTab === 'doctors'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
            >
              <Users className="mr-2" size={20} />
              Doctors
            </button>
            <button
              onClick={() => setActiveTab('contacts')}
              className={`${
                activeTab === 'contacts'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
            >
              <MessageSquare className="mr-2" size={20} />
              Contact Queries
            </button>
          </nav>
        </div>

        {error && <div className="mb-4 text-red-600 bg-red-50 p-4 rounded-md">{error}</div>}

        {activeTab === 'doctors' && (
          <>
            <div className="mb-6">
              <label htmlFor="filter" className="block text-sm font-medium text-gray-700 mb-2">
                Filter Doctors
              </label>
              <select
                id="filter"
                value={filter}
                onChange={(e) => setFilter(e.target.value as typeof filter)}
                className="mt-1 block max-w-xs w-full pl-3 pr-10 py-2 border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              >
                <option value="all">All Doctors</option>
                <option value="pending">Pending Approval</option>
                <option value="approved">Approved</option>
                <option value="deceased">Deceased</option>
              </select>
            </div>

            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="divide-y divide-gray-200">
                {doctors.length === 0 ? (
                  <div className="p-6 text-center text-gray-500">No doctors found for this filter</div>
                ) : (
                  doctors.map((doctor) => (
                    <div key={doctor._id} className="p-6">
                      <div className="flex items-start space-x-6">
                        <div className="flex-shrink-0">
                          {doctor.passportPhoto ? (
                            <img
                              src={doctor.passportPhoto}
                              alt={doctor.name}
                              className="h-24 w-24 rounded-lg object-cover"
                            />
                          ) : (
                            <div className="h-24 w-24 rounded-lg bg-gray-200 flex items-center justify-center">
                              <span className="text-2xl text-gray-500">{doctor.name.charAt(0)}</span>
                            </div>
                          )}
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div>
                              <h2 className="text-xl font-semibold text-gray-900">{doctor.name}</h2>
                              <p className="text-sm text-gray-500">Registered on {new Date(doctor.createdAt).toLocaleDateString()}</p>
                            </div>
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              doctor.status === 'approved' ? 'bg-green-100 text-green-800' :
                              doctor.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {doctor.status.charAt(0).toUpperCase() + doctor.status.slice(1)}
                            </span>
                          </div>

                          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm text-gray-500">Email</p>
                              <p className="text-sm font-medium text-gray-900">{doctor.email}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Phone</p>
                              <p className="text-sm font-medium text-gray-900">{doctor.phone}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Qualification</p>
                              <p className="text-sm font-medium text-gray-900">{doctor.qualification}</p>
                            </div>
                            {doctor.certificates && (
                              <div>
                                <p className="text-sm text-gray-500">Certificates</p>
                                <a
                                  href={doctor.certificates}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-sm text-blue-600 hover:underline"
                                >
                                  View Certificates
                                </a>
                              </div>
                            )}
                          </div>

                          {selectedDoctor?._id === doctor._id ? (
                            <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                              <div className="space-y-4">
                                <div>
                                  <label htmlFor="disease" className="block text-sm font-medium text-gray-700">
                                    Disease Name *
                                  </label>
                                  <input
                                    type="text"
                                    id="disease"
                                    value={approvalData.disease}
                                    onChange={(e) => setApprovalData(prev => ({ ...prev, disease: e.target.value }))}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    required
                                  />
                                </div>
                                <div>
                                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Approval Message (Optional)
                                  </label>
                                  <textarea
                                    id="message"
                                    value={approvalData.message}
                                    onChange={(e) => setApprovalData(prev => ({ ...prev, message: e.target.value }))}
                                    rows={3}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                  />
                                </div>
                                <div className="flex justify-end space-x-3">
                                  <button
                                    onClick={() => setSelectedDoctor(null)}
                                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                                  >
                                    Cancel
                                  </button>
                                  <button
                                    onClick={() => handleApprove(doctor._id)}
                                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                                  >
                                    Confirm Approval
                                  </button>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="mt-4 flex space-x-3">
                              {doctor.status === 'pending' && (
                                <button
                                  onClick={() => setSelectedDoctor(doctor)}
                                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                                >
                                  Approve Doctor
                                </button>
                              )}
                              {doctor.status !== 'deceased' && (
                                <button
                                  onClick={() => {
                                    const reason = window.prompt('Enter reason for marking as deceased (optional):');
                                    const disease = window.prompt('Enter disease name (optional):');
                                    if (reason !== null || disease !== null) {
                                      handleMarkDeceased(doctor._id, {
                                        reason: reason || undefined,
                                        diseaseName: disease || undefined
                                      });
                                    }
                                  }}
                                  className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
                                >
                                  Mark as Deceased
                                </button>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </>
        )}

        {activeTab === 'contacts' && (
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="divide-y divide-gray-200">
              {contacts.length === 0 ? (
                <div className="p-6 text-center text-gray-500">No contact queries found</div>
              ) : (
                contacts.map((contact) => (
                  <div key={contact._id} className="p-6 hover:bg-gray-50">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-medium text-gray-900">{contact.name}</h3>
                      <span className="text-sm text-gray-500">
                        {new Date(contact.createdAt).toLocaleDateString()} {new Date(contact.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                      </span>
                    </div>
                    <div className="mt-1 flex flex-col sm:flex-row sm:space-x-4 text-sm text-gray-500 mb-4">
                      <p><strong>Email:</strong> {contact.email}</p>
                      {contact.phone && <p><strong>Phone:</strong> {contact.phone}</p>}
                    </div>
                    <div className="bg-gray-50 border border-gray-200 rounded p-4 text-gray-700 text-sm whitespace-pre-wrap">
                      {contact.message}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}