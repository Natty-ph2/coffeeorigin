import Link from "next/link";
import Button from "./Button";

const GoogleFormLink = () => {
  return (
    <div className="flex  flex-col gap-3 whitespace-nowrap xl:flex-row">
      <Link
        href="https://docs.google.com/forms/d/e/1FAIpQLSdhn4jABC8bF18H-zji7dGjbVRnhCy7jzrtZ73W_-sry8qjtg/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full"
      >
        <Button
          type="button"
          title="Join Waitlist"
          //   icon="/apple.svg"
          variant="border-gray-20  px-8 py-3 bg-stone-800 text-white"
          full
        />
      </Link>
    </div>
  );
};

export default GoogleFormLink;

// "use client";
// import { useState } from "react";
// import Button from "./Button"; // your corrected Button component

// const GoogleFormCardPopup = () => {
//   const [open, setOpen] = useState(false);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = () => {
//     if (!name || !email) return; // optional simple validation

//     const formUrl =
//       "https://docs.google.com/forms/d/e/1FAIpQLSe1SJWDf3xTosgWZ5rnQCKitxA0bBdIkmSsaX81Vhqyf4THsQ/viewform?usp=header";

//     const formData = new FormData();
//     formData.append("entry.111111111", name); // replace with your Google Form IDs
//     formData.append("entry.222222222", email);

//     try {
//       fetch(formUrl, {
//         method: "POST",
//         mode: "no-cors", // must use no-cors
//         body: formData,
//       });

//       setSubmitted(true);
//     } catch (err) {
//       console.error("Error submitting form:", err);
//     }
//   };

//   // const handleSubmit = () => {
//   //   const formUrl =
//   //     "https://docs.google.com/forms/d/e/1FAIpQLSe1SJWDf3xTosgWZ5rnQCKitxA0bBdIkmSsaX81Vhqyf4THsQ/viewform?usp=header";

//   //   const formData = new FormData();
//   //   formData.append(
//   //     "1FAIpQLSe1SJWDf3xTosgWZ5rnQCKitxA0bBdIkmSsaX81Vhqyf4THsQ",
//   //     name,
//   //   ); // replace with your field IDs
//   //   formData.append(
//   //     "1FAIpQLSe1SJWDf3xTosgWZ5rnQCKitxA0bBdIkmSsaX81Vhqyf4THsQ",
//   //     email,
//   //   );

//   //   fetch(formUrl, {
//   //     method: "POST",
//   //     mode: "no-cors",
//   //     body: formData,
//   //   });

//   //   setSubmitted(true);
//   // };

//   const handleClose = () => {
//     setOpen(false);
//     setName(""); // ✅ reset name
//     setEmail(""); // ✅ reset email
//     setSubmitted(false); // ✅ reset submitted state
//   };

//   return (
//     <>
//       {/* TRIGGER BUTTON */}
//       <Button
//         onClick={() => setOpen(true)}
//         title="Get in Touch"
//         variant="bg-[#6F4E37] text-white px-6 py-3"
//         full
//       />

//       {/* MODAL */}
//       {open && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
//           <div className="relative w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl overflow-visible">
//             {/* CLOSE BUTTON */}
//             <button
//               onClick={handleClose} // ✅ reset form on close
//               className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
//             >
//               ✕
//             </button>

//             {/* HEADER */}
//             <div className="mb-6 text-center">
//               <h2 className="text-2xl font-bold text-gray-900">
//                 Let’s Connect ☕
//               </h2>
//               <p className="mt-2 text-sm text-gray-600">
//                 Leave your details and we’ll reach out shortly.
//               </p>
//             </div>

//             {/* FORM / SUCCESS */}
//             {submitted ? (
//               <div className="flex flex-col items-center gap-4 text-center">
//                 <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
//                   ✓
//                 </div>
//                 <p className="font-semibold text-green-700">
//                   Your response was saved successfully!
//                 </p>
//                 <Button
//                   onClick={handleClose} // ✅ close & reset
//                   title="Close"
//                   variant="bg-[#6F4E37] text-white px-6 py-2"
//                   full
//                 />
//               </div>
//             ) : (
//               <div className="flex flex-col gap-4">
//                 {/* NAME */}
//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:border-[#6F4E37] focus:outline-none focus:ring-2 focus:ring-[#6F4E37]/30"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                 />

//                 {/* EMAIL */}
//                 <input
//                   type="email"
//                   placeholder="Your Email"
//                   className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:border-[#6F4E37] focus:outline-none focus:ring-2 focus:ring-[#6F4E37]/30"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />

//                 {/* SUBMIT */}
//                 <Button
//                   onClick={handleSubmit}
//                   title="Submit"
//                   variant="bg-[#6F4E37] text-white px-6 py-3"
//                   full
//                 />
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default GoogleFormCardPopup;

// // import { useState } from "react";
// // import Button from "./Button";

// // const GoogleFormCardPopup = () => {
// //   const [open, setOpen] = useState(false);
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [submitted, setSubmitted] = useState(false);

// //   const handleSubmit = () => {
// //     const formUrl =
// //       "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse";

// //     const formData = new FormData();
// //     formData.append("entry.111111111", name);
// //     formData.append("entry.222222222", email);

// //     fetch(formUrl, {
// //       method: "POST",
// //       mode: "no-cors",
// //       body: formData,
// //     });

// //     setSubmitted(true);
// //   };

// //   return (
// //     <>
// //       {/* OPEN BUTTON */}
// //       <Button
// //         onClick={() => setOpen(true)}
// //         type="button"
// //         title="Join Waitlist"
// //         //   icon="/apple.svg"
// //         variant="border-gray-20  px-8 py-3 bg-stone-800 text-white"
// //         full
// //       />
// //       {/* <button
// //         onClick={() => setOpen(true)}
// //         className="rounded-xl bg-[#6F4E37] px-8 py-3 font-semibold text-white shadow-lg hover:bg-[#5c3f2d]"
// //       >
// //         Get in Touch
// //       </button> */}

// //       {/* MODAL */}
// //       {open && (
// //         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
// //           {/* CARD */}
// //           <div className="relative w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl overflow-visible">
// //             {/* CLOSE */}
// //             <button
// //               onClick={() => setOpen(false)}
// //               className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
// //             >
// //               ✕
// //             </button>

// //             {/* HEADER */}
// //             <div className="mb-6 text-center">
// //               <h2 className="text-2xl font-bold text-gray-900">
// //                 Let’s Connect ☕
// //               </h2>
// //               <p className="mt-2 text-sm text-gray-600">
// //                 Leave your details and we’ll reach out shortly.
// //               </p>
// //             </div>

// //             {/* FORM / SUCCESS */}
// //             {submitted ? (
// //               <div className="flex flex-col items-center gap-4 text-center">
// //                 <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
// //                   ✓
// //                 </div>
// //                 <p className="font-semibold text-green-700">
// //                   Your response was saved successfully!
// //                 </p>
// //                 <button
// //                   onClick={() => setOpen(false)}
// //                   className="rounded-xl bg-[#6F4E37] px-6 py-2 text-white"
// //                 >
// //                   Close
// //                 </button>
// //               </div>
// //             ) : (
// //               <div className="flex flex-col gap-4">
// //                 {/* NAME */}
// //                 <input
// //                   type="text"
// //                   placeholder="Your Name"
// //                   className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:border-[#6F4E37] focus:outline-none focus:ring-2 focus:ring-[#6F4E37]/30"
// //                   value={name}
// //                   onChange={(e) => setName(e.target.value)}
// //                 />

// //                 {/* EMAIL */}
// //                 <input
// //                   type="email"
// //                   placeholder="Your Email"
// //                   className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:border-[#6F4E37] focus:outline-none focus:ring-2 focus:ring-[#6F4E37]/30"
// //                   value={email}
// //                   onChange={(e) => setEmail(e.target.value)}
// //                 />

// //                 {/* SUBMIT */}

// //                 <button
// //                   onClick={handleSubmit}
// //                   className="mt-2 w-full rounded-xl bg-[#6F4E37] py-3 font-semibold text-white hover:bg-[#5c3f2d]"
// //                 >
// //                   Submit
// //                 </button>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       )}
// //     </>
// //   );
// // };

// // export default GoogleFormCardPopup;
