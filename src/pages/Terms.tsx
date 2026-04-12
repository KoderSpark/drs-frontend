import { Link } from 'react-router-dom';
import { Scale, ArrowLeft } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-2xl p-8 mb-8 text-center shadow-lg">
          <div className="flex justify-center mb-4">
            <Scale size={48} className="text-blue-200" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">BY-LAWS</h1>
          <p className="text-blue-200 text-lg font-semibold">OF</p>
          <h2 className="text-2xl font-bold mt-1 mb-3">PROFESSIONALS WELFARE TRUST (PWT)</h2>
          <p className="text-blue-100 text-sm">A Member-Based Mutual Self Support Trust</p>
          <p className="text-blue-100 text-sm">(Public Charitable &amp; Welfare Trust – Non-Profit)</p>
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-white/10 px-3 py-1 rounded-full">✔ Benefits strictly restricted to Registered Members only</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">✔ Not an Insurance / Investment / Profit-Making Entity</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-10">

          {/* Preamble */}
          <div className="border-l-4 border-blue-600 pl-6 bg-blue-50 py-4 rounded-r-lg">
            <h2 className="text-xl font-bold text-blue-800 mb-3">RULES &amp; BYE-LAWS OF PROFESSIONALS WELFARE TRUST (PWT)</h2>
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              <strong>Drs Welfare</strong> is an exclusive mutual self-support platform operating under the umbrella of the Professionals Welfare Trust (PWT). These Rules &amp; Bye-Laws govern membership, conduct, mutual assistance, digital platform usage, trustee powers,
              disciplinary mechanisms, and administrative procedures of the Trust. They shall be read in conjunction with the Trust
              Deed and are binding on all registered members, nominees, coordinators, and office bearers.
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              {['Member-only benefits','Voluntary & mutual assistance model','No assured / insurance-type benefits','App-based coordination & transparency','Trustee discretion & legal protection'].map(item => (
                <span key={item} className="bg-blue-100 text-blue-800 px-2 py-1 rounded">✔ {item}</span>
              ))}
            </div>
          </div>

          {/* Chapter I */}
          <section>
            <h2 className="text-xl font-bold text-blue-700 uppercase border-b-2 border-blue-200 pb-2 mb-4">CHAPTER I — PRELIMINARY</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-900">1. SHORT TITLE</h3>
                <p className="mt-1 pl-4">These Rules shall be called <strong>"Rules &amp; Bye-Laws of Professionals Welfare Trust (PWT)"</strong>.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">2. DEFINITIONS</h3>
                <p className="mt-1 pl-4 text-sm text-gray-600 mb-2">Unless repugnant to the context:</p>
                <ul className="pl-4 space-y-1 text-sm">
                  <li><span className="font-medium">(a) "Trust"</span> means Professionals Welfare Trust (PWT).</li>
                  <li><span className="font-medium">(b) "Trustees"</span> means the duly appointed Trustees of the Trust.</li>
                  <li><span className="font-medium">(c) "Member"</span> means a person duly admitted as a registered member.</li>
                  <li><span className="font-medium">(d) "Nominee"</span> means the person nominated by a member.</li>
                  <li><span className="font-medium">(e) "Digital Platform"</span> means the App, website, or online system operated by the Trust.</li>
                  <li><span className="font-medium">(f) "Assistance"</span> means voluntary support coordinated by the Trust.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Chapter II */}
          <section>
            <h2 className="text-xl font-bold text-blue-700 uppercase border-b-2 border-blue-200 pb-2 mb-4">CHAPTER II — MEMBERSHIP</h2>
            <div className="space-y-5 text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-900">1. ELIGIBILITY</h3>
                <p className="mt-1 pl-4 text-sm">Membership is open only to the following registered medical and dental doctors (Indian citizens only):</p>
                <ul className="pl-8 mt-2 space-y-1 text-sm list-disc">
                  <li>Doctors (MBBS, MD, MS)</li>
                  <li>Dentists (BDS, MDS)</li>
                  <li>Dermatologists</li>
                  <li>Surgeons &amp; Physicians</li>
                  <li>Pediatricians</li>
                  <li>Ophthalmologists</li>
                  <li>Orthopedic Specialists</li>
                  <li>Other Registered Medical Doctors</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">2. VOLUNTARY MEMBERSHIP</h3>
                <ul className="pl-4 mt-1 space-y-1 text-sm list-decimal">
                  <li>Membership is purely voluntary.</li>
                  <li>No person shall be compelled to join or continue their membership.</li>
                  <li>Membership does not create any legal or contractual right to benefits.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">3. ADMISSION OF MEMBERS</h3>
                <ul className="pl-4 mt-1 space-y-1 text-sm list-decimal">
                  <li>Application shall be made in prescribed form (physical or digital).</li>
                  <li>Trustees shall have absolute discretion to approve or reject applications.</li>
                  <li>Admission shall be effective only after registration in Trust records.</li>
                  <li>A yearly fee is required to register and maintain your Membership.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">4. MEMBERSHIP VALIDITY</h3>
                <p className="pl-4 mt-1 text-sm">Membership shall remain valid only so long as the member complies with Rules &amp; Bye-Laws, Contribution ethics, and Conduct requirements.</p>
                <ul className="pl-4 mt-2 space-y-1 text-sm list-decimal">
                  <li>Membership is non-transferable and non-assignable.</li>
                  <li>Non-cooperation or failure to contribute shall automatically suspend membership.</li>
                  <li>Membership may be reinstated upon full payment of all outstanding dues.</li>
                  <li>Voluntary withdrawals may rejoin after fulfilling all financial obligations.</li>
                  <li>Participation may be discontinued at any time, subject to terms and conditions.</li>
                  <li>Applicants must be aged <strong>60 or below</strong> at the time of enrollment.</li>
                  <li>Membership terminates automatically at age <strong>65</strong>, regardless of the enrollment date.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Chapter III */}
          <section>
            <h2 className="text-xl font-bold text-blue-700 uppercase border-b-2 border-blue-200 pb-2 mb-4">CHAPTER III — LOCK-IN &amp; ELIGIBILITY</h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-gray-700">
              <h3 className="font-semibold text-gray-900 mb-2">LOCK-IN PERIOD</h3>
              <ul className="space-y-1 list-disc pl-4">
                <li>A mandatory lock-in period of <strong>12 months</strong> applies from the date of joining.</li>
                <li>No assistance or claim shall be entertained during lock-in.</li>
                <li>Lock-in is non-waivable under any circumstances.</li>
              </ul>
            </div>
          </section>

          {/* Chapter IV */}
          <section>
            <h2 className="text-xl font-bold text-blue-700 uppercase border-b-2 border-blue-200 pb-2 mb-4">CHAPTER IV — ASSISTANCE &amp; SUPPORT</h2>
            <div className="space-y-5 text-gray-700 text-sm">
              <div>
                <h3 className="font-semibold text-gray-900 text-base">1. MEMBER-ONLY BENEFITS</h3>
                <ul className="pl-4 mt-1 space-y-1 list-decimal">
                  <li>All facilities, assistance, and coordination are strictly limited to registered members only.</li>
                  <li>No assistance shall be extended to non-members, terminated members, or the general public.</li>
                  <li>Members shall contribute voluntarily to the family or nominee of a deceased member in accordance with prescribed guidelines.</li>
                  <li>All contributions shall be transferred directly from members to the nominee's bank account.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-base">2. CONDITIONS FOR ASSISTANCE</h3>
                <p className="pl-4 mt-1">Assistance may be coordinated only if:</p>
                <ul className="pl-8 mt-1 space-y-1 list-alpha">
                  <li>Death due to natural causes, accidents, or critical illnesses (including cancer and other specified diseases).</li>
                  <li>Enrollment is permitted up to age 60, with coverage extending until age 65.</li>
                  <li>Member completed the lock-in period.</li>
                  <li>Member fulfilled contribution obligations.</li>
                  <li>No fraud or suppression of facts exists.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-base">3. EXCLUSIONS</h3>
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 pl-4">
                  <p className="text-red-800 font-medium mb-1">No assistance shall be provided where:</p>
                  <ul className="space-y-1 list-disc pl-4 text-red-700">
                    <li>Death involves suicide or homicide allegations involving nominee.</li>
                    <li>Criminal proceedings or misrepresentation exists.</li>
                    <li>Final decision rests solely with Trustees.</li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-base">4. NO ASSURED BENEFIT</h3>
                <ul className="pl-4 mt-1 space-y-1 list-decimal">
                  <li>The Trust does not assure or guarantee any amount.</li>
                  <li>Assistance depends on voluntary cooperation of members.</li>
                  <li>No claim is enforceable as a right or debt.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Chapter V */}
          <section>
            <h2 className="text-xl font-bold text-blue-700 uppercase border-b-2 border-blue-200 pb-2 mb-4">CHAPTER V — MUTUAL DOCTOR SUPPORT</h2>
            <div className="space-y-5 text-gray-700 text-sm">
              <div>
                <h3 className="font-semibold text-gray-900 text-base">1. DIRECT CONTRIBUTION CLAUSE</h3>
                <ul className="pl-4 mt-1 space-y-1 list-decimal">
                  <li>All contributions are made directly from members to the nominees' bank accounts.</li>
                  <li>PWT acts only as a coordinating and facilitating entity — not as a financial intermediary.</li>
                  <li>Members have no legal claim to receive any fixed or guaranteed benefit.</li>
                  <li>PWT bears no financial liability for contributions, delays, or non-receipt of support.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-base">2. CONTRIBUTION COMPLIANCE</h3>
                <ul className="pl-4 mt-1 space-y-1 list-decimal">
                  <li>All members are required to complete their contribution obligations fully to remain eligible for benefits.</li>
                  <li>Members must upload valid payment receipts via the official website or designated Google Form after each contribution.</li>
                  <li>Failure to make a contribution or upload proof within the stipulated period will render the member ineligible for assistance.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-base">3. SEQUENCE OF ASSISTANCE</h3>
                <ul className="pl-4 mt-1 space-y-1 list-decimal">
                  <li>In case of multiple deaths of members, support shall be extended in order of date of death.</li>
                  <li>If multiple deaths occur on the same date, the member with the highest average contribution ratio shall receive priority.</li>
                  <li>PWT reserves the right to determine the final order of assistance in exceptional cases.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-base">4. ERRONEOUS TRANSFERS</h3>
                <ul className="pl-4 mt-1 space-y-1 list-decimal">
                  <li>In the event of an erroneous or excess transfer, the nominee shall be obligated to refund the excess amount upon verification.</li>
                  <li>PWT shall facilitate communication in good faith but shall not bear any legal responsibility for the return of such funds.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Chapter VI */}
          <section>
            <h2 className="text-xl font-bold text-blue-700 uppercase border-b-2 border-blue-200 pb-2 mb-4">CHAPTER VI — DIGITAL PLATFORM &amp; APP</h2>
            <div className="text-sm text-gray-700 space-y-3">
              <p>The Trust may operate a Mobile App, Website, Helpline, and Online communication systems. Platform use includes crisis alerts, information sharing, coordination of voluntary support, and doctor networking.</p>
              <div>
                <h3 className="font-semibold text-gray-900">Platform Discipline</h3>
                <p className="mt-1 pl-4">Members shall not misuse the Digital Platform. Prohibited acts include false information, commercial exploitation, and abusive conduct. Violation may result in suspension or termination.</p>
              </div>
            </div>
          </section>

          {/* Chapter VII */}
          <section>
            <h2 className="text-xl font-bold text-blue-700 uppercase border-b-2 border-blue-200 pb-2 mb-4">CHAPTER VII — HELPLINE &amp; DISTRICT COORDINATORS</h2>
            <div className="text-sm text-gray-700">
              <p>Trustees may appoint District-level coordinators. Coordinators act only as facilitators and have no financial authority unless authorized.</p>
            </div>
          </section>

          {/* Chapter VIII */}
          <section>
            <h2 className="text-xl font-bold text-blue-700 uppercase border-b-2 border-blue-200 pb-2 mb-4">CHAPTER VIII — DISCIPLINE &amp; TERMINATION</h2>
            <div className="text-sm text-gray-700 space-y-3">
              <div>
                <h3 className="font-semibold text-gray-900">1. DISCIPLINARY ACTION</h3>
                <p className="pl-4 mt-1">Membership may be suspended or terminated for violation of rules, unethical conduct, or misuse of Trust name or platform.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">2. TERMINATION</h3>
                <ul className="pl-4 mt-1 space-y-1 list-disc">
                  <li>Trustees may terminate membership without assigning reasons.</li>
                  <li>No refund or claim shall arise after termination.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Chapter IX */}
          <section>
            <h2 className="text-xl font-bold text-blue-700 uppercase border-b-2 border-blue-200 pb-2 mb-4">CHAPTER IX — TRUSTEE POWERS &amp; PROTECTION</h2>
            <div className="text-sm text-gray-700 space-y-3">
              <div>
                <h3 className="font-semibold text-gray-900">1. TRUSTEE AUTHORITY</h3>
                <p className="pl-4 mt-1">Trustees shall have full power to frame procedures, manage funds, appoint coordinators, and interpret rules.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">2. TRUSTEE IMMUNITY</h3>
                <ul className="pl-4 mt-1 space-y-1 list-decimal">
                  <li>Trustees acting in good faith shall not be personally liable.</li>
                  <li>No civil or criminal liability shall arise for bona fide acts.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Chapter X */}
          <section>
            <h2 className="text-xl font-bold text-blue-700 uppercase border-b-2 border-blue-200 pb-2 mb-4">CHAPTER X — AMENDMENT</h2>
            <div className="text-sm text-gray-700 space-y-2">
              <p>These Rules may be amended by a Trustee Resolution, provided Trust nature is unchanged.</p>
              <ul className="pl-4 space-y-1 list-decimal">
                <li>PWT reserves the right to modify, amend, or replace any rules at any time to meet operational or legal requirements.</li>
                <li>The version of the rules uploaded on the official website shall be deemed final and legally binding.</li>
              </ul>
            </div>
          </section>

          {/* Chapter XI */}
          <section>
            <h2 className="text-xl font-bold text-blue-700 uppercase border-b-2 border-blue-200 pb-2 mb-4">CHAPTER XI — FINAL PROVISIONS</h2>
            <div className="text-sm text-gray-700 space-y-3">
              <div>
                <h3 className="font-semibold text-gray-900">1. INTERPRETATION</h3>
                <p className="pl-4 mt-1">Trustees' interpretation shall be final and binding.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">2. JURISDICTION</h3>
                <p className="pl-4 mt-1">Courts at <strong>Hyderabad, Telangana State</strong> alone shall have jurisdiction.</p>
              </div>
            </div>
          </section>

          {/* Footer nav */}
          <div className="border-t border-gray-200 pt-6 flex items-center gap-4 flex-wrap">
            <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm">
              <ArrowLeft size={16} /> Back to Home
            </Link>
            <Link to="/join" className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 text-sm font-semibold">
              Join PWT
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
