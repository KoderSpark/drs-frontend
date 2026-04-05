import { Check, Users, Shield, Heart, Star, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Membership() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Membership Details</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Voluntary membership in a mutual self-support trust for registered professionals — benefits strictly restricted to registered members only
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Mutual Support Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              PWT coordinates voluntary contributions from members to the nominee of a deceased member — directly and transparently
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200">
              <Users className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Voluntary Membership</h3>
              <p className="text-gray-700">
                Membership is purely voluntary. No person shall be compelled to join or continue their membership.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200">
              <Heart className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Direct Contributions</h3>
              <p className="text-gray-700">
                All contributions are transferred directly from members to the nominee's bank account. PWT is not a financial intermediary.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200">
              <Shield className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Nominee Protection</h3>
              <p className="text-gray-700">
                Designated nominee receives voluntary support from fellow members in the event of the member's passing.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200">
              <Star className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">App-Based Coordination</h3>
              <p className="text-gray-700">
                Digital platform for crisis alerts, information sharing, coordination of support, and professional networking.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Member Obligations &amp; Support Details</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Contribution Compliance</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>Members must contribute voluntarily to the nominee of a deceased member as per prescribed guidelines</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>All contributions transferred directly to nominee's bank account</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>Must upload valid payment receipts via website or designated Google Form</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>Failure to contribute or upload proof renders member ineligible for assistance</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>Non-cooperation automatically suspends membership</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Conditions for Assistance</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>Death due to natural causes, accidents, or critical illnesses (including cancer)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>Member must have completed the 12-month lock-in period</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>Member must have fulfilled all contribution obligations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>No fraud, suppression of facts, or misrepresentation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>Final decision rests solely with the Trustees</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Lock-In Period</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>Mandatory lock-in period of <strong>12 months</strong> from date of joining</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>No assistance or claim entertained during lock-in</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>Lock-in is <strong>non-waivable</strong> under any circumstances</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>After lock-in, member becomes eligible for mutual support</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Exclusions</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <AlertTriangle className="mr-3 flex-shrink-0 mt-1 text-yellow-300" size={20} />
                    <span>Death involving suicide or homicide allegations involving nominee</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="mr-3 flex-shrink-0 mt-1 text-yellow-300" size={20} />
                    <span>Criminal proceedings or misrepresentation</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="mr-3 flex-shrink-0 mt-1 text-yellow-300" size={20} />
                    <span>PWT does <strong>not</strong> guarantee any amount — assistance depends on voluntary cooperation</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="mr-3 flex-shrink-0 mt-1 text-yellow-300" size={20} />
                    <span>No claim is enforceable as a right or debt</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Eligibility Criteria</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Who Can Join?</h3>
                <p className="text-sm text-gray-600 mb-3">Membership is open to Indian citizens only — registered professionals in the following categories:</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <Check className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>Doctors &amp; Dentists</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>Chartered Accountants</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>Lawyers</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>Engineers</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>IT Professionals</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>Teachers</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>Healthcare Professionals</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>Any other category approved by the Trustees</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Age &amp; Membership Rules</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <Check className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>Applicants must be aged <strong>60 or below</strong> at the time of enrollment</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>Membership terminates automatically at age <strong>65</strong></span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>Membership is non-transferable and non-assignable</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>A yearly fee is required to register and maintain membership</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>Membership does not create any legal or contractual right to benefits</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>Voluntary withdrawals may rejoin after fulfilling all financial obligations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>Participation may be discontinued at any time, subject to terms</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Join?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Become part of a professional community built on voluntary mutual support. Read our <Link to="/terms" className="text-blue-600 hover:underline">By-Laws</Link> before applying.
            </p>
            <Link
              to="/join"
              className="inline-block bg-blue-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
            >
              Apply for Membership
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
