import { useState, useEffect } from 'react';
import { Upload, FileText, CheckCircle, Clock, XCircle, CreditCard, DollarSign } from 'lucide-react';
import api from '../api/backend';

interface Payment {
  _id: string;
  amount: number;
  date: string;
  referenceNumber: string;
  paymentProof: string;
  status: 'pending' | 'verified' | 'rejected';
  remarks?: string;
  createdAt: string;
  updateHistory?: {
    updatedAt: string;
    changes: { field: string; oldValue: string; newValue: string; }[];
  }[];
}

interface Member {
  _id: string;
  name: string;
  email: string;
  phone: string;
}

const Payments = () => {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    amount: '',
    date: new Date().toISOString().split('T')[0],
    referenceNumber: '',
  });
  const [editingPaymentId, setEditingPaymentId] = useState<string | null>(null);
  const [expandedHistoryIds, setExpandedHistoryIds] = useState<string[]>([]);
  const [members, setMembers] = useState<Member[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [paymentProof, setPaymentProof] = useState<File | null>(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const fetchPayments = async () => {
    try {
      const res = await api.payments.me();
      setPayments(res);
    } catch (err) {
      console.error('Failed to fetch payments', err);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchMembers = async () => {
    try {
      const data = await api.doctors.list('approved');
      setMembers(data);
    } catch (err) {
      console.error('Failed to fetch members', err);
    }
  };

  useEffect(() => {
    fetchPayments();
    fetchMembers();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPaymentProof(e.target.files[0]);
      setError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.amount || !formData.date) {
      setError('Amount and Date are required fields.');
      return;
    }
    if (!editingPaymentId && !paymentProof) {
      setError('Please upload a proof of payment.');
      return;
    }
    if (!searchQuery && !editingPaymentId) {
      setError('Please select a member.');
      return;
    }

    setIsSubmitting(true);
    setError('');
    setSuccess('');

    try {
      const form = new FormData();
      form.append('amount', formData.amount);
      form.append('date', formData.date);
      if (formData.referenceNumber) form.append('referenceNumber', formData.referenceNumber);
      if (paymentProof) form.append('paymentProof', paymentProof);

      if (!editingPaymentId) {
        if (searchQuery) {
          const matchedMember = members.find(m => `${m.name} (${m.email})` === searchQuery);
          if (matchedMember) {
            form.append('doctorId', matchedMember._id);
          } else {
            setError('Invalid member selected. Please select a valid member from the dropdown.');
            setIsSubmitting(false);
            return;
          }
        } else {
          setError('Please select a member.');
          setIsSubmitting(false);
          return;
        }
        await api.payments.submit(form);
        setSuccess('Payment submitted successfully! It is now pending verification.');
      } else {
        await api.payments.update(editingPaymentId, form);
        setSuccess('Payment updated successfully!');
      }

      setFormData({
        amount: '',
        date: new Date().toISOString().split('T')[0],
        referenceNumber: '',
      });
      setPaymentProof(null);
      setEditingPaymentId(null);
      fetchPayments();
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to submit payment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'verified':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"><CheckCircle size={12} className="mr-1" /> Verified</span>;
      case 'rejected':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800"><XCircle size={12} className="mr-1" /> Rejected</span>;
      default:
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800"><Clock size={12} className="mr-1" /> Pending</span>;
    }
  };

  const handleEdit = (payment: Payment) => {
    setEditingPaymentId(payment._id);
    setFormData({
      amount: payment.amount.toString(),
      date: new Date(payment.date).toISOString().split('T')[0],
      referenceNumber: payment.referenceNumber || '',
    });
    // Find member for the search query if possible
    // Note: me() might not return doctorId populated if it's the current user, or it might just be the ID. 
    // We'll leave searchQuery blank if we don't have full info, as doctorId isn't updated.
    setSearchQuery(''); 
    setPaymentProof(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleHistory = (id: string) => {
    setExpandedHistoryIds(prev => prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <CreditCard className="mr-3 text-blue-600" size={32} />
            My Payments
          </h1>
          <p className="mt-2 text-gray-600">Submit new payments and view your payment history.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Submit Payment Form */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-blue-600 px-6 py-4">
                <h2 className="text-xl font-semibold text-white flex items-center">
                  <DollarSign className="mr-2" size={24} />
                  {editingPaymentId ? 'Update Payment' : 'Submit Payment'}
                </h2>
              </div>
              <div className="p-6">
                {error && <div className="mb-4 bg-red-50 text-red-700 p-3 rounded-lg text-sm">{error}</div>}
                {success && <div className="mb-4 bg-green-50 text-green-700 p-3 rounded-lg text-sm">{success}</div>}
                
                {editingPaymentId && (
                  <div className="mb-4 flex justify-between items-center bg-yellow-50 p-3 rounded-lg text-sm text-yellow-800 border border-yellow-200">
                    <span>You are editing an existing payment.</span>
                    <button type="button" onClick={() => { setEditingPaymentId(null); setFormData({amount: '', date: new Date().toISOString().split('T')[0], referenceNumber: ''}); }} className="font-semibold underline">Cancel</button>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {!editingPaymentId && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Select Member *</label>
                      <input
                        type="text"
                        list="approved-members"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Type name or email to search..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        required
                      />
                      <datalist id="approved-members">
                        {members.map(m => (
                          <option key={m._id} value={`${m.name} (${m.email})`} />
                        ))}
                      </datalist>
                    </div>
                  )}

                  <div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Amount Paid (₹) *</label>
                    <input
                      type="number"
                      name="amount"
                      value={formData.amount}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g. 365"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Payment Date *</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Reference/Transaction ID</label>
                    <input
                      type="text"
                      name="referenceNumber"
                      value={formData.referenceNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g. UPI Ref No."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Payment Proof (Receipt/Screenshot) {!editingPaymentId && '*'}</label>
                    <div className="relative">
                      <input
                        type="file"
                        id="paymentProof"
                        onChange={handleFileChange}
                        accept=".pdf,.jpg,.jpeg,.png"
                        className="hidden"
                      />
                      <label
                        htmlFor="paymentProof"
                        className={`flex items-center justify-center w-full px-4 py-3 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${paymentProof ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:bg-gray-50'}`}
                      >
                        <Upload className={`mr-2 ${paymentProof ? 'text-blue-500' : 'text-gray-400'}`} size={20} />
                        <span className={`truncate max-w-[200px] ${paymentProof ? 'text-blue-700' : 'text-gray-600'}`}>
                          {paymentProof ? paymentProof.name : 'Upload file'}
                        </span>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : editingPaymentId ? 'Update Payment' : 'Submit Payment'}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Payment History */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden h-full">
              <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                  <FileText className="mr-2 text-blue-600" size={24} />
                  Payment History
                </h2>
              </div>
              <div className="p-6 overflow-x-auto">
                {isLoading ? (
                  <div className="text-center py-8 text-gray-500">Loading payments...</div>
                ) : payments.length === 0 ? (
                  <div className="text-center py-12 text-gray-500 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                    <FileText className="mx-auto h-12 w-12 text-gray-400 mb-3" />
                    <p>No payment history found.</p>
                  </div>
                ) : (
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ref No.</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {payments.map((payment) => (
                        <React.Fragment key={payment._id}>
                          <tr className="hover:bg-gray-50">
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                              {new Date(payment.date).toLocaleDateString()}
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              ₹{payment.amount}
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                              {payment.referenceNumber || '-'}
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap">
                              {getStatusBadge(payment.status)}
                              {payment.remarks && (
                                <p className="text-xs text-red-600 mt-1 max-w-[150px] truncate" title={payment.remarks}>
                                  {payment.remarks}
                                </p>
                              )}
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm">
                              <div className="flex space-x-3">
                                <a 
                                  href={payment.paymentProof} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-blue-600 hover:text-blue-800 hover:underline flex items-center"
                                >
                                  View
                                </a>
                                {payment.status !== 'verified' && (
                                  <button onClick={() => handleEdit(payment)} className="text-indigo-600 hover:text-indigo-800 hover:underline">
                                    Edit
                                  </button>
                                )}
                                {payment.updateHistory && payment.updateHistory.length > 0 && (
                                  <button onClick={() => toggleHistory(payment._id)} className="text-gray-500 hover:text-gray-700 underline">
                                    History
                                  </button>
                                )}
                              </div>
                            </td>
                          </tr>
                          {expandedHistoryIds.includes(payment._id) && payment.updateHistory && (
                            <tr>
                              <td colSpan={5} className="bg-gray-50 px-4 py-4 border-t border-gray-200">
                                <div className="text-sm text-gray-700">
                                  <h4 className="font-semibold mb-2 text-gray-900">Update History</h4>
                                  <div className="space-y-3">
                                    {payment.updateHistory.map((h, i) => (
                                      <div key={i} className="bg-white p-3 rounded shadow-sm border border-gray-200">
                                        <div className="text-xs text-gray-500 mb-1">Updated on {new Date(h.updatedAt).toLocaleString()}</div>
                                        <ul className="list-disc pl-5">
                                          {h.changes.map((c, j) => (
                                            <li key={j}>
                                              <span className="font-medium capitalize">{c.field}</span> changed from <span className="line-through text-red-500">{c.oldValue}</span> to <span className="text-green-600">{c.newValue}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </td>
                            </tr>
                          )}
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
