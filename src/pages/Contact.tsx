import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Phone, Mail, MapPin, Clock, CalendarDays, CalendarRange,
  CalendarX, Dumbbell, Building, ParkingCircle, Bus, Navigation, Send, User, MessageSquare
} from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

/* ───────── Contact Info ───────── */
const contactBoxes = [
  { icon: Phone, title: "Call Us", lines: ["+92 300 1234567", "+92 321 9876543"] },
  { icon: Mail, title: "Email Us", lines: ["info@alphafit.com", "support@alphafit.com"] },
  { icon: MapPin, title: "Visit Us", lines: ["123 Fitness Street", "Karachi, Pakistan"] },
];

/* ───────── Opening Hours ───────── */
const hours = [
  { icon: CalendarDays, day: "Monday - Friday", time: "6:00 AM - 10:00 PM" },
  { icon: CalendarRange, day: "Saturday", time: "7:00 AM - 9:00 PM" },
  { icon: CalendarX, day: "Sunday", time: "8:00 AM - 6:00 PM" },
  { icon: Dumbbell, day: "24/7 Access", time: "Premium members get round-the-clock access" },
];

/* ───────── Location Details ───────── */
const locationDetails = [
  { icon: Building, title: "Full Address", desc: "AlphaFit Gym, 123 Fitness Street, Block 5, Clifton, Karachi" },
  { icon: ParkingCircle, title: "Parking Available", desc: "Free parking for all members with dedicated spots" },
  { icon: Bus, title: "Public Transport", desc: "Bus routes 12, 24 and metro station nearby" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      {/* Hero */}
      <section
        className="relative flex h-[50vh] items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(220,53,69,0.9), rgba(167,29,42,0.9)), url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80')`,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="font-heading text-4xl font-extrabold text-primary-foreground md:text-6xl">
            <MapPin className="mr-3 inline h-10 w-10" />
            Get In Touch
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Visit us, call us, or drop by anytime. We're here to help!
          </p>
        </motion.div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="container">
          <SectionTitle title="Contact Information" />
          <div className="grid gap-6 md:grid-cols-3">
            {contactBoxes.map((box, i) => (
              <motion.div
                key={box.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group rounded-2xl border border-border bg-card p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-xl hover:shadow-primary/20"
              >
                <box.icon className="mx-auto mb-4 h-12 w-12 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />
                <h4 className="font-heading text-xl font-bold text-primary mb-3">{box.title}</h4>
                {box.lines.map((line) => (
                  <p key={line} className="text-muted-foreground">{line}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Hours */}
      <section className="bg-secondary py-20">
        <div className="container grid gap-8 lg:grid-cols-5">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 rounded-2xl border border-border bg-card p-8 transition hover:border-primary"
          >
            <h3 className="font-heading text-2xl font-bold text-primary mb-6">
              <MessageSquare className="mr-2 inline h-6 w-6" />
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1 flex items-center gap-2 text-sm font-medium text-foreground">
                  <User className="h-4 w-4 text-primary" /> Your Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-foreground outline-none transition focus:border-primary focus:shadow-[0_0_10px_hsl(var(--primary)/0.2)]"
                />
              </div>
              <div>
                <label className="mb-1 flex items-center gap-2 text-sm font-medium text-foreground">
                  <Mail className="h-4 w-4 text-primary" /> Your Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-foreground outline-none transition focus:border-primary focus:shadow-[0_0_10px_hsl(var(--primary)/0.2)]"
                />
              </div>
              <div>
                <label className="mb-1 flex items-center gap-2 text-sm font-medium text-foreground">
                  <Phone className="h-4 w-4 text-primary" /> Phone Number
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="Enter your phone number"
                  className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-foreground outline-none transition focus:border-primary focus:shadow-[0_0_10px_hsl(var(--primary)/0.2)]"
                />
              </div>
              <div>
                <label className="mb-1 flex items-center gap-2 text-sm font-medium text-foreground">
                  <MessageSquare className="h-4 w-4 text-primary" /> Your Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Write your message..."
                  className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-foreground outline-none transition focus:border-primary focus:shadow-[0_0_10px_hsl(var(--primary)/0.2)] resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-primary to-primary/80 py-3 font-semibold text-primary-foreground transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/30"
              >
                <Send className="mr-2 inline h-4 w-4" /> Send Message
              </button>
              {submitted && (
                <p className="mt-3 text-center font-semibold text-green-400">
                  ✅ Message sent successfully! We'll get back to you soon.
                </p>
              )}
            </form>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 rounded-2xl border border-border bg-card p-8"
          >
            <h3 className="font-heading text-2xl font-bold text-primary mb-6">
              <Clock className="mr-2 inline h-6 w-6" /> Opening Hours
            </h3>
            <div className="space-y-4">
              {hours.map((item) => (
                <div
                  key={item.day}
                  className="flex items-start gap-4 rounded-xl bg-muted p-4 transition-all duration-300 hover:translate-x-2 hover:bg-secondary"
                >
                  <item.icon className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                  <div>
                    <h5 className="font-heading font-bold text-primary">{item.day}</h5>
                    <p className="text-sm text-muted-foreground">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="container">
          <SectionTitle title="Find Us on Map" />
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 overflow-hidden rounded-2xl border-2 border-primary shadow-xl shadow-primary/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.2907684456196!2d67.02729731500256!3d24.88796798404095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e9c11b00001%3A0x2b0c55f2e3e6e3e3!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                className="h-[400px] w-full grayscale-[20%] contrast-110"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AlphaFit Gym Location"
              />
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="font-heading text-2xl font-bold text-primary mb-6">
                <Navigation className="mr-2 inline h-6 w-6" /> Location Details
              </h3>
              <div className="space-y-4">
                {locationDetails.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 rounded-xl bg-muted p-4 transition-all duration-300 hover:translate-x-2 hover:bg-secondary"
                  >
                    <item.icon className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <h5 className="font-heading font-bold text-primary">{item.title}</h5>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="https://www.google.com/maps/dir//Karachi,+Pakistan"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block w-full rounded-full bg-gradient-to-r from-primary to-primary/80 py-3 text-center font-semibold text-primary-foreground transition hover:scale-[1.02] hover:shadow-lg"
              >
                <Navigation className="mr-2 inline h-4 w-4" /> Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
