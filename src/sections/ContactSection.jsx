export default function ContactSection() {
  return (
    <section  id="contact"  className="px-8 py-24 bg-darkCard">

      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <div className="mb-12">
          <p className="text-sm uppercase tracking-widest text-primary mb-3">
            Contact Us
          </p>
          <h2 className="text-4xl font-bold mb-4">
            Let’s Start a Conversation
          </h2>
          <p className="text-lightText max-w-2xl">
            Reach out to discuss your requirements, ask questions, or explore
            how Verdance Consultancy Services LLP can support your business.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT — CONTACT DETAILS */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2 text-primary">
                Contact Person
              </h3>
              <p className="text-lightText">
                Pushpendra Singh
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2 text-primary">
                Phone
              </h3>
              <a
                href="tel:+918130952910"
                className="text-lightText hover:text-primary"
              >
                +91-8130952910
              </a>
            </div>

            <div>
              <h3 className="font-semibold mb-2 text-primary">
                Email
              </h3>
              <a
                href="mailto:sales@thevcservice.com"
                className="text-lightText hover:text-primary"
              >
                sales@thevcservice.com
              </a>
            </div>

            <div>
              <h3 className="font-semibold mb-2 text-primary">
                Office Address
              </h3>
              <p className="text-lightText leading-relaxed">
                Master Space, 27, Gali No. 2,<br />
                Dichaon Rd, Ugrsain Park,<br />
                Niranjan Park, Najafgarh,<br />
                New Delhi – 110043
              </p>
            </div>
          </div>

          {/* RIGHT — CONTACT FORM */}
          <div className="bg-dark p-8 rounded-xl border border-darkCard">
            <form className="space-y-6">

              <div>
                <label className="block text-sm mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-darkCard border border-darkCard rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-darkCard border border-darkCard rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your requirements"
                  className="w-full bg-darkCard border border-darkCard rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
                ></textarea>
              </div>

                <button
                    type="submit"
                    className="
                        bg-primary text-black
                        px-8 py-3 rounded-lg
                        cursor-pointer
                        transition-all duration-300
                        hover:scale-105
                        hover:shadow-[0_0_30px_rgba(247,147,30,0.6)]
                        active:scale-95
                    "
                    >
                    Send Message
                </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
