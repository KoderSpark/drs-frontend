import { useState, useEffect } from 'react';
import api from '../api/backend';

interface Doctor {
  _id: string;
  name: string;
  age: string;
  sex: string;
  qualification: string;
  phone: string;
  alternateMobile: string;
  email: string;
  passportPhoto: string;
  certificates: string;
  aadharNumber: string;
  aadharPhoto: string;
  houseAddress: string;
  clinicAddress: string;
  nominees: {
    name: string;
    age: string;
    sex: string;
    email: string;
    phone: string;
    bankAccountNumber: string;
    bankAccountNumberConfirm?: string;
    ifscCode: string;
    bankHolderName: string;
    percentage: string;
  }[];
  familyMember1?: {
    name: string;
    age: string;
    sex: string;
    email: string;
    mobile: string;
    address: string;
  };
  familyMember2?: {
    name: string;
    age: string;
    sex: string;
    email: string;
    mobile: string;
    address: string;
  };
}

export default function Profile() {
  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editedNominees, setEditedNominees] = useState<any[]>([]);
  const [numNominees, setNumNominees] = useState(1);
  const [files, setFiles] = useState<{
    passportPhoto: File | null;
    certificates: File | null;
    aadharPhoto: File | null;
  }>({
    passportPhoto: null,
    certificates: null,
    aadharPhoto: null
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setError('Please login first');
          return;
        }

        // Get user ID from token payload
        const payload = JSON.parse(atob(token.split('.')[1]));
        const userId = payload.id;
        
        if (!userId) {
          setError('Invalid user session');
          return;
        }

        // Use the specific doctor endpoint
        const data = await api.doctors.get(userId);
        setDoctor(data);
        if (data.nominees && data.nominees.length > 0) {
            setEditedNominees(data.nominees);
            setNumNominees(data.nominees.length);
        } else if (data.nominee && Object.keys(data.nominee).length > 0 && data.nominee.name) {
            setEditedNominees([{ ...data.nominee, percentage: '100' }]);
            setNumNominees(1);
        } else {
            setEditedNominees([{ name: '', age: '', sex: '', email: '', phone: '', bankAccountNumber: '', bankAccountNumberConfirm: '', ifscCode: '', bankHolderName: '', percentage: '100' }]);
            setNumNominees(1);
        }
        
        // Store userId for future use
        localStorage.setItem('userId', userId);
      } catch (err: any) {
        setError(err.message || 'Failed to load profile');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFiles(prev => ({
        ...prev,
        [name]: files[0]
      }));
    }
  };

  const handleNumNomineesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const num = parseInt(e.target.value, 10);
    setNumNominees(num);
    setEditedNominees(prev => {
      const next = [...prev];
      while (next.length < num) {
        next.push({ name: '', age: '', sex: '', email: '', phone: '', bankAccountNumber: '', bankAccountNumberConfirm: '', ifscCode: '', bankHolderName: '', percentage: '' });
      }
      if (next.length > num) next.length = num;
      if (num === 1 && next[0]) next[0].percentage = '100';
      return next;
    });
  };

  const handleNomineeChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const newNominees = [...editedNominees];
    newNominees[index] = { ...newNominees[index], [name]: value };
    setEditedNominees(newNominees);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!doctor) return;
    setError('');
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      if (files.passportPhoto) {
        formData.append('passportPhoto', files.passportPhoto);
      }
      if (files.certificates) {
        formData.append('certificates', files.certificates);
      }
      if (files.aadharPhoto) {
        formData.append('aadharPhoto', files.aadharPhoto);
      }

      // Get all the form data
      const form = e.target as HTMLFormElement;
      const formElements = form.elements as any;
      
      const fields = [
        'name', 'age', 'sex', 'qualification', 'phone', 'alternateMobile',
        'email', 'houseAddress', 'clinicAddress', 'aadharNumber'
      ];

      fields.forEach(field => {
        if (formElements[field]) {
          formData.append(field, formElements[field].value);
        }
      });

      // Validate and create nominees array
      let totalPercentage = 0;
      for (let i = 0; i < editedNominees.length; i++) {
        const n = editedNominees[i];
        if (!n.bankAccountNumber || !n.bankAccountNumberConfirm || !n.ifscCode || !n.bankHolderName) {
           setError(`Nominee ${i+1} bank details are required.`);
           setIsSubmitting(false);
           return;
        }
        if (n.bankAccountNumber !== n.bankAccountNumberConfirm) {
           setError(`Nominee ${i+1} bank account numbers do not match.`);
           setIsSubmitting(false);
           return;
        }
        const p = parseFloat(n.percentage);
        if (isNaN(p) || p <= 0) {
           setError(`Nominee ${i+1} percentage must be a valid positive number.`);
           setIsSubmitting(false);
           return;
        }
        totalPercentage += p;
        n.confirmBankAccountNumber = n.bankAccountNumberConfirm; // For backend compatibility
      }
      if (Math.abs(totalPercentage - 100) > 0.01) {
         setError('Total nominee percentage must equal exactly 100%.');
         setIsSubmitting(false);
         return;
      }

      formData.append('nominees', JSON.stringify(editedNominees));

      await api.doctors.updateProfile(doctor._id, formData);
      // Refresh the data after successful update
      const updatedData = await api.doctors.get(doctor._id);
      setDoctor(updatedData);
      if (updatedData.nominees && updatedData.nominees.length > 0) {
          setEditedNominees(updatedData.nominees);
          setNumNominees(updatedData.nominees.length);
      }
      setSuccessMessage('Profile updated successfully');
      setTimeout(() => setSuccessMessage(''), 3000);
      setError(''); // Clear any existing errors
      setIsEditing(false); // Exit edit mode
      setIsSubmitting(false);
    } catch (err: any) {
      setError(err.message || 'Failed to update profile');
      setIsSubmitting(false);
    }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center text-red-600">{error}</div>;
  if (!doctor) return <div className="min-h-screen flex items-center justify-center">No profile data found</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome, <span className="text-blue-600">{doctor.name}</span>! 👋
            </h1>
            <p className="text-gray-600 mt-2">View and manage your profile information</p>
          </div>

          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-gray-900">My Profile</h2>
            <button
              type="button"
              onClick={() => setIsEditing(!isEditing)}
              className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors"
            >
              {isEditing ? 'Cancel Editing' : 'Edit Profile'}
            </button>
          </div>

          {successMessage && (
            <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
              {successMessage}
            </div>
          )}
          
          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    defaultValue={doctor.name}
                    className={`mt-1 block w-full rounded-lg shadow-sm p-2 ${
                      isEditing 
                        ? 'border border-gray-300 bg-white' 
                        : 'border-none bg-gray-50'
                    }`}
                    disabled={!isEditing}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    defaultValue={doctor.email}
                    className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2"
                    disabled={!isEditing}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    defaultValue={doctor.phone}
                    className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2"
                    disabled={!isEditing}
                  />
                </div>

                <div>
                  <label htmlFor="alternateMobile" className="block text-sm font-medium text-gray-700">
                    Alternate Mobile
                  </label>
                  <input
                    type="tel"
                    id="alternateMobile"
                    name="alternateMobile"
                    defaultValue={doctor.alternateMobile}
                    className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2"
                    disabled={!isEditing}
                  />
                </div>

                <div>
                  <label htmlFor="aadharNumber" className="block text-sm font-medium text-gray-700">
                    Aadhar Number
                  </label>
                  <input
                    type="text"
                    id="aadharNumber"
                    name="aadharNumber"
                    defaultValue={doctor.aadharNumber}
                    className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2"
                    disabled={!isEditing}
                  />
                </div>

                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                    Age
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    defaultValue={doctor.age}
                    className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2"
                    disabled={!isEditing}
                  />
                </div>

                <div>
                  <label htmlFor="sex" className="block text-sm font-medium text-gray-700">
                    Sex
                  </label>
                  <select
                    id="sex"
                    name="sex"
                    defaultValue={doctor.sex}
                    className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2"
                    disabled={!isEditing}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Documents */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">Documents</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Current Passport Photo</label>
                  {doctor.passportPhoto && (
                    <img
                      src={doctor.passportPhoto}
                      alt="Passport"
                      className="mt-2 h-32 w-32 object-cover rounded-lg"
                    />
                  )}
                  {isEditing && (
                    <div className="mt-2">
                      <label className="block text-sm font-medium text-gray-700">Update Passport Photo</label>
                      <input
                        type="file"
                        name="passportPhoto"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="mt-1"
                      />
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Current Certificates</label>
                  {doctor.certificates && (
                    <a
                      href={doctor.certificates}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-blue-600 hover:underline"
                    >
                      View Current Certificates
                    </a>
                  )}
                  {isEditing && (
                    <div className="mt-2">
                      <label className="block text-sm font-medium text-gray-700">Update Certificates</label>
                      <input
                        type="file"
                        name="certificates"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={handleFileChange}
                        className="mt-1"
                      />
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Current Aadhar Photo</label>
                  {doctor.aadharPhoto ? (
                    <a
                      href={doctor.aadharPhoto}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-blue-600 hover:underline"
                    >
                      View Current Aadhar
                    </a>
                  ) : (
                    <span className="mt-2 block text-gray-500 text-sm">Not provided</span>
                  )}
                  {isEditing && (
                    <div className="mt-2">
                      <label className="block text-sm font-medium text-gray-700">Update Aadhar</label>
                      <input
                        type="file"
                        name="aadharPhoto"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={handleFileChange}
                        className="mt-1"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Addresses */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">Addresses</h2>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="houseAddress" className="block text-sm font-medium text-gray-700">
                    House Address
                  </label>
                  <textarea
                    id="houseAddress"
                    name="houseAddress"
                    rows={3}
                    defaultValue={doctor.houseAddress}
                    className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2"
                    disabled={!isEditing}
                  />
                </div>

                <div>
                  <label htmlFor="clinicAddress" className="block text-sm font-medium text-gray-700">
                    Clinic Address
                  </label>
                  <textarea
                    id="clinicAddress"
                    name="clinicAddress"
                    rows={3}
                    defaultValue={doctor.clinicAddress}
                    className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2"
                    disabled={!isEditing}
                  />
                </div>
              </div>
            </div>

            {/* Nominee Details */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <h2 className="text-xl font-semibold text-gray-900">Nominee Details</h2>
                {isEditing && (
                  <div className="flex items-center mt-4 sm:mt-0">
                    <label htmlFor="numNominees" className="text-sm font-medium text-gray-700 mr-3">
                      Number of Nominees:
                    </label>
                    <select
                      id="numNominees"
                      value={numNominees}
                      onChange={handleNumNomineesChange}
                      className="border border-gray-300 rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                )}
              </div>

              {editedNominees.map((nominee, idx) => (
                <div key={idx} className={`${idx > 0 ? 'border-t-2 border-gray-200 pt-6 mt-6' : ''}`}>
                  {numNominees > 1 && (
                    <h4 className="font-semibold text-lg text-blue-800 mb-4 bg-blue-100 inline-block px-3 py-1 rounded-md">
                      Nominee {idx + 1}
                    </h4>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor={`nominee_${idx}_name`} className="block text-sm font-medium text-gray-700">
                        Name
                      </label>
                      <input
                        type="text"
                        id={`nominee_${idx}_name`}
                        name="name"
                        value={nominee.name || ''}
                        onChange={(e) => handleNomineeChange(idx, e)}
                        className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2"
                        disabled={!isEditing}
                      />
                    </div>

                    <div>
                      <label htmlFor={`nominee_${idx}_age`} className="block text-sm font-medium text-gray-700">
                        Age
                      </label>
                      <input
                        type="number"
                        id={`nominee_${idx}_age`}
                        name="age"
                        value={nominee.age || ''}
                        onChange={(e) => handleNomineeChange(idx, e)}
                        className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2"
                        disabled={!isEditing}
                      />
                    </div>

                    <div>
                      <label htmlFor={`nominee_${idx}_sex`} className="block text-sm font-medium text-gray-700">
                        Sex
                      </label>
                      <select
                        id={`nominee_${idx}_sex`}
                        name="sex"
                        value={nominee.sex || ''}
                        onChange={(e) => handleNomineeChange(idx, e)}
                        className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2"
                        disabled={!isEditing}
                      >
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor={`nominee_${idx}_email`} className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        id={`nominee_${idx}_email`}
                        name="email"
                        value={nominee.email || ''}
                        onChange={(e) => handleNomineeChange(idx, e)}
                        className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2"
                        disabled={!isEditing}
                      />
                    </div>

                    <div>
                      <label htmlFor={`nominee_${idx}_phone`} className="block text-sm font-medium text-gray-700">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id={`nominee_${idx}_phone`}
                        name="phone"
                        value={nominee.phone || ''}
                        onChange={(e) => handleNomineeChange(idx, e)}
                        className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2"
                        disabled={!isEditing}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor={`nominee_${idx}_percentage`} className="block text-sm font-medium text-gray-700">
                        Percentage Share (%) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        id={`nominee_${idx}_percentage`}
                        name="percentage"
                        value={nominee.percentage || ''}
                        onChange={(e) => handleNomineeChange(idx, e)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 bg-yellow-50"
                        disabled={!isEditing}
                      />
                    </div>

                    <div>
                      <label htmlFor={`nominee_${idx}_bankAccount`} className="block text-sm font-medium text-gray-700">
                        Bank Account Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id={`nominee_${idx}_bankAccount`}
                        name="bankAccountNumber"
                        value={nominee.bankAccountNumber || ''}
                        onChange={(e) => handleNomineeChange(idx, e)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2"
                        disabled={!isEditing}
                      />
                    </div>

                    <div>
                      <label htmlFor={`nominee_${idx}_bankAccountConfirm`} className="block text-sm font-medium text-gray-700">
                        Confirm Bank Account Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id={`nominee_${idx}_bankAccountConfirm`}
                        name="bankAccountNumberConfirm"
                        value={nominee.bankAccountNumberConfirm || nominee.bankAccountNumber || ''}
                        onChange={(e) => handleNomineeChange(idx, e)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2"
                        disabled={!isEditing}
                      />
                    </div>

                    <div>
                      <label htmlFor={`nominee_${idx}_ifsc`} className="block text-sm font-medium text-gray-700">
                        IFSC Code <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id={`nominee_${idx}_ifsc`}
                        name="ifscCode"
                        value={nominee.ifscCode || ''}
                        onChange={(e) => handleNomineeChange(idx, e)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2"
                        disabled={!isEditing}
                      />
                    </div>

                    <div>
                      <label htmlFor={`nominee_${idx}_bankHolder`} className="block text-sm font-medium text-gray-700">
                        Bank Account Holder Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id={`nominee_${idx}_bankHolder`}
                        name="bankHolderName"
                        value={nominee.bankHolderName || ''}
                        onChange={(e) => handleNomineeChange(idx, e)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2"
                        disabled={!isEditing}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end">
              {isEditing && (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Updating...</span>
                    </>
                  ) : (
                    <span>Update Profile</span>
                  )}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}