import { UserPlus, FileCheck, CreditCard, Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HowItWorks() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Join drswelfareindia in four simple steps and start enjoying comprehensive benefits for you and your family
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Simple Process, Lasting Benefits</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto">
              Our streamlined process ensures you can become a member quickly and start enjoying benefits right away
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
                      Fill out our comprehensive registration form with your personal details, professional credentials, and family information. The form is designed to be straightforward and user-friendly.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={18} />
                        <span>Provide personal and professional details</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={18} />
                        <span>Upload required documents and certificates</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={18} />
                        <span>Add nominee and family member information</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src="https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Registration"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="https://images.pexels.com/photos/6289065/pexels-photo-6289065.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Document Verification"
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
                      Document Verification
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Our team will review your submitted documents and credentials to verify your professional status. This process typically takes 2-3 business days.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={18} />
                        <span>Professional credentials verification</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={18} />
                        <span>Document authenticity check</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={18} />
                        <span>Email confirmation upon approval</span>
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
                      Complete Payment
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Once approved, complete your membership payment through our secure payment gateway. Multiple payment options are available for your convenience.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={18} />
                        <span>Secure online payment processing</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={18} />
                        <span>Multiple payment method options</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={18} />
                        <span>Instant payment confirmation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src="https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Payment"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Membership Benefits"
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
                      <Shield className="mr-3 text-blue-600" size={28} />
                      Enjoy Full Benefits
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Your membership becomes active immediately upon payment confirmation. Access all benefits and support services right away.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={18} />
                        <span>Immediate access to all member benefits</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={18} />
                        <span>Member portal login credentials</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={18} />
                        <span>24/7 support and assistance</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of healthcare professionals who trust drswelfareindia for their financial security
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
