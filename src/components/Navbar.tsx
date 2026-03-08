import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import gymLogo from "@/assets/gymlogo1.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Diet", path: "/diet" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg shadow-primary/10 py-2"
          : "bg-background/80 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={gymLogo}
            alt="AlphaFit Logo"
            className="h-10 w-10 rounded-full border-2 border-primary object-cover transition-transform duration-500 group-hover:rotate-[360deg]"
          />
          <span className="font-heading text-xl font-bold tracking-wider text-foreground">
            Alpha<span className="text-primary">Fit</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`relative font-medium text-sm tracking-wide transition-colors duration-300 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:text-primary ${
                    location.pathname === link.path
                      ? "text-primary after:w-full"
                      : "text-foreground after:w-0 hover:after:w-full"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-36 rounded-full border border-primary/50 bg-transparent px-4 py-1.5 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all duration-300 focus:w-48 focus:border-primary focus:shadow-[0_0_12px_hsl(var(--primary)/0.3)]"
              />
              <Search className="absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
            </div>
            <Link
              to="/contact"
              className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:bg-primary/80 hover:shadow-lg hover:shadow-primary/30"
            >
              Join Now
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-foreground lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md lg:hidden">
          <div className="container py-4">
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`block rounded-lg px-4 py-2 font-medium transition-colors ${
                      location.pathname === link.path
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:bg-muted hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex gap-3">
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 rounded-full border border-primary/50 bg-transparent px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none"
              />
              <Link
                to="/contact"
                className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground"
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
