import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-2xl p-8 mb-8 text-center shadow-lg">
          <div className="flex justify-center mb-4">
            <ShieldCheck size={48} className="text-blue-200" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">PRIVACY POLICY</h1>
          <h2 className="text-xl font-medium mt-1 mb-3">DOCTORS WELFARE</h2>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8 text-gray-700">
          <p className="leading-relaxed">
            At Doctors Welfare, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">1. Information We Collect</h3>
            <p>
              We collect information that you provide directly to us, including your name, email address, phone number, professional medical registration details, and payment information when you register for membership or create an account. We also collect information automatically through your use of our website, such as IP address, browser type, and browsing behavior.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">2. How We Use Your Information</h3>
            <p>
              We use the information we collect to process your membership, communicate with you about your contributions and platform updates, improve our services, send you relevant communications (with your consent), and comply with legal obligations. We may also use your information to personalize your experience and provide support.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">3. Information Sharing and Disclosure</h3>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your information with service providers who assist us in operating our website and facilitating our platform, such as payment processors and digital communication services. These third parties are obligated to keep your information confidential and use it only for the purposes we specify.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">4. Data Security</h3>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">5. Cookies and Tracking Technologies</h3>
            <p>
              We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user preferences. You can control cookie settings through your browser, but disabling cookies may affect your ability to use certain features of our website.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">6. Your Rights and Choices</h3>
            <p>
              You have the right to access, update, or delete your personal information at any time. You can also opt out of receiving certain communications from us by following the unsubscribe instructions in our emails or contacting us directly. If you have any concerns about how we handle your data, please reach out to us.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">7. Children's Privacy</h3>
            <p>
              Our services are not intended for children under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child without parental consent, we will take steps to delete that information promptly.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">8. Third-Party Links</h3>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">9. Data Retention</h3>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">10. International Data Transfers</h3>
            <p>
              Your information may be transferred to and processed in countries other than your country of residence. We ensure that appropriate safeguards are in place to protect your information in accordance with this Privacy Policy and applicable data protection laws.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">11. Changes to This Privacy Policy</h3>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website and updating the effective date. Your continued use of our services after such changes constitutes your acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">12. Contact Us</h3>
            <p className="mb-2">If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
            <ul className="space-y-2 font-medium text-gray-800">
              <li>📧 drswelfareindia@gmail.com</li>
              <li>📍 Hyderabad, Telangana State, India</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">13. Consent</h3>
            <p>
              By using our website and services, you consent to the collection, use, and disclosure of your information as described in this Privacy Policy. If you do not agree with this policy, please do not use our services.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">14. Compliance with Laws</h3>
            <p>
              We comply with applicable data protection laws and regulations, including the Information Technology Act, 2000 and related rules in India. We are committed to maintaining the highest standards of data privacy and security.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">15. Your California Privacy Rights</h3>
            <p>
              If you are a California resident, you may have additional rights under the California Consumer Privacy Act (CCPA). Please contact us to exercise these rights or for more information about how we handle your personal information.
            </p>
          </section>

          {/* Footer nav */}
          <div className="border-t border-gray-200 pt-6 flex items-center gap-4 flex-wrap mt-8">
            <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm">
              <ArrowLeft size={16} /> Back to Home
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
