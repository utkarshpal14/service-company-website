export default function AboutSection() {
  return (
    <section  id="about"   className="px-8 py-24 bg-darkCard">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT — TEXT CONTENT */}
        <div>
          <p className="text-sm uppercase tracking-widest text-primary mb-3">
            About Us
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Trusted Consulting Partner for Growing Businesses
          </h2>

         <p className="text-lightText mb-4">
            <strong className="text-white">
                Verdance Consultancy Services LLP
            </strong>{" "}
            is a professional consulting and IT services firm delivering
            practical solutions in business consulting, project management,
            custom ERP, and digital transformation.
        </p>

        <p className="text-lightText mb-6">
            The firm combines strategic insight with technology-driven
            execution to help organizations improve efficiency, ensure
            compliance, and achieve sustainable growth.
        </p>


          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-primary">✔</span>
              Business Consulting
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary">✔</span>
              Legal & Compliance
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary">✔</span>
              Tax & Accounting
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary">✔</span>
              Strategic Growth
            </div>
          </div>
        </div>

        {/* RIGHT — VISUAL / BRAND BLOCK */}
        <div className="relative hidden md:flex items-center justify-center">
          <div className="w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute text-center">
            <p className="text-primary text-2xl font-semibold">
              Professional.
            </p>
            <p className="text-primary text-2xl font-semibold">
              Reliable.
            </p>
            <p className="text-primary text-2xl font-semibold">
              Result-Driven.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
