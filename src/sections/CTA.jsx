export default function CTA() {
  return (
    <section className="px-8 py-24">
      <div className="max-w-6xl mx-auto">

        <div className="
          bg-primary
          rounded-2xl
          p-12
          md:p-16
          flex flex-col md:flex-row
          items-center
          justify-between
          gap-8
          text-black
        ">

          {/* LEFT — TEXT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Ready to Move Your Business Forward?
            </h2>
            <p className="text-black/80 max-w-xl">
              Connect with our team to discuss how our consulting and
              professional services can support your business goals.
            </p>
          </div>

          {/* RIGHT — ACTION */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
                href="mailto:sales@thevcservice.com"
                className="
                    bg-black text-white
                    px-8 py-3 rounded-lg
                    cursor-pointer
                    transition-all duration-300
                    hover:scale-105
                    hover:shadow-[0_0_25px_rgba(0,0,0,0.6)]
                    active:scale-95
                "
            >
            Email Us
            </a>

            <a
                href="tel:+918130952910"
                className="
                    border border-black
                    px-8 py-3 rounded-lg
                    cursor-pointer
                    transition-all duration-300
                    hover:bg-black hover:text-white
                    hover:scale-105
                    hover:shadow-[0_0_25px_rgba(0,0,0,0.6)]
                    active:scale-95
                "
            >
            Call Now
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
