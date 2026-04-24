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
          <p className="mt-6 text-blue-200 text-xs italic">
            Adopted pursuant to the Deed of Trust dated _____________, 2026<br/>
            Place: _____________ &nbsp;&nbsp;&nbsp; Date: _____________
          </p>
          <div className="mt-4 flex justify-between px-12 text-sm text-blue-200">
            <span>__________________________<br/>Trustee</span>
            <span>__________________________<br/>Trustee</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-10">

          {/* Preamble */}
          <div className="border-l-4 border-blue-600 pl-6 bg-blue-50 py-4 rounded-r-lg">
            <h2 className="text-xl font-bold text-blue-800 mb-3">RULES &amp; BYE-LAWS OF PROFESSIONALS WELFARE TRUST (PWT)</h2>
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              These Rules &amp; Bye-Laws govern membership, conduct, mutual assistance, digital platform usage, trustee powers, disciplinary mechanisms, and administrative procedures of the Trust.
              <br/><br/>
              They shall be read in conjunction with the Trust Deed and are binding on all registered members, nominees, coordinators, and office bearers.
            </p>
            <div className="flex flex-wrap gap-2 text-xs mb-3">
              {['Member-only benefits','Voluntary & mutual assistance model','No assured / insurance-type benefits','App-based coordination & transparency','Trustee discretion & legal protection'].map(item => (
                <span key={item} className="bg-blue-100 text-blue-800 px-2 py-1 rounded">✔ {item}</span>
              ))}
            </div>
            <p className="text-xs text-blue-800 font-medium">Adopted by the Board of Trustees on _____________, 2026</p>
          </div>

          {/* Chapter I */}
          <section>
            <h2 className="text-xl font-bold text-blue-700 uppercase border-b-2 border-blue-200 pb-2 mb-4">PRELIMINARY: CHAPTER I</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-900">1. SHORT TITLE</h3>
                <p className="mt-1 pl-4 text-sm">These Rules shall be called <strong>"Rules &amp; Bye-Laws of Professionals Welfare Trust (PWT)"</strong>.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">2. DEFINITIONS</h3>
                <p className="mt-1 pl-4 text-sm text-gray-600 mb-2">Unless repugnant to the context:</p>
                <ul className="pl-4 space-y-1 text-sm list-none">
                  <li><span className="font-medium">a) "Trust"</span> means Professionals Welfare Trust (PWT).</li>
                  <li><span className="font-medium">b) "Trustees"</span> means the duly appointed Trustees of the Trust.</li>
                  <li><span className="font-medium">c) "Member"</span> means a person duly admitted as a registered member.</li>
                  <li><span className="font-medium">d) "Nominee"</span> means the person nominated by a member.</li>
                  <li><span className="font-medium">e) "Digital Platform"</span> means the App, website, or online system operated by the Trust.</li>
                  <li><span className="font-medium">f) "Assistance"</span> means voluntary support coordinated by the Trust.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">3. NATURE OF TRUST</h3>
                <p className="mt-1 pl-4 text-sm">The Trust shall function strictly as a mutual self-support, non-profit welfare arrangement and shall not be construed as an insurance scheme, financial product, investment, or commercial entity.</p>
              </div>
            </div>
          </section>

          {/* Chapter II */}
          <section>
            <h2 className="text-xl font-bold text-blue-700 uppercase border-b-2 border-blue-200 pb-2 mb-4">CHAPTER II</h2>
            <div className="space-y-5 text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-900">OBJECTS OF TRUST</h3>
                <p className="mt-1 pl-4 text-sm">The Trust shall work towards providing mutual financial, professional, social, and emotional support to members and their families, including assistance during death and marriage of daughters, promoting professional cooperation, and facilitating networking through digital and physical platforms, as determined by Trustees.</p>
              </div>

              <h3 className="text-lg font-bold text-gray-800 border-b border-gray-200 pb-1 mt-6">MEMBERSHIP</h3>
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
                <ul className="pl-8 mt-1 space-y-1 text-sm list-decimal">
                  <li>Membership is purely voluntary.</li>
                  <li>No person shall be compelled to join or continue their membership.</li>
                  <li>Membership does not create any legal or contractual right to benefits.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">3. ADMISSION OF MEMBERS</h3>
                <ul className="pl-8 mt-1 space-y-1 text-sm list-decimal">
                  <li>Application shall be made in prescribed form (physical or digital).</li>
                  <li>Trustees shall have absolute discretion to approve or reject applications.</li>
                  <li>Admission shall be effective only after registration in Trust records.</li>
                  <li>A yearly fee is required to register and maintain your Membership.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">4. MEMBERSHIP VALIDITY</h3>
                <p className="pl-4 mt-1 text-sm">4.1 Membership shall remain valid only so long as the member complies with:</p>
                <ul className="pl-12 mt-1 space-y-1 text-sm list-disc">
                  <li>Rules &amp; Bye-Laws</li>
                  <li>Contribution ethics</li>
                  <li>Conduct requirements</li>
                </ul>
                <p className="pl-4 mt-2 text-sm">4.2 Membership is non-transferable and non-assignable.</p>
                <p className="pl-4 mt-2 text-sm">4.3</p>
                <ul className="pl-12 mt-1 space-y-1 text-sm list-decimal">
                  <li>Non-cooperation or failure to contribute shall automatically suspend membership.</li>
                  <li>Membership may be reinstated upon full payment of all outstanding dues.</li>
                  <li>Voluntary withdrawals may rejoin after fulfilling all financial obligations.</li>
                  <li>Participation may be discontinued at any time, subject to terms and conditions.</li>
                  <li>Applicants must be aged 18 years to 60 years at the time of enrolment.</li>
                  <li>Membership terminates automatically at age 65, regardless of the enrollment date.</li>
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
                <li>Any claim arising during the lock-in period shall stand automatically rejected, and no representation or exception shall be entertained in this regard.</li>
                <li>No assistance or claim shall be entertained during lock-in.</li>
                <li>Lock-in is non-waivable under any circumstances.</li>
              </ul>
            </div>
          </section>

          {/* Chapter IV */}
          <section>
            <h2 className="text-xl font-bold text-blue-700 uppercase border-b-2 border-blue-200 pb-2 mb-4">CHAPTER IV — ASSISTANCE &amp; SUPPORT</h2>
            <p className="text-sm text-gray-700 mb-4 bg-gray-100 p-3 rounded">
              No member, nominee, or beneficiary shall have any legal, enforceable, or contractual right to claim assistance from the Trust.<br/>
              All assistance is voluntary, discretionary, and subject to the decisions of the Trustees.
            </p>
            <div className="space-y-5 text-gray-700 text-sm">
              <div>
                <h3 className="font-semibold text-gray-900 text-base">1. MEMBER-ONLY BENEFITS</h3>
                <ul className="pl-4 mt-1 space-y-1 list-none">
                  <li><strong>1.1</strong> All facilities, assistance, and coordination are strictly limited to registered members only.</li>
                  <li><strong>1.2</strong> No assistance shall be extended to:
                    <ul className="pl-6 mt-1 list-disc">
                      <li>non-members</li>
                      <li>terminated members</li>
                      <li>general public.</li>
                    </ul>
                  </li>
                  <li><strong>1.3</strong> Members shall contribute voluntarily to the family or nominee of a deceased member in accordance with the prescribed guidelines.</li>
                  <li><strong>1.4</strong> All contributions shall be transferred directly from members to the nominee's bank account.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-base">2. CONDITIONS FOR ASSISTANCE</h3>
                <p className="pl-4 mt-1">Assistance may be coordinated only if:</p>
                <ul className="pl-8 mt-1 space-y-1 list-alpha">
                  <li>Assistance is provided in the event of death due to natural causes, accidents, or critical illnesses (including cancer and other specified diseases)</li>
                  <li>Assistance is provided In case of Daughters marriage of the Member.</li>
                  <li>Enrollment is permitted from 18 years to 60 years, with coverage extending until age 65.</li>
                  <li>Member completed lock-in period</li>
                  <li>Member fulfilled contribution obligations</li>
                  <li>No fraud or suppression of facts exists</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-base">3. MARRIAGE ASSISTANCE TO DAUGHTERS OF MEMBERS</h3>
                <div className="pl-4 space-y-3 mt-2">
                  <div>
                    <h4 className="font-medium text-gray-800">3.1 OBJECT OF ASSISTANCE</h4>
                    <p className="mt-1">The Trust may provide financial assistance to members for the solemnization of the marriage of their daughter(s) as a welfare measure, subject to these Bye-Laws and such rules as may be framed by the Trustees.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">3.2 DEFINITION OF DAUGHTER</h4>
                    <p className="mt-1">For the purpose of this clause, "daughter" shall include:</p>
                    <ul className="pl-6 mt-1 list-none">
                      <li>(a) Biological daughter</li>
                      <li>(b) Legally adopted daughter</li>
                      <li>(c) Step-daughter or dependent female child who is wholly or substantially dependent on the member and recognized by the Trustees</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">3.3 ELIGIBILITY CRITERIA</h4>
                    <p className="mt-1">A member shall be eligible only if:</p>
                    <ul className="pl-6 mt-1 list-none">
                      <li>(a) Minimum membership period (including lock-in period) is completed</li>
                      <li>(b) Membership is active</li>
                      <li>(c) All required contributions are fully paid</li>
                      <li>(d) The marriage is legally valid</li>
                      <li>(e) All conditions prescribed by the Trustees are satisfied</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">3.4 NATURE OF ASSISTANCE</h4>
                    <p className="mt-1">The assistance provided under this clause shall be: Voluntary, Discretionary, Welfare-based.</p>
                    <p className="mt-1 text-red-600 font-medium">No member or beneficiary shall have any legal, enforceable, or vested right to claim such assistance.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">3.5 DETERMINATION OF AMOUNT</h4>
                    <p className="mt-1">The amount of assistance shall be determined solely by the Trustees. No fixed or guaranteed amount shall be payable. The Trust shall not be obligated to raise funds or incur liabilities for this purpose.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">3.6 LIMITATION</h4>
                    <ul className="pl-6 mt-1 list-none">
                      <li>(a) Assistance shall normally be granted only once per daughter</li>
                      <li>(b) Multiple claims by the same member shall be subject to limits decided by the Trustees</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">3.7 APPLICATION PROCEDURE</h4>
                    <p className="mt-1">The member shall apply in the prescribed format along with:</p>
                    <ul className="pl-6 mt-1 list-disc">
                      <li>Membership proof</li>
                      <li>Identity proof of daughter</li>
                      <li>Proof of marriage (invitation/registration)</li>
                      <li>Any other documents required by the Trustees</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">3.8 TIME LIMIT FOR APPLICATION</h4>
                    <ul className="pl-6 mt-1 list-disc">
                      <li>Application must be submitted at least 90 days prior to the date of marriage</li>
                      <li>No application shall be entertained after the date of marriage</li>
                      <li>Trustees may condone delay at their discretion, provided the application is submitted before marriage with valid reasons</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">3.9 MODE OF DISBURSEMENT</h4>
                    <p className="mt-1">The assistance amount may be paid to: Member, or Daughter, or Nominee as decided by the Trustees.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">3.10 VERIFICATION AND APPROVAL</h4>
                    <p className="mt-1">The Trustees shall have full authority to: Verify documents, Conduct inquiry, Approve, reject, or defer applications.</p>
                    <p className="mt-1 text-red-600">If any information is found false: Application may be rejected, Amount may be recovered, Membership may be terminated.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">3.11 NON-TRANSFERABILITY</h4>
                    <p className="mt-1">The right to apply for marriage assistance is personal to the member and shall not be transferable.</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-base">4. EXCLUSIONS</h3>
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 pl-4">
                  <p className="text-red-800 font-medium mb-1">No assistance shall be provided in cases where:</p>
                  <ul className="space-y-1 list-none pl-4 text-red-700">
                    <li>(a) Death involves suicide;</li>
                    <li>(b) Homicide is alleged and the nominee is involved or under suspicion;</li>
                    <li>(c) Fraud, misrepresentation, or criminal proceedings are associated with the claim.</li>
                  </ul>
                  <p className="mt-2 text-red-800 text-xs font-semibold">The decision of the Trustees in such cases shall be final and binding.</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-base">5. NO ASSURED BENEFIT</h3>
                <ul className="pl-8 mt-1 space-y-1 list-decimal">
                  <li>The Trust does not assure or guarantee any amount.</li>
                  <li>Assistance depends on voluntary cooperation of members.</li>
                  <li>No claim is enforceable as a right or debt.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Chapter V */}
          <section>
            <h2 className="text-xl font-bold text-blue-700 uppercase border-b-2 border-blue-200 pb-2 mb-4">CHAPTER V — MUTUAL PROFESSIONAL SUPPORT</h2>
            <p className="text-sm text-gray-700 mb-4 bg-gray-100 p-3 rounded">
              The Trust functions strictly as a facilitator for coordination of voluntary assistance and shall not be treated as an insurer, financial intermediary, or guarantor of any benefit.
            </p>
            <div className="space-y-5 text-gray-700 text-sm">
              <div>
                <h3 className="font-semibold text-gray-900 text-base">PROFESSIONAL SUPPORT</h3>
                <ul className="pl-6 mt-1 space-y-1 list-disc">
                  <li>Professional assistance shall be provided only by members to members.</li>
                  <li>Trust acts only as facilitator, not service provider.</li>
                  <li>Support to families of Members / Deceased members shall be goodwill-based.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-base">1. Direct Contribution Clause</h3>
                <ul className="pl-4 mt-1 space-y-1 list-none">
                  <li><strong>1.1.</strong> All contributions are made directly from members to the nominees' bank accounts.</li>
                  <li><strong>1.2.</strong> PWT acts only as a coordinating and facilitating entity — not as a financial intermediary.</li>
                  <li><strong>1.3.</strong> Accordingly, members acknowledge that:
                    <ol className="pl-6 mt-1 list-decimal">
                      <li>They have no legal claim to receive any fixed or guaranteed benefit.</li>
                      <li>PWT bears no financial liability for contributions, delays, or non-receipt of support.</li>
                    </ol>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-base">2. Contribution Compliance</h3>
                <ul className="pl-4 mt-1 space-y-1 list-none">
                  <li><strong>2.1.</strong> All members are required to complete their contribution obligations fully to remain eligible for benefits.</li>
                  <li><strong>2.2.</strong> Members must upload valid payment receipts via the official website or designated Google Form after each contribution.</li>
                  <li><strong>2.3.</strong> Failure to make a contribution or failure to upload proof of contribution within the stipulated period will render the member ineligible for assistance.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-base">3. Sequence of Assistance</h3>
                <ul className="pl-4 mt-1 space-y-1 list-none">
                  <li><strong>3.1.</strong> In case of multiple deaths of members, support shall be extended in order of date of death.</li>
                  <li><strong>3.2.</strong> If multiple deaths occur on the same date, the member with the highest average contribution ratio shall receive priority.</li>
                  <li><strong>3.3.</strong> PWT reserves the right to determine the final order of assistance in exceptional cases.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-base">4. Erroneous Transfers</h3>
                <ul className="pl-4 mt-1 space-y-1 list-none">
                  <li><strong>4.1.</strong> In the event of an erroneous or excess transfer made by any Member to a nominee's account, the nominee shall be obligated to refund the excess amount upon verification.</li>
                  <li><strong>4.2.</strong> PWT shall facilitate communication and provide assistance in good faith, but shall not bear any legal responsibility for the return of such funds.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-base">5. NOMINEE CLAUSE</h3>
                <div className="pl-4 mt-1 space-y-3 bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <p>
                    While the Trust permits a member to nominate one or more nominees, in cases of 2 or more nominees, if any dispute, confusion, or disagreement concerning the nomination, legitimacy or entitlement of such nominees arises, the Trustees will be fully entitled to make their judgment regarding who should receive help or financial assistance based on the objectives of the Trust. The decision made by the Trustees shall be final and legally binding, and there can be no legal or judicial challenge to that decision.
                  </p>
                  <p>
                    In cases where the member appoints 2 or more nominees, the member may specify the percentage in which financial assistance is to be apportioned between such nominees, and the same shall be acted upon by the Trust. In the event of any dispute, inconsistency, or uncertainty concerning the nomination, specified proportions, or entitlement of the nominee(s), the matter shall be resolved at the sole discretion of the Trustees, having regard to the objectives and best interests of the Trust. The decision of the Trustees in such cases shall be final, conclusive, and binding on all concerned, and shall not be subject to any legal or judicial challenge.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Chapter VI */}
          <section>
            <h2 className="text-xl font-bold text-blue-700 uppercase border-b-2 border-blue-200 pb-2 mb-4">CHAPTER VI — DIGITAL PLATFORM &amp; APP</h2>
            <div className="text-sm text-gray-700 space-y-3">
              <p>The Trust may establish helplines or communication channels for coordination, support, and member assistance.<br/>Such systems shall function under the supervision and control of the Trustees.</p>
              <div>
                <h3 className="font-semibold text-gray-900">1. DIGITAL OPERATIONS</h3>
                <p className="mt-1 pl-4">Trust may operate:</p>
                <ul className="pl-8 mt-1 space-y-1 list-disc">
                  <li>Mobile App</li>
                  <li>Website</li>
                  <li>Helpline</li>
                  <li>Online communication systems</li>
                </ul>
                <p className="mt-2 pl-4">Platform use includes:</p>
                <ul className="pl-8 mt-1 space-y-1 list-disc">
                  <li>crisis alerts</li>
                  <li>information sharing</li>
                  <li>coordination of voluntary support</li>
                  <li>professional networking</li>
                </ul>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-gray-900">2. PLATFORM DISCIPLINE</h3>
                <p className="mt-1 pl-4">Members shall not misuse the Digital Platform.<br/>Prohibited acts include:</p>
                <ul className="pl-8 mt-1 space-y-1 list-disc">
                  <li>false information</li>
                  <li>commercial exploitation</li>
                  <li>abusive conduct</li>
                </ul>
                <p className="mt-2 pl-4 text-red-600">Violation may result in suspension or termination.</p>
              </div>
            </div>
          </section>

          {/* Chapter VII */}
          <section>
            <h2 className="text-xl font-bold text-blue-700 uppercase border-b-2 border-blue-200 pb-2 mb-4">CHAPTER VII — HELPLINE &amp; DISTRICT COORDINATORS</h2>
            <div className="text-sm text-gray-700">
              <h3 className="font-semibold text-gray-900">DISTRICT COORDINATORS</h3>
              <p className="pl-4 mt-1">Trustees may appoint District-level coordinators.</p>
              <p className="pl-4 mt-1">Coordinators:</p>
              <ul className="pl-8 mt-1 space-y-1 list-disc">
                <li>act only as facilitators</li>
                <li>have no financial authority unless authorized</li>
              </ul>
            </div>
          </section>

          {/* Chapter VIII */}
          <section>
            <h2 className="text-xl font-bold text-blue-700 uppercase border-b-2 border-blue-200 pb-2 mb-4">CHAPTER VIII — DISCIPLINE &amp; TERMINATION</h2>
            <div className="text-sm text-gray-700 space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900">1. DISCIPLINARY ACTION</h3>
                <p className="pl-4 mt-1">Membership may be suspended or terminated for:</p>
                <ul className="pl-8 mt-1 space-y-1 list-disc">
                  <li>violation of rules</li>
                  <li>unethical conduct</li>
                  <li>misuse of Trust name or platform.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">2. TERMINATION</h3>
                <ul className="pl-8 mt-1 space-y-1 list-disc">
                  <li>Trustees may terminate membership without assigning Reasons.</li>
                  <li>No refund or claim shall arise after termination.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Chapter IX */}
          <section>
            <h2 className="text-xl font-bold text-blue-700 uppercase border-b-2 border-blue-200 pb-2 mb-4">CHAPTER IX — TRUSTEE POWERS &amp; PROTECTION</h2>
            <div className="text-sm text-gray-700 space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900">1. TRUSTEE AUTHORITY</h3>
                <p className="pl-4 mt-1">Trustees shall have full power to:</p>
                <ul className="pl-8 mt-1 space-y-1 list-disc">
                  <li>frame procedures</li>
                  <li>create, modify or amend any welfare scheme</li>
                  <li>manage funds</li>
                  <li>appoint coordinators</li>
                  <li>interpret rules</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">2. TRUSTEE IMMUNITY</h3>
                <ul className="pl-8 mt-1 space-y-1 list-decimal">
                  <li>Trustees acting in good faith shall not be personally liable.</li>
                  <li>No civil or criminal liability shall arise for bona fide acts.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Chapter X */}
          <section>
            <h2 className="text-xl font-bold text-blue-700 uppercase border-b-2 border-blue-200 pb-2 mb-4">CHAPTER X — ACCOUNTS &amp; TRANSPARENCY</h2>
            <div className="text-sm text-gray-700 space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900">1. ACCOUNTS</h3>
                <ul className="pl-8 mt-1 space-y-1 list-decimal">
                  <li>Accounts shall be maintained properly.</li>
                  <li>Annual audit by Chartered Accountant.</li>
                  <li>Inspection allowed as per Trustee decision.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Chapter XI */}
          <section>
            <h2 className="text-xl font-bold text-blue-700 uppercase border-b-2 border-blue-200 pb-2 mb-4">CHAPTER XI — AMENDMENT</h2>
            <div className="text-sm text-gray-700 space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900">AMENDMENT OF RULES</h3>
                <p className="pl-4 mt-1 mb-2">These Rules may be amended by a Trustee Resolution, provided Trust nature is unchanged.</p>
                <h3 className="font-semibold text-gray-900">11. Amendments</h3>
                <div className="pl-4 mt-1 space-y-2">
                  <p><strong>11.1.</strong> PWT reserves the right to modify, amend, or replace any rules at any time to meet operational or legal requirements.</p>
                  <p><strong>11.2.</strong> The Trust reserves the right to create, modify, suspend or amend any welfare scheme or assistance program or other benefits for the registered members or designated classes of members.</p>
                  <p><strong>11.3.</strong> The Rules and Bye-laws can be revised, amended, altered, suspended and updated at any time by the Trustees of the trust according to the aims and needs of the organization.</p>
                  <p><strong>11.4.</strong> The version of the rules uploaded on the official website shall be deemed final and legally binding.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Chapter XII */}
          <section>
            <h2 className="text-xl font-bold text-blue-700 uppercase border-b-2 border-blue-200 pb-2 mb-4">CHAPTER XII — FINAL PROVISIONS</h2>
            <div className="text-sm text-gray-700 space-y-4">
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
