import { Target, Eye, Award, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About drswelfareindia</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Health Care Professionals Self Support Scheme - Empowering medical professionals through mutual support and comprehensive benefits
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                drswelfareindia was founded with a singular vision: to create a comprehensive support system exclusively for healthcare professionals. Understanding the unique challenges faced by doctors and dentists, we developed a scheme that addresses their specific needs.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our organization brings together experienced healthcare professionals, financial experts, and support staff to deliver exceptional service and meaningful benefits to our members.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, we proudly serve thousands of healthcare professionals across the country, providing them with financial security, community support, and peace of mind.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/7579319/pexels-photo-7579319.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Healthcare Team"
                className="rounded-lg shadow-lg"
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
                To provide comprehensive support and financial security to healthcare professionals
              </p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted support scheme for medical professionals nationwide
              </p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Values</h3>
              <p className="text-gray-600">
                Integrity, transparency, and unwavering commitment to our members
              </p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Growth</h3>
              <p className="text-gray-600">
                Continuously expanding benefits and services for our growing community
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">Why We're Different</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Professional Focus</h3>
                <p className="text-blue-100 leading-relaxed">
                  Unlike general support schemes, we focus exclusively on the needs and challenges of healthcare professionals, ensuring our benefits are truly relevant.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Community Driven</h3>
                <p className="text-blue-100 leading-relaxed">
                  Our scheme is built on the principle of mutual support, where healthcare professionals help each other through contributions and shared resources.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Transparent Operations</h3>
                <p className="text-blue-100 leading-relaxed">
                  We maintain complete transparency in our operations, ensuring members understand exactly how their contributions are managed and utilized.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Comprehensive Coverage</h3>
                <p className="text-blue-100 leading-relaxed">
                  Our benefits extend beyond individual members to include family coverage and nominee support, providing complete peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
