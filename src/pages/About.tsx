import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Users, Dumbbell, Award, Trophy,
  Target, Eye, UserCheck, UtensilsCrossed,
  Clock, HeartPulse, HandCoins, Star,
} from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

/* ───────── Stats ───────── */
const stats = [
  { icon: Users, value: "5000+", label: "Active Members" },
  { icon: Dumbbell, value: "50+", label: "Expert Trainers" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Trophy, value: "100+", label: "Success Stories" },
];

/* ───────── Why Choose ───────── */
const whyChoose = [
  { icon: UserCheck, title: "Certified Trainers", desc: "Internationally certified with years of body transformation experience." },
  { icon: UtensilsCrossed, title: "Personalized Diet Plans", desc: "Custom nutrition plans for weight loss, muscle gain, or athletic performance." },
  { icon: Clock, title: "Flexible Timings", desc: "Open from 6 AM to 10 PM, 6 days a week." },
  { icon: HeartPulse, title: "Modern Equipment", desc: "State-of-the-art machines from leading brands, regularly maintained." },
  { icon: Users, title: "Community Support", desc: "A community of like-minded individuals who motivate each other." },
  { icon: HandCoins, title: "Affordable Packages", desc: "Flexible membership plans starting from PKR 3,000/month." },
];

/* ───────── Trainers ───────── */
const trainers = [
  {
    img: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=60",
    name: "John Carter",
    desc: "Certified Fitness Coach with 10+ years of experience in strength training and body transformation.",
  },
  {
    img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=60",
    name: "Emily Stone",
    desc: "Nutrition & Cardio Specialist helping clients build stamina and achieve lean physiques.",
  },
  {
    img: "https://images.unsplash.com/photo-1534368959876-26bf04f2c947?auto=format&fit=crop&w=800&q=60",
    name: "Mike Rogers",
    desc: "Functional fitness expert focusing on agility, endurance, and power-based workouts.",
  },
];

/* ───────── Testimonials ───────── */
const testimonials = [
  {
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "AlphaFit changed my life! I lost 20kg in 6 months and gained so much confidence.",
    name: "Ahmed Khan",
    since: "Member since 2023",
  },
  {
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Best gym in Karachi! The equipment is top-notch and the environment is so motivating.",
    name: "Sara Ali",
    since: "Member since 2022",
  },
  {
    img: "https://randomuser.me/api/portraits/men/65.jpg",
    text: "The personalized diet plan and training made all the difference. I'm stronger than ever!",
    name: "Bilal Raza",
    since: "Member since 2021",
  },
];

/* ───────── Gallery ───────── */
const galleryImages = [
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=60",
];

const About = () => {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex h-[60vh] items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=1600&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-background/60" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center"
        >
          <h1 className="font-heading text-4xl font-extrabold text-primary md:text-6xl">
            About AlphaFit
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">Where Strength Meets Discipline 💪</p>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="bg-secondary py-16">
        <div className="container grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-lg hover:shadow-primary/20"
            >
              <stat.icon className="mx-auto mb-3 h-10 w-10 text-primary" />
              <h3 className="font-heading text-3xl font-bold text-primary">{stat.value}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20">
        <div className="container">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <motion.img
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=60"
              alt="AlphaFit Gym"
              className="w-full rounded-2xl border-2 border-primary shadow-lg"
              loading="lazy"
            />
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-bold text-primary mb-4">Who We Are</h2>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                At <strong className="text-foreground">AlphaFit</strong>, we believe fitness is not just about building muscles — it's about building discipline, focus, and confidence. Founded in 2010, we've transformed over 5,000 lives through science-backed training programs and personalized nutrition plans.
              </p>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                Our trainers are dedicated professionals who help you push your limits, train smart, and achieve lasting results. Whether you're a beginner or an athlete, AlphaFit has your back.
              </p>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                We pride ourselves on creating a judgment-free zone where everyone feels welcomed and supported on their transformation journey.
              </p>
              <Link
                to="/contact"
                className="rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground transition hover:scale-105 hover:bg-primary/80"
              >
                Join Now
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-secondary py-20">
        <div className="container grid gap-6 md:grid-cols-2">
          {[
            { icon: Target, title: "Our Mission", desc: "To empower individuals to unlock their full potential through fitness, discipline, and community support. We strive to make health and wellness accessible to everyone." },
            { icon: Eye, title: "Our Vision", desc: "To become Pakistan's leading fitness destination, recognized for transforming lives through innovative training methods, cutting-edge equipment, and a culture of excellence." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="rounded-2xl border border-border bg-card p-10 transition-all duration-300 hover:-translate-y-1 hover:border-primary"
            >
              <item.icon className="mb-4 h-12 w-12 text-primary" />
              <h3 className="font-heading text-2xl font-bold text-primary mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container">
          <SectionTitle title="Why Choose AlphaFit?" />
          <div className="grid gap-6 md:grid-cols-2">
            {whyChoose.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border-l-4 border-primary bg-card p-6 transition-all duration-300 hover:translate-x-2 hover:bg-muted"
              >
                <feat.icon className="mb-3 h-8 w-8 text-primary" />
                <h4 className="font-heading text-lg font-bold text-foreground mb-2">{feat.title}</h4>
                <p className="text-sm text-muted-foreground">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers */}
      <section className="bg-secondary py-20">
        <div className="container">
          <SectionTitle title="Meet Our Expert Trainers" subtitle="Dedicated professionals committed to your success" />
          <div className="grid gap-6 md:grid-cols-3">
            {trainers.map((trainer, i) => (
              <motion.div
                key={trainer.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-xl hover:shadow-primary/20"
              >
                <img src={trainer.img} alt={trainer.name} className="h-64 w-full object-cover" loading="lazy" />
                <div className="p-6 text-center">
                  <h5 className="font-heading text-xl font-bold text-primary">{trainer.name}</h5>
                  <p className="mt-2 text-sm text-muted-foreground">{trainer.desc}</p>
                  <div className="mt-4 flex justify-center gap-3">
                    {["F", "I", "L"].map((letter) => (
                      <a
                        key={letter}
                        href="#"
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-xs font-bold text-foreground transition-all hover:bg-primary hover:text-primary-foreground"
                      >
                        {letter}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container">
          <SectionTitle title="What Our Members Say" />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary"
              >
                <div className="mb-3 flex gap-1 text-yellow-400">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mb-4 text-sm italic text-muted-foreground leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <img src={t.img} alt={t.name} className="h-12 w-12 rounded-full border-2 border-primary object-cover" loading="lazy" />
                  <div>
                    <h6 className="font-heading font-bold text-primary">{t.name}</h6>
                    <span className="text-xs text-muted-foreground">{t.since}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-secondary py-20">
        <div className="container">
          <SectionTitle title="Our Gym Environment" subtitle="Experience a motivating, safe, and world-class training atmosphere" />
          <div className="grid gap-4 md:grid-cols-3">
            {galleryImages.map((img, i) => (
              <motion.img
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                src={img}
                alt={`Gym environment ${i + 1}`}
                className="w-full rounded-2xl border-2 border-border object-cover h-64 transition-all duration-300 hover:scale-105 hover:border-primary"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
