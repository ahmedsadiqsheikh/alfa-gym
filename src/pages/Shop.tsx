import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Star, X, Plus, Minus, Eye } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

/* ───────── Product Data ───────── */
const products = [
  { id: 1, name: "Premium Dumbbell Set", price: 7999, img: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?auto=format&fit=crop&w=800&q=60", desc: "Professional 20kg dumbbell set with rubber coating for grip and floor protection.", rating: 4.5, reviews: 128, badge: "HOT", cat: "equipment" },
  { id: 2, name: "Premium Workout Mat", price: 2499, img: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?auto=format&fit=crop&w=800&q=60", desc: "Extra thick non-slip mat for all floor exercises.", rating: 5, reviews: 94, badge: "NEW", cat: "accessories" },
  { id: 3, name: "Pro Gym Gloves", price: 1499, img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=60", desc: "Breathable gloves with wrist support and padded palms.", rating: 4, reviews: 76, badge: "", cat: "accessories" },
  { id: 4, name: "Water Bottle", price: 899, img: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=60", desc: "BPA-free 1L bottle with time markers.", rating: 4.5, reviews: 112, badge: "", cat: "accessories" },
  { id: 5, name: "Resistance Bands Set", price: 3499, img: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?auto=format&fit=crop&w=800&q=60", desc: "Set of 5 resistance bands with varying tension levels.", rating: 5, reviews: 156, badge: "SALE", cat: "equipment" },
  { id: 6, name: "Training Shirt", price: 1999, img: "https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=800&q=60", desc: "Moisture-wicking performance shirt.", rating: 4, reviews: 67, badge: "", cat: "apparel" },
  { id: 7, name: "Whey Protein 2kg", price: 8999, img: "https://images.unsplash.com/photo-1593095948071-474c5cc2c2d8?auto=format&fit=crop&w=800&q=60", desc: "Premium whey protein – 25g per serving, 60 servings.", rating: 5, reviews: 243, badge: "BEST", cat: "nutrition" },
  { id: 8, name: "Jump Rope", price: 799, img: "https://images.unsplash.com/photo-1434596922112-19c563067271?auto=format&fit=crop&w=800&q=60", desc: "Speed rope with ball bearings for cardio workouts.", rating: 4.5, reviews: 89, badge: "", cat: "equipment" },
];

const categories = ["all", "equipment", "accessories", "apparel", "nutrition"];

interface CartItem {
  id: number;
  name: string;
  price: number;
  img: string;
  qty: number;
}

function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-yellow-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${i < Math.floor(rating) ? "fill-current" : i < rating ? "fill-current opacity-50" : "text-muted-foreground"}`}
        />
      ))}
    </div>
  );
}

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [modalQty, setModalQty] = useState(1);

  const filtered = activeCategory === "all" ? products : products.filter((p) => p.cat === activeCategory);
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const addToCart = (product: typeof products[0], qty = 1) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.id === product.id);
      if (existing) return prev.map((c) => (c.id === product.id ? { ...c, qty: c.qty + qty } : c));
      return [...prev, { id: product.id, name: product.name, price: product.price, img: product.img, qty }];
    });
    setCartOpen(true);
  };

  const updateQty = (id: number, delta: number) => {
    setCart((prev) =>
      prev.map((c) => (c.id === id ? { ...c, qty: Math.max(0, c.qty + delta) } : c)).filter((c) => c.qty > 0)
    );
  };

  const removeFromCart = (id: number) => setCart((prev) => prev.filter((c) => c.id !== id));

  return (
    <>
      {/* Hero */}
      <section
        className="relative flex h-[50vh] items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(220,53,69,0.3)), url('https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1600&q=80')`,
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-4xl font-extrabold text-foreground drop-shadow-lg md:text-6xl"
        >
          AlphaFit Premium Store
        </motion.h1>
      </section>

      {/* Floating Cart Icon */}
      <button
        onClick={() => setCartOpen(true)}
        className="fixed right-6 top-20 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition hover:scale-110"
        aria-label="Open cart"
      >
        <ShoppingCart className="h-5 w-5" />
        {cartCount > 0 && (
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-foreground text-xs font-bold text-background">
            {cartCount}
          </span>
        )}
      </button>

      {/* Category Filter */}
      <section className="py-10">
        <div className="container flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full border-2 px-6 py-2 text-sm font-semibold capitalize transition-all duration-300 ${
                activeCategory === cat
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-foreground hover:-translate-y-0.5 hover:border-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="pb-20">
        <div className="container">
          <SectionTitle title="Featured Products" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-400 hover:-translate-y-2 hover:border-primary hover:shadow-xl hover:shadow-primary/20"
              >
                {product.badge && (
                  <span className="absolute right-3 top-3 z-10 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                    {product.badge}
                  </span>
                )}
                <div className="overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h5 className="font-heading text-lg font-bold text-primary">{product.name}</h5>
                  <div className="my-2 flex items-center gap-2">
                    <RatingStars rating={product.rating} />
                    <span className="text-xs text-muted-foreground">({product.reviews})</span>
                  </div>
                  <p className="mb-3 text-xs text-muted-foreground line-clamp-2">{product.desc}</p>
                  <p className="font-heading text-xl font-bold text-foreground">PKR {product.price.toLocaleString()}</p>
                  <div className="mt-4 flex gap-2">
                    <button
                      onClick={() => {
                        setSelectedProduct(product);
                        setModalQty(1);
                      }}
                      className="flex-1 rounded-full border-2 border-primary py-2 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                    >
                      <Eye className="mr-1 inline h-4 w-4" />
                      View
                    </button>
                    <button
                      onClick={() => addToCart(product)}
                      className="flex-1 rounded-full bg-primary py-2 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:bg-primary/80"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Product Modal ═══ */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-2xl rounded-2xl border-2 border-primary bg-card p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading text-2xl font-bold text-foreground">{selectedProduct.name}</h3>
                <button onClick={() => setSelectedProduct(null)} className="text-muted-foreground hover:text-foreground">
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <img src={selectedProduct.img} alt={selectedProduct.name} className="w-full rounded-xl object-cover max-h-80" />
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <RatingStars rating={selectedProduct.rating} />
                    <span className="text-sm text-muted-foreground">({selectedProduct.reviews} reviews)</span>
                  </div>
                  <p className="mb-4 text-sm text-muted-foreground">{selectedProduct.desc}</p>
                  <p className="mb-4 font-heading text-2xl font-bold text-primary">PKR {selectedProduct.price.toLocaleString()}</p>
                  <div className="mb-4">
                    <p className="mb-2 text-sm font-semibold text-foreground">Quantity:</p>
                    <div className="flex items-center gap-3">
                      <button onClick={() => setModalQty(Math.max(1, modalQty - 1))} className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-12 text-center font-bold text-foreground">{modalQty}</span>
                      <button onClick={() => setModalQty(modalQty + 1)} className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      addToCart(selectedProduct, modalQty);
                      setSelectedProduct(null);
                    }}
                    className="w-full rounded-full bg-primary py-3 font-semibold text-primary-foreground transition hover:scale-105"
                  >
                    <ShoppingCart className="mr-2 inline h-4 w-4" /> Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══ Cart Sidebar ═══ */}
      <AnimatePresence>
        {cartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[90] bg-background/50"
              onClick={() => setCartOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed right-0 top-0 z-[95] flex h-full w-full max-w-md flex-col bg-card shadow-2xl"
            >
              <div className="flex items-center justify-between bg-primary p-5">
                <h4 className="font-heading text-xl font-bold text-primary-foreground">Cart ({cartCount})</h4>
                <button onClick={() => setCartOpen(false)} className="text-primary-foreground">
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto">
                {cart.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
                    <ShoppingCart className="mb-4 h-12 w-12" />
                    <p>Your cart is empty</p>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="flex gap-4 border-b border-border p-4">
                      <img src={item.img} alt={item.name} className="h-20 w-20 rounded-lg object-cover" />
                      <div className="flex-1">
                        <h6 className="font-heading font-semibold text-foreground">{item.name}</h6>
                        <p className="text-sm text-muted-foreground">PKR {item.price.toLocaleString()}</p>
                        <div className="mt-2 flex items-center gap-2">
                          <button onClick={() => updateQty(item.id, -1)} className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">-</button>
                          <span className="text-sm font-bold text-foreground">{item.qty}</span>
                          <button onClick={() => updateQty(item.id, 1)} className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">+</button>
                          <button onClick={() => removeFromCart(item.id)} className="ml-auto text-muted-foreground hover:text-primary">
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
              <div className="border-t border-border bg-secondary p-5">
                <div className="mb-3 flex justify-between">
                  <span className="font-heading text-lg font-semibold text-foreground">Total:</span>
                  <span className="font-heading text-lg font-bold text-primary">PKR {cartTotal.toLocaleString()}</span>
                </div>
                <button className="w-full rounded-lg bg-primary py-3 font-semibold text-primary-foreground transition hover:bg-primary/80">
                  Checkout
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Shop;
