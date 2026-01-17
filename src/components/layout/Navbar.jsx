export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 border-b border-darkCard">
        <div className="flex items-center gap-2">
            {/* Logo will be added later */}
            <span className="text-xl font-bold text-primary">
                Verdance Consultancy
            </span>
        </div>



      <ul className="hidden md:flex gap-8 text-sm">
        <a href="#home" className="
            relative
            px-3 py-2
            rounded-md
            cursor-pointer
            transition-all duration-200
            text-white

            /* desktop hover */
            hover:text-primary
            hover:bg-primary/10

            /* mobile tap feedback */
            active:scale-95
            active:bg-primary/20

        ">Home</a>

        <a href="#about" className="
        relative
        px-3 py-2
        rounded-md
        cursor-pointer
        transition-all duration-200
        text-white

        /* desktop hover */
        hover:text-primary
        hover:bg-primary/10

        /* mobile tap feedback */
        active:scale-95
        active:bg-primary/20

        ">About</a>
        <a href="#services" className="
            relative
            px-3 py-2
            rounded-md
            cursor-pointer
            transition-all duration-200
            text-white

            /* desktop hover */
            hover:text-primary
            hover:bg-primary/10

            /* mobile tap feedback */
            active:scale-95
            active:bg-primary/20

        ">Services</a>
        <a href="#contact" className="
                relative
                px-3 py-2
                rounded-md
                cursor-pointer
                transition-all duration-200
                text-white

                /* desktop hover */
                hover:text-primary
                hover:bg-primary/10

                /* mobile tap feedback */
                active:scale-95
                active:bg-primary/20

        " 
        >Contact</a>

      </ul>

      <button className="
        bg-primary text-black
        px-6 py-2 rounded-lg
        cursor-pointer
        transition-all duration-300
        hover:scale-105
        hover:shadow-[0_0_25px_rgba(247,147,30,0.6)]
        active:scale-95
    ">
        Get Quote
      </button>
    </nav>
  );
}
