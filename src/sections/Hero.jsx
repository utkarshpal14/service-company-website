import {Link} from "react-router-dom";

export default function Hero() {
  return (
    

    // <section className="min-h-[90vh] grid md:grid-cols-2 items-center px-8 relative">
    <section   id="home"    className="min-h-screen grid md:grid-cols-2 items-center px-8 relative" >

      {/* LEFT SIDE — TEXT */}
      <div className="max-w-xl">
        <p className="text-sm uppercase tracking-widest text-primary mb-3">
          Verdance Consultancy Services LLP
        </p>

        <h1 className="text-5xl font-bold leading-tight">
          Smart Solutions for
          <span className="text-primary"> Modern Businesses</span>
        </h1>

        <p className="text-lightText mt-5">
          We provide consulting, compliance, and professional services
          to help businesses grow confidently.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">

          <Link
            to="/contact"
            className="
                w-full sm:w-auto
                bg-primary text-black
                px-6 py-3
                rounded-lg
                text-base font-medium
                cursor-pointer
                transition-all duration-300

                hover:scale-105
                hover:shadow-[0_0_25px_rgba(247,147,30,0.6)]

                active:scale-95
                text-center
            "
            >
            Get Started
        </Link>


          <Link
            to="/services"
            className="
                w-full sm:w-auto
                border border-primary
                text-primary
                px-6 py-3
                rounded-lg
                text-base font-medium
                cursor-pointer
                transition-all duration-300

                hover:bg-primary hover:text-black
                hover:scale-105

                active:scale-95
                text-center
            ">
            Our Services
        </Link>

        </div>

        <p className="text-xs text-gray-400 mt-6">
          Trusted consulting partner for startups & growing businesses
        </p>
      </div>

      {/* RIGHT SIDE — VISUAL */}
      <div className="hidden md:flex items-center justify-center relative">
        <div className="w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <p className="absolute text-primary text-lg font-medium opacity-70">
             Consulting · Compliance · Growth
        </p>

      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-6 left-8 text-gray-500 text-sm">
        ↓ Scroll to explore
      </div>

    </section>
  );
}
