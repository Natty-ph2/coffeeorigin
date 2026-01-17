"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Menu from "./Menu";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 20) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        isSticky
          ? "h-32 fixed w-full z-50 bg-gray-50 border-stone-600"
          : "bg-transparent"
      }`}
    >
      <div className="  p-4 flex items-center justify-between  md:h-36 lg:px-20 xl:px-40">
        {/* logo */}
        <div className="flex-auto">
          {/* <p className="text-4xl font-bold">Origin</p>
          <p className="px-2">Coffee</p> */}
          <Image src="/origin.jpeg" alt="" width={100} height={80} />
          {/* <Link href="/home">Thrive</Link> */}
        </div>

        <div className="hidden md:flex gap-12 flex-auto">
          <Link href="/">Home</Link>
          <Link href="/#feature-sec">Values</Link>
          <Link href="/#about-sec">About</Link>
          {/* <Link href="/"></Link>
          <Link href="/">Term and Conditions</Link> */}
          <Link href="/#getApp">Join us</Link>
        </div>

        {/* mobile Menu */}
        <div className="md:hidden">
          <Menu />
        </div>

        {/* contact */}
        <div className="hidden md:flex items-center justify-end px-1 border-2 border-gray-400 rounded-md cursor-pointer flex-none ">
          <Link href="/#footer-sec">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
