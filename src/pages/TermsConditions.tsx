import { Link } from 'react-router-dom';
import { FileText, ArrowLeft } from 'lucide-react';

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-2xl p-8 mb-8 text-center shadow-lg">
          <div className="flex justify-center mb-4">
            <FileText size={48} className="text-blue-200" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">TERMS & CONDITIONS</h1>
          <h2 className="text-xl font-medium mt-1 mb-3">DOCTORS WELFARE</h2>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8 text-gray-700">
          <p className="leading-relaxed">
            Welcome to Doctors Welfare. By accessing and using our website and platform services, you agree to be bound by these Terms and Conditions. Please read them carefully before using our services.
          </p>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h3>
            <p>
              By accessing and using the Doctors Welfare website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions, as well as our Privacy Policy and the official By-Laws. If you do not agree with any part of these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">2. Platform Services</h3>
            <p>
              Doctors Welfare operates as a member-based mutual self-support platform for registered medical and dental doctors. We facilitate mutual financial, professional, social, and emotional support. All features and benefits are subject to our By-Laws, and we reserve the right to modify, suspend, or discontinue any aspect of the platform at any time.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">3. Membership Fees and Contributions</h3>
            <p>
              All fees and required contributions are listed in Indian Rupees (₹) and are subject to change. Members are required to pay an initial registration fee, an annual renewal fee, and make mandatory contributions to the nominees of deceased members as specified in our By-Laws. 
            </p>
            <p className="mt-2">
              By submitting a registration request, you are agreeing to fulfill these financial obligations. Registration does not guarantee approval until reviewed and accepted by our Trustees.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">4. Payment Terms</h3>
            <p>
              Membership registration and renewal fees must be paid through the accepted digital payment methods provided on our platform. Mandatory contributions to deceased members' families are to be made directly to the nominees' verified bank accounts. You must upload valid proof of payment as required by our system.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">5. Account Activation and Platform Access</h3>
            <p>
              Upon successful registration and payment of applicable fees, your account will be reviewed for approval. Activation times may vary, and we are not liable for any delays in the approval process. You are responsible for maintaining the confidentiality of your login credentials and for providing accurate and up-to-date information.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">6. Returns and Refunds</h3>
            <p>
              Due to the nature of a mutual support trust, membership fees and member-to-member contributions are generally non-refundable. Refunds are strictly limited to technical errors or processing failures reported within 48 hours of the transaction. For more details, please review our comprehensive Refund Policy.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">7. Member Conduct and Eligibility</h3>
            <p>
              All members must comply with the ethical standards and eligibility criteria set forth in our By-Laws. Members must act in good faith and avoid any fraudulent or misleading activities. We reserve the right to suspend or terminate the membership of anyone who violates these standards or fails to make mandatory contributions.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">8. Intellectual Property</h3>
            <p>
              All content on the Doctors Welfare website, including text, graphics, logos, images, and software, is the property of Professionals Welfare Trust (PWT) and is protected by copyright, trademark, and other intellectual property laws. You may not use, reproduce, or distribute any content without our express written permission.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">9. Limitation of Liability</h3>
            <p>
              Doctors Welfare and its Trustees shall not be liable for any indirect, incidental, special, or consequential damages arising from the use or inability to use our platform, or from the failure of members to make voluntary contributions, even if we have been advised of the possibility of such damages. 
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">10. Indemnification</h3>
            <p>
              You agree to indemnify and hold Doctors Welfare, its Trustees, officers, agents, and employees harmless from any claim, demand, or damage, including reasonable attorneys' fees, arising from your use of our platform, your breach of these Terms and Conditions, or your violation of any law or the rights of a third party.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">11. Governing Law</h3>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana State.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">12. Modifications to Terms</h3>
            <p>
              Doctors Welfare reserves the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after any changes constitutes your acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">13. Contact Information</h3>
            <p className="mb-2">If you have any questions about these Terms and Conditions, please contact us:</p>
            <ul className="space-y-2 font-medium text-gray-800">
              <li>📧 drswelfareindia@gmail.com</li>
              <li>📍 Hyderabad, Telangana State, India</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">14. Severability</h3>
            <p>
              If any provision of these Terms and Conditions is found to be invalid or unenforceable, the remaining provisions shall continue to be valid and enforceable to the fullest extent permitted by law.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">15. Entire Agreement</h3>
            <p>
              These Terms and Conditions, together with our Privacy Policy and By-Laws, constitute the entire agreement between you and Doctors Welfare regarding the use of our website and services, and supersede all prior agreements and understandings.
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
