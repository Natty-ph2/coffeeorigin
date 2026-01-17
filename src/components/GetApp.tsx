import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import CardDemo from "./CardDemo";
import GoogleFormLink from "./GoogleFormLink";
import GoogleFormPopup from "./GoogleFormLink";

const GetApp = () => {
  return (
    <section
      id="getApp"
      className="flex items-center justify-center w-full flex-col pt-[50px] pb-[100px]"
    >
      <div className="mx-auto max-w-[1440px] relative flex w-full  flex-col justify-between gap-32 overflow-hidden bg-pattern bg-cover bg-center bg-no-repeat px-6 py-12  sm:flex-row sm:gap-12 sm:py-24 lg:px-20 xl:max-h-[598px] 2xl:rounded-lg">
        <div className="z-20 flex w-full flex-1 flex-col gap-12 items-start justify-center">
          <h2 className="text-[40px] font-[700] lg:[text-64px] xl:max-w[320px]">
            Join our wait list now!
          </h2>
          <p className="text-[16px] font-[400] text-gray-400">
            Join the waitlist and become one of the first to experience our the
            coffee trending hub app. Stay updated on our launch and be ready to
            explore a world of coffee like never before.
          </p>
          <div className="flex flex-col gap-3 whitespace-nowrap xl:flex-row">
            <GoogleFormPopup />
            {/* <GoogleFormLink /> */}
            {/* <Button
              type="button"
              title="Join Waitlist"
              //   icon="/apple.svg"
              variant="border-gray-20  px-8 py-3 bg-stone-800 text-white"
              full
            /> */}

            <Button
              type="button"
              title="learn More"
              //   icon="/android.svg"
              variant="border-gray-20 bg-green-90 px-8 py-3 bg-stone-800 text-white"
              full
            />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <CardDemo />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
