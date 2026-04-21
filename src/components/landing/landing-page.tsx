"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Clock3,
  HandHeart,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  X,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const features = [
  { title: "Experienced Stylists", text: "A friendly team trained to deliver polished looks that suit your lifestyle.", icon: Sparkles },
  { title: "Premium Products", text: "We use trusted products that nourish your hair and keep your style vibrant for longer.", icon: ShieldCheck },
  { title: "Warm Hospitality", text: "From your first visit, enjoy a calm, welcoming space designed around your comfort.", icon: HandHeart },
  { title: "Convenient Location", text: "Find us in Ashaley Botwe for easy access to quality beauty care close to home.", icon: MapPin },
];

const services = [
  {
    title: "Haircuts & Styling",
    text: "Chic cuts and tailored styling for everyday elegance or special occasions.",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Coloring & Highlights",
    text: "Rich, dimensional color services that elevate your look while protecting your hair.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Extensions & Weaves",
    text: "Natural-looking volume and length installed with comfort, quality, and precision.",
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Facials & Skincare",
    text: "Glow-focused treatments that refresh your skin and support lasting radiance.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Manicures & Pedicures",
    text: "Neat, elegant nail care with a relaxing touch that leaves you feeling renewed.",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=80",
  },
];

const testimonials = [
  { name: "Priscilla A.", quote: "I came in for styling and left feeling confident and refreshed. The team is professional and so welcoming.", rating: 5 },
  { name: "Esi M.", quote: "The salon is neat, modern, and relaxing. My color came out beautiful and exactly what I wanted.", rating: 5 },
  { name: "Nana Yaa K.", quote: "Reference Salon is my go-to in Ashaley Botwe. Their service is consistent and always worth it.", rating: 5 },
];

const faqs = [
  { q: "Do I need to book an appointment?", a: "Appointments are recommended so we can reserve dedicated time for you, especially on busy days." },
  { q: "Do you accept walk-ins?", a: "Yes, walk-ins are welcome based on availability. Call ahead for faster service." },
  { q: "What services do you offer?", a: "We provide haircuts, styling, coloring, extensions, facials, skincare, manicures, and pedicures." },
  { q: "Do you offer special discounts for first-time customers?", a: "Yes, we run first-time customer offers regularly. Contact us to confirm the current promotion." },
  { q: "Where are you located?", a: "Reference Salon is located in Ashaley Botwe, Greater Accra." },
  { q: "How can I contact you?", a: "Call us directly on 0244570654 or use the contact form below for inquiries and bookings." },
];

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-12">
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-brand-rose-dark">{eyebrow}</p>
      <h2 className="heading-font text-3xl text-brand-charcoal sm:text-4xl">{title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-[#695953] sm:text-base">{text}</p>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="bg-background text-foreground">
      <div className="bg-brand-charcoal px-4 py-2 text-center text-xs text-white sm:text-sm">
        Welcome to Reference Salon. First-time clients can ask about our current beauty offer.
      </div>

      <header className="sticky top-0 z-50 border-b border-[#e8d6cc]/90 bg-[#fffaf7]/95 backdrop-blur">
        <div className="section-shell flex items-center justify-between py-3">
          <a href="#home" className="heading-font text-xl font-semibold tracking-wide text-brand-charcoal sm:text-2xl">
            Reference Salon
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-[#5f514d] transition hover:text-brand-rose-dark">
                {link.label}
              </a>
            ))}
            <a href="tel:0244570654" className="rounded-full bg-brand-rose px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-rose-dark">
              Call Now
            </a>
          </nav>
          <button aria-label="Toggle menu" onClick={() => setMenuOpen((prev) => !prev)} className="rounded-xl border border-[#e7d6cb] p-2 md:hidden">
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-[#edd9ce] bg-white md:hidden">
              <div className="section-shell flex flex-col gap-2 py-4">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="rounded-xl px-3 py-2 text-sm text-[#564945] hover:bg-brand-cream">
                    {link.label}
                  </a>
                ))}
                <a href="tel:0244570654" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-rose px-4 py-3 text-sm font-semibold text-white">
                  <Phone className="h-4 w-4" />
                  Call 0244570654
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        <section id="home" className="section-shell grid gap-8 py-10 sm:py-16 lg:grid-cols-2 lg:items-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="order-2 space-y-6 lg:order-1">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-rose-dark">Premium Hair & Beauty in Ashaley Botwe</p>
            <h1 className="heading-font text-4xl leading-tight text-brand-charcoal sm:text-5xl">Beautiful Hair. Confident You.</h1>
            <p className="max-w-xl text-base leading-relaxed text-[#655752] sm:text-lg">
              Experience expert haircare, beauty treatments, and warm hospitality in a modern salon built to help you look polished and feel your best every time.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-brand-rose px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(176,113,131,0.35)] transition hover:-translate-y-0.5 hover:bg-brand-rose-dark">
                Book Appointment
              </a>
              <a href="tel:0244570654" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d8bbae] bg-white px-6 py-3 text-sm font-semibold text-brand-charcoal transition hover:-translate-y-0.5 hover:border-brand-rose">
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="order-1 lg:order-2">
            <div className="relative h-[420px] overflow-hidden rounded-3xl border border-[#ead7cd] bg-brand-beige shadow-[0_18px_45px_rgba(78,56,52,0.16)] sm:h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1600&q=80"
                alt="Premium salon interior with styled hair client"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5 rounded-2xl bg-white/92 p-4 backdrop-blur">
                <p className="heading-font text-xl text-brand-charcoal">Your Go-To Hair & Beauty Destination</p>
                <p className="mt-1 text-sm text-[#5f514c]">Trusted service, premium care, and a welcoming touch.</p>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="section-shell py-10 sm:py-16">
          <SectionTitle
            eyebrow="Why Choose Us"
            title="A Beauty Experience Designed Around You"
            text="Everything at Reference Salon is tailored to deliver quality results in a clean, comfortable, and stylish environment."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((item, idx) => (
              <motion.article key={item.title} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} transition={{ delay: idx * 0.08 }} className="card-surface p-5">
                <item.icon className="mb-4 h-7 w-7 text-brand-rose-dark" />
                <h3 className="mb-2 text-lg font-semibold text-brand-charcoal">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[#62534e]">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="services" className="bg-brand-cream py-10 sm:py-16">
          <div className="section-shell">
            <SectionTitle
              eyebrow="Our Services"
              title="Premium Care from Hair to Self-Care"
              text="Explore our most-requested salon and beauty services crafted to keep you looking fresh, polished, and confident."
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, idx) => (
                <motion.article key={service.title} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} transition={{ delay: idx * 0.07 }} className="group card-surface overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <Image src={service.image} alt={service.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-brand-charcoal">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#675852]">{service.text}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section-shell grid gap-8 py-10 sm:py-16 lg:grid-cols-2 lg:items-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="relative h-80 overflow-hidden rounded-3xl border border-[#ead8cd] sm:h-[420px]">
            <Image
              src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=1400&q=80"
              alt="Salon professional styling a client's hair"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-rose-dark">About Reference Salon</p>
            <h2 className="heading-font text-3xl text-brand-charcoal sm:text-4xl">A Trusted Beauty Destination in Greater Accra</h2>
            <p className="text-sm leading-relaxed text-[#635650] sm:text-base">
              Reference Salon combines experienced professionals, modern beauty techniques, and personal care to deliver a premium-yet-accessible salon experience.
            </p>
            <p className="text-sm leading-relaxed text-[#635650] sm:text-base">
              We are proud to serve clients in Ashaley Botwe and nearby communities with attentive service, quality products, and results that keep you coming back.
            </p>
          </motion.div>
        </section>

        <section id="reviews" className="bg-[#fff1ea] py-10 sm:py-16">
          <div className="section-shell">
            <SectionTitle
              eyebrow="Client Love"
              title="Real Feedback from Happy Clients"
              text="Our clients trust us for consistency, comfort, and beautiful outcomes they can feel proud of."
            />
            <div className="grid gap-5 md:grid-cols-3">
              {testimonials.map((item, idx) => (
                <motion.article key={item.name} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} transition={{ delay: idx * 0.08 }} className="card-surface p-5">
                  <div className="mb-3 flex gap-1 text-brand-gold">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-[#5f514c]">&ldquo;{item.quote}&rdquo;</p>
                  <p className="mt-4 text-sm font-semibold text-brand-charcoal">{item.name}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell py-10 sm:py-16">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="rounded-3xl border border-[#e5cabd] bg-gradient-to-r from-[#f8dfe5] via-[#f7ece5] to-[#f6e7d9] p-6 text-center sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-rose-dark">First-Time Offer</p>
            <h3 className="heading-font mt-3 text-3xl text-brand-charcoal">New Here? Let&apos;s Make Your First Visit Special.</h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#5f514c] sm:text-base">Ask about our first-time customer offer and enjoy premium care with a warm welcome from the Reference Salon team.</p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="#contact" className="rounded-full bg-brand-charcoal px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1f1917]">
                Claim Offer
              </a>
              <a href="https://wa.me/233244570654" className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-charcoal/20 bg-white px-6 py-3 text-sm font-semibold text-brand-charcoal transition hover:border-brand-rose">
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </section>

        <section className="bg-brand-cream py-10 sm:py-16">
          <div className="section-shell">
            <SectionTitle
              eyebrow="FAQ"
              title="Everything You Need to Know Before You Visit"
              text="Quick answers to the questions new and returning clients ask us most often."
            />
            <div className="mx-auto max-w-3xl space-y-3">
              {faqs.map((item) => (
                <details key={item.q} className="card-surface p-4">
                  <summary className="cursor-pointer list-none text-sm font-semibold text-brand-charcoal sm:text-base">{item.q}</summary>
                  <p className="mt-3 text-sm leading-relaxed text-[#5f514d]">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-shell py-10 sm:py-16">
          <SectionTitle
            eyebrow="Contact & Booking"
            title="Book Your Next Beauty Session Today"
            text="Call us directly or send a quick inquiry and we will help you schedule the right service for your needs."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="card-surface space-y-5 p-6">
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 text-brand-rose-dark" />
                <div>
                  <p className="text-sm font-semibold text-brand-charcoal">Phone</p>
                  <a href="tel:0244570654" className="text-sm text-[#625450] hover:text-brand-rose-dark">0244570654</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-brand-rose-dark" />
                <div>
                  <p className="text-sm font-semibold text-brand-charcoal">Location</p>
                  <p className="text-sm text-[#625450]">Ashaley Botwe, Greater Accra</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock3 className="mt-1 h-5 w-5 text-brand-rose-dark" />
                <div>
                  <p className="text-sm font-semibold text-brand-charcoal">Operating Hours</p>
                  <p className="text-sm text-[#625450]">Mon - Sat: 8:00 AM - 7:00 PM</p>
                  <p className="text-sm text-[#625450]">Sunday: By appointment</p>
                </div>
              </div>
              <div className="rounded-2xl border border-dashed border-[#ddc4b7] bg-brand-beige p-4 text-sm text-[#594c47]">
                Map placeholder: Add Google Maps embed for Reference Salon, Ashaley Botwe.
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href="tel:0244570654" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-rose px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-rose-dark">
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
                <a href="https://wa.me/233244570654" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#dfc4b7] bg-white px-4 py-3 text-sm font-semibold text-brand-charcoal transition hover:border-brand-rose">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </motion.div>

            <motion.form variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} onSubmit={submitHandler} className="card-surface space-y-4 p-6" aria-label="Booking inquiry form">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium text-[#4f4440]">Full Name</label>
                <input id="name" name="name" required className="w-full rounded-xl border border-[#dfc5b8] bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-rose" />
              </div>
              <div>
                <label htmlFor="phone" className="mb-1 block text-sm font-medium text-[#4f4440]">Phone Number</label>
                <input id="phone" name="phone" required className="w-full rounded-xl border border-[#dfc5b8] bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-rose" />
              </div>
              <div>
                <label htmlFor="service" className="mb-1 block text-sm font-medium text-[#4f4440]">Service Interested In</label>
                <input id="service" name="service" className="w-full rounded-xl border border-[#dfc5b8] bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-rose" />
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-medium text-[#4f4440]">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full rounded-xl border border-[#dfc5b8] bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-rose" />
              </div>
              <button type="submit" className="w-full rounded-full bg-brand-charcoal px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#201a18]">
                Send Booking Inquiry
              </button>
            </motion.form>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#ead6cb] bg-[#fff4ee] py-10">
        <div className="section-shell grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="heading-font text-2xl text-brand-charcoal">Reference Salon</p>
            <p className="mt-2 text-sm text-[#635752]">A premium, welcoming hair and beauty destination for modern women in Ashaley Botwe.</p>
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-brand-rose-dark">Quick Links</p>
            <div className="flex flex-col gap-1 text-sm text-[#665954]">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="hover:text-brand-rose-dark">{link.label}</a>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-brand-rose-dark">Contact</p>
            <p className="text-sm text-[#665954]">Ashaley Botwe, Greater Accra</p>
            <a href="tel:0244570654" className="text-sm text-[#665954] hover:text-brand-rose-dark">0244570654</a>
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-brand-rose-dark">Brand Note</p>
            <p className="text-sm text-[#665954]">Crafting confidence through beautiful hair, thoughtful beauty care, and service you can trust.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
