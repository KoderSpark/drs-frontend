import { Link } from 'react-router-dom';
import { Shield, Users, Heart, CheckCircle, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      <section 
        className="relative bg-cover bg-center bg-no-repeat text-white py-32" 
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1631815587646-b85a1bb027e1?q=80&w=2069&auto=format&fit=crop')`,
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Professionals Supporting Professionals Together
            </h1>
            <p className="text-xl mb-8 text-white">
              Join Professionals Welfare Trust (PWT) — A member-based mutual self-support trust designed exclusively for registered professionals. Not an insurance or investment entity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/join"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center flex items-center justify-center"
              >
                Join Now <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/how-it-works"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional Team"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Built by Professionals, For Professionals
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700">Open to Doctors, Dentists, Dermatologists, Surgeons, Pediatricians, Ophthalmologists &amp; other Medical Professionals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700">Voluntary mutual assistance — contributions go directly from members to the nominee's bank account</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700">Transparent, app-based coordination with full accountability</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700">Public Charitable &amp; Welfare Trust — Non-Profit, not an insurance or investment scheme</span>
                </li>
              </ul>
              <Link
                to="/membership"
                className="inline-block mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                View Membership Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Professionals Welfare Trust?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A voluntary, member-driven mutual support model where professionals help each other through difficult times
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-blue-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Shield className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Mutual Self-Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Members voluntarily contribute to support the family/nominee of a deceased member. PWT coordinates — it does not collect or hold funds.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-blue-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Users className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Professional Community</h3>
              <p className="text-gray-600 leading-relaxed">
                Join a network of doctors, dentists, dermatologists, surgeons, pediatricians &amp; other medical professionals who support each other.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-blue-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Heart className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Nominee Protection</h3>
              <p className="text-gray-600 leading-relaxed">
                In the event of a member's passing, contributions from fellow members are transferred directly to the designated nominee's bank account.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Community of Professionals?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Take the first step towards mutual support. Membership is open to all registered professionals aged 60 or below (Indian citizens only).
          </p>
          <Link
            to="/join"
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg"
          >
            Start Your Application Today
          </Link>
        </div>
      </section>
    </div>
  );
}
