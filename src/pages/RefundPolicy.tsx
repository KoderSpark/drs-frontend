import { Link } from 'react-router-dom';
import { ShieldAlert, ArrowLeft } from 'lucide-react';

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-2xl p-8 mb-8 text-center shadow-lg">
          <div className="flex justify-center mb-4">
            <ShieldAlert size={48} className="text-blue-200" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">REFUND POLICY</h1>
          <h2 className="text-xl font-medium mt-1 mb-3">DOCTORS WELFARE</h2>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8 text-gray-700">
          <p className="leading-relaxed">
            At Doctors Welfare, we strive to ensure your complete satisfaction. This Refund Policy outlines the terms and conditions for returns, refunds, and exchanges. Please read this policy carefully.
          </p>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">1. Eligibility for Refunds</h3>
            <p>Refunds are available for transactions that are processed incorrectly or in case of technical errors. To be eligible for a refund, you must report the issue within 48 hours of the transaction.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">2. Non-Refundable Items</h3>
            <p>Due to the nature of our membership and contribution system, certain transactions are non-refundable, including membership registration fees and voluntary contributions made to deceased members' nominees, as these are direct member-to-member transfers.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">3. How to Request a Refund</h3>
            <p>To request a refund for eligible technical errors, please contact our support team within 48 hours with your transaction details and a detailed description of the issue. Our team will review your request and provide further instructions.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">4. Inspection and Approval</h3>
            <p>Once we receive your refund request, our team will verify the reported issue. Refund requests will be approved only if the transaction meets our criteria for technical errors or incorrect processing. We reserve the right to reject refund requests that do not comply with this policy.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">5. Refund Processing Time</h3>
            <p>Approved refunds will be processed within 7-10 business days after we verify the issue. The refund will be credited to your original payment method. Please note that it may take additional time for your bank or payment provider to process the refund.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">6. Cancellations</h3>
            <p>Membership applications can be cancelled prior to approval for a full refund of the registration fee. Once an application has been processed and approved, it cannot be cancelled for a refund.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">7. Incorrect Transactions</h3>
            <p>If you experience an incorrect transaction, please notify us within 48 hours. We will assist in resolving the issue and provide guidance on correcting the transaction. No refund will be issued if the incorrect transaction is not reported within the specified timeframe.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">8. Refund Method</h3>
            <p>Refunds will be issued using the same payment method used for the original transaction. If the original payment method is no longer available, please contact us to arrange an alternative refund method. We do not provide cash refunds.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">9. Contact Information</h3>
            <p className="mb-2">For any questions or concerns regarding refunds, please contact our support team:</p>
            <ul className="space-y-2 font-medium text-gray-800">
              <li>📧 drswelfareindia@gmail.com</li>
              <li>📍 Hyderabad, Telangana State, India</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">10. Policy Updates</h3>
            <p>Doctors Welfare reserves the right to modify this Refund Policy at any time. Any changes will be posted on our website with an updated effective date. Your continued use of our services after such changes constitutes acceptance of the updated policy.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">11. Dispute Resolution</h3>
            <p>If you are not satisfied with how your refund request has been handled, please contact our support team to escalate the matter. We are committed to resolving all disputes fairly and promptly. Any unresolved disputes will be subject to the jurisdiction of courts in Hyderabad, Telangana State.</p>
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
