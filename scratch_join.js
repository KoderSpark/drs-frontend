const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'JoinNow.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Update interfaces
content = content.replace(
`interface FormData {
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
  nomineeName: string;
  nomineeAge: string;
  nomineeSex: string;
  nomineeEmail: string;
  nomineePhone: string;
  nomineeBankAccount: string;
  nomineeBankAccountConfirm: string;
  nomineeIFSC: string;
  nomineeBankHolder: string;`,
`export interface Nominee {
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
}

export const initialNominee: Nominee = {
  name: '', age: '', sex: '', email: '', phone: '', bankAccountNumber: '', bankAccountNumberConfirm: '', ifscCode: '', bankHolderName: '', percentage: '100'
};

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
  clinicAddress: string;`
);

// 2. Remove flattened nominee from initial state
content = content.replace(
`    clinicAddress: '',
    nomineeName: '',
    nomineeAge: '',
    nomineeSex: '',
    nomineeEmail: '',
    nomineePhone: '',
    nomineeBankAccount: '',
    nomineeBankAccountConfirm: '',
    nomineeIFSC: '',
    nomineeBankHolder: '',`,
`    clinicAddress: '',`
);

// 3. Add state for nominees
content = content.replace(
`  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});`,
`  const [numNominees, setNumNominees] = useState(1);
  const [nominees, setNominees] = useState<Nominee[]>([{...initialNominee}]);

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
    
    const errorKey = \`nominee_\${index}_\${name}\`;
    if (errors[errorKey]) {
      setErrors(prev => ({ ...prev, [errorKey]: '' }));
    }
  };

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});`
);

// 4. Update validateForm
content = content.replace(
`  if (!formData.nomineeName.trim()) newErrors.nomineeName = 'Nominee name is required';
  if (!formData.nomineeAge) newErrors.nomineeAge = 'Nominee age is required';
  if (!formData.nomineeSex) newErrors.nomineeSex = 'Nominee sex is required';
  if (!formData.nomineeEmail || !/\\S+@\\S+\\.\\S+/.test(formData.nomineeEmail)) newErrors.nomineeEmail = 'Valid nominee email is required';
  if (!formData.nomineePhone) newErrors.nomineePhone = 'Nominee phone is required';
  if (!formData.nomineeBankAccount.trim()) newErrors.nomineeBankAccount = 'Bank account is required';
  if (formData.nomineeBankAccount.trim() !== formData.nomineeBankAccountConfirm.trim()) newErrors.nomineeBankAccountConfirm = 'Account numbers do not match';
  if (!formData.nomineeIFSC.trim()) newErrors.nomineeIFSC = 'IFSC code is required';
  if (!formData.nomineeBankHolder.trim()) newErrors.nomineeBankHolder = 'Bank holder name is required';`,
`  let totalPercentage = 0;
  nominees.forEach((n, idx) => {
    if (!n.name.trim()) newErrors[\`nominee_\${idx}_name\`] = 'Nominee name is required';
    if (!n.age) newErrors[\`nominee_\${idx}_age\`] = 'Nominee age is required';
    if (!n.sex) newErrors[\`nominee_\${idx}_sex\`] = 'Nominee sex is required';
    if (!n.email || !/\\S+@\\S+\\.\\S+/.test(n.email)) newErrors[\`nominee_\${idx}_email\`] = 'Valid nominee email is required';
    if (!n.phone) newErrors[\`nominee_\${idx}_phone\`] = 'Nominee phone is required';
    if (!n.bankAccountNumber.trim()) newErrors[\`nominee_\${idx}_bankAccountNumber\`] = 'Bank account is required';
    if (n.bankAccountNumber.trim() !== n.bankAccountNumberConfirm.trim()) newErrors[\`nominee_\${idx}_bankAccountNumberConfirm\`] = 'Account numbers do not match';
    if (!n.ifscCode.trim()) newErrors[\`nominee_\${idx}_ifscCode\`] = 'IFSC code is required';
    if (!n.bankHolderName.trim()) newErrors[\`nominee_\${idx}_bankHolderName\`] = 'Bank holder name is required';
    
    const p = parseFloat(n.percentage);
    if (isNaN(p) || p <= 0) {
      newErrors[\`nominee_\${idx}_percentage\`] = 'Valid percentage required';
    } else {
      totalPercentage += p;
    }
  });

  if (Math.abs(totalPercentage - 100) > 0.01) {
    newErrors.nomineePercentageTotal = 'Total percentage across all nominees must be exactly 100%';
  }`
);

// 5. Update submission serialization
content = content.replace(
`        // nominee object
        const nominee = {
          name: formData.nomineeName,
          age: formData.nomineeAge,
          sex: formData.nomineeSex,
          email: formData.nomineeEmail,
          phone: formData.nomineePhone,
          bankAccountNumber: formData.nomineeBankAccount,
          confirmBankAccountNumber: formData.nomineeBankAccountConfirm,
          ifscCode: formData.nomineeIFSC,
          bankHolderName: formData.nomineeBankHolder,
        };
        form.append('nominee', JSON.stringify(nominee));`,
`        // nominees array
        form.append('nominees', JSON.stringify(nominees));`
);

// 6. Update JSX
const jsxBefore = \`            <div className="mb-8 bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nominee Details</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nomineeName" className="block text-sm font-medium text-gray-700 mb-2">
                    Nominee Name *
                  </label>
                  <input
                    type="text"
                    id="nomineeName"
                    name="nomineeName"
                    value={formData.nomineeName}
                    onChange={handleChange}
                    className={\`w-full px-4 py-2 border \${errors.nomineeName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent\`}
                  />
                  {errors.nomineeName && <p className="text-red-500 text-sm mt-1">{errors.nomineeName}</p>}
                </div>

                <div>
                  <label htmlFor="nomineeAge" className="block text-sm font-medium text-gray-700 mb-2">
                    Nominee Age *
                  </label>
                  <input
                    type="number"
                    id="nomineeAge"
                    name="nomineeAge"
                    value={formData.nomineeAge}
                    onChange={handleChange}
                    className={\`w-full px-4 py-2 border \${errors.nomineeAge ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent\`}
                  />
                  {errors.nomineeAge && <p className="text-red-500 text-sm mt-1">{errors.nomineeAge}</p>}
                </div>

                <div>
                  <label htmlFor="nomineeSex" className="block text-sm font-medium text-gray-700 mb-2">
                    Nominee Sex *
                  </label>
                  <select
                    id="nomineeSex"
                    name="nomineeSex"
                    value={formData.nomineeSex}
                    onChange={handleChange}
                    className={\`w-full px-4 py-2 border \${errors.nomineeSex ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent\`}
                  >
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.nomineeSex && <p className="text-red-500 text-sm mt-1">{errors.nomineeSex}</p>}
                </div>

                <div>
                  <label htmlFor="nomineeEmail" className="block text-sm font-medium text-gray-700 mb-2">
                    Nominee Email *
                  </label>
                  <input
                    type="email"
                    id="nomineeEmail"
                    name="nomineeEmail"
                    value={formData.nomineeEmail}
                    onChange={handleChange}
                    className={\`w-full px-4 py-2 border \${errors.nomineeEmail ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent\`}
                  />
                  {errors.nomineeEmail && <p className="text-red-500 text-sm mt-1">{errors.nomineeEmail}</p>}
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="nomineePhone" className="block text-sm font-medium text-gray-700 mb-2">
                    Nominee Phone *
                  </label>
                  <input
                    type="tel"
                    id="nomineePhone"
                    name="nomineePhone"
                    value={formData.nomineePhone}
                    onChange={handleChange}
                    className={\`w-full px-4 py-2 border \${errors.nomineePhone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent\`}
                  />
                  {errors.nomineePhone && <p className="text-red-500 text-sm mt-1">{errors.nomineePhone}</p>}
                </div>

                  <div>
                    <label htmlFor="nomineeBankHolder" className="block text-sm font-medium text-gray-700 mb-2">
                      Bank Holder Name *
                    </label>
                    <input
                      type="text"
                      id="nomineeBankHolder"
                      name="nomineeBankHolder"
                      value={formData.nomineeBankHolder}
                      onChange={handleChange}
                      className={\`w-full px-4 py-2 border \${errors.nomineeBankHolder ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent\`}
                    />
                    {errors.nomineeBankHolder && <p className="text-red-500 text-sm mt-1">{errors.nomineeBankHolder}</p>}
                  </div>

                <div>
                  <label htmlFor="nomineeBankAccount" className="block text-sm font-medium text-gray-700 mb-2">
                    Bank Account Number *
                  </label>
                  <input
                    type="text"
                    id="nomineeBankAccount"
                    name="nomineeBankAccount"
                    value={formData.nomineeBankAccount}
                    onChange={handleChange}
                    className={\`w-full px-4 py-2 border \${errors.nomineeBankAccount ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent\`}
                  />
                  {errors.nomineeBankAccount && <p className="text-red-500 text-sm mt-1">{errors.nomineeBankAccount}</p>}
                </div>

                <div>
                  <label htmlFor="nomineeBankAccountConfirm" className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Account Number *
                  </label>
                  <input
                    type="text"
                    id="nomineeBankAccountConfirm"
                    name="nomineeBankAccountConfirm"
                    value={formData.nomineeBankAccountConfirm}
                    onChange={handleChange}
                    className={\`w-full px-4 py-2 border \${errors.nomineeBankAccountConfirm ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent\`}
                  />
                  {errors.nomineeBankAccountConfirm && <p className="text-red-500 text-sm mt-1">{errors.nomineeBankAccountConfirm}</p>}
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="nomineeIFSC" className="block text-sm font-medium text-gray-700 mb-2">
                    IFSC Code *
                  </label>
                  <input
                    type="text"
                    id="nomineeIFSC"
                    name="nomineeIFSC"
                    value={formData.nomineeIFSC}
                    onChange={handleChange}
                    className={\`w-full px-4 py-2 border \${errors.nomineeIFSC ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent\`}
                  />
                  {errors.nomineeIFSC && <p className="text-red-500 text-sm mt-1">{errors.nomineeIFSC}</p>}
                </div>
              </div>
            </div>\``;

const jsxAfter = \`            <div className="mb-8 bg-blue-50 p-6 rounded-xl">
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
                <div key={idx} className={\`\${idx > 0 ? 'border-t-2 border-blue-100 pt-6 mt-6' : ''}\`}>
                  {numNominees > 1 && (
                    <h4 className="font-semibold text-lg text-blue-800 mb-4 bg-blue-100 inline-block px-3 py-1 rounded-md">
                      Nominee {idx + 1}
                    </h4>
                  )}
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor={\`nominee_\${idx}_name\`} className="block text-sm font-medium text-gray-700 mb-2">
                        Nominee Name *
                      </label>
                      <input
                        type="text"
                        id={\`nominee_\${idx}_name\`}
                        name="name"
                        value={nominee.name}
                        onChange={(e) => handleNomineeChange(idx, e)}
                        className={\`w-full px-4 py-2 border \${errors[\`nominee_\${idx}_name\`] ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent\`}
                      />
                      {errors[\`nominee_\${idx}_name\`] && <p className="text-red-500 text-sm mt-1">{errors[\`nominee_\${idx}_name\`]}</p>}
                    </div>

                    <div>
                      <label htmlFor={\`nominee_\${idx}_age\`} className="block text-sm font-medium text-gray-700 mb-2">
                        Nominee Age *
                      </label>
                      <input
                        type="number"
                        id={\`nominee_\${idx}_age\`}
                        name="age"
                        value={nominee.age}
                        onChange={(e) => handleNomineeChange(idx, e)}
                        className={\`w-full px-4 py-2 border \${errors[\`nominee_\${idx}_age\`] ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent\`}
                      />
                      {errors[\`nominee_\${idx}_age\`] && <p className="text-red-500 text-sm mt-1">{errors[\`nominee_\${idx}_age\`]}</p>}
                    </div>

                    <div>
                      <label htmlFor={\`nominee_\${idx}_sex\`} className="block text-sm font-medium text-gray-700 mb-2">
                        Nominee Sex *
                      </label>
                      <select
                        id={\`nominee_\${idx}_sex\`}
                        name="sex"
                        value={nominee.sex}
                        onChange={(e) => handleNomineeChange(idx, e)}
                        className={\`w-full px-4 py-2 border \${errors[\`nominee_\${idx}_sex\`] ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent\`}
                      >
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors[\`nominee_\${idx}_sex\`] && <p className="text-red-500 text-sm mt-1">{errors[\`nominee_\${idx}_sex\`]}</p>}
                    </div>

                    <div>
                      <label htmlFor={\`nominee_\${idx}_email\`} className="block text-sm font-medium text-gray-700 mb-2">
                        Nominee Email *
                      </label>
                      <input
                        type="email"
                        id={\`nominee_\${idx}_email\`}
                        name="email"
                        value={nominee.email}
                        onChange={(e) => handleNomineeChange(idx, e)}
                        className={\`w-full px-4 py-2 border \${errors[\`nominee_\${idx}_email\`] ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent\`}
                      />
                      {errors[\`nominee_\${idx}_email\`] && <p className="text-red-500 text-sm mt-1">{errors[\`nominee_\${idx}_email\`]}</p>}
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor={\`nominee_\${idx}_phone\`} className="block text-sm font-medium text-gray-700 mb-2">
                        Nominee Phone *
                      </label>
                      <input
                        type="tel"
                        id={\`nominee_\${idx}_phone\`}
                        name="phone"
                        value={nominee.phone}
                        onChange={(e) => handleNomineeChange(idx, e)}
                        className={\`w-full px-4 py-2 border \${errors[\`nominee_\${idx}_phone\`] ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent\`}
                      />
                      {errors[\`nominee_\${idx}_phone\`] && <p className="text-red-500 text-sm mt-1">{errors[\`nominee_\${idx}_phone\`]}</p>}
                    </div>

                    <div>
                      <label htmlFor={\`nominee_\${idx}_bankHolderName\`} className="block text-sm font-medium text-gray-700 mb-2">
                        Bank Holder Name *
                      </label>
                      <input
                        type="text"
                        id={\`nominee_\${idx}_bankHolderName\`}
                        name="bankHolderName"
                        value={nominee.bankHolderName}
                        onChange={(e) => handleNomineeChange(idx, e)}
                        className={\`w-full px-4 py-2 border \${errors[\`nominee_\${idx}_bankHolderName\`] ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent\`}
                      />
                      {errors[\`nominee_\${idx}_bankHolderName\`] && <p className="text-red-500 text-sm mt-1">{errors[\`nominee_\${idx}_bankHolderName\`]}</p>}
                    </div>

                    <div>
                      <label htmlFor={\`nominee_\${idx}_bankAccountNumber\`} className="block text-sm font-medium text-gray-700 mb-2">
                        Bank Account Number *
                      </label>
                      <input
                        type="text"
                        id={\`nominee_\${idx}_bankAccountNumber\`}
                        name="bankAccountNumber"
                        value={nominee.bankAccountNumber}
                        onChange={(e) => handleNomineeChange(idx, e)}
                        className={\`w-full px-4 py-2 border \${errors[\`nominee_\${idx}_bankAccountNumber\`] ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent\`}
                      />
                      {errors[\`nominee_\${idx}_bankAccountNumber\`] && <p className="text-red-500 text-sm mt-1">{errors[\`nominee_\${idx}_bankAccountNumber\`]}</p>}
                    </div>

                    <div>
                      <label htmlFor={\`nominee_\${idx}_bankAccountNumberConfirm\`} className="block text-sm font-medium text-gray-700 mb-2">
                        Confirm Account Number *
                      </label>
                      <input
                        type="text"
                        id={\`nominee_\${idx}_bankAccountNumberConfirm\`}
                        name="bankAccountNumberConfirm"
                        value={nominee.bankAccountNumberConfirm}
                        onChange={(e) => handleNomineeChange(idx, e)}
                        className={\`w-full px-4 py-2 border \${errors[\`nominee_\${idx}_bankAccountNumberConfirm\`] ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent\`}
                      />
                      {errors[\`nominee_\${idx}_bankAccountNumberConfirm\`] && <p className="text-red-500 text-sm mt-1">{errors[\`nominee_\${idx}_bankAccountNumberConfirm\`]}</p>}
                    </div>

                    <div>
                      <label htmlFor={\`nominee_\${idx}_ifscCode\`} className="block text-sm font-medium text-gray-700 mb-2">
                        IFSC Code *
                      </label>
                      <input
                        type="text"
                        id={\`nominee_\${idx}_ifscCode\`}
                        name="ifscCode"
                        value={nominee.ifscCode}
                        onChange={(e) => handleNomineeChange(idx, e)}
                        className={\`w-full px-4 py-2 border \${errors[\`nominee_\${idx}_ifscCode\`] ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent\`}
                      />
                      {errors[\`nominee_\${idx}_ifscCode\`] && <p className="text-red-500 text-sm mt-1">{errors[\`nominee_\${idx}_ifscCode\`]}</p>}
                    </div>

                    <div>
                      <label htmlFor={\`nominee_\${idx}_percentage\`} className="block text-sm font-medium text-gray-700 mb-2">
                        Percentage Share (%) *
                      </label>
                      <input
                        type="number"
                        id={\`nominee_\${idx}_percentage\`}
                        name="percentage"
                        value={nominee.percentage}
                        onChange={(e) => handleNomineeChange(idx, e)}
                        placeholder="e.g. 50"
                        className={\`w-full px-4 py-2 border \${errors[\`nominee_\${idx}_percentage\`] ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-yellow-50\`}
                      />
                      {errors[\`nominee_\${idx}_percentage\`] && <p className="text-red-500 text-sm mt-1">{errors[\`nominee_\${idx}_percentage\`]}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>\``;

content = content.replace(jsxBefore, jsxAfter);

fs.writeFileSync(filePath, content);
console.log('Successfully updated JoinNow.tsx');
