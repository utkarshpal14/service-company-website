export default function Footer() {
  return (
    <footer className="bg-dark border-t border-darkCard px-8 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <h3 className="text-xl font-bold text-primary mb-4">
            Verdance Consultancy Services LLP
          </h3>
          <p className="text-lightText text-sm leading-relaxed">
            A professional consulting and IT services firm delivering
            strategic, compliant, and technology-driven solutions
            to support sustainable business growth.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-lightText">
            <li className="hover:text-primary cursor-pointer">Home</li>
            <li className="hover:text-primary cursor-pointer">About</li>
            <li className="hover:text-primary cursor-pointer">Services</li>
            <li className="hover:text-primary cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-lightText">
            <li>Business Consulting</li>
            <li>Legal & Compliance</li>
            <li>Tax & Accounting</li>
            <li>ERP & Digital Solutions</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-lightText">
            <li>
              <span className="text-primary font-medium">Contact Person:</span><br />
              Pushpendra Singh
            </li>
            <li>
              <span className="text-primary font-medium">Phone:</span><br />
              <a href="tel:+918130952910" className="hover:text-primary">
                +91-8130952910
              </a>
            </li>
            <li>
              <span className="text-primary font-medium">Email:</span><br />
              <a
                href="mailto:sales@thevcservice.com"
                className="hover:text-primary"
              >
                sales@thevcservice.com
              </a>
            </li>
            
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-6xl mx-auto border-t border-darkCard mt-12 pt-6 text-sm text-lightText flex flex-col md:flex-row justify-between gap-4">
        <p>
          © {new Date().getFullYear()} Verdance Consultancy Services LLP.
          All rights reserved.
        </p>
        <p>
          Designed & Developed with care.
        </p>
      </div>
    </footer>
  );
}
