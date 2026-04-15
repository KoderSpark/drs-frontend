const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'Profile.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Update Interface
content = content.replace(
`  nominee: {
    name: string;
    age: string;
    sex: string;
    email: string;
    phone: string;
    bankAccountNumber: string;
    ifscCode: string;
    bankHolderName: string;
  };`,
`  nominees: {
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
  }[];`
);


// Add editedNominees state
content = content.replace(
`  const [files, setFiles] = useState<{`,
`  const [editedNominees, setEditedNominees] = useState<any[]>([]);
  const [numNominees, setNumNominees] = useState(1);
  const [files, setFiles] = useState<{`
);

// Populate state initially and when editing is toggled
content = content.replace(
`        const data = await api.doctors.get(userId);
        setDoctor(data);`,
`        const data = await api.doctors.get(userId);
        setDoctor(data);
        if (data.nominees && data.nominees.length > 0) {
            setEditedNominees(data.nominees);
            setNumNominees(data.nominees.length);
        } else {
            setEditedNominees([{ name: '', age: '', sex: '', email: '', phone: '', bankAccountNumber: '', confirmBankAccountNumber: '', ifscCode: '', bankHolderName: '', percentage: '100' }]);
            setNumNominees(1);
        }`
);

// Also update it when we successfully submit
content = content.replace(
`      // Refresh the data after successful update
      const updatedData = await api.doctors.get(doctor._id);
      setDoctor(updatedData);`,
`      // Refresh the data after successful update
      const updatedData = await api.doctors.get(doctor._id);
      setDoctor(updatedData);
      if (updatedData.nominees && updatedData.nominees.length > 0) {
          setEditedNominees(updatedData.nominees);
          setNumNominees(updatedData.nominees.length);
      }`
);

// Add helper functions for handling dynamic nominees BEFORE handleSubmit
content = content.replace(
`  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {`,
`  const handleNumNomineesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {`
);


// Replace the handleSubmit section for nominee
const oldSubmitNominee = `      // Get all nominee details
      const nomineeBankAccount = formElements.nomineeBankAccount.value;
      const nomineeBankAccountConfirm = formElements.nomineeBankAccountConfirm.value;
      const nomineeIFSC = formElements.nomineeIFSC.value;
      const nomineeBankHolder = formElements.nomineeBankHolder.value;

      // Always validate bank details
      if (!nomineeBankAccount || !nomineeIFSC || !nomineeBankHolder) {
        setError('Nominee bank details are required. Please fill in all bank fields.');
        return;
      }

      // Validate bank account confirmation
      if (nomineeBankAccount !== nomineeBankAccountConfirm) {
        setError('Bank account numbers do not match. Please verify and try again.');
        return;
      }

      // Create nominee object with all details
      const nominee = {
        name: formElements.nomineeName.value || doctor.nominee?.name,
        age: formElements.nomineeAge.value || doctor.nominee?.age,
        sex: formElements.nomineeSex.value || doctor.nominee?.sex,
        email: formElements.nomineeEmail.value || doctor.nominee?.email,
        phone: formElements.nomineePhone.value || doctor.nominee?.phone,
        bankAccountNumber: nomineeBankAccount,
        confirmBankAccountNumber: nomineeBankAccountConfirm, // This will be removed by backend
        ifscCode: nomineeIFSC,
        bankHolderName: nomineeBankHolder,
      };

      formData.append('nominee', JSON.stringify(nominee));`;

const newSubmitNominee = `      // Validate and create nominees array
      let totalPercentage = 0;
      for (let i = 0; i < editedNominees.length; i++) {
        const n = editedNominees[i];
        if (!n.bankAccountNumber || !n.bankAccountNumberConfirm || !n.ifscCode || !n.bankHolderName) {
           setError(\`Nominee \${i+1} bank details are required.\`);
           setIsSubmitting(false);
           return;
        }
        if (n.bankAccountNumber !== n.bankAccountNumberConfirm) {
           setError(\`Nominee \${i+1} bank account numbers do not match.\`);
           setIsSubmitting(false);
           return;
        }
        const p = parseFloat(n.percentage);
        if (isNaN(p) || p <= 0) {
           setError(\`Nominee \${i+1} percentage must be a valid positive number.\`);
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

      formData.append('nominees', JSON.stringify(editedNominees));`;

content = content.replace(oldSubmitNominee, newSubmitNominee);


// Replace the JSX portion for Nominees
const oldJSX = `            {/* Nominee Details */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">Nominee Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nomineeName" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="nomineeName"
                    name="nomineeName"
                    defaultValue={doctor.nominee?.name}
                    className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2"
                    disabled={!isEditing}
                  />
                </div>

                <div>
                  <label htmlFor="nomineeAge" className="block text-sm font-medium text-gray-700">
                    Age
                  </label>
                  <input
                    type="number"
                    id="nomineeAge"
                    name="nomineeAge"
                    defaultValue={doctor.nominee?.age}
                    className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2"
                    disabled={!isEditing}
                  />
                </div>

                <div>
                  <label htmlFor="nomineeSex" className="block text-sm font-medium text-gray-700">
                    Sex
                  </label>
                  <select
                    id="nomineeSex"
                    name="nomineeSex"
                    defaultValue={doctor.nominee?.sex}
                    className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2"
                    disabled={!isEditing}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="nomineeEmail" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="nomineeEmail"
                    name="nomineeEmail"
                    defaultValue={doctor.nominee?.email}
                    className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2"
                    disabled={!isEditing}
                  />
                </div>

                <div>
                  <label htmlFor="nomineePhone" className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="nomineePhone"
                    name="nomineePhone"
                    defaultValue={doctor.nominee?.phone}
                    className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2"
                    disabled={!isEditing}
                  />
                </div>

                <div>
                  <label htmlFor="nomineeBankAccount" className="block text-sm font-medium text-gray-700">
                    Bank Account Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="nomineeBankAccount"
                    name="nomineeBankAccount"
                    defaultValue={doctor.nominee?.bankAccountNumber}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2"
                    disabled={!isEditing}
                  />
                </div>

                <div>
                  <label htmlFor="nomineeBankAccountConfirm" className="block text-sm font-medium text-gray-700">
                    Confirm Bank Account Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="nomineeBankAccountConfirm"
                    name="nomineeBankAccountConfirm"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2"
                    disabled={!isEditing}
                  />
                </div>

                <div>
                  <label htmlFor="nomineeIFSC" className="block text-sm font-medium text-gray-700">
                    IFSC Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="nomineeIFSC"
                    name="nomineeIFSC"
                    defaultValue={doctor.nominee?.ifscCode}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2"
                    disabled={!isEditing}
                  />
                </div>

                <div>
                  <label htmlFor="nomineeBankHolder" className="block text-sm font-medium text-gray-700">
                    Bank Account Holder Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="nomineeBankHolder"
                    name="nomineeBankHolder"
                    defaultValue={doctor.nominee?.bankHolderName}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2"
                    disabled={!isEditing}
                  />
                </div>
              </div>
            </div>`;

const newJSX = `            {/* Nominee Details */}
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
                <div key={idx} className={\`\${idx > 0 ? 'border-t-2 border-gray-200 pt-6 mt-6' : ''}\`}>
                  {numNominees > 1 && (
                    <h4 className="font-semibold text-lg text-blue-800 mb-4 bg-blue-100 inline-block px-3 py-1 rounded-md">
                      Nominee {idx + 1}
                    </h4>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor={\`nominee_\${idx}_name\`} className="block text-sm font-medium text-gray-700">
                        Name
                      </label>
                      <input
                        type="text"
                        id={\`nominee_\${idx}_name\`}
                        name="name"
                        value={nominee.name || ''}
                        onChange={(e) => handleNomineeChange(idx, e)}
                        className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2"
                        disabled={!isEditing}
                      />
                    </div>

                    <div>
                      <label htmlFor={\`nominee_\${idx}_age\`} className="block text-sm font-medium text-gray-700">
                        Age
                      </label>
                      <input
                        type="number"
                        id={\`nominee_\${idx}_age\`}
                        name="age"
                        value={nominee.age || ''}
                        onChange={(e) => handleNomineeChange(idx, e)}
                        className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2"
                        disabled={!isEditing}
                      />
                    </div>

                    <div>
                      <label htmlFor={\`nominee_\${idx}_sex\`} className="block text-sm font-medium text-gray-700">
                        Sex
                      </label>
                      <select
                        id={\`nominee_\${idx}_sex\`}
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
                      <label htmlFor={\`nominee_\${idx}_email\`} className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        id={\`nominee_\${idx}_email\`}
                        name="email"
                        value={nominee.email || ''}
                        onChange={(e) => handleNomineeChange(idx, e)}
                        className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2"
                        disabled={!isEditing}
                      />
                    </div>

                    <div>
                      <label htmlFor={\`nominee_\${idx}_phone\`} className="block text-sm font-medium text-gray-700">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id={\`nominee_\${idx}_phone\`}
                        name="phone"
                        value={nominee.phone || ''}
                        onChange={(e) => handleNomineeChange(idx, e)}
                        className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2"
                        disabled={!isEditing}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor={\`nominee_\${idx}_percentage\`} className="block text-sm font-medium text-gray-700">
                        Percentage Share (%) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        id={\`nominee_\${idx}_percentage\`}
                        name="percentage"
                        value={nominee.percentage || ''}
                        onChange={(e) => handleNomineeChange(idx, e)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 bg-yellow-50"
                        disabled={!isEditing}
                      />
                    </div>

                    <div>
                      <label htmlFor={\`nominee_\${idx}_bankAccount\`} className="block text-sm font-medium text-gray-700">
                        Bank Account Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id={\`nominee_\${idx}_bankAccount\`}
                        name="bankAccountNumber"
                        value={nominee.bankAccountNumber || ''}
                        onChange={(e) => handleNomineeChange(idx, e)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2"
                        disabled={!isEditing}
                      />
                    </div>

                    <div>
                      <label htmlFor={\`nominee_\${idx}_bankAccountConfirm\`} className="block text-sm font-medium text-gray-700">
                        Confirm Bank Account Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id={\`nominee_\${idx}_bankAccountConfirm\`}
                        name="bankAccountNumberConfirm"
                        value={nominee.bankAccountNumberConfirm || nominee.bankAccountNumber || ''}
                        onChange={(e) => handleNomineeChange(idx, e)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2"
                        disabled={!isEditing}
                      />
                    </div>

                    <div>
                      <label htmlFor={\`nominee_\${idx}_ifsc\`} className="block text-sm font-medium text-gray-700">
                        IFSC Code <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id={\`nominee_\${idx}_ifsc\`}
                        name="ifscCode"
                        value={nominee.ifscCode || ''}
                        onChange={(e) => handleNomineeChange(idx, e)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2"
                        disabled={!isEditing}
                      />
                    </div>

                    <div>
                      <label htmlFor={\`nominee_\${idx}_bankHolder\`} className="block text-sm font-medium text-gray-700">
                        Bank Account Holder Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id={\`nominee_\${idx}_bankHolder\`}
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
            </div>`;

content = content.replace(oldJSX, newJSX);
fs.writeFileSync(filePath, content);
console.log('Successfully updated Profile.tsx');
