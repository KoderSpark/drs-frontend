import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors flex justify-between items-center"
      >
        <span className="font-semibold text-gray-900 pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="text-blue-600 flex-shrink-0" size={24} />
        ) : (
          <ChevronDown className="text-blue-600 flex-shrink-0" size={24} />
        )}
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-700 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const faqs = [
    {
      question: 'What is Doctors Welfare?',
      answer: 'Doctors Welfare is a member-based mutual self-support platform exclusively for registered doctors. It is operated by the Professionals Welfare Trust (PWT) — a Public Charitable & Welfare Trust (Non-Profit). It is NOT an insurance company, investment scheme, or profit-making entity.',
    },
    {
      question: 'Who is eligible to join Doctors Welfare?',
      answer: 'Membership is open to Indian citizens only, specifically registered medical and dental doctors including: Doctors (MBBS, MD, MS), Dentists (BDS, MDS), Dermatologists, Surgeons & Physicians, Pediatricians, Ophthalmologists, Orthopedic Specialists, and other registered medical doctors. Applicants must be aged 60 or below at the time of enrollment.',
    },
    {
      question: 'Is there an age limit for membership?',
      answer: 'Yes. Applicants must be aged 60 or below at the time of enrollment. Membership terminates automatically at age 65, regardless of the enrollment date. Coverage extends from enrollment up to age 65.',
    },
    {
      question: 'What is the lock-in period?',
      answer: 'A mandatory lock-in period of 12 months applies from the date of joining. No assistance or claim shall be entertained during the lock-in period. The lock-in is non-waivable under any circumstances.',
    },
    {
      question: 'What kind of support does PWT provide?',
      answer: 'PWT coordinates voluntary contributions from members to the family/nominee of a deceased member. All contributions are transferred directly from members to the nominee\'s bank account. PWT acts only as a coordinating and facilitating entity — it does not collect or hold contribution funds. Assistance may be coordinated for death due to natural causes, accidents, or critical illnesses (including cancer).',
    },
    {
      question: 'Does PWT guarantee any specific amount?',
      answer: 'No. PWT does not assure or guarantee any amount. Assistance depends entirely on the voluntary cooperation of members. No claim is enforceable as a legal right or debt. Members have no legal claim to receive any fixed or guaranteed benefit.',
    },
    {
      question: 'How do contributions work?',
      answer: 'When a member passes away, all registered members are required to contribute to the deceased member\'s nominee. Contributions are made directly to the nominee\'s bank account — PWT facilitates the coordination. Members must upload valid payment receipts via the official website or designated Google Form. Failure to contribute renders a member ineligible for future assistance.',
    },
    {
      question: 'What is a nominee and why is it required?',
      answer: 'A nominee is the person designated by a member to receive voluntary contributions from fellow members in case of the member\'s death. Providing nominee details (including bank account information) is mandatory during registration, as all contributions are transferred directly to the nominee\'s bank account.',
    },
    {
      question: 'What are the exclusions for assistance?',
      answer: 'No assistance shall be provided where: (1) Death involves suicide or homicide allegations involving the nominee, (2) Criminal proceedings or misrepresentation exists, (3) The member had not completed the lock-in period, (4) The member had not fulfilled contribution obligations, or (5) There is fraud or suppression of facts. The final decision rests solely with the Trustees.',
    },
    {
      question: 'Can I cancel my membership?',
      answer: 'Yes, participation may be discontinued at any time, subject to terms and conditions. However, membership fees are non-refundable, and no claim or refund shall arise after termination. Voluntary withdrawals may rejoin after fulfilling all outstanding financial obligations.',
    },
    {
      question: 'What happens if I don\'t contribute when required?',
      answer: 'Failure to make a contribution or upload proof within the stipulated period will render you ineligible for assistance. Non-cooperation or failure to contribute shall automatically suspend your membership. Membership may be reinstated upon full payment of all outstanding dues.',
    },
    {
      question: 'How is the sequence of assistance determined?',
      answer: 'In case of multiple deaths, support is extended in order of date of death. If multiple deaths occur on the same date, the member with the highest average contribution ratio receives priority. PWT reserves the right to determine the final order of assistance in exceptional cases.',
    },
    {
      question: 'Is membership transferable?',
      answer: 'No. Membership is non-transferable and non-assignable. It does not create any legal or contractual right to benefits.',
    },
    {
      question: 'What digital platform does PWT operate?',
      answer: 'PWT operates a Mobile App, Website, Helpline, and Online communication systems. The platform is used for crisis alerts, information sharing, coordination of voluntary support, and doctor networking. Members shall not misuse the platform — prohibited acts include false information, commercial exploitation, and abusive conduct.',
    },
    {
      question: 'Which courts have jurisdiction over PWT matters?',
      answer: 'Courts at Hyderabad, Telangana State alone shall have jurisdiction over any matters related to PWT. The Trustees\' interpretation of Rules & Bye-Laws shall be final and binding.',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Find answers to common questions about Doctors Welfare membership, mutual support, and processes
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-lg text-gray-600">
              Can't find what you're looking for? Contact our support team or read our complete <a href="/terms" className="text-blue-600 hover:underline">By-Laws</a>.
            </p>
          </div>

          <div>
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
            <p className="text-gray-700 mb-6">
              Our support team is here to help you with any additional questions or concerns about PWT membership.
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
