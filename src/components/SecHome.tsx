"use client";

import Link from "next/link";

import { CoverDemo } from "./ui/cover-demo";
import { BoxReveal } from "./ui/box-reveal";
import { PiCheckBold } from "react-icons/pi";
import NumberTicker from "./ui/number-ticker";
import GoogleFormLink from "./GoogleFormLink";
import Button from "./Button";
// import { InfiniteMovingLogos } from "./ui/infinite-moving-logos";

const SecHome = () => {
  return (
    <div>
      <main className="md:pb-10">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-14">
          <h1>
            <CoverDemo />
          </h1>
          <p className="md:text-center text-xl md:text-2xl my-6 md:my-10 md:w-4/5 mx-auto text-gray-500">
            ORIGIN Coffee is a UAE-based coffee trading and market access
            platform supporting Ethiopian coffee producers with branding, sales,
            and international distribution.
          </p>

          <div className="flex flex-col md:flex-row md:justify-center items-center gap-4 w-full max-w-md mx-auto">
            <GoogleFormLink />
            {/* <Link
              href="/book"
              className="py-3 px-10 md:px-16 md:text-xl hover:bg-[#abcbff] rounded-[6px] border-2 border-black dark:border-white bg-[#121212] text-white transition duration-200"
            >
              Join US
            </Link> */}
            <Link href="/">
              <Button
                type="button"
                title="learn More"
                //   icon="/android.svg"
                variant="border-gray-20 bg-green-90 px-8 py-3 bg-stone-800 text-white"
                full
              />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-left md:justify-items-center md:mx-auto mt-10 md:mt-16">
            <BoxReveal boxColor={"#6F4E37"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-stone-700" />
                quality Coffee
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#6F4E37"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-stone-700" />
                Fair Trade
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#6F4E37"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-stone-700" />
                Marketing
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#6F4E37"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-stone-700" />
                Delivery
              </p>
            </BoxReveal>
          </div>

          <div className="md:flex items-center justify-between gap-y-4 my-10 gap-x-28 mx-auto">
            <div className="md:w-2/5">
              <h1 className="text-2xl font-medium text-gray-600 w-4/5">
                Trusted by fast moving brands worldwide
              </h1>
              <div className="flex my-6 gap-x-5 w-full">
                <div>
                  <h1 className="text-stone-700 text-3xl md:text-5xl">
                    <NumberTicker value={100} /> +
                    <p className="text-gray-500 text-sm md:text-md">
                      Happy Clients
                    </p>
                  </h1>
                </div>
                <div className="w-px bg-gray-300 self-stretch"></div>
                <div className="flex-1 min-w-0">
                  <h1 className="text-stone-700 text-3xl md:text-5xl whitespace-nowrap overflow-hidden">
                    <NumberTicker value={100} /> +
                    <p className="text-gray-500 text-sm md:text-md">
                      Coffee Delivered
                    </p>
                  </h1>
                </div>
              </div>
            </div>

            {/* <section className="overflow-hidden mt-10 md:w-4/5">
              <InfiniteMovingLogos
                speed="slow"
                direction="left"
                items={[
                  { logo: "/logo/logo.png", name: "Logo" },
                  { logo: "/logo/logo.png", name: "Logo" },
                ]}
              />
            </section> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SecHome;
