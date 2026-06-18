import { useState } from 'react';
import { Upload, CheckCircle, Loader2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export interface Nominee {
  name: string;
  age: string;
  sex: string;
  email: string;
  phone: string;
  bankAccountNumber: string;
  bankAccountNumberConfirm: string;
  ifscCode: string;
  bankHolderName: string;
  percentage: string;
  aadharNumber: string;
  aadharPhoto: File | null;
}

export const initialNominee: Nominee = {
  name: '', age: '', sex: '', email: '', phone: '', bankAccountNumber: '', bankAccountNumberConfirm: '', ifscCode: '', bankHolderName: '', percentage: '100', aadharNumber: '', aadharPhoto: null
};

export interface Daughter {
  name: string;
  age: string;
  relationshipType: string;
  phone: string;
  email: string;
  aadharNumber: string;
  aadharPhoto: File | null;
}

export const initialDaughter: Daughter = { name: '', age: '', relationshipType: '', phone: '', email: '', aadharNumber: '', aadharPhoto: null };

interface FormData {
  name: string;
  age: string;
  sex: string;
  qualification: string;
  mobile: string;
  alternateMobile: string;
  email: string;
  password: string;
  passportPhoto: File | null;
  certificates: File | null;
  aadharNumber: string;
  aadharPhoto: File | null;
  houseAddress: string;
  clinicAddress: string;
  family1Name: string;
  family1Age: string;
  family1Sex: string;
  family1Email: string;
  family1Mobile: string;
  family1Address: string;
  family1AadharNumber: string;
  family1AadharPhoto: File | null;
  family2Name: string;
  family2Age: string;
  family2Sex: string;
  family2Email: string;
  family2Mobile: string;
  family2Address: string;
  family2AadharNumber: string;
  family2AadharPhoto: File | null;
  termsAccepted: boolean;
  subscribe: boolean;
}

export default function JoinNow() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    age: '',
    sex: '',
    qualification: '',
    mobile: '',
    alternateMobile: '',
    email: '',
    password: '',
    passportPhoto: null,
    certificates: null,
    aadharNumber: '',
    aadharPhoto: null,
    houseAddress: '',
    clinicAddress: '',
    family1Name: '',
    family1Age: '',
    family1Sex: '',
    family1Email: '',
    family1Mobile: '',
    family1Address: '',
    family1AadharNumber: '',
    family1AadharPhoto: null,
    family2Name: '',
    family2Age: '',
    family2Sex: '',
    family2Email: '',
    family2Mobile: '',
    family2Address: '',
    family2AadharNumber: '',
    family2AadharPhoto: null,
    termsAccepted: false,
    subscribe: false,
  });

  const [numNominees, setNumNominees] = useState(1);
  const [nominees, setNominees] = useState<Nominee[]>([{...initialNominee}]);

  const [daughters, setDaughters] = useState<Daughter[]>([]);

  const handleDaughterChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const newDaughters = [...daughters];
    
    if (type === 'file') {
      const target = e.target as HTMLInputElement;
      if (target.files && target.files[0]) {
        newDaughters[index] = { ...newDaughters[index], [name]: target.files[0] };
      }
    } else {
      newDaughters[index] = { ...newDaughters[index], [name]: value };
    }
    
    setDaughters(newDaughters);
    
    const errorKey = `daughter_${index}_${name}`;
    if (errors[errorKey]) {
      setErrors(prev => ({ ...prev, [errorKey]: '' }));
    }
  };

  const addDaughter = () => setDaughters([...daughters, { ...initialDaughter }]);
  const removeDaughter = (index: number) => {
    const newDaughters = daughters.filter((_, i) => i !== index);
    setDaughters(newDaughters);
    
    // Clean up related errors
    const newErrors = { ...errors };
    Object.keys(newErrors).forEach(key => {
      if (key.startsWith(`daughter_${index}_`)) {
        delete newErrors[key];
      }
    });
    setErrors(newErrors);
  };

  const handleNumNomineesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const num = parseInt(e.target.value, 10);
    setNumNominees(num);
    setNominees(prev => {
      const next = [...prev];
      while (next.length < num) {
        next.push({ ...initialNominee, percentage: '' });
      }
      if (next.length > num) next.length = num;
      if (num === 1) next[0].percentage = '100';
      return next;
    });
  };

  const handleNomineeChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const newNominees = [...nominees];
    newNominees[index] = { ...newNominees[index], [name]: value };
    setNominees(newNominees);
    
    const errorKey = `nominee_${index}_${name}`;
    if (errors[errorKey]) {
      setErrors(prev => ({ ...prev, [errorKey]: '' }));
    }
  };

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const validateStep = (step: number) => {
    const newErrors: { [key: string]: string } = {};

    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = 'Name is required';
      if (!formData.age) {
        newErrors.age = 'Valid age is required (18+)';
      } else {
        const ageNum = parseInt(formData.age as string, 10);
        if (isNaN(ageNum) || ageNum < 18) {
          newErrors.age = 'Valid age is required (18+)';
        } else if (ageNum >= 65) {
          newErrors.age = 'Age should be less than 65';
        }
      }
      if (!formData.sex) newErrors.sex = 'Sex is required';
      if (!formData.qualification) newErrors.qualification = 'Qualification is required';
      if (!formData.mobile || formData.mobile.length < 10) newErrors.mobile = 'Valid mobile number is required';
      if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
      if (!formData.password || formData.password.length < 6) newErrors.password = 'Password (min 6 chars) is required';
      if (!formData.aadharNumber.trim()) newErrors.aadharNumber = 'Aadhar number is required';
    }

    if (step === 2) {
      if (!formData.houseAddress.trim()) newErrors.houseAddress = 'House address is required';
      if (!formData.clinicAddress.trim()) newErrors.clinicAddress = 'Clinic address is required';
      if (!formData.passportPhoto) newErrors.passportPhoto = 'Passport photo is required';
      if (!formData.certificates) newErrors.certificates = 'Certificates are required';
      if (!formData.aadharPhoto) newErrors.aadharPhoto = 'Aadhar photo is required';
    }

    if (step === 3) {
      let totalPercentage = 0;
      nominees.forEach((n, idx) => {
        if (!n.name.trim()) newErrors[`nominee_${idx}_name`] = 'Nominee name is required';
        if (!n.age) newErrors[`nominee_${idx}_age`] = 'Nominee age is required';
        if (!n.sex) newErrors[`nominee_${idx}_sex`] = 'Nominee sex is required';
        if (!n.email || !/\S+@\S+\.\S+/.test(n.email)) newErrors[`nominee_${idx}_email`] = 'Valid nominee email is required';
        if (!n.phone) newErrors[`nominee_${idx}_phone`] = 'Nominee phone is required';
        if (!n.bankAccountNumber.trim()) newErrors[`nominee_${idx}_bankAccountNumber`] = 'Bank account is required';
        if (n.bankAccountNumber.trim() !== n.bankAccountNumberConfirm.trim()) newErrors[`nominee_${idx}_bankAccountNumberConfirm`] = 'Account numbers do not match';
        if (!n.ifscCode.trim()) newErrors[`nominee_${idx}_ifscCode`] = 'IFSC code is required';
        if (!n.bankHolderName.trim()) newErrors[`nominee_${idx}_bankHolderName`] = 'Bank holder name is required';
        if (!n.aadharNumber.trim()) newErrors[`nominee_${idx}_aadharNumber`] = 'Aadhar number is required';
        if (!n.aadharPhoto) newErrors[`nominee_${idx}_aadharPhoto`] = 'Aadhar photo is required';
        
        const p = parseFloat(n.percentage);
        if (isNaN(p) || p <= 0) {
          newErrors[`nominee_${idx}_percentage`] = 'Valid percentage required';
        } else {
          totalPercentage += p;
        }
      });

      if (Math.abs(totalPercentage - 100) > 0.01) {
        newErrors.nomineePercentageTotal = 'Total percentage across all nominees must be exactly 100%';
      }

      daughters.forEach((d, idx) => {
        if (!d.name.trim()) newErrors[`daughter_${idx}_name`] = 'Daughter name is required';
        if (!d.age) newErrors[`daughter_${idx}_age`] = 'Daughter age is required';
        if (!d.relationshipType) newErrors[`daughter_${idx}_relationshipType`] = 'Relationship type is required';
        if (!d.phone) newErrors[`daughter_${idx}_phone`] = 'Phone number is required';
        if (!d.email || !/\S+@\S+\.\S+/.test(d.email)) newErrors[`daughter_${idx}_email`] = 'Valid email is required';
        if (!d.aadharNumber.trim()) newErrors[`daughter_${idx}_aadharNumber`] = 'Aadhar number is required';
        if (!d.aadharPhoto) newErrors[`daughter_${idx}_aadharPhoto`] = 'Aadhar photo is required';
      });
    }

    if (step === 4) {
      if (formData.family1Name.trim()) {
        if (!formData.family1AadharNumber.trim()) newErrors.family1AadharNumber = 'Aadhar number is required for family member 1';
        if (!formData.family1AadharPhoto) newErrors.family1AadharPhoto = 'Aadhar photo is required for family member 1';
      }

      if (formData.family2Name.trim()) {
        if (!formData.family2AadharNumber.trim()) newErrors.family2AadharNumber = 'Aadhar number is required for family member 2';
        if (!formData.family2AadharPhoto) newErrors.family2AadharPhoto = 'Aadhar photo is required for family member 2';
      }

      if (!formData.termsAccepted) newErrors.termsAccepted = 'You must accept the terms and conditions';
      if (!formData.subscribe) newErrors.subscribe = 'You must opt-in to receive updates';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const firstErrorField = Object.keys(errors)[0];
      const element = document.getElementById(firstErrorField);
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData({ ...formData, [name]: target.checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData({ ...formData, [name]: files[0] });
      if (errors[name]) {
        setErrors({ ...errors, [name]: '' });
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(4)) {
      const firstErrorField = Object.keys(errors)[0];
      const element = document.getElementById(firstErrorField);
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setIsSubmitting(true);
    (async () => {
      try {
        // Build FormData according to backend expectations
        const form = new FormData();
        form.append('name', formData.name);
        form.append('age', formData.age);
        form.append('sex', formData.sex);
        form.append('qualification', formData.qualification);
        form.append('phone', formData.mobile);
        if (formData.alternateMobile) form.append('alternateMobile', formData.alternateMobile);
        form.append('email', formData.email);
        form.append('password', formData.password);
        form.append('aadharNumber', formData.aadharNumber);
        form.append('houseAddress', formData.houseAddress);
        form.append('clinicAddress', formData.clinicAddress);
        form.append('acceptTerms', formData.termsAccepted ? 'true' : 'false');
        form.append('subscribeUpdates', formData.subscribe ? 'true' : 'false');

        // nominees array
        const nomineesJson = nominees.map(n => {
          const { aadharPhoto, ...rest } = n;
          return rest;
        });
        form.append('nominees', JSON.stringify(nomineesJson));
        nominees.forEach((n, idx) => {
          if (n.aadharPhoto) {
            form.append(`nomineeAadharPhoto_${idx}`, n.aadharPhoto);
          }
        });

        if (daughters.length > 0) {
          const daughtersJson = daughters.map(d => {
            const { aadharPhoto, ...rest } = d;
            return rest;
          });
          form.append('daughters', JSON.stringify(daughtersJson));

          daughters.forEach((d, idx) => {
            if (d.aadharPhoto) {
              form.append(`daughterAadharPhoto_${idx}`, d.aadharPhoto);
            }
          });
        }

        const family1 = {
          name: formData.family1Name,
          age: formData.family1Age,
          sex: formData.family1Sex,
          email: formData.family1Email,
          mobile: formData.family1Mobile,
          address: formData.family1Address,
          aadharNumber: formData.family1AadharNumber,
        };
        if (family1.name) form.append('familyMember1', JSON.stringify(family1));

        const family2 = {
          name: formData.family2Name,
          age: formData.family2Age,
          sex: formData.family2Sex,
          email: formData.family2Email,
          mobile: formData.family2Mobile,
          address: formData.family2Address,
          aadharNumber: formData.family2AadharNumber,
        };
        if (family2.name) form.append('familyMember2', JSON.stringify(family2));

        if (formData.passportPhoto) form.append('passportPhoto', formData.passportPhoto);
        if (formData.certificates) form.append('certificates', formData.certificates);
        if (formData.aadharPhoto) form.append('aadharPhoto', formData.aadharPhoto);
        if (formData.family1AadharPhoto) form.append('family1AadharPhoto', formData.family1AadharPhoto);
        if (formData.family2AadharPhoto) form.append('family2AadharPhoto', formData.family2AadharPhoto);

        // lazy import api to avoid circulars
        const api = (await import('../api/backend')).default;
        const res = await api.doctors.register(form);
        // store token if returned
        const token = res?.data?.token || res?.token || (res && (res.token || res.data?.token));
        if (token) localStorage.setItem('token', token);
        
        // Redirect to login page after successful registration
        setTimeout(() => {
          navigate('/login');
        }, 2000);
        
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (err: any) {
        console.error('Registration error', err);
        alert(err?.message || 'Failed to submit application');
        setIsSubmitting(false);
      }
    })();
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-green-600" size={48} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Submitted Successfully!</h2>
            <p className="text-lg text-gray-700 mb-6">
              Thank you for applying to Doctors Welfare. We have received your application and the Trustees will review your documents. Approval is at the Trustees' absolute discretion.
            </p>
            <p className="text-gray-600 mb-8">
              A confirmation email has been sent to <strong>{formData.email}</strong> with further instructions.
            </p>
            <p className="text-blue-600 mb-6">
              You will be redirected to the login page in a moment...
            </p>
            <div className="space-y-4">
              <a
                href="/"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Return to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Doctors Welfare</h1>
          <p className="text-xl text-blue-100 max-w-3xl mb-4">
            Complete the registration form below to apply for Doctors Welfare membership. Open to all registered doctors aged under 65 (Indian citizens only).
          </p>
          <div className="bg-blue-800/50 p-4 rounded-lg inline-block border border-blue-400/30">
            <ul className="text-blue-50 space-y-2">
              <li className="flex items-center">
                <CheckCircle className="mr-2 text-blue-300" size={18} />
                <span>Registration + First Year Fee: <strong>₹365</strong></span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 text-blue-300" size={18} />
                <span>Annual Renewal Fee: <strong>₹100</strong></span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 text-blue-300" size={18} />
                <span>Deceased Contribution: <strong>₹100</strong></span>
              </li>

            </ul>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex justify-center">
            <div className="flex items-center space-x-2">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-8 h-8 flex items-center justify-center rounded-full font-bold ${currentStep === step ? 'bg-blue-600 text-white' : currentStep > step ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
                    {currentStep > step ? <CheckCircle size={16} /> : step}
                  </div>
                  {step < 4 && (
                    <div className={`w-12 h-1 ${currentStep > step ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            {currentStep === 1 && (
              <>
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Personal Information</h2>
              <p className="text-gray-600">Please provide your personal details</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
                  Age *
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${errors.age ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                />
                {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
              </div>

              <div>
                <label htmlFor="sex" className="block text-sm font-medium text-gray-700 mb-2">
                  Sex *
                </label>
                <select
                  id="sex"
                  name="sex"
                  value={formData.sex}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${errors.sex ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                {errors.sex && <p className="text-red-500 text-sm mt-1">{errors.sex}</p>}
              </div>

              <div>
                <label htmlFor="qualification" className="block text-sm font-medium text-gray-700 mb-2">
                  Qualification *
                </label>
                <select
                  id="qualification"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${errors.qualification ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                >
                  <option value="">Select Profession</option>
                  <option value="Doctor">Doctor (MBBS, MD, MS)</option>
                  <option value="Dentist">Dentist (BDS, MDS)</option>
                  <option value="Dermatologist">Dermatologist</option>
                  <option value="Surgeon">Surgeon</option>
                  <option value="Physician">Physician</option>
                  <option value="Pediatrician">Pediatrician</option>
                  <option value="Ophthalmologist">Ophthalmologist</option>
                  <option value="Orthopedic Specialist">Orthopedic Specialist</option>
                  <option value="Other Medical Doctor">Other Medical Doctor</option>
                </select>
                {errors.qualification && <p className="text-red-500 text-sm mt-1">{errors.qualification}</p>}
              </div>

              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-2">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${errors.mobile ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                />
                {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
              </div>

              <div>
                <label htmlFor="alternateMobile" className="block text-sm font-medium text-gray-700 mb-2">
                  Alternate Mobile Number
                </label>
                <input
                  type="tel"
                  id="alternateMobile"
                  name="alternateMobile"
                  value={formData.alternateMobile}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="aadharNumber" className="block text-sm font-medium text-gray-700 mb-2">
                  Aadhar Number *
                </label>
                <input
                  type="text"
                  id="aadharNumber"
                  name="aadharNumber"
                  value={formData.aadharNumber}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${errors.aadharNumber ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                />
                {errors.aadharNumber && <p className="text-red-500 text-sm mt-1">{errors.aadharNumber}</p>}
              </div>

              <div className="md:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div className="md:col-span-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password *
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Create a secure password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                />
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
              </div>
            </div>
            </>
          )}

          {currentStep === 2 && (
            <>
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Document Upload</h3>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="passportPhoto" className="block text-sm font-medium text-gray-700 mb-2">
                    Passport Photo *
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="passportPhoto"
                      name="passportPhoto"
                      onChange={handleFileChange}
                      accept="image/*"
                      className="hidden"
                    />
                    <label
                      htmlFor="passportPhoto"
                      className={`flex items-center justify-center w-full px-4 py-3 border-2 ${errors.passportPhoto ? 'border-red-500' : 'border-gray-300'} border-dashed rounded-lg cursor-pointer hover:bg-gray-50 transition-colors`}
                    >
                      <Upload className="mr-2 text-gray-400" size={20} />
                      <span className="text-gray-600">
                        {formData.passportPhoto ? formData.passportPhoto.name : 'Choose file'}
                      </span>
                    </label>
                  </div>
                  {errors.passportPhoto && <p className="text-red-500 text-sm mt-1">{errors.passportPhoto}</p>}
                </div>

                <div>
                  <label htmlFor="certificates" className="block text-sm font-medium text-gray-700 mb-2">
                    Certificates *
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="certificates"
                      name="certificates"
                      onChange={handleFileChange}
                      accept=".pdf,.jpg,.jpeg,.png"
                      className="hidden"
                    />
                    <label
                      htmlFor="certificates"
                      className={`flex items-center justify-center w-full px-4 py-3 border-2 ${errors.certificates ? 'border-red-500' : 'border-gray-300'} border-dashed rounded-lg cursor-pointer hover:bg-gray-50 transition-colors`}
                    >
                      <Upload className="mr-2 text-gray-400" size={20} />
                      <span className="text-gray-600">
                        {formData.certificates ? formData.certificates.name : 'Choose file'}
                      </span>
                    </label>
                  </div>
                  {errors.certificates && <p className="text-red-500 text-sm mt-1">{errors.certificates}</p>}
                </div>

                <div>
                  <label htmlFor="aadharPhoto" className="block text-sm font-medium text-gray-700 mb-2">
                    Aadhar Photo *
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="aadharPhoto"
                      name="aadharPhoto"
                      onChange={handleFileChange}
                      accept=".pdf,.jpg,.jpeg,.png"
                      className="hidden"
                    />
                    <label
                      htmlFor="aadharPhoto"
                      className={`flex items-center justify-center w-full px-4 py-3 border-2 ${errors.aadharPhoto ? 'border-red-500' : 'border-gray-300'} border-dashed rounded-lg cursor-pointer hover:bg-gray-50 transition-colors`}
                    >
                      <Upload className="mr-2 text-gray-400" size={20} />
                      <span className="text-gray-600 truncate max-w-[150px]">
                        {formData.aadharPhoto ? formData.aadharPhoto.name : 'Choose file'}
                      </span>
                    </label>
                  </div>
                  {errors.aadharPhoto && <p className="text-red-500 text-sm mt-1">{errors.aadharPhoto}</p>}
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Address Information</h3>

              <div className="space-y-6">
                <div>
                  <label htmlFor="houseAddress" className="block text-sm font-medium text-gray-700 mb-2">
                    House Address *
                  </label>
                  <textarea
                    id="houseAddress"
                    name="houseAddress"
                    value={formData.houseAddress}
                    onChange={handleChange}
                    rows={3}
                    className={`w-full px-4 py-2 border ${errors.houseAddress ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  ></textarea>
                  {errors.houseAddress && <p className="text-red-500 text-sm mt-1">{errors.houseAddress}</p>}
                </div>

                <div>
                  <label htmlFor="clinicAddress" className="block text-sm font-medium text-gray-700 mb-2">
                    Professional / Office Address *
                  </label>
                  <textarea
                    id="clinicAddress"
                    name="clinicAddress"
                    value={formData.clinicAddress}
                    onChange={handleChange}
                    rows={3}
                    className={`w-full px-4 py-2 border ${errors.clinicAddress ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  ></textarea>
                  {errors.clinicAddress && <p className="text-red-500 text-sm mt-1">{errors.clinicAddress}</p>}
                </div>
              </div>
            </div>
            </>
          )}

          {currentStep === 3 && (
            <>
            <div className="mb-8 bg-blue-50 p-6 rounded-xl">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 sm:mb-0">Nominee Details</h3>
                <div className="flex items-center">
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
              </div>
              
              {errors.nomineePercentageTotal && (
                <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm">
                  {errors.nomineePercentageTotal}
                </div>
              )}

              {nominees.map((nominee, idx) => (
                <div key={idx} className={`${idx > 0 ? 'border-t-2 border-blue-100 pt-6 mt-6' : ''}`}>
                  {numNominees > 1 && (
                    <h4 className="font-semibold text-lg text-blue-800 mb-4 bg-blue-100 inline-block px-3 py-1 rounded-md">
                      Nominee {idx + 1}
                    </h4>
                  )}
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor={`nominee_${idx}_name`} className="block text-sm font-medium text-gray-700 mb-2">
                        Nominee Name *
                      </label>
                      <input
                        type="text"
                        id={`nominee_${idx}_name`}
                        name="name"
                        value={nominee.name}
                        onChange={(e) => handleNomineeChange(idx, e)}
                        className={`w-full px-4 py-2 border ${errors[`nominee_${idx}_name`] ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      />
                      {errors[`nominee_${idx}_name`] && <p className="text-red-500 text-sm mt-1">{errors[`nominee_${idx}_name`]}</p>}
                    </div>

                    <div>
                      <label htmlFor={`nominee_${idx}_age`} className="block text-sm font-medium text-gray-700 mb-2">
                        Nominee Age *
                      </label>
                      <input
                        type="number"
                        id={`nominee_${idx}_age`}
                        name="age"
                        value={nominee.age}
                        onChange={(e) => handleNomineeChange(idx, e)}
                        className={`w-full px-4 py-2 border ${errors[`nominee_${idx}_age`] ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      />
                      {errors[`nominee_${idx}_age`] && <p className="text-red-500 text-sm mt-1">{errors[`nominee_${idx}_age`]}</p>}
                    </div>

                    <div>
                      <label htmlFor={`nominee_${idx}_sex`} className="block text-sm font-medium text-gray-700 mb-2">
                        Nominee Sex *
                      </label>
                      <select
                        id={`nominee_${idx}_sex`}
                        name="sex"
                        value={nominee.sex}
                        onChange={(e) => handleNomineeChange(idx, e)}
                        className={`w-full px-4 py-2 border ${errors[`nominee_${idx}_sex`] ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      >
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors[`nominee_${idx}_sex`] && <p className="text-red-500 text-sm mt-1">{errors[`nominee_${idx}_sex`]}</p>}
                    </div>

                    <div>
                      <label htmlFor={`nominee_${idx}_email`} className="block text-sm font-medium text-gray-700 mb-2">
                        Nominee Email *
                      </label>
                      <input
                        type="email"
                        id={`nominee_${idx}_email`}
                        name="email"
                        value={nominee.email}
                        onChange={(e) => handleNomineeChange(idx, e)}
                        className={`w-full px-4 py-2 border ${errors[`nominee_${idx}_email`] ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      />
                      {errors[`nominee_${idx}_email`] && <p className="text-red-500 text-sm mt-1">{errors[`nominee_${idx}_email`]}</p>}
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor={`nominee_${idx}_phone`} className="block text-sm font-medium text-gray-700 mb-2">
                        Nominee Phone *
                      </label>
                      <input
                        type="tel"
                        id={`nominee_${idx}_phone`}
                        name="phone"
                        value={nominee.phone}
                        onChange={(e) => handleNomineeChange(idx, e)}
                        className={`w-full px-4 py-2 border ${errors[`nominee_${idx}_phone`] ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      />
                      {errors[`nominee_${idx}_phone`] && <p className="text-red-500 text-sm mt-1">{errors[`nominee_${idx}_phone`]}</p>}
                    </div>

                    <div>
                      <label htmlFor={`nominee_${idx}_bankHolderName`} className="block text-sm font-medium text-gray-700 mb-2">
                        Bank Holder Name *
                      </label>
                      <input
                        type="text"
                        id={`nominee_${idx}_bankHolderName`}
                        name="bankHolderName"
                        value={nominee.bankHolderName}
                        onChange={(e) => handleNomineeChange(idx, e)}
                        className={`w-full px-4 py-2 border ${errors[`nominee_${idx}_bankHolderName`] ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      />
                      {errors[`nominee_${idx}_bankHolderName`] && <p className="text-red-500 text-sm mt-1">{errors[`nominee_${idx}_bankHolderName`]}</p>}
                    </div>

                    <div>
                      <label htmlFor={`nominee_${idx}_bankAccountNumber`} className="block text-sm font-medium text-gray-700 mb-2">
                        Bank Account Number *
                      </label>
                      <input
                        type="text"
                        id={`nominee_${idx}_bankAccountNumber`}
                        name="bankAccountNumber"
                        value={nominee.bankAccountNumber}
                        onChange={(e) => handleNomineeChange(idx, e)}
                        className={`w-full px-4 py-2 border ${errors[`nominee_${idx}_bankAccountNumber`] ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      />
                      {errors[`nominee_${idx}_bankAccountNumber`] && <p className="text-red-500 text-sm mt-1">{errors[`nominee_${idx}_bankAccountNumber`]}</p>}
                    </div>

                    <div>
                      <label htmlFor={`nominee_${idx}_bankAccountNumberConfirm`} className="block text-sm font-medium text-gray-700 mb-2">
                        Confirm Account Number *
                      </label>
                      <input
                        type="text"
                        id={`nominee_${idx}_bankAccountNumberConfirm`}
                        name="bankAccountNumberConfirm"
                        value={nominee.bankAccountNumberConfirm}
                        onChange={(e) => handleNomineeChange(idx, e)}
                        className={`w-full px-4 py-2 border ${errors[`nominee_${idx}_bankAccountNumberConfirm`] ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      />
                      {errors[`nominee_${idx}_bankAccountNumberConfirm`] && <p className="text-red-500 text-sm mt-1">{errors[`nominee_${idx}_bankAccountNumberConfirm`]}</p>}
                    </div>

                    <div>
                      <label htmlFor={`nominee_${idx}_ifscCode`} className="block text-sm font-medium text-gray-700 mb-2">
                        IFSC Code *
                      </label>
                      <input
                        type="text"
                        id={`nominee_${idx}_ifscCode`}
                        name="ifscCode"
                        value={nominee.ifscCode}
                        onChange={(e) => handleNomineeChange(idx, e)}
                        className={`w-full px-4 py-2 border ${errors[`nominee_${idx}_ifscCode`] ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      />
                      {errors[`nominee_${idx}_ifscCode`] && <p className="text-red-500 text-sm mt-1">{errors[`nominee_${idx}_ifscCode`]}</p>}
                    </div>

                    <div>
                      <label htmlFor={`nominee_${idx}_percentage`} className="block text-sm font-medium text-gray-700 mb-2">
                        Percentage Share (%) *
                      </label>
                      <input
                        type="number"
                        id={`nominee_${idx}_percentage`}
                        name="percentage"
                        value={nominee.percentage}
                        onChange={(e) => handleNomineeChange(idx, e)}
                        placeholder="e.g. 50"
                        className={`w-full px-4 py-2 border ${errors[`nominee_${idx}_percentage`] ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-yellow-50`}
                      />
                      {errors[`nominee_${idx}_percentage`] && <p className="text-red-500 text-sm mt-1">{errors[`nominee_${idx}_percentage`]}</p>}
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor={`nominee_${idx}_aadharNumber`} className="block text-sm font-medium text-gray-700 mb-2">
                        Aadhar Number *
                      </label>
                      <input
                        type="text"
                        id={`nominee_${idx}_aadharNumber`}
                        name="aadharNumber"
                        value={nominee.aadharNumber}
                        onChange={(e) => handleNomineeChange(idx, e)}
                        className={`w-full px-4 py-2 border ${errors[`nominee_${idx}_aadharNumber`] ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      />
                      {errors[`nominee_${idx}_aadharNumber`] && <p className="text-red-500 text-sm mt-1">{errors[`nominee_${idx}_aadharNumber`]}</p>}
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor={`nominee_${idx}_aadharPhoto`} className="block text-sm font-medium text-gray-700 mb-2">
                        Aadhar Photo *
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          id={`nominee_${idx}_aadharPhoto`}
                          name="aadharPhoto"
                          onChange={(e) => handleNomineeChange(idx, e)}
                          accept=".pdf,.jpg,.jpeg,.png"
                          className="hidden"
                        />
                        <label
                          htmlFor={`nominee_${idx}_aadharPhoto`}
                          className={`flex items-center justify-center w-full px-4 py-3 border-2 ${errors[`nominee_${idx}_aadharPhoto`] ? 'border-red-500' : 'border-gray-300'} border-dashed rounded-lg cursor-pointer hover:bg-gray-50 transition-colors`}
                        >
                          <Upload className="mr-2 text-gray-400" size={20} />
                          <span className="text-gray-600 truncate max-w-[200px]">
                            {nominee.aadharPhoto ? nominee.aadharPhoto.name : 'Choose file'}
                          </span>
                        </label>
                      </div>
                      {errors[`nominee_${idx}_aadharPhoto`] && <p className="text-red-500 text-sm mt-1">{errors[`nominee_${idx}_aadharPhoto`]}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>


            <div className="mb-8 bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Family Member 1 (Optional)</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="family1Name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="family1Name"
                    name="family1Name"
                    value={formData.family1Name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="family1Age" className="block text-sm font-medium text-gray-700 mb-2">
                    Age
                  </label>
                  <input
                    type="number"
                    id="family1Age"
                    name="family1Age"
                    value={formData.family1Age}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="family1Sex" className="block text-sm font-medium text-gray-700 mb-2">
                    Sex
                  </label>
                  <select
                    id="family1Sex"
                    name="family1Sex"
                    value={formData.family1Sex}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="family1Email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="family1Email"
                    name="family1Email"
                    value={formData.family1Email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="family1Mobile" className="block text-sm font-medium text-gray-700 mb-2">
                    Mobile
                  </label>
                  <input
                    type="tel"
                    id="family1Mobile"
                    name="family1Mobile"
                    value={formData.family1Mobile}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="family1Address" className="block text-sm font-medium text-gray-700 mb-2">
                    Address
                  </label>
                  <textarea
                    id="family1Address"
                    name="family1Address"
                    value={formData.family1Address}
                    onChange={handleChange}
                    rows={2}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>

                {formData.family1Name.trim() && (
                  <>
                    <div className="md:col-span-2">
                      <label htmlFor="family1AadharNumber" className="block text-sm font-medium text-gray-700 mb-2">
                        Aadhar Number *
                      </label>
                      <input
                        type="text"
                        id="family1AadharNumber"
                        name="family1AadharNumber"
                        value={formData.family1AadharNumber}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border ${errors.family1AadharNumber ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      />
                      {errors.family1AadharNumber && <p className="text-red-500 text-sm mt-1">{errors.family1AadharNumber}</p>}
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="family1AadharPhoto" className="block text-sm font-medium text-gray-700 mb-2">
                        Aadhar Photo *
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          id="family1AadharPhoto"
                          name="family1AadharPhoto"
                          onChange={handleFileChange}
                          accept=".pdf,.jpg,.jpeg,.png"
                          className="hidden"
                        />
                        <label
                          htmlFor="family1AadharPhoto"
                          className={`flex items-center justify-center w-full px-4 py-3 border-2 ${errors.family1AadharPhoto ? 'border-red-500' : 'border-gray-300'} border-dashed rounded-lg cursor-pointer hover:bg-gray-50 transition-colors`}
                        >
                          <Upload className="mr-2 text-gray-400" size={20} />
                          <span className="text-gray-600 truncate max-w-[200px]">
                            {formData.family1AadharPhoto ? formData.family1AadharPhoto.name : 'Choose file'}
                          </span>
                        </label>
                      </div>
                      {errors.family1AadharPhoto && <p className="text-red-500 text-sm mt-1">{errors.family1AadharPhoto}</p>}
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="mb-8 bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Family Member 2 (Optional)</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="family2Name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="family2Name"
                    name="family2Name"
                    value={formData.family2Name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="family2Age" className="block text-sm font-medium text-gray-700 mb-2">
                    Age
                  </label>
                  <input
                    type="number"
                    id="family2Age"
                    name="family2Age"
                    value={formData.family2Age}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="family2Sex" className="block text-sm font-medium text-gray-700 mb-2">
                    Sex
                  </label>
                  <select
                    id="family2Sex"
                    name="family2Sex"
                    value={formData.family2Sex}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="family2Email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="family2Email"
                    name="family2Email"
                    value={formData.family2Email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="family2Mobile" className="block text-sm font-medium text-gray-700 mb-2">
                    Mobile
                  </label>
                  <input
                    type="tel"
                    id="family2Mobile"
                    name="family2Mobile"
                    value={formData.family2Mobile}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="family2Address" className="block text-sm font-medium text-gray-700 mb-2">
                    Address
                  </label>
                  <textarea
                    id="family2Address"
                    name="family2Address"
                    value={formData.family2Address}
                    onChange={handleChange}
                    rows={2}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>

                {formData.family2Name.trim() && (
                  <>
                    <div className="md:col-span-2">
                      <label htmlFor="family2AadharNumber" className="block text-sm font-medium text-gray-700 mb-2">
                        Aadhar Number *
                      </label>
                      <input
                        type="text"
                        id="family2AadharNumber"
                        name="family2AadharNumber"
                        value={formData.family2AadharNumber}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border ${errors.family2AadharNumber ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      />
                      {errors.family2AadharNumber && <p className="text-red-500 text-sm mt-1">{errors.family2AadharNumber}</p>}
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="family2AadharPhoto" className="block text-sm font-medium text-gray-700 mb-2">
                        Aadhar Photo *
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          id="family2AadharPhoto"
                          name="family2AadharPhoto"
                          onChange={handleFileChange}
                          accept=".pdf,.jpg,.jpeg,.png"
                          className="hidden"
                        />
                        <label
                          htmlFor="family2AadharPhoto"
                          className={`flex items-center justify-center w-full px-4 py-3 border-2 ${errors.family2AadharPhoto ? 'border-red-500' : 'border-gray-300'} border-dashed rounded-lg cursor-pointer hover:bg-gray-50 transition-colors`}
                        >
                          <Upload className="mr-2 text-gray-400" size={20} />
                          <span className="text-gray-600 truncate max-w-[200px]">
                            {formData.family2AadharPhoto ? formData.family2AadharPhoto.name : 'Choose file'}
                          </span>
                        </label>
                      </div>
                      {errors.family2AadharPhoto && <p className="text-red-500 text-sm mt-1">{errors.family2AadharPhoto}</p>}
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="mb-8 space-y-4">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="termsAccepted"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  className="mt-1 mr-3 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="termsAccepted" className="text-sm text-gray-700">
                  I accept the <Link to="/terms" className="text-blue-600 hover:underline">Rules &amp; Bye-Laws of PWT</Link>, understand that Doctors Welfare is a voluntary mutual self-support platform operating under PWT (not insurance), and that all information provided is accurate and complete. *
                </label>
              </div>
              {errors.termsAccepted && <p className="text-red-500 text-sm">{errors.termsAccepted}</p>}

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="subscribe"
                  name="subscribe"
                  checked={formData.subscribe}
                  onChange={handleChange}
                  className="mt-1 mr-3 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="subscribe" className="text-sm text-gray-700">
                  I want to receive updates and newsletters *
                </label>
              </div>
              {errors.subscribe && <p className="text-red-500 text-sm">{errors.subscribe}</p>}
            </div>
            </>
          )}

            <div className="flex justify-between items-center mt-12 border-t pt-8">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-8 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
              ) : (
                <div></div>
              )}

              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Next Step
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center ${
                    isSubmitting 
                      ? 'bg-gray-400 text-gray-200 cursor-not-allowed' 
                      : 'bg-green-600 text-white hover:bg-green-700'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin mr-2" size={20} />
                      Submitting...
                    </>
                  ) : (
                    'Submit Application'
                  )}
                </button>
              )}
            </div>
            
            <p className="text-sm text-gray-600 mt-6 text-center">
              Fields marked with * are mandatory
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
