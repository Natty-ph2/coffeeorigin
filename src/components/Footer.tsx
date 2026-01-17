import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";

const Footer = () => {
  return (
    <footer id="footer-sec" className="flex items-center justify-center mb-24">
      <div className="px-6 lg:px-20 3xl:px-0 mx-auto flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image src="/origin.jpeg" alt="logo" width={74} height={29} />
          </Link>

          <div className="text-black flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns, idx) => (
              <FooterColumn title={columns.title} key={idx}>
                <ul className="text-[14px] font-[400] flex flex-col gap-4 text-grey-30">
                  {columns.links.map((link, index) => (
                    <Link href="/" key={index} className="">
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link, index) => (
                  <Link
                    href="/"
                    key={index}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p className="whitespace-nowrap">{link.label}:</p>
                    <p className="text-[14px] font-[600] whitespace-nowrap text-blue-950">
                      {link.value}:
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="text-[14px] font-[400] flex gap-4 text-gray-500">
                  {SOCIALS.links.map((link, index) => (
                    <Link href="/" key={index}>
                      <Image src={link} alt="logo" width={24} height={24} />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>
        <div className="border bg-gray-500" />
        <p className="text-[14px] font-[400] w-full text-center text-gray-500">
          2026 OriginCoffee | All rights reserved
        </p>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="text-[18px] font-[700] whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;

// import Image from "next/image";
// import React from "react";
// import Link from "next/link";
// import { FaLinkedin } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";

// const Footer = () => {

//     return(
//      <footer className="flex items-center justify-center mb-24">
//         <div className="px-6 lg:px-20 3xl:px-0 mx-auto flex w-full flex-col gap-14">
//               <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
//                 <Link href="/" className="mb-10" >
//                     <Image src="/finallogo.png" alt="logo" width={74} height={29} />
//                 </Link>

//                 <div className="text-black flex flex-wrap gap-10 sm:justify-between md:flex-1">
//                     {
//                         FOOTER_LINKS.map((columns) => (
//                             <FooterColumn title={columns.title}>
//                                 <ul className="text-[14px] font-[400] flex flex-col gap-4 text-grey-30">
//                                     {columns.links.map((link, index) => (
//                                         <Link href="/" key={index} className="">
//                                             {link}
//                                         </Link>
//                                     ))}
//                                 </ul>
//                             </FooterColumn>
//                         ))}
//                         <div className="flex flex-col gap-5">
//                             <FooterColumn title={FOOTER_CONTACT_INFO.title}>
//                                 {FOOTER_CONTACT_INFO.links.map((link, index) => (
//                                     <Link
//                                     href="/"
//                                     key={index}
//                                     className="flex gap-4 md:flex-col lg:flex-row"
//                                     >

//                                     <p className="whitespace-nowrap">
//                                         {link.label}:
//                                     </p>

//                                     <p className="text-[14px] font-[600] whitespace-nowrap text-blue-950">
//                                         {link.value}:
//                                     </p>
//                                     </Link>
//                                 ))}
//                             </FooterColumn>
//                         </div>

//                        <div className="flex flex-col gap-5">
//                            <FooterColumn title={SOCIALS.title}>
//                               <ul className="text-[14px] font-[400] flex gap-4 text-gray-500 ">
//                               {SOCIALS.links.map((link, index) => (
//                                 <Link href="/" key={index}>
//                                     <Image src={link} alt="logo" width={24} height={24} />
//                                 </Link>
//                             ))}
//                               </ul>
//                            </FooterColumn>
//                        </div>
//                 </div>
//               </div>
//               <div className="border bg-gray-500" />
//               <p className="text-[14px] font-[400] w-full text-center text-gray-500">2024 Thrive | All rights reserved</p>
//         </div>
//      </footer>
//     )
// }

// type FooterColumnProps = {
//     title: string;
//     children: React.ReactNode;
// }

// const FooterColumn = ({ title, children}: FooterColumnProps) => {
//     return(
//         <div className="flex flex-col gap-5">
//             <h4 className="text-[18px] font-[700] whitespace-nowrap">{title}</h4>
//             {children}
//         </div>
//     )
// }

// export default Footer

// <>
// <div className="h-32 p-4 flex gap-6 items-center justify-between lg:p-20 xl:p-40">
//     {/* logoImage */}
//     <div>
//         <Image src="/finallogo.jpg" alt="" width={120} height={60} />
//     </div>

//     {/* Company */}
//     <div className="hidden md:flex flex-col gap-4">
//        <h2 className="text-2xl font-bold text-gray-700">Company</h2>
//        <Link href="/services">Services</Link>
//        <Link href="/projects">Projects</Link>
//        <Link href="/about">About Us</Link>
//     </div>

//     <div className="hidden md:flex flex-col gap-4">
//         <h2 className="text-2xl font-bold text-gray-700">Services</h2>
//         <Link href="/services">ERP Developmet</Link>
//         <Link href="/services">Web App Development</Link>
//        <Link href="/services">Mobile App Development</Link>
//     </div>

//     <div className="flex flex-col gap-4">
//         <h3 className="text-2xl font-bold text-gray-700">Contact Info</h3>
//         <p>Tel: 0928747043</p>
//         <p>Email: natnaeldestaer2@gmail.com</p>
//    </div>

//    <div className="flex gap-4">
//       <FaLinkedin />
//       <FaGithub />
//    </div>

// </div>
// <p className="text-center pt-6">@Thrive Software Technologies </p>
// </>
