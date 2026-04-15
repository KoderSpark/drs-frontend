import { Target, Eye, Award, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Drs Welfare</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            A Member-Based Mutual Self Support Trust — Public Charitable &amp; Welfare Trust (Non-Profit)
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Drs Welfare was founded with a singular vision: to create a voluntary mutual self-support system exclusively for registered doctors. Operating as an initiative under the Professionals Welfare Trust (PWT), it brings together individuals who believe in the power of collective support.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Drs Welfare is not an insurance company, investment scheme, or profit-making entity. The platform operates under PWT, a public charitable and welfare trust where members voluntarily contribute to support the families and nominees of deceased members — directly, transparently, and with full accountability.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, Drs Welfare serves registered medical doctors across India — including Doctors, Dentists, Dermatologists, Surgeons, Physicians, Pediatricians, Ophthalmologists, and Orthopedic Specialists — providing them with the assurance that their medical community stands together in times of need.
              </p>
            </div>
            <div className="flex items-center justify-center bg-blue-50 rounded-lg p-4 h-full min-h-[300px]">
              <img
                src="/drs-logo.png"
                alt="Drs Welfare Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To coordinate voluntary mutual assistance among registered doctors for the benefit of members' nominees
              </p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted mutual self-support trust for doctors nationwide, built on transparency and voluntary cooperation
              </p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Values</h3>
              <p className="text-gray-600">
                Integrity, transparency, voluntary cooperation, and unwavering commitment to our members and the trust's charitable purpose
              </p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Growth</h3>
              <p className="text-gray-600">
                Continuously expanding our community of doctors who believe in mutual support and collective welfare
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">Why We're Different</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Not Insurance or Investment</h3>
                <p className="text-blue-100 leading-relaxed">
                  Drs Welfare operates under PWT, a public charitable trust — not an insurance company, not an investment scheme, and not a profit-making entity. We facilitate voluntary mutual support among doctors.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Direct Member-to-Nominee Transfers</h3>
                <p className="text-blue-100 leading-relaxed">
                  All contributions are made directly from members to the nominee's bank account. PWT acts only as a coordinating and facilitating entity — not as a financial intermediary.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Transparent Operations</h3>
                <p className="text-blue-100 leading-relaxed">
                  We maintain complete transparency through our digital platform.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Medical Doctors Community</h3>
                <p className="text-blue-100 leading-relaxed">
                  Open to Doctors, Dentists, Dermatologists, Surgeons, Physicians, Pediatricians, Ophthalmologists, Orthopedic Specialists, and other registered medical doctors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
