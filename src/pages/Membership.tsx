import { Check, Users, Shield, Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Membership() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Membership Details</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Comprehensive benefits designed exclusively for healthcare professionals and their families
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Membership Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our membership provides comprehensive coverage and support for you and your loved ones
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200">
              <Users className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Individual Coverage</h3>
              <p className="text-gray-700">
                Complete financial protection and support for the primary member
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200">
              <Heart className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Family Benefits</h3>
              <p className="text-gray-700">
                Extended coverage for up to 2 family members with full support
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200">
              <Shield className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Nominee Protection</h3>
              <p className="text-gray-700">
                Designated nominee receives comprehensive benefits and support
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200">
              <Star className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Priority Support</h3>
              <p className="text-gray-700">
                24/7 dedicated support team for all member queries and needs
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">What's Included</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Primary Member Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>Comprehensive financial support scheme</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>Emergency assistance fund access</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>Professional liability support</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>Medical practice support services</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>Annual health checkup coverage</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Family Coverage</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>Coverage for spouse and children</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>Educational support for dependents</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>Family health and wellness programs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>Emergency family assistance</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>Counseling and support services</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Nominee Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>Financial security assurance</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>Full benefit transfer provisions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>Legal and documentation support</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>Priority claims processing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>Dedicated support coordinator</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Additional Services</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>Professional networking opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>Continuing education support</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>Legal consultation services</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>Financial planning assistance</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>Member exclusive events and seminars</span>
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
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <Check className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>Registered medical doctors (MBBS, MD, MS, etc.)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>Registered dental surgeons (BDS, MDS, etc.)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>Valid medical/dental council registration</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>Currently practicing or retired professionals</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Required Documents</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <Check className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>Valid government-issued ID proof</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>Professional degree certificates</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>Medical/Dental council registration certificate</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>Recent passport-size photograph</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Join?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Take the first step towards securing your future and that of your family
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
