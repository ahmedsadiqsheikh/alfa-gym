import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Apple, Dumbbell, Flame, TrendingUp,
  Droplets, Drumstick, Wheat, Heart, Clock, Carrot,
  FlaskConical, Zap, Pill, Leaf, Fish, Moon, Capsule, Sparkles,
  Sun, Coffee, UtensilsCrossed, Cookie, Bed
} from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

/* ───────── Stat Boxes ───────── */
const nutritionStats = [
  { icon: Apple, title: "Balanced Diet", desc: "Science-backed nutrition plans" },
  { icon: Dumbbell, title: "Protein Rich", desc: "Muscle building & recovery" },
  { icon: Flame, title: "Fat Burning", desc: "Optimized for weight loss" },
  { icon: TrendingUp, title: "Track Progress", desc: "Monitor your nutrition goals" },
];

/* ───────── Diet Plans ───────── */
const dietPlans = [
  {
    badge: "BULKING",
    img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=60",
    title: "Weight Gain Plan",
    goal: "For Skinny Body Type - Build Mass & Strength",
    macros: { calories: "3000+", protein: "180g", carbs: "400g" },
    meals: [
      "Breakfast: 4 boiled eggs + oats with banana + peanut butter",
      "Mid-Morning: Protein shake + mixed nuts",
      "Lunch: Chicken breast (200g) + brown rice + salad",
      "Snack: Whole wheat sandwich + banana + milk",
      "Pre-Workout: Coffee + banana",
      "Post-Workout: Whey protein shake",
      "Dinner: Beef/Fish (150g) + sweet potato + vegetables",
      "Before Bed: Casein protein + almonds",
    ],
  },
  {
    badge: "CUTTING",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=60",
    title: "Fat Loss Plan",
    goal: "For Overweight - Shed Fat, Keep Muscle",
    macros: { calories: "1800", protein: "150g", carbs: "120g" },
    meals: [
      "Morning: Warm water + lemon",
      "Breakfast: 6 egg whites + oatmeal + green tea",
      "Mid-Morning: Apple + almonds (10 pieces)",
      "Lunch: Grilled chicken (150g) + salad + brown rice",
      "Snack: Protein shake + cucumber",
      "Pre-Workout: Black coffee",
      "Post-Workout: Whey protein isolate",
      "Dinner: Fish/Chicken + steamed vegetables",
    ],
  },
  {
    badge: "MAINTAIN",
    img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=60",
    title: "Maintenance Plan",
    goal: "For Athletes - Sustain Performance & Energy",
    macros: { calories: "2500", protein: "160g", carbs: "280g" },
    meals: [
      "Breakfast: Oats + eggs (3 whole) + orange juice",
      "Mid-Morning: Greek yogurt + berries",
      "Lunch: Chicken + rice + mixed vegetables",
      "Snack: Protein shake + banana",
      "Pre-Workout: Toast + peanut butter",
      "Post-Workout: Whey protein + dextrose",
      "Dinner: Fish/Lean beef + quinoa + salad",
      "Cheat Meal: Once weekly (controlled portions)",
    ],
  },
];

/* ───────── Meal Timeline ───────── */
const timeline = [
  { time: "7:00 AM", icon: Sun, title: "Morning Wake Up", desc: "Start with warm water + lemon to kickstart metabolism." },
  { time: "8:00 AM", icon: Coffee, title: "Breakfast", desc: "High protein breakfast with complex carbs. Never skip it!" },
  { time: "11:00 AM", icon: Apple, title: "Mid-Morning Snack", desc: "Light protein snack with healthy fats." },
  { time: "1:30 PM", icon: UtensilsCrossed, title: "Lunch", desc: "Balanced meal with lean protein, complex carbs, and vegetables." },
  { time: "4:30 PM", icon: Cookie, title: "Pre-Workout", desc: "Quick-digesting carbs 30-45 mins before training." },
  { time: "6:30 PM", icon: Dumbbell, title: "Post-Workout", desc: "Fast-absorbing protein within 30 mins after workout." },
  { time: "8:00 PM", icon: Moon, title: "Dinner", desc: "Moderate protein with low-carb veggies." },
  { time: "10:30 PM", icon: Bed, title: "Before Bed", desc: "Slow-digesting protein (casein) for overnight recovery." },
];

/* ───────── Nutrition Tips ───────── */
const tips = [
  { icon: Droplets, title: "Hydration is Key", desc: "Drink 3-4 liters of water daily. Start your day with 2 glasses of warm water." },
  { icon: Drumstick, title: "Prioritize Protein", desc: "Aim for 1.6-2.2g of protein per kg of body weight from quality sources." },
  { icon: Wheat, title: "Smart Carb Timing", desc: "Consume most carbs around workout time. Choose complex carbs like brown rice and oats." },
  { icon: Heart, title: "Healthy Fats Matter", desc: "Include avocados, nuts, olive oil, and fatty fish for hormone support." },
  { icon: Clock, title: "Meal Frequency", desc: "Eat 5-6 smaller meals throughout the day to maintain steady energy." },
  { icon: Carrot, title: "Vegetables & Fiber", desc: "Include colorful vegetables in every meal for vitamins and minerals." },
];

/* ───────── Supplements ───────── */
const supplements = [
  { icon: FlaskConical, title: "Whey Protein", desc: "Fast-absorbing for post-workout recovery." },
  { icon: Zap, title: "Creatine", desc: "Increases strength and muscle mass. 5g daily." },
  { icon: Pill, title: "BCAA", desc: "Prevents muscle breakdown during training." },
  { icon: Leaf, title: "Multivitamin", desc: "Fills nutritional gaps for overall health." },
  { icon: Fish, title: "Omega-3", desc: "Reduces inflammation. 2-3g daily." },
  { icon: Sparkles, title: "Pre-Workout", desc: "Boosts energy 30 mins before training." },
  { icon: Capsule, title: "L-Glutamine", desc: "Speeds recovery. 5-10g post-workout." },
  { icon: Moon, title: "Casein Protein", desc: "Slow-release overnight recovery." },
];

const Diet = () => {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex h-[60vh] items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1600&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-background/60" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center"
        >
          <h1 className="font-heading text-4xl font-extrabold text-primary md:text-6xl">
            AlphaFit Diet & Nutrition
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">Fuel Your Body, Transform Your Life 🥗</p>
        </motion.div>
      </section>

      {/* Nutrition Stats */}
      <section className="bg-secondary py-16">
        <div className="container grid grid-cols-2 gap-6 md:grid-cols-4">
          {nutritionStats.map((stat, i) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-lg hover:shadow-primary/20"
            >
              <stat.icon className="mx-auto mb-3 h-10 w-10 text-primary" />
              <h4 className="font-heading text-lg font-bold text-primary">{stat.title}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Diet Plans */}
      <section className="py-20">
        <div className="container">
          <SectionTitle title="Choose Your Goal" subtitle="Custom diet plans designed for your fitness journey" />
          <div className="grid gap-8 md:grid-cols-3">
            {dietPlans.map((plan, i) => (
              <motion.div
                key={plan.badge}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-xl hover:shadow-primary/20"
              >
                <span className="absolute right-4 top-4 z-10 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                  {plan.badge}
                </span>
                <img src={plan.img} alt={plan.title} className="h-52 w-full object-cover" loading="lazy" />
                <div className="p-6">
                  <h3 className="font-heading text-2xl font-bold text-primary">{plan.title}</h3>
                  <p className="mt-1 text-sm italic text-muted-foreground">{plan.goal}</p>

                  {/* Macros */}
                  <div className="my-4 flex justify-around rounded-xl bg-primary/5 py-3">
                    {Object.entries(plan.macros).map(([key, val]) => (
                      <div key={key} className="text-center">
                        <span className="block font-heading text-lg font-bold text-primary">{val}</span>
                        <span className="text-xs capitalize text-muted-foreground">{key}</span>
                      </div>
                    ))}
                  </div>

                  {/* Meals */}
                  <ul className="space-y-2">
                    {plan.meals.map((meal) => (
                      <li key={meal} className="relative pl-5 text-sm text-muted-foreground before:absolute before:left-0 before:top-1 before:text-primary before:content-['✓'] before:font-bold">
                        {meal}
                      </li>
                    ))}
                  </ul>

                  <button className="mt-5 w-full rounded-lg bg-primary py-3 font-semibold text-primary-foreground transition hover:bg-primary/80">
                    Get Personalized Plan
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meal Timing */}
      <section className="bg-secondary py-20">
        <div className="container">
          <SectionTitle title="Optimal Meal Timing" subtitle="When you eat is just as important as what you eat" />
          <div className="mx-auto max-w-3xl space-y-6">
            {timeline.map((item, i) => (
              <motion.div
                key={item.time}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex gap-6"
              >
                <div className="w-24 shrink-0 text-right">
                  <span className="font-heading text-lg font-bold text-primary">{item.time}</span>
                </div>
                <div className="flex-1 rounded-xl border-l-4 border-primary bg-card p-5">
                  <h5 className="flex items-center gap-2 font-heading text-lg font-bold text-foreground">
                    <item.icon className="h-5 w-5 text-primary" />
                    {item.title}
                  </h5>
                  <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nutrition Tips */}
      <section className="py-20">
        <div className="container">
          <SectionTitle title="Essential Nutrition Tips" />
          <div className="grid gap-6 md:grid-cols-2">
            {tips.map((tip, i) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:translate-x-2 hover:border-primary"
              >
                <tip.icon className="mb-3 h-8 w-8 text-primary" />
                <h4 className="font-heading text-lg font-bold text-foreground mb-2">{tip.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{tip.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supplements */}
      <section className="bg-secondary py-20">
        <div className="container">
          <SectionTitle title="Recommended Supplements" subtitle="Boost your results with these essentials" />
          <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
            {supplements.map((supp, i) => (
              <motion.div
                key={supp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-border bg-card p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary"
              >
                <supp.icon className="mx-auto mb-3 h-10 w-10 text-primary" />
                <h5 className="font-heading font-bold text-primary mb-1">{supp.title}</h5>
                <p className="text-xs text-muted-foreground">{supp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-primary/70 py-20 text-center">
        <div className="container">
          <h2 className="font-heading text-3xl font-extrabold text-primary-foreground md:text-4xl">
            Ready to Transform Your Body?
          </h2>
          <p className="mt-3 text-lg text-primary-foreground/80">
            Get a personalized diet plan tailored to your goals
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-full bg-foreground px-10 py-4 font-heading text-lg font-bold text-primary transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Consult Our Nutritionist
          </Link>
        </div>
      </section>
    </>
  );
};

export default Diet;
