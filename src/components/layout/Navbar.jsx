import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom"; 

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 border-b border-darkCard">
      
      {/* BRAND */}
      <Link to="/" className="flex items-center gap-2 cursor-pointer">
  <img
    src="/logo.png"
    alt="Verdance Consultancy Services LLP Logo"
    className="w-12 h-12 object-contain transition-transform duration-300 hover:scale-105"
  />

  <span className="text-xl font-bold text-primary">
    Verdance Consultancy
  </span>
    </Link>
      {/* NAV LINKS */}
      <ul className="hidden md:flex gap-8 text-sm">

        <NavLink
            to="/"
            end
            className={({ isActive }) =>
            `
            relative px-3 py-2 rounded-md cursor-pointer
            transition-all duration-200
            ${
                isActive
                ? "text-primary bg-primary/15"
                : "text-white hover:text-primary hover:bg-primary/10"
            }
            active:scale-95
            `
            }
        >
            Home
        </NavLink>

        <NavLink
            to="/about"
            className={({ isActive }) =>
            `
            relative px-3 py-2 rounded-md cursor-pointer
            transition-all duration-200
            ${
                isActive
                ? "text-primary bg-primary/15"
                : "text-white hover:text-primary hover:bg-primary/10"
            }
            active:scale-95
            `
            }
        >
            About
        </NavLink>

        <NavLink
            to="/services"
            className={({ isActive }) =>
            `
            relative px-3 py-2 rounded-md cursor-pointer
            transition-all duration-200
            ${
                isActive
                ? "text-primary bg-primary/15"
                : "text-white hover:text-primary hover:bg-primary/10"
            }
            active:scale-95
            `
            }
        >
            Services
        </NavLink>

        <NavLink
            to="/contact"
            className={({ isActive }) =>
            `
            relative px-3 py-2 rounded-md cursor-pointer
            transition-all duration-200
            ${
                isActive
                ? "text-primary bg-primary/15"
                : "text-white hover:text-primary hover:bg-primary/10"
            }
            active:scale-95
            `
            }
        >
            Contact
        </NavLink>

    </ul>


      {/* CTA BUTTON */}
      <Link
        to="/contact"
        className="
          bg-primary text-black
          px-6 py-2 rounded-lg cursor-pointer
          transition-all duration-300
          hover:scale-105
          hover:shadow-[0_0_25px_rgba(247,147,30,0.6)]
          active:scale-95
        "
      >
        Get Quote
      </Link>

    </nav>
  );
}
