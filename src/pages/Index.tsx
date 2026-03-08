import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, Dumbbell, Trophy, CalendarCheck, Clock, Wifi, ShowerHead, ParkingCircle, Star, ChevronLeft, ChevronRight } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

/* ───────── Hero Carousel ───────── */
const slides = [
  {
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80",
    title: "Welcome to AlphaFit",
    subtitle: "Transform your body and mind with us",
    cta: "Start Your Journey",
  },
  {
    img: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=1600&q=80",
    title: "Train Hard, Stay Strong",
    subtitle: "Fitness isn't a destination, it's a way of life",
    cta: "Explore Programs",
  },
  {
    img: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1600&q=80",
    title: "Your Journey Starts Here",
    subtitle: "Join the AlphaFit community today",
    cta: "Get Started",
  },
];

/* ───────── Stats ───────── */
const stats = [
  { icon: Users, value: 5000, label: "Happy Members", suffix: "+" },
  { icon: Dumbbell, value: 150, label: "Expert Trainers", suffix: "+" },
  { icon: Trophy, value: 200, label: "Success Stories", suffix: "+" },
  { icon: CalendarCheck, value: 10, label: "Years Experience", suffix: "+" },
];

/* ───────── Info Cards ───────── */
const infoCards = [
  {
    img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=60",
    title: "Certified Trainers",
    desc: "Our professional trainers help you reach your goals faster with personalized plans tailored to your fitness level.",
  },
  {
    img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=60",
    title: "Custom Diet Plans",
    desc: "Get diet charts designed for fat loss, muscle gain, or body maintenance with expert nutritionist guidance.",
  },
  {
    img: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=60",
    title: "Modern Equipment",
    desc: "Train with top-quality gym equipment in a clean and motivating environment designed for your success.",
  },
];

/* ───────── Features ───────── */
const features = [
  { icon: Clock, title: "24/7 Access", desc: "Train anytime that fits your schedule" },
  { icon: Wifi, title: "Free WiFi", desc: "Stay connected while you workout" },
  { icon: ShowerHead, title: "Clean Facilities", desc: "Hygienic locker rooms and showers" },
  { icon: ParkingCircle, title: "Free Parking", desc: "Ample parking space available" },
];

/* ───────── Testimonials ───────── */
const testimonials = [
  {
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "AlphaFit changed my life! Lost 20kg in 6 months with their amazing trainers and diet plans.",
    name: "Ahmed Khan",
    role: "Software Engineer",
  },
  {
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Best gym in Karachi! The equipment is top-notch and the atmosphere is so motivating.",
    name: "Ayesha Ali",
    role: "Doctor",
  },
  {
    img: "https://randomuser.me/api/portraits/men/67.jpg",
    text: "Gained 15kg of muscle mass. The trainers really know their stuff!",
    name: "Hassan Raza",
    role: "Businessman",
  },
];

/* ───────── Counter Hook ───────── */
function useCounter(target: number, inView: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const increment = Math.max(1, Math.ceil(target / 80));
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 25);
    return () => clearInterval(timer);
  }, [target, inView]);
  return count;
}

function StatCard({ icon: Icon, value, label, suffix, inView }: { icon: any; value: number; label: string; suffix: string; inView: boolean }) {
  const count = useCounter(value, inView);
  return (
    <div className="text-center">
      <Icon className="mx-auto mb-3 h-10 w-10 text-primary-foreground" />
      <h3 className="font-heading text-4xl font-extrabold text-primary-foreground">
        {count}{suffix}
      </h3>
      <p className="mt-1 text-primary-foreground/80 text-lg">{label}</p>
    </div>
  );
}

/* ───────── Page ───────── */
const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [statsInView, setStatsInView] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Stats intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsInView(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <>
      {/* ═══ Hero Carousel ═══ */}
      <section className="relative h-[90vh] overflow-hidden">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.img}
              alt={slide.title}
              className="h-full w-full object-cover brightness-[0.4]"
              loading={i === 0 ? "eager" : "lazy"}
            />
            {i === currentSlide && (
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center px-4"
                >
                  <h1 className="font-heading text-4xl font-extrabold text-foreground drop-shadow-lg md:text-6xl lg:text-7xl">
                    {slide.title}
                  </h1>
                  <p className="mt-5 text-lg text-foreground/80 md:text-xl">
                    {slide.subtitle}
                  </p>
                  <Link
                    to="/contact"
                    className="mt-8 inline-block rounded-full bg-primary px-8 py-3 font-heading text-lg font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition-all duration-300 hover:-translate-y-1 hover:bg-foreground hover:text-primary hover:shadow-2xl"
                  >
                    {slide.cta}
                  </Link>
                </motion.div>
              </div>
            )}
          </div>
        ))}

        {/* Carousel Controls */}
        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/30 p-2 text-foreground backdrop-blur-sm transition hover:bg-primary" aria-label="Previous slide">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/30 p-2 text-foreground backdrop-blur-sm transition hover:bg-primary" aria-label="Next slide">
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentSlide ? "w-8 bg-primary" : "w-2 bg-foreground/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ═══ Stats ═══ */}
      <section
        ref={statsRef}
        className="bg-gradient-to-r from-primary to-primary/70 py-16"
      >
        <div className="container grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} inView={statsInView} />
          ))}
        </div>
      </section>

      {/* ═══ Why Choose AlphaFit ═══ */}
      <section className="py-20">
        <div className="container">
          <SectionTitle title="Why Choose AlphaFit?" subtitle="Experience the best training, equipment, and guidance" />
          <div className="grid gap-6 md:grid-cols-3">
            {infoCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-400 hover:-translate-y-2 hover:border-primary hover:shadow-xl hover:shadow-primary/20"
              >
                <div className="overflow-hidden">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-heading text-xl font-bold text-primary mb-3">{card.title}</h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Features ═══ */}
      <section className="bg-secondary py-20">
        <div className="container">
          <SectionTitle title="Our Features" subtitle="Everything you need for your fitness journey" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group rounded-2xl border border-border bg-card p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary"
              >
                <feat.icon className="mx-auto mb-4 h-12 w-12 text-primary transition-transform duration-500 group-hover:rotate-y-180" />
                <h5 className="font-heading text-lg font-bold text-foreground mb-2">{feat.title}</h5>
                <p className="text-sm text-muted-foreground">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Testimonials ═══ */}
      <section className="py-20">
        <div className="container">
          <SectionTitle title="What Our Members Say" subtitle="Real transformations, real results" />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="rounded-2xl border border-border bg-card p-8 text-center transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10"
              >
                <img
                  src={t.img}
                  alt={t.name}
                  className="mx-auto mb-4 h-20 w-20 rounded-full border-2 border-primary object-cover"
                  loading="lazy"
                />
                <div className="mb-4 flex justify-center gap-1 text-yellow-400">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mb-4 text-sm italic text-muted-foreground leading-relaxed">"{t.text}"</p>
                <h6 className="font-heading text-lg font-bold text-primary">{t.name}</h6>
                <span className="text-xs text-muted-foreground">{t.role}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary to-primary/70 py-24 text-center">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-foreground/5" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-foreground/5" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl font-extrabold text-primary-foreground md:text-5xl">
              Join AlphaFit Today!
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Start your fitness journey and unlock your true potential
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-block rounded-full bg-foreground px-10 py-4 font-heading text-lg font-bold text-primary shadow-xl transition-all duration-300 hover:scale-110 hover:bg-background hover:text-foreground hover:shadow-2xl"
            >
              Become a Member
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;
