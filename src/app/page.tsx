import Contact from "@/components/Contact";
// import Projects from "@/components/Projects";

import Services from "@/components/Features";

import Image from "next/image";
import GetApp from "@/components/GetApp";
import SecHome from "@/components/SecHome";
import About from "@/components/about";

export default function Home() {
  return (
    <main className="">
      <SecHome />
      <Services />
      <About />

      <GetApp />
      {/* <Projects /> */}
      {/* <Contact /> */}
    </main>
  );
}
