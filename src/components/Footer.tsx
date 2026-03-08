import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-secondary to-background pt-16">
      <div className="container">
        <div className="grid grid-cols-1 gap-10 border-b border-border pb-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-primary mb-4">AlphaFit</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Transform your body and mind with AlphaFit. We provide world-class training, personalized diet plans, and a motivating community to help you achieve your fitness goals.
            </p>
            <div className="mt-5 flex gap-3">
              {["facebook", "instagram", "twitter", "youtube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-foreground transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-primary-foreground"
                >
                  <span className="text-xs font-bold uppercase">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-heading text-lg font-semibold text-primary mb-5">Quick Links</h5>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Diet Plans", path: "/diet" },
                { name: "Shop", path: "/shop" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground transition-all duration-300 hover:pl-1 hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="font-heading text-lg font-semibold text-primary mb-5">Our Services</h5>
            <ul className="space-y-3">
              {["Personal Training", "Group Classes", "Nutrition Coaching", "Body Transformation", "Online Training"].map(
                (service) => (
                  <li key={service}>
                    <span className="text-sm text-muted-foreground transition-all duration-300 hover:pl-1 hover:text-primary cursor-default">
                      {service}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-heading text-lg font-semibold text-primary mb-5">Contact Us</h5>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                123 Fitness Street, Karachi
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                +92 300 1234567
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                info@alphafit.com
              </p>
              <p className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-primary" />
                Mon - Sat: 6AM - 10PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-primary font-semibold">AlphaFit Gym</span>. All Rights Reserved. | Designed with 💪 in Karachi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
