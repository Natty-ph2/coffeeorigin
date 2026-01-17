// import Image from 'next/image';
// import React from 'react'

// type ButonProps = {
//     type: 'button' | 'submit';
//     title: string;
//     icon?: string;
//     variant: string;
//     full?: boolean;
// }
// const Button = ({type, title, icon, variant, full} :ButonProps) => {
//   return (
//    <button
//        className={`flex items-center justify-center gap-3 rounded-full border ${variant} ${full && 'w-full'}`}
//        type={type}>
//     {icon && <Image src={icon} alt={title} width={24} height={24} />}
//     <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
//    </button>
//   )
// }

// export default Button

import Image from "next/image";
import React from "react";

type ButtonProps = {
  type?: "button" | "submit"; // optional default
  title: string;
  icon?: string;
  variant?: string;
  full?: boolean;
  onClick?: () => void; // ✅ add onClick
  href?: string; // optional link support
};

const Button = ({
  type = "button",
  title,
  icon,
  variant = "",
  full,
  onClick,
  href,
}: ButtonProps) => {
  const className = `flex items-center justify-center gap-3 rounded-full border ${variant} ${
    full ? "w-full" : ""
  }`;

  // ✅ If href is provided, render as <a>
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {icon && <Image src={icon} alt={title} width={24} height={24} />}
        <span className="bold-16 whitespace-nowrap cursor-pointer">
          {title}
        </span>
      </a>
    );
  }

  // ✅ Otherwise render normal button
  return (
    <button type={type} onClick={onClick} className={className}>
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <span className="bold-16 whitespace-nowrap cursor-pointer">{title}</span>
    </button>
  );
};

export default Button;
