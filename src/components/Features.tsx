import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FEATURES } from "@/constants";
import { title } from "process";

const Features = () => {
  return (
    <section
      id="feature-sec"
      className="flex-col flex items-center justify-center overflow-hidden py-24"
    >
      <div className="flex w-full max-w-7xl flex-col items-center justify-center px-4 lg:px-0 lg:flex-row lg:gap-20">
        <div className="z-20 w-full flex-col lg:w-[70%]">
          <div className="relative">
            <h2 className="text-[40px] font-[700] leading-[120%] lg:text-[64px]">
              Our Values
            </h2>
            <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
              {FEATURES.map((feature) => (
                <FeatureItem
                  key={feature.title}
                  title={feature.title}
                  icon={feature.icon}
                  description={feature.description}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

type FeatureItem = {
  title: string;
  icon: string;
  description: string[] | string;
};

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:p-7 bg-stone-600">
        <Image src={icon} alt="map" width={28} height={28} />
      </div>
      <h2 className="text-[20px] font-[700] lg:text-[32px] mt-5 capitalize">
        {title}
      </h2>
      {/* PARAGRAPH */}
      {typeof description === "string" && (
        <p className="mt-4 text-gray-600">{description}</p>
      )}

      {/* LIST */}
      {Array.isArray(description) && (
        <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-600">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      {/* <p className="text-]16px] font-[400] mt-5 bg-white/80 text-gray-30 lg:mt-[30px]">
        {description}
      </p> */}
    </li>
  );
};

export default Features;

//  <div className="mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 relative w-full flex justify-end">
//         <div className="flex flex-1 lg:min-h-[900px]">
//           <Image
//             src="/farmerReg.png"
//             alt="loginimg"
//             width={320}
//             height={700}
//             className="absolute top-[13%] z-10 hidden max-w-[1500px] rotate-[15deg] md:-left-16 lg:flex  3xl:left-20"
//           />
//         </div>
