import { UserPlus, FileCheck, CreditCard, Shield, CheckCircle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HowItWorks() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Join Professionals Welfare Trust in simple steps and become part of a voluntary mutual self-support community of doctors
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Simple Process, Meaningful Support</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto">
              Our streamlined process ensures you can become a registered member and join a community of doctors working together for mutual welfare
            </p>
          </div>

          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 mr-4">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
                      <UserPlus className="mr-3 text-blue-600" size={28} />
                      Complete Registration
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Fill out the membership application form (physical or digital) with your personal details, medical credentials, and nominee information. Membership is open to Indian citizens only, aged 60 or below.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={18} />
                        <span>Provide personal and medical details</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={18} />
                        <span>Upload required documents and medical certificates</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={18} />
                        <span>Designate a nominee with their bank account details</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=800&auto=format&fit=crop"
                  alt="Doctor Registration"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=800&auto=format&fit=crop"
                  alt="Medical Document Verification"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 mr-4">
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
                      <FileCheck className="mr-3 text-blue-600" size={28} />
                      Trustee Approval
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Trustees shall review your submitted documents and medical credentials. They have absolute discretion to approve or reject applications. Admission is effective only after registration in Trust records.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={18} />
                        <span>Medical credentials verification</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={18} />
                        <span>Document authenticity check</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={18} />
                        <span>Confirmation upon Trustee approval</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 mr-4">
                    3
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
                      <CreditCard className="mr-3 text-blue-600" size={28} />
                      Pay Yearly Membership Fee
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Once approved, complete your yearly membership fee payment. A yearly fee is required to register and maintain your membership. Membership remains valid only as long as you comply with all Rules &amp; Bye-Laws.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={18} />
                        <span>Yearly membership registration fee</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={18} />
                        <span>Membership is non-transferable and non-assignable</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={18} />
                        <span>Payment confirmation and registration in Trust records</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop"
                  alt="Membership Fee Payment"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800&auto=format&fit=crop"
                  alt="Doctor Community Support"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 mr-4">
                    4
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
                      <Clock className="mr-3 text-blue-600" size={28} />
                      12-Month Lock-In &amp; Eligibility
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      A mandatory lock-in period of 12 months applies from the date of joining. No assistance or claim shall be entertained during the lock-in period. After completing the lock-in, you become eligible for mutual support from fellow members.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={18} />
                        <span>12-month mandatory lock-in — non-waivable</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={18} />
                        <span>Must fulfill all contribution obligations to remain eligible</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={18} />
                        <span>After lock-in, nominee eligible for voluntary member contributions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Important Disclaimer */}
          <div className="mt-16 bg-yellow-50 border border-yellow-200 rounded-xl p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Important Disclaimer</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start">
                <Shield className="text-yellow-600 mr-2 flex-shrink-0 mt-0.5" size={18} />
                <span>PWT does <strong>not</strong> assure or guarantee any fixed amount. Assistance depends on voluntary cooperation of members.</span>
              </li>
              <li className="flex items-start">
                <Shield className="text-yellow-600 mr-2 flex-shrink-0 mt-0.5" size={18} />
                <span>No claim is enforceable as a legal right or debt. PWT is not an insurance or investment entity.</span>
              </li>
              <li className="flex items-start">
                <Shield className="text-yellow-600 mr-2 flex-shrink-0 mt-0.5" size={18} />
                <span>Membership terminates automatically at age <strong>65</strong>, regardless of enrollment date.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join a community of doctors who believe in mutual support. Enrollment open for registered doctors aged 60 and below.
          </p>
          <Link
            to="/join"
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg"
          >
            Start Your Application
          </Link>
        </div>
      </section>
    </div>
  );
}
