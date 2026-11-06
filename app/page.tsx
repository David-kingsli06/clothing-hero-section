"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Search,
  User,
  Heart,
  ShoppingBag,
  ArrowRight,
  Menu,
  X,
  Plus,
  Check,
  Flame,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface CollectionSlide {
  id: string;
  seasonTag: string;
  titleLight: string;
  titleItalic: string;
  description: string;
  hoodieName: string;
  colorName: string;
  colorHex: string;
  price: string;
  badge: string;
  image: string;
  bgGradient: string;
  glow: string;
  watermark: string;
}

const SLIDES: CollectionSlide[] = [
  {
    id: "01",
    seasonTag: "EDITION 2026 • DROP 01",
    titleLight: "SHADOW",
    titleItalic: "Collection",
    description:
      "Heavyweight 450 GSM fleece engineered for the perfect oversized drape. Minimalist cuts, raw texture, and effortless street presence.",
    hoodieName: "Onyx Heavyweight Hoodie",
    colorName: "Onyx Black",
    colorHex: "#121417",
    price: "$135",
    badge: "Limited Drop • 42 Remaining",
    image: "/images/boy_grounded.png",
    bgGradient: "from-[#101216] via-[#15181F] to-[#0A0B0E]",
    glow: "rgba(58, 69, 87, 0.28)",
    watermark: "SHADOW 01",
  },
  {
    id: "02",
    seasonTag: "EDITION 2026 • DROP 02",
    titleLight: "CHALK",
    titleItalic: "Edition",
    description:
      "Unbleached optical white cotton fleece with structured drop shoulders. Clean architectural silhouette designed for high-contrast layering.",
    hoodieName: "Pure Chalk Boxy Hoodie",
    colorName: "Chalk White",
    colorHex: "#EAEAEA",
    price: "$140",
    badge: "New Release • Selling Fast",
    image: "/images/boy_white_hoodie.png",
    bgGradient: "from-[#181A20] via-[#202530] to-[#111318]",
    glow: "rgba(180, 195, 220, 0.22)",
    watermark: "CHALK 02",
  },
  {
    id: "03",
    seasonTag: "EDITION 2026 • DROP 03",
    titleLight: "MOSS",
    titleItalic: "Atelier",
    description:
      "Mineral acid-washed earthy sage green with heavyweight double-stitched hood and custom tubular drawstrings. Vintage fade with modern poise.",
    hoodieName: "Vintage Moss Washed Hoodie",
    colorName: "Washed Moss",
    colorHex: "#3E4C41",
    price: "$145",
    badge: "Atelier Exclusive • Hand-Dyed",
    image: "/images/boy_sage_hoodie.png",
    bgGradient: "from-[#121815] via-[#1A2520] to-[#0C120F]",
    glow: "rgba(70, 110, 85, 0.28)",
    watermark: "MOSS 03",
  },
];

const NAV_ITEMS = [
  "New Drops",
  "Hoodies",
  "Tees & Tops",
  "Cargo & Pants",
  "Outerwear",
  "Sale",
];

const SIZES = ["S", "M", "L", "XL"];

export default function LuxuryStreetwearHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hotspotOpen, setHotspotOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState("L");
  const [addedToCart, setAddedToCart] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // Mount animation state
  const [isLoaded, setIsLoaded] = useState(false);

  // Cursor position and Parallax Tilt values
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [tilt, setTilt] = useState({ x: 0, y: 0, rotateY: 0, rotateX: 0 });

  const active = SLIDES[currentSlide];

  const handleSlideChange = (index: number) => {
    if (index === currentSlide) return;
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
      setTimeout(() => setHotspotOpen(true), 1300);
    }, 100);

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const xPct = Math.round((e.clientX / innerWidth) * 100);
      const yPct = Math.round((e.clientY / innerHeight) * 100);
      setMousePos({ x: xPct, y: yPct });

      const normX = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      const normY = (e.clientY - innerHeight / 2) / (innerHeight / 2);

      setTilt({
        x: normX * 10,
        y: normY * 6,
        rotateY: normX * 3,
        rotateX: -normY * 2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleAddToCart = () => {
    setAddedToCart(true);
    setCartCount((prev) => prev + 1);
    setTimeout(() => setAddedToCart(false), 2200);
  };

  return (
    <main
      className={`fixed inset-0 h-screen w-screen overflow-hidden bg-gradient-to-br ${active.bgGradient} text-white flex flex-col justify-between select-none transition-colors duration-1000 ease-in-out`}
      style={{ fontFamily: "var(--font-space), sans-serif" }}
    >
      {/* Dynamic Cursor Spotlight Ambient Glow */}
      <div
        className="pointer-events-none absolute w-[700px] h-[700px] rounded-full blur-[170px] transition-all duration-1000 ease-out"
        style={{
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          transform: "translate(-50%, -50%)",
          background: active.glow,
        }}
      />
      <div className="pointer-events-none absolute -bottom-32 right-10 w-[550px] h-[550px] bg-[#1E2533]/25 rounded-full blur-[150px]" />

      {/* 3D Depth Watermark behind the model with crossfade */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden select-none">
        <div
          className={`flex items-baseline justify-between w-full px-6 lg:px-12 transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{
            transform: `translate3d(${-tilt.x * 0.4}px, ${-tilt.y * 0.3}px, 0)`,
          }}
        >
          <span
            className="text-[13vw] sm:text-[17vw] font-black uppercase tracking-tight text-white/[0.035] leading-none select-none font-mono transition-all duration-700"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            {active.watermark}
          </span>
          <span className="hidden md:inline-block text-[10vw] font-light uppercase tracking-widest text-white/[0.025] leading-none select-none">
            {active.id}
          </span>
        </div>
      </div>

      {/* TOP HEADER */}
      <header
        className={`relative z-40 w-full shrink-0 border-b border-white/5 backdrop-blur-md bg-black/20 transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        <div className="w-full px-8 lg:px-14 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-baseline gap-2.5">
            <span
              className="text-2xl lg:text-3xl font-extrabold tracking-[0.24em] uppercase text-white hover:opacity-90 transition cursor-pointer"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
              KAVRA
            </span>
            <span className="hidden sm:inline-block text-[8px] uppercase tracking-[0.3em] px-2 py-0.5 rounded border border-white/20 text-white/50 font-mono">
              STUDIO
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-10 text-[12px] uppercase tracking-[0.22em] text-white/70 font-medium">
            {NAV_ITEMS.map((item, idx) => (
              <a
                key={item}
                href="#"
                className={`relative py-1 transition-colors hover:text-white group ${
                  idx === 0 ? "text-white font-semibold" : ""
                }`}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action Icons */}
          <div className="flex items-center space-x-5 lg:space-x-6 text-white/80">
            <button
              aria-label="Search"
              className="hover:text-white transition p-1 hover:scale-105"
            >
              <Search className="w-4 h-4 stroke-[1.75]" />
            </button>
            <button
              aria-label="Account"
              className="hover:text-white transition p-1 hidden sm:inline-flex hover:scale-105"
            >
              <User className="w-4 h-4 stroke-[1.75]" />
            </button>
            <button
              aria-label="Wishlist"
              className="hover:text-white transition p-1 hover:scale-105"
            >
              <Heart className="w-4 h-4 stroke-[1.75]" />
            </button>
            <button
              aria-label="Cart"
              className="hover:text-white transition p-1 relative flex items-center hover:scale-105"
            >
              <ShoppingBag className="w-4 h-4 stroke-[1.75]" />
              <span
                className={`text-[10px] font-bold ml-1 text-white bg-white/20 px-1.5 py-0.2 rounded-full transition-all ${
                  cartCount > 0 ? "bg-white text-black font-extrabold scale-110" : ""
                }`}
              >
                {cartCount}
              </span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1 text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#101216]/95 backdrop-blur-xl px-8 py-5 space-y-3 border-b border-white/10">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href="#"
                className="block text-xs uppercase tracking-widest text-white/80 hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO MAIN BODY */}
      <section className="relative z-20 flex-1 w-full max-w-7xl mx-auto px-8 lg:px-14 flex items-center min-h-0">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-center h-full">
          {/* Left Column: Text & Actions */}
          <div
            className={`lg:col-span-7 flex flex-col justify-center space-y-5 lg:space-y-6 z-20 py-4 transition-all duration-700 ${
              isLoaded
                ? "opacity-100 translate-x-0 filter blur-0"
                : "opacity-0 -translate-x-8 filter blur-[4px]"
            }`}
          >
            {/* Live Drop Pill */}
            <div className="flex items-center space-x-3 text-[11px] tracking-[0.25em] uppercase text-zinc-300 font-mono">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-[10px] text-zinc-200">
                <Flame className="w-3 h-3 text-amber-400 fill-amber-400 animate-pulse" />
                {active.badge}
              </span>
            </div>

            {/* Headline with smooth cross-dissolve */}
            <div className="space-y-1">
              <h1 className="leading-[0.96] tracking-tight">
                <span
                  key={`title-${active.id}`}
                  className="block text-4xl sm:text-5xl lg:text-[62px] font-extrabold uppercase text-white tracking-[0.06em] transition-all duration-700 animate-in fade-in slide-in-from-bottom-2"
                  style={{ fontFamily: "var(--font-syne), sans-serif" }}
                >
                  {active.titleLight}
                </span>
                <span
                  key={`sub-${active.id}`}
                  className="block text-3xl sm:text-4xl lg:text-[54px] font-normal tracking-wide text-zinc-300 capitalize transition-all duration-700 animate-in fade-in slide-in-from-bottom-2"
                  style={{ fontFamily: "var(--font-italiana), serif" }}
                >
                  {active.titleItalic}
                </span>
              </h1>
            </div>

            {/* Sub-description */}
            <p className="text-xs sm:text-sm lg:text-[15px] text-zinc-400 max-w-md leading-relaxed font-light tracking-wide transition-opacity duration-700">
              {active.description}
            </p>

            {/* COLORWAY SWITCHER */}
            <div className="flex items-center gap-3 pt-1">
              <span className="text-[11px] uppercase tracking-[0.2em] text-zinc-400 font-mono">
                Colorway:
              </span>
              <div className="flex items-center gap-2">
                {SLIDES.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => handleSlideChange(idx)}
                    title={slide.colorName}
                    className={`relative w-7 h-7 rounded-full border transition-all duration-500 ease-out flex items-center justify-center ${
                      currentSlide === idx
                        ? "border-white scale-110 shadow-lg shadow-white/20"
                        : "border-white/25 hover:border-white/60 opacity-70 hover:opacity-100"
                    }`}
                    style={{ backgroundColor: slide.colorHex }}
                  >
                    {currentSlide === idx && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white shadow-sm" />
                    )}
                  </button>
                ))}
              </div>
              <span className="text-xs text-white/90 font-medium ml-1">
                {active.colorName}
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href="#shop"
                className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-[0.16em] shadow-lg shadow-white/10 hover:bg-zinc-200 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Shop {active.titleLight}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#explore"
                className="inline-flex items-center px-8 py-3.5 rounded-full border border-white/25 hover:border-white text-white font-medium text-xs uppercase tracking-[0.16em] hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                <span>Explore All</span>
              </a>
            </div>

            {/* Slide Index Counter with Prev/Next Micro Steppers */}
            <div className="pt-3 lg:pt-4 flex items-center gap-4 text-xs sm:text-sm tracking-[0.25em] text-zinc-400 font-mono">
              <span className="font-bold text-white">{active.id}</span>
              <span className="w-8 h-[1px] bg-zinc-600" />
              <span className="text-zinc-600">0{SLIDES.length}</span>

              <div className="flex items-center gap-1.5 ml-4">
                <button
                  onClick={() =>
                    handleSlideChange(
                      (currentSlide - 1 + SLIDES.length) % SLIDES.length
                    )
                  }
                  className="p-1 rounded-full border border-white/10 hover:border-white/50 transition hover:bg-white/10"
                  aria-label="Previous Outfit"
                >
                  <ChevronLeft className="w-3.5 h-3.5 text-white/80" />
                </button>
                <button
                  onClick={() =>
                    handleSlideChange((currentSlide + 1) % SLIDES.length)
                  }
                  className="p-1 rounded-full border border-white/10 hover:border-white/50 transition hover:bg-white/10"
                  aria-label="Next Outfit"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-white/80" />
                </button>
              </div>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-5 pointer-events-none" />
        </div>
      </section>

      {/* MODEL SHOWCASE: TRIPLE LAYER FLUID CROSSFADE */}
      <div
        className={`absolute bottom-0 right-4 sm:right-10 lg:right-14 xl:right-24 z-20 w-[380px] sm:w-[460px] md:w-[520px] lg:w-[580px] xl:w-[620px] h-[calc(100vh-120px)] max-h-[720px] flex items-end justify-end pointer-events-none transition-all duration-[1300ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isLoaded
            ? "opacity-100 translate-y-0 scale-100 filter blur-0"
            : "opacity-0 translate-y-16 scale-95 filter blur-[8px]"
        }`}
        style={{ perspective: 1000 }}
      >
        <div
          className="relative w-full h-full pointer-events-auto group transition-transform duration-300 ease-out"
          style={{
            transform: `translate3d(${tilt.x}px, ${tilt.y}px, 0) rotateY(${tilt.rotateY}deg) rotateX(${tilt.rotateX}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Stacked Persistent Image Layers for Seamless Zero-Flicker Crossfade */}
          {SLIDES.map((slide, idx) => {
            const isCurrent = idx === currentSlide;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out pointer-events-none ${
                  isCurrent
                    ? "opacity-100 scale-100 translate-x-0 filter blur-0"
                    : "opacity-0 scale-[0.98] translate-x-4 filter blur-[2px]"
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.hoodieName}
                  fill
                  priority
                  className="object-contain object-bottom drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)]"
                />
              </div>
            );
          })}

          {/* INTERACTIVE HOTSPOT PIN */}
          <div
            className={`absolute top-[48%] left-[42%] z-30 transition-all duration-700 delay-300 ${
              isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
          >
            <button
              onClick={() => setHotspotOpen(!hotspotOpen)}
              className="relative group/pin p-2 focus:outline-none"
              aria-label="Toggle product tag"
            >
              <span className="absolute -inset-1 rounded-full bg-white/30 animate-ping" />
              <span className="relative flex items-center justify-center w-6 h-6 rounded-full bg-white text-black shadow-xl shadow-black/80 hover:scale-110 transition-transform">
                <Plus
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    hotspotOpen ? "rotate-45" : "rotate-0"
                  }`}
                />
              </span>
            </button>

            {/* Glassmorphic Product Card with smooth update */}
            {hotspotOpen && (
              <div className="absolute top-8 -left-20 sm:-left-28 w-60 sm:w-64 p-3.5 rounded-2xl bg-black/85 backdrop-blur-xl border border-white/20 shadow-2xl text-left transition-all duration-500 animate-in fade-in zoom-in-95">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-zinc-400 font-mono transition-opacity duration-300">
                      {active.colorName}
                    </span>
                    <h2 className="text-xs font-semibold text-white tracking-wide transition-opacity duration-300">
                      {active.hoodieName}
                    </h2>
                  </div>
                  <span className="text-xs font-bold text-white font-mono transition-opacity duration-300">
                    {active.price}
                  </span>
                </div>

                <div className="mt-2.5 flex items-center justify-between text-[11px] text-zinc-300">
                  <span className="text-[10px] text-zinc-400 font-mono uppercase">
                    Select Size:
                  </span>
                  <div className="flex gap-1">
                    {SIZES.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-5 h-5 rounded text-[10px] font-mono flex items-center justify-center transition-colors ${
                          selectedSize === size
                            ? "bg-white text-black font-bold"
                            : "bg-white/10 text-white/70 hover:bg-white/20"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleAddToCart}
                  className={`mt-3 w-full py-2 rounded-xl text-[11px] font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all ${
                    addedToCart
                      ? "bg-emerald-500 text-white"
                      : "bg-white text-black hover:bg-zinc-200"
                  }`}
                >
                  {addedToCart ? (
                    <>
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      Added to Bag
                    </>
                  ) : (
                    <>
                      <Plus className="w-3 h-3 stroke-[2.5]" />
                      Quick Add ({selectedSize})
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* FOOTER PAGINATION DOTS */}
      <footer
        className={`relative z-30 shrink-0 pb-5 pt-2 flex items-center justify-center transition-opacity duration-1000 delay-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex items-center space-x-3">
          {SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => handleSlideChange(idx)}
              aria-label={`Switch to ${slide.colorName}`}
              className={`rounded-full transition-all duration-500 ease-out ${
                idx === currentSlide
                  ? "w-8 h-2 bg-white shadow-md shadow-white/30"
                  : "w-2 h-2 bg-zinc-600 hover:bg-zinc-400"
              }`}
            />
          ))}
        </div>
      </footer>
    </main>
  );
}
