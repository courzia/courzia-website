const terms = [
  {
    title: "No Guaranteed Results",
    content:
      "The content provided in our books, videos, and courses is purely educational. We do not guarantee any specific financial gain or outcome. Results may vary based on individual understanding, discipline, and risk-taking behavior.",
  },
  {
    title: "Not Gambling or Financial Advice",
    content:
      "Nothing in this material should be taken as professional gambling, trading, or financial advice. All content is shared for analysis, education, and research purposes only.",
  },
  {
    title: "Age Restriction (18+)",
    content:
      "This material is strictly intended for adults aged 18 years and above. If you are a minor or reside in a location where gambling is prohibited, you must not use or act upon this content.",
  },
  {
    title: "Use at Your Own Risk",
    content:
      "Users take full responsibility for how they use this information. Courzia, its creators, affiliates, or partners hold no liability for any financial loss, addiction, or damages resulting from the use of this content.",
  },
  {
    title: "Copyright Protection",
    content:
      "All content under Courzia, including books, videos, visuals, and text, is original and protected under copyright laws. Unauthorized use, copying, or distribution will lead to legal consequences.",
  },
  {
    title: "User Responsibility Clause",
    content:
      "We do not encourage or promote gambling. All actions taken by users based on our content are their personal choice and responsibility.",
  },
  {
    title: "Proven but Not Promised",
    content:
      "Strategies mentioned are based on research, observation, or public records, but no strategy is guaranteed. Past patterns do not ensure future outcomes.",
  },
  {
    title: "No Legal Claims Against Courzia",
    content:
      "By using our content, you agree to hold Courzia and its team harmless from any claims, liabilities, or disputes resulting from your actions.",
  },
  {
    title: "No Platform Association",
    content:
      "We may participate in affiliate programs with various platforms, but we are not officially partnered or endorsed by any gambling provider or platform. All brand names, if ever mentioned, are purely for educational context.",
  },
  {
    title: "Affiliate Promotion Clause",
    content:
      "We may promote or be affiliated with third-party platforms, including those related to gaming, finance, or entertainment. Any such promotion is purely for informational or affiliate marketing purposes. We do not own or operate these platforms and are not responsible for their services or user experiences. Users must conduct their own due diligence before interacting with any third-party site.",
  },
  {
    title: "Educational Use Only",
    content:
      "All material is provided solely for the purpose of education and awareness. It should not be used as a blueprint for action without personal discretion.",
  },
  {
    title: "Jurisdiction Clause",
    content:
      "Any disputes arising from this content shall be governed by the laws of the creator's jurisdiction unless explicitly agreed otherwise.",
  },
  {
    title: "No Endorsements",
    content:
      "Mention of any product, platform, or service in our content does not imply endorsement, recommendation, or partnership.",
  },
  {
    title: "Individual Risk Assessment Required",
    content:
      "Users are expected to evaluate their own risk tolerance and financial situation before acting on any strategy or idea shared.",
  },
  {
    title: "No Monitoring Responsibility",
    content:
      "Courzia does not monitor how individuals use its content. Responsibility lies solely with the user.",
  },
  {
    title: "No Refund Policy",
    content:
      "All sales of our content, whether books or digital products, are final and non-refundable unless clearly stated otherwise at the time of purchase.",
  },
  {
    title: "Content Subject to Change",
    content:
      "Courzia reserves the right to update, edit, or remove content at any time without prior notice. We are not responsible for any outdated or revised information.",
  },
  {
    title: "Platform Rules Still Apply",
    content:
      "If you are using third-party platforms while referring to our content, you must follow their individual terms of service.",
  },
  {
    title: "No Resale Rights",
    content:
      "You may not republish, resell, or sublicense our content in any format.",
  },
  {
    title: "Binding Agreement",
    content:
      "By accessing or using any part of our content, you agree to be legally bound by these terms in full.",
  },
];

// export default function TermsAndCondition() {
//   return (
//     <div className="p-8 px-20 ">
//       <h1 className="text-[40px] font-bold text-center mb-10 " >TERMS AND CONDITIONS</h1>
//       <div className="space-y-4 w-full">
//         {terms.map((term, index) => (
//           <div key={index} className="px-20">
//             <div className="max-w-[800px] mx-auto ">
//               <h2 className="text-lg w-full font-semibold">
//                 {index + 1}. {term.title}
//               </h2>
//               <div className="ml-10 text-gray-900">
//                 <p className="">
//                   {term.content}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

export default function TermsAndCondition() {
  return (
    <div className="p-6 sm:p-8 md:px-20">
      <h1 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-center mb-10">
        TERMS AND CONDITIONS
      </h1>

      <div className="max-w-4xl mx-auto space-y-6">
        {terms.map((term, index) => (
          <div key={index}>
            <h2 className="text-base sm:text-lg font-semibold">
              {index + 1}. {term.title}
            </h2>
            <p className="text-sm sm:text-base text-gray-800 mt-1 ml-4 sm:ml-6">
              {term.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
