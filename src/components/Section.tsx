import React from "react";
import Image from "next/image";


const Section = () => {
  return (
    <div className="flex flex-col gap-8 ">
      <div>
        <h1>Digitizing Your Business, Satisfies Your Need</h1>
        <p>
          Revolutionizing businesses through digital transformation, Thrive
          Technologies specializes in crafting dynamic web-based systems, mobile
          applications, and enterprise solutions. Our expertise lies in
          developing tailored digital solutions that enhance operational
          efficiency and connectivity. With a commitment to innovation, we
          propel businesses forward in the ever-evolving digital landscape.
          Thrive Technologies stands at the forefront, empowering companies to
          thrive in the digital era with cutting-edge technology
        </p>
        <button>See Our Services</button>
      </div>
      <div>
       
        <Image src="/finallogo.jpg" alt="" width={150} height={150} />
      </div>
    </div>
  );
};

export default Section;
