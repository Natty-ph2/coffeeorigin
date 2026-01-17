"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Card } from "./ui/card";
import CardDemo from "./CardDemo";
import Chart from "./Chart";

const Slider = () => {
  return (
    <div className="flex flex-col h-[calc(100vh-7rem)] md:h-[calc(100vh-9rem)] md:flex-row">
      {/* textField */}

      {/* <div className="flex-1 flex items-center justify-center flex-col gap-2 pl-12 lg:h-full">
        
        <h1 className="text-4xl text-left px-4 font-bold  text-stone-700">
          ORIGIN
        </h1>
        <p className="px-4 text-stone-700 ">Coffee</p>

        <p className="px-4 text-left">
          {" "}
          Ethiopia's premier B2B coffee marketplace connecting producers with
          global buyers with access to broader markets, facilitate fair trade
          practices, and promote sustainability across the entire value chain.
        </p>

        


      </div> */}

      <div className="flex-1 flex items-center justify-center">
        <div className="flex flex-col gap-2 max-w-md text-left">
          <h1 className="text-4xl font-bold text-stone-700">
            ORIGIN:THE COFFEE TRENDING HUB
          </h1>

          <p className="text-stone-700">
            Ethiopia's premier B2B coffee marketplace connecting producers with
            global buyers with access to broader markets, facilitate fair trade
            practices, and promote sustainability across the entire value chain.
          </p>
        </div>
      </div>

      {/* image */}
      <div className="w-full flex-1 flex items-center justify-center p-4">
        <CardDemo />
        {/* <Image src={data[currentSlide].image} alt="" fill className="object-cover" /> */}
        {/* <Image
          src="/digz.jpg"
          alt=""
          fill
          className="object-contain rounded-md"
        /> */}
      </div>

      {/* <div className="w-full flex-1 relative">
                <Image src={data[currentSlide].image} alt="" fill className="object-cover" />
                <Image src="/farmerR.png" alt="" fill className="object-contain rounded-md rotate-12" />
            </div>
             */}
    </div>
  );
};

export default Slider;

{
  /* <p className="text-stone-700">Coffee</p> */
}
