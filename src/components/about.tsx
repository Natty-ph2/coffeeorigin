import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-stone-50 to-white py-20
    "
      id="about-sec"
    >
      {/* Section Title */}
      <div className="mb-16 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
          About Us
        </h1>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Connecting Ethiopian coffee producers with global markets through
          transparency, quality, and sustainability.
        </p>
      </div>

      {/* Content */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
        {/* Image */}
        <div className="relative flex justify-center">
          <div className="absolute -inset-4 rounded-3xl bg-stone-200 blur-2xl opacity-40" />
          <Image
            src="/origin.jpeg"
            alt="Origin Coffee"
            width={420}
            height={420}
            className="relative rounded-3xl object-cover shadow-2xl"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl">
            Origin Coffee
          </h2>

          <p className="text-gray-700 leading-relaxed">
            <span className="font-semibold text-gray-900">ORIGIN Coffee</span>{" "}
            is a Dubai-based coffee trading and marketing platform dedicated
            exclusively to Ethiopian coffee. We work directly with cooperatives,
            washing stations, and exporters to bring premium, traceable
            Ethiopian beans to global buyers.
          </p>

          <div className="space-y-2 text-gray-700">
            <p>
              <span className="font-semibold text-gray-900">Mission:</span>{" "}
              Create sustainable market access for Ethiopian producers while
              delivering consistent, high-quality coffee to buyers.
            </p>
            <p>
              <span className="font-semibold text-gray-900">Vision:</span>{" "}
              Become the leading Ethiopian coffee gateway in the Middle East.
            </p>
          </div>

          {/* CTA */}
          <div className="pt-4">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-xl bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-800"
            >
              Learn More
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
