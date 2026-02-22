"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import { useState, useEffect,useRef  } from "react";

// const products = [
//   {
//     id: 1,
//     slug: "hair-loss-tablet",   // ✅ ADD THIS
//     name: "Hair Loss Tablet",
//     subtitle: "Finasteride 1mg",
//     description: "Clinically proven to halt hair loss in 94% of men. Daily tablet that blocks DHT — the hormone responsible for male pattern baldness.",
//     price: "£25/month",
//     image: "https://cdn.shopify.com/s/files/1/0255/7725/9086/files/otal_tab_img.jpg?v=1727183490",
//     badge: "Best Seller",
//   },
//   {
//     id: 2,
//     slug: "minoxidil-spray",   // ✅ ADD THIS
//     name: "Minoxidil Spray",
//     subtitle: "5% Minoxidil Solution",
//     description: "Reactivates dormant hair follicles and stimulates new growth. Apply directly to the scalp twice daily for visible results.",
//     price: "£20/month",
//     image: "https://cdn.shopify.com/s/files/1/0255/7725/9086/files/minox-s.jpg?v=1730906266",
//     badge: "Popular",
//   },
//   {
//     id: 3,
//     slug: "combination-spray",   // ✅ ADD THIS
//     name: "Combination Spray",
//     subtitle: "Finasteride + Minoxidil",
//     description: "The ultimate dual-action treatment combining both active ingredients in one easy spray for maximum results.",
//     price: "£35/month",
//     image: "https://cdn.shopify.com/s/files/1/0255/7725/9086/files/hgc_img.jpg?v=1727183490",
//     badge: "Most Effective",
//   },
//   {
//     id: 4,
//     slug: "hair-growth-shampoo",   // ✅ ADD THIS
//     name: "Hair Growth Shampoo",
//     subtitle: "Ketoconazole Formula",
//     description: "Medicated shampoo that reduces scalp inflammation and complements your treatment plan for healthier, fuller hair.",
//     price: "£15/month",
//     image: "https://cdn.shopify.com/s/files/1/0255/7725/9086/files/shampoo_img.jpg?v=1727183490",
//     badge: "Add-On",
//   },
// ];

const faqData = [
  {
    q: "Is hair transplant permanent?",
    a: "Yes, transplanted hair is permanent and grows naturally."
  },
  {
    q: "Is the procedure painful?",
    a: "No, local anesthesia makes the procedure comfortable."
  },
  {
    q: "How long is recovery?",
    a: "Recovery usually takes 7–10 days."
  },
  {
    q: "When will I see results?",
    a: "Visible results start from 3 months."
  },
  {
    q: "Do you offer EMI?",
    a: "Yes, flexible EMI options are available."
  }
];

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [bannerIdx, setBannerIdx] = useState(0);
  const tackleRef = useRef(null);
  const productRef = useRef(null);
  const ambassadorRef = useRef(null);
  const [openFAQ, setOpenFAQ] = useState(null);

   const containerRef = useRef(null);
  const [sliderPos, setSliderPos] = useState(50);

  const handleMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let percent = (x / rect.width) * 100;
    if (percent < 0) percent = 0;
    if (percent > 100) percent = 100;
    setSliderPos(percent);
  };

  const banners = [
    "Save 40% + Free Welcome Pack* — Shop Now",
    "400,000+ Happy Customers",
    "UK Licensed Experts & Free Delivery*",
  ];

  useEffect(() => {
    const t = setInterval(() => setBannerIdx((i) => (i + 1) % banners.length), 3000);
    return () => clearInterval(t);
  }, []);

 useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target;

        if (entry.intersectionRatio > 0.35) {
          el.classList.add("show");
        } 
        else if (entry.intersectionRatio < 0.15) {
          el.classList.remove("show");
        }
      });
    },
    {
      threshold: [0, 0.35, 0.35]
    }
  );

  if (tackleRef.current) observer.observe(tackleRef.current);
  if (productRef.current) observer.observe(productRef.current);
  if (ambassadorRef.current) observer.observe(ambassadorRef.current);

  return () => observer.disconnect();
}, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", background: "#fff", color: "#1a1a1a", overflowX: "hidden" }}>
      <style>{`
     *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
     a { color: inherit; text-decoration: none; }
        @keyframes fadeSlide { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes pulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.04)} }
        @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        .hero-text { animation: fadeSlide 0.9s ease both; }
        .hero-sub { animation: fadeSlide 1.1s 0.2s ease both; }
        .hero-cta { animation: fadeSlide 1.2s 0.4s ease both; }
        .card:hover { transform: translateY(-6px); box-shadow: 0 2px 2px; }
        .card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .btn-red { background: #e6e6e6; color: #111; border: none; padding: 14px 32px; font-size: 1rem; font-family: inherit; letter-spacing: 0.05em; cursor: pointer; transition: background 0.2s; }
        .btn-red:hover { background: #111; color:#fff }
        .btn-outline { background: transparent; color: #4100e5; border: 2px solid #4100e5; padding: 13px 32px; font-size: 1rem; font-family: inherit; letter-spacing: 0.05em; cursor: pointer; transition: all 0.2s; }
        .btn-outline:hover { background: #4100e5; color: #fff; }
        .step-num { width: 56px; height: 56px; border-radius: 50%; background: #4100e5; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 1.4rem; font-weight: bold; margin: 0 auto 20px; }
        // a { color: inherit; text-decoration: none; }
        .nav-link { font-size: 0.9rem; letter-spacing: 0.08em; text-transform: uppercase; cursor: pointer; padding: 8px 0; border-bottom: 2px solid transparent; transition: border-color 0.2s; }
        .nav-link:hover { border-color: #4100e5; }
        .marquee-track { display: flex; width: max-content; animation: marquee 24s linear infinite; }
        @media(max-width:768px){
          .hero-grid { flex-direction: column !important; }
          .products-grid { grid-template-columns: 1fr 1fr !important; }
          .amb-grid { grid-template-columns: 1fr !important; }
          .steps-grid { grid-template-columns: 1fr !important; }
        }
        @media(max-width:480px){
          .products-grid { grid-template-columns: 1fr !important; }
        }
         .slide-right {
  opacity: 0;
  transform: translateX(80px);
  transition: all 0.8s ease;
}

.slide-up {
  opacity: 0;
  transform: translateY(80px);
  transition: all 0.8s ease;
}

.show {
  opacity: 1;
  transform: translate(0,0);
}
  .marquee-wrapper {
  background: #111;
  color: #fff;
  overflow: hidden;
  padding: 2vw 0;
}

.marquee-track {
  display: flex;
  width: max-content;
  gap: 80px;
  animation: marqueeScroll 18s linear infinite;
}

.marquee-track span {
  font-size: 2rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  white-space: nowrap;
}

@keyframes marqueeScroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}
  
      `}</style>      

    

      {/* HERO */}
      <section style={{ 
  background: "#1a1d1f", // Deep Matte Black for better contrast
  color: "#fff", 
  padding: "0 5%", 
  height: "100vh", // Full viewport height
  width: "100%", 
  position: "relative", 
  display: "flex", 
  alignItems: "center",
  overflow: "hidden" 
}}>
  {/* Background Subtle Gradient Overlay */}
  <div style={{ 
    position: "absolute", 
    inset: 0, 
    background: "radial-gradient(circle at 20% 30%, rgba(65, 0, 229, 0.05) 0%, transparent 50%)",
    zIndex: 1 
  }} />
  
  <div className="hero-grid" style={{ 
    position: "relative", 
    zIndex: 2, 
    display: "flex", 
    alignItems: "center", 
    gap: "80px", // Gap thoda badhaya balance ke liye
    width: "100%", 
    maxWidth: "1250px", 
    margin: "0 auto" 
  }}>
    
    {/* LEFT CONTENT AREA */}
    <div style={{ flex: 1.2 }}>
      <h1 style={{ 
        fontFamily: "'Playfair Display', serif", // Luxury Font
        fontSize: "clamp(2.8rem, 6vw, 5.2rem)", 
        lineHeight: 1, 
        fontWeight: "700", 
        marginBottom: "24px",
        letterSpacing: "-0.02em"
      }}>
        Show hair loss<br />
        <span style={{ 
          fontStyle: "italic", 
          fontWeight: "400", 
          color: "#fcfaf9",
          opacity: 0.9 
        }}>who's boss</span>
      </h1>

      <p style={{ 
        fontSize: "1.15rem", 
        lineHeight: "1.8", 
        color: "rgba(255,255,255,0.7)", 
        marginBottom: "40px", 
        maxWidth: "500px",
        fontWeight: "300"
      }}>
        Combat hair loss with clinically proven treatments. The only UK license holder for the most effective hair loss solutions.
      </p>

      {/* STYLISH LIST */}
      <ul style={{ 
        listStyle: "none", 
        marginBottom: "48px", 
        display: "flex", 
        flexDirection: "column", 
        gap: "16px",
        padding: 0 
      }}>
        {["Results in 3–6 months", "Flexible subscriptions, free delivery*", "UK licensed experts & aftercare team"].map(item => (
          <li key={item} style={{ display: "flex", alignItems: "center", gap: "12px", color: "#efefef", fontSize: "1rem" }}>
            <span style={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
              width: "22px", 
              height: "22px", 
              background: "rgba(255,255,255,0.1)", 
              borderRadius: "50%",
              fontSize: "0.8rem",
              color: "#4ade80" // Success Green Tick
            }}>✓</span> {item}
          </li>
        ))}
      </ul>

      {/* CTA BUTTONS */}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <button style={{ 
          fontSize: "1rem", 
          padding: "18px 44px", 
          background: "#fff", // White button on dark background stands out
          color: "#111", 
          fontWeight: "600",
          border: "none",
          borderRadius: "50px",
          cursor: "pointer",
          transition: "all 0.3s ease",
          boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
        }}
        onMouseEnter={e => e.target.style.transform = "translateY(-3px)"}
        onMouseLeave={e => e.target.style.transform = "translateY(0)"}
        >
          Get Started
        </button>

        <button style={{ 
          fontSize: "1rem", 
          padding: "18px 44px", 
          background: "transparent", 
          color: "#fff", 
          border: "1px solid rgba(255,255,255,0.3)",
          borderRadius: "50px",
          cursor: "pointer",
          transition: "all 0.3s ease"
        }}
        onMouseEnter={e => e.target.style.background = "rgba(255,255,255,0.05)"}
        onMouseLeave={e => e.target.style.background = "transparent"}
        >
          Learn More
        </button>
      </div>

      <p style={{ marginTop: "24px", fontSize: "0.75rem", color: "#666", letterSpacing: "0.5px" }}>
        *New customers only. Terms apply.
      </p>
    </div>

    {/* RIGHT IMAGE AREA - Added Depth */}
    <div style={{ 
      flex: 1, 
      position: "relative", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center" 
    }}>
      {/* Background shape for image pop */}
      <div style={{
        position: "absolute",
        width: "120%",
        height: "120%",
        background: "rgba(255,255,255,0.02)",
        borderRadius: "50%",
        zIndex: -1
      }} />

      <img 
        src="https://cdn.shopify.com/s/files/1/0255/7725/9086/files/hgc_img.jpg?v=1727183490" 
        alt="Hero Product" 
        style={{ 
          width: "100%", 
          borderRadius: "30px", // Softer edges
          boxShadow: "0 50px 100px -20px rgba(0,0,0,0.5)",
          objectFit: "cover" 
        }} 
      />
      
      {/* FLOATING GLASS TRUST BADGE */}
      <div style={{ 
        position: "absolute", 
        bottom: "40px", 
        left: "-30px", 
        background: "rgba(255,255,255,0.95)", // Glass effect
        backdropFilter: "blur(10px)",
        color: "#111", 
        padding: "20px 30px", 
        borderRadius: "20px",
        boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
        textAlign: "center"
      }}>
        <div style={{ fontSize: "2.2rem", fontWeight: "800", lineHeight: "1" }}>400K+</div>
        <div style={{ fontSize: "0.7rem", fontWeight: "700", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "5px", color: "#666" }}>
          Happy Customers
        </div>
      </div>
    </div>

  </div>
</section>

      {/* Products */}
      <section ref={productRef} className="slide-up" style={{ 
  padding: "100px 5%", 
  background: "#fcfaf9", // Slightly warmer off-white
  fontFamily: "'Poppins', sans-serif" 
}}>
  <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
    
    {/* HEADING SECTION */}
    <h2 style={{ 
      textAlign: "center", 
      fontFamily: "'Playfair Display', serif", // Luxury Serif Font
      fontSize: "clamp(2rem, 5vw, 3rem)", 
      marginBottom: "16px",
      color: "#1a1a1a"
    }}>
      Clinically Proven Treatment Plans
    </h2>
    <p style={{ 
      textAlign: "center", 
      color: "#6b7280", 
      marginBottom: "64px", 
      fontSize: "1.1rem",
      fontWeight: "300"
    }}>
      Tailored to you, delivered to your door.
    </p>

    {/* PRODUCTS GRID */}
    <div className="products-grid" style={{ 
      display: "grid", 
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", // Responsive grid
      gap: "32px" 
    }}>
      {products.map(p => (
        <div key={p.id} className="card" style={{ 
          background: "#fff", 
          overflow: "hidden", 
          borderRadius: "24px", // Rounded corners for modern feel
          border: "1px solid rgba(0,0,0,0.05)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.03)", // Subtle depth
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          cursor: "pointer"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-10px)";
          e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.08)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.03)";
        }}>
          
          {/* IMAGE SECTION */}
          <div style={{ position: "relative", overflow: "hidden" }}>
            <img src={p.image} alt={p.name} style={{ 
              width: "100%", 
              height: "240px", 
              objectFit: "cover", 
              display: "block",
              transition: "transform 0.5s ease"
            }} 
            className="product-img"
            />
            {/* STYLISH BADGE */}
            <span style={{ 
              position: "absolute", 
              top: "16px", 
              left: "16px", 
              background: "#1a1a1a", 
              color: "#fff", 
              padding: "6px 14px", 
              fontSize: "0.65rem", 
              fontWeight: "700",
              borderRadius: "50px",
              letterSpacing: "0.1em", 
              textTransform: "uppercase" 
            }}>
              {p.badge}
            </span>
          </div>

          {/* CONTENT SECTION */}
          <div style={{ padding: "28px" }}>
            <div style={{ 
              fontSize: "0.7rem", 
              letterSpacing: "0.15em", 
              textTransform: "uppercase", 
              color: "#6366f1", // Cleaner Indigo color
              fontWeight: "700",
              marginBottom: "12px" 
            }}>
              {p.subtitle}
            </div>
            
            <h3 style={{ 
              fontSize: "1.3rem", 
              fontWeight: "600", 
              marginBottom: "12px",
              color: "#111",
              fontFamily: "'Playfair Display', serif"
            }}>
              {p.name}
            </h3>
            
            <p style={{ 
              fontSize: "0.9rem", 
              color: "#4b5563", 
              lineHeight: 1.7, 
              marginBottom: "24px",
              minHeight: "60px" // Keeps buttons aligned
            }}>
              {p.description}
            </p>

            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "space-between",
              borderTop: "1px solid #f3f4f6",
              paddingTop: "20px"
            }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "0.75rem", color: "#9ca3af" }}>Starting at</span>
                <span style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#111" }}>{p.price}</span>
              </div>
              
            <Link href={`/products/${p.slug}`}>
  <button style={{ 
    padding: "12px 20px", 
    fontSize: "0.85rem",
    fontWeight: "600",
    backgroundColor: "#111",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "background 0.2s"
  }}
  onMouseOver={(e) => e.target.style.background = "#333"}
  onMouseOut={(e) => e.target.style.background = "#111"}
  >
    Add to Plan
  </button>
</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Marquee */}
     <div className="marquee-wrapper">
  <div className="marquee-track">
    <span>REVIVE YOUR HAIR</span>
    <span>REVIVE YOUR HAIR</span>
    <span>REVIVE YOUR HAIR</span>
    <span>REVIVE YOUR HAIR</span>
    <span>REVIVE YOUR HAIR</span>
    <span>REVIVE YOUR HAIR</span>
  </div>
</div>

      {/* Tackle Section */}
<section ref={tackleRef} className="slide-right" style={{ 
  padding: "100px 5%", 
  background: "#fcfaf9", // Consistent warmer background
  fontFamily: "'Poppins', sans-serif" 
}}>
  <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
    
    {/* HEADING SECTION */}
    <div style={{ textAlign: "center", marginBottom: "60px" }}>
      <h2 style={{ 
        fontFamily: "'Playfair Display', serif", // Luxury font consistency
        fontSize: "clamp(2.2rem, 5vw, 3.2rem)", 
        fontWeight: "700", 
        marginBottom: "16px",
        color: "#1a1a1a" 
      }}>
        What's your hair goal?
      </h2>
      <p style={{ 
        color: "#6b7280", 
        fontSize: "1.1rem", 
        maxWidth: "600px", 
        margin: "0 auto",
        fontWeight: "300" 
      }}>
        Select a concern to unlock your personalized, science-backed treatment plan.
      </p>
    </div>

    {/* GRID SECTION */}
    <div style={{ 
      display: "grid", 
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
      gap: "40px", 
      maxWidth: "1000px", 
      margin: "0 auto" 
    }}>
      {[
        { label: "Hair Loss", img: "https://cdn.shopify.com/s/files/1/0255/7725/9086/files/tackle1.jpg?v=1724248564", desc: "Regrow and strengthen" },
        { label: "Beard Growth", img: "https://cdn.shopify.com/s/files/1/0255/7725/9086/files/tackle2.jpg?v=1724248563", desc: "Fill patches and thicken" },
      ].map((t, index) => (
        <div 
          key={index} 
          className="tackle-card"
          style={{ 
            position: "relative", 
            borderRadius: "32px", // Consistent rounded corners
            overflow: "hidden", 
            cursor: "pointer",
            aspectRatio: "1/1.2", // More modern taller aspect ratio
            boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
            transition: "all 0.4s ease-in-out"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.querySelector('.img-container').style.transform = "scale(1.1)";
            e.currentTarget.querySelector('.overlay').style.background = "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)";
            e.currentTarget.querySelector('.pill-button').style.transform = "translate(-50%, -60%)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.querySelector('.img-container').style.transform = "scale(1)";
            e.currentTarget.querySelector('.overlay').style.background = "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 40%)";
            e.currentTarget.querySelector('.pill-button').style.transform = "translate(-50%, -50%)";
          }}
        >
          {/* IMAGE CONTAINER */}
          <div className="img-container" style={{ width: "100%", height: "100%", transition: "transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)" }}>
            <img 
              src={t.img} 
              alt={t.label} 
              style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(20%)" }} // Slight grayscale for luxury feel
            />
          </div>

          {/* GRADIENT OVERLAY */}
          <div className="overlay" style={{ 
            position: "absolute", 
            inset: 0, 
            background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 40%)",
            transition: "all 0.4s ease",
            zIndex: 1
          }} />

          {/* FLOATING TEXT & PILL */}
          <div className="pill-button" style={{ 
            position: "absolute", 
            top: "50%", 
            left: "50%", 
            transform: "translate(-50%, -50%)", 
            zIndex: 2,
            width: "100%",
            textAlign: "center",
            transition: "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
          }}>
            <span style={{ 
              background: "#fff", 
              padding: "16px 40px", 
              borderRadius: "100px", 
              fontSize: "1.2rem", 
              fontWeight: "600",
              color: "#111",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              display: "inline-block",
              letterSpacing: "0.5px"
            }}>
              {t.label}
            </span>
            <div style={{ 
              color: "#fff", 
              marginTop: "15px", 
              fontSize: "0.9rem", 
              opacity: 0.9,
              fontWeight: "300"
            }}>
              {t.desc}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* result */}
       
   <section style={{
  padding: "120px 5%",
  background: "#fcfaf9", // Consistent warmer background
  display: "flex",
  justifyContent: "center",
  fontFamily: "'Poppins', sans-serif"
}}>

  <div style={{ maxWidth: "1100px", width: "100%", textAlign: "center" }}>
    
    {/* HEADING AREA */}
    <h2 style={{
      fontFamily: "'Playfair Display', serif",
      fontSize: "clamp(2.5rem, 5vw, 3.8rem)",
      marginBottom: "10px",
      color: "#1a1a1a",
      fontWeight: "700"
    }}>
      See Your Dream Hair <br/> Come to Life
    </h2>
    <p style={{ color: "#666", marginBottom: "60px", fontSize: "1.1rem", fontWeight: "300" }}>
      Drag the slider to witness the professional transformation
    </p>

    {/* SLIDER CONTAINER */}
    <div
      ref={containerRef}
      onMouseMove={(e) => e.buttons === 1 && handleMove(e)}
      onTouchMove={(e) => handleMove(e.touches[0])}
      style={{
        position: "relative",
        width: "100%",
        height: "600px",
        overflow: "hidden",
        borderRadius: "40px",
        cursor: "ew-resize",
        boxShadow: "0 30px 70px rgba(0,0,0,0.12)",
        backgroundColor: "#eee"
      }}
    >
      {/* FLOATING STATUS BADGES */}
      <div style={{
        position: "absolute",
        top: "30px",
        left: "30px",
        zIndex: 10,
        background: "rgba(0,0,0,0.4)",
        backdropFilter: "blur(10px)",
        color: "#fff",
        padding: "6px 20px",
        borderRadius: "50px",
        fontSize: "0.75rem",
        letterSpacing: "2px",
        textTransform: "uppercase",
        border: "1px solid rgba(255,255,255,0.2)"
      }}>Before</div>

      <div style={{
        position: "absolute",
        top: "30px",
        right: "30px",
        zIndex: 10,
        background: "rgba(255,255,255,0.7)",
        backdropFilter: "blur(10px)",
        color: "#1a1a1a",
        padding: "6px 20px",
        borderRadius: "50px",
        fontSize: "0.75rem",
        letterSpacing: "2px",
        textTransform: "uppercase",
        border: "1px solid rgba(255,255,255,0.5)"
      }}>After</div>

      {/* IMAGES */}
      <img
        src="/after.avif"
        alt="After Treatment"
        style={{ width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }}
      />

      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: `${sliderPos}%`,
        height: "100%",
        overflow: "hidden",
        zIndex: 2,
        borderRight: "3px solid #fff"
      }}>
        <img
          src="/before.jpg"
          alt="Before Treatment"
          style={{ 
            width: "1100px", // Exact same as maxWidth of parent
            height: "600px",
            objectFit: "cover",
            pointerEvents: "none"
          }}
        />
      </div>

      {/* INTERACTIVE HANDLE - With Pulse Effect */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: `${sliderPos}%`,
        transform: "translate(-50%, -50%)",
        width: "60px",
        height: "60px",
        background: "#fff",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 20,
        boxShadow: "0 0 30px rgba(0,0,0,0.25)"
      }}>
        <div style={{ display: "flex", gap: "4px" }}>
            <span style={{ fontSize: "1.2rem", color: "#111" }}>‹</span>
            <span style={{ fontSize: "1.2rem", color: "#111" }}>›</span>
        </div>
      </div>
    </div>

    {/* CALL TO ACTION - Elevated Style */}
    <div style={{ marginTop: "60px" }}>
      <button 
        style={{
          padding: "22px 60px",
          fontSize: "0.9rem",
          fontWeight: "700",
          backgroundColor: "#4100e5", // Purple to match your branding
          color: "#fff",
          border: "none",
          borderRadius: "100px",
          cursor: "pointer",
          boxShadow: "0 15px 35px rgba(65,0,229,0.3)",
          textTransform: "uppercase",
          letterSpacing: "2px",
          transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05) translateY(-5px)";
          e.currentTarget.style.boxShadow = "0 20px 45px rgba(65,0,229,0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1) translateY(0)";
          e.currentTarget.style.boxShadow = "0 15px 35px rgba(65,0,229,0.3)";
        }}
      >
        Book Your Transformation Now
      </button>
      <p style={{ marginTop: "20px", fontSize: "0.85rem", color: "#888", fontStyle: "italic" }}>
        *Results may vary. Based on a 6-month treatment plan.
      </p>
    </div>

  </div>
</section>

      {/* Cost Effective Banner */}
      {/* <section style={{ background: "#111", color: "#fff", padding: "56px 5%", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.4rem)", marginBottom: "16px", lineHeight: 1.3 }}>
            Treatment plans up to 50% more cost effective than high street pharmacies and clinics.
          </h2>
          <div style={{ display: "flex", justifyContent: "center", gap: "40px", marginTop: "36px", flexWrap: "wrap" }}>
            {[["94%", "Success Rate"], ["400K+", "Customers"], ["3–6mo", "Results"]].map(([val, label]) => (
              <div key={label}>
                <div style={{ fontSize: "2.5rem", fontWeight: "bold" }}>{val}</div>
                <div style={{ fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.85 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* money back */}
       {/* <section style={{
  padding: "100px 5%",
  background: "#f5f5f5",
  display: "flex",
  justifyContent: "center"
}}>

  <div style={{
    maxWidth: "1200px",
    width: "100%",
    display: "flex",
    gap: "60px",
    alignItems: "center"
  }}>

    LEFT IMAGE
    <div style={{
      flex: 1,
      position: "relative"
    }}>

      <img 
        src="https://images.unsplash.com/photo-1588776814546-daab30f310ce"
        style={{
          width: "100%",height:"400px",
          borderRadius: "30px",
          objectFit: "cover"
        }}
      />

      BADGE
      <div style={{
        position: "absolute",
        top: "20px",
        right: "20px",
        background: "#4100e5",
        color: "#fff",
        width: "140px",
        height: "140px",
        borderRadius: "50%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        fontWeight: "bold",
        boxShadow: "0 10px 40px rgba(65,0,229,0.3)"
      }}>
        <div style={{ fontSize: "14px" }}>Sons promise</div>
        <div style={{ fontSize: "34px" }}>180</div>
        <div style={{ fontSize: "16px" }}>days</div>
      </div>

    </div>


    RIGHT TEXT
    <div style={{ flex: 1 }}>

      <h2 style={{
        fontSize: "clamp(2rem, 4vw, 3rem)",
        marginBottom: "20px"
      }}>
        Money back guarantee
      </h2>

      <p style={{
        color: "#555",
        lineHeight: "1.7",
        marginBottom: "20px"
      }}>
        Our clinically-backed treatments have been proven to halt hair loss for 94% of men. 
        That’s most guys. However, this does mean that a small few won’t respond to the treatment.
      </p>

      <p style={{
        color: "#555",
        lineHeight: "1.7",
        marginBottom: "20px"
      }}>
        So... we’ve created The Sons Promise - a results-backed guarantee for new customers who follow 
        their prescribed treatment for six months.
      </p>

      <p style={{
        color: "#555",
        lineHeight: "1.7",
        marginBottom: "20px"
      }}>
        If you’ve stuck to the plan and still haven’t seen improvement, we’ll give you your money back. 
        No drama, just bringing back the good hair days.
      </p>

      <a href="#" style={{
        color: "#111",
        textDecoration: "underline",
        fontWeight: "500"
      }}>
        See full terms & conditions
      </a>

    </div>

  </div>

</section> */}
<section style={{
  padding: "120px 5%",
  background: "#fcfaf9", // Consistent warmer tone
  display: "flex",
  justifyContent: "center",
  fontFamily: "'Poppins', sans-serif"
}}>

  <div style={{
    maxWidth: "1200px",
    width: "100%",
    display: "flex",
    gap: "80px", // More breathing room
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap" // Responsive awareness
  }}>

    {/* LEFT IMAGE WITH STYLISH BADGE */}
    <div style={{
      flex: "1 1 450px",
      position: "relative"
    }}>
      <div style={{
        position: "relative",
        borderRadius: "40px",
        overflow: "hidden",
        boxShadow: "0 20px 50px rgba(0,0,0,0.1)"
      }}>
        <img 
          src="https://images.unsplash.com/photo-1588776814546-daab30f310ce"
          alt="Professional Treatment"
          style={{
            width: "100%",
            height: "500px",
            objectFit: "cover",
            display: "block"
          }}
        />
        {/* Subtle Overlay to make badge pop */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(45deg, rgba(0,0,0,0.1), transparent)"
        }} />
      </div>

      {/* REFINED BADGE - Glassmorphism style */}
      <div style={{
        position: "absolute",
        top: "-30px",
        right: "-20px",
        background: "#4100e5",
        color: "#fff",
        width: "160px",
        height: "160px",
        borderRadius: "50%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        boxShadow: "0 15px 35px rgba(65,0,229,0.4)",
        border: "4px solid #fff",
        zIndex: 2
      }}>
        <div style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", opacity: 0.9 }}>Sons promise</div>
        <div style={{ fontSize: "42px", fontWeight: "800", lineHeight: "1" }}>180</div>
        <div style={{ fontSize: "16px", fontWeight: "500" }}>days</div>
      </div>
    </div>


    {/* RIGHT TEXT CONTENT */}
    <div style={{ flex: "1 1 500px" }}>
      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
        lineHeight: "1.1",
        marginBottom: "30px",
        color: "#1a1a1a"
      }}>
        Money back <br/> guarantee
      </h2>

      <div style={{ 
        color: "#4b5563", 
        fontSize: "1.05rem", 
        lineHeight: "1.8",
        fontWeight: "300"
      }}>
        <p style={{ marginBottom: "24px" }}>
          Our clinically-backed treatments have been proven to halt hair loss for 
          <strong style={{ color: "#111", fontWeight: "600" }}> 94% of men.</strong> 
          That’s most guys. However, this does mean that a small few won’t respond to the treatment.
        </p>

        <p style={{ marginBottom: "24px" }}>
          So... we’ve created <span style={{ fontWeight: "600", color: "#111" }}>The Sons Promise</span> - a results-backed guarantee for new customers who follow 
          their prescribed treatment for six months.
        </p>

        <p style={{ marginBottom: "32px", paddingLeft: "20px", borderLeft: "2px solid #4100e5" }}>
          If you’ve stuck to the plan and still haven’t seen improvement, we’ll give you your money back. 
          No drama, just bringing back the good hair days.
        </p>
      </div>

      <a href="#" style={{
        color: "#4100e5",
        textDecoration: "none",
        fontWeight: "600",
        fontSize: "0.9rem",
        textTransform: "uppercase",
        letterSpacing: "1px",
        display: "inline-flex",
        alignItems: "center",
        gap: "8px"
      }}>
        See full terms & conditions
        <span style={{ fontSize: "1.2rem" }}>→</span>
      </a>

    </div>

  </div>

</section>
  
  {/* collage */}
  {/* <section style={{
  padding: "100px 5%",
  background: "#fff",
  display: "flex",
  justifyContent: "center"
}}>

  <div style={{
    maxWidth: "1200px",
    width: "100%",
    display: "flex",
    gap: "40px"
  }}>

        RIGHT BIG IMAGE
    <div style={{ flex: 1 }}>

      <img 
        src="https://cdn.shopify.com/s/files/1/0255/7725/9086/files/otal_tab_img.jpg?v=1727183490"
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "20px",
          objectFit: "cover"
        }}
      />

    </div>

    LEFT GRID
    <div style={{
      flex: 1,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "20px"
    }}>

      TOP LEFT
      <img 
        src="https://cdn.shopify.com/s/files/1/0255/7725/9086/files/hgc_img.jpg?v=1727183490"
        style={{
          width: "100%",
          borderRadius: "20px",
          objectFit: "cover"
        }}
      />

      TOP RIGHT CIRCLE
      <img 
        src="https://cdn.shopify.com/s/files/1/0255/7725/9086/files/minox-s.jpg?v=1730906266"
        style={{
          width: "100%",
          borderRadius: "20px",
          objectFit: "cover"
        }}
      />

      BOTTOM WIDE
      <img 
        src="https://cdn.shopify.com/s/files/1/0255/7725/9086/files/shampoo_img.jpg?v=1727183490"
        style={{
          gridColumn: "span 2",
          width: "100%",
          height:"280px",
          borderRadius: "20px",
          objectFit: "cover"
        }}
      />

    </div>

  </div>

</section> */}
<section style={{
  padding: "100px 5%",
  background: "#fcfaf9", // Consistent off-white background
  display: "flex",
  justifyContent: "center"
}}>

  <div style={{
    maxWidth: "1200px",
    width: "100%",
    display: "flex",
    gap: "30px", // Reduced gap for a tighter, professional look
    flexWrap: "wrap"
  }}>

    {/* LEFT BIG IMAGE WITH TEXT OVERLAY */}
    <div style={{ 
      flex: "1.2 1 400px", 
      position: "relative",
      height: "600px", // Fixed height for alignment
      borderRadius: "32px",
      overflow: "hidden",
      boxShadow: "0 20px 40px rgba(0,0,0,0.05)"
    }}>
      <img 
        src="https://cdn.shopify.com/s/files/1/0255/7725/9086/files/otal_tab_img.jpg?v=1727183490"
        alt="Oral Tablet"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div style={{
        position: "absolute",
        bottom: "30px",
        left: "30px",
        color: "#fff",
        zIndex: 2
      }}>
        <h4 style={{ margin: 0, fontSize: "1.5rem", fontFamily: "'Playfair Display', serif" }}>Daily Essentials</h4>
        <p style={{ margin: 0, opacity: 0.8, fontSize: "0.9rem" }}>Clinically backed hair growth.</p>
      </div>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.4), transparent)" }} />
    </div>

    {/* RIGHT GRID AREA */}
    <div style={{
      flex: "1 1 400px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "20px",
      height: "600px"
    }}>

      {/* TOP LEFT - Product 1 */}
      <div style={{ position: "relative", borderRadius: "24px", overflow: "hidden" }}>
        <img 
          src="https://cdn.shopify.com/s/files/1/0255/7725/9086/files/hgc_img.jpg?v=1727183490"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.03)" }} />
      </div>

      {/* TOP RIGHT - Product 2 */}
      <div style={{ position: "relative", borderRadius: "24px", overflow: "hidden" }}>
        <img 
          src="https://cdn.shopify.com/s/files/1/0255/7725/9086/files/minox-s.jpg?v=1730906266"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.03)" }} />
      </div>

      {/* BOTTOM WIDE - Full Width with Badge */}
      <div style={{ 
        gridColumn: "span 2", 
        position: "relative", 
        borderRadius: "24px", 
        overflow: "hidden" 
      }}>
        <img 
          src="https://cdn.shopify.com/s/files/1/0255/7725/9086/files/shampoo_img.jpg?v=1727183490"
          style={{ width: "100%", height: "280px", objectFit: "cover" }}
        />
        {/* Small floating label */}
        <span style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          background: "#fff",
          padding: "8px 16px",
          borderRadius: "50px",
          fontSize: "0.7rem",
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpacing: "1px"
        }}>
          New Formula
        </span>
      </div>

    </div>

  </div>
</section>

      {/* review  */}
      <section style={{
  padding: "120px 5%",
  background: "#fff",
  display: "flex",
  justifyContent: "center",
  fontFamily: "'Poppins', sans-serif"
}}>
  <div style={{ maxWidth: "1200px", width: "100%" }}>
    
    {/* HEADER */}
    <div style={{ textAlign: "center", marginBottom: "60px" }}>
      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
        color: "#1a1a1a",
        marginBottom: "15px"
      }}>
        Real Results, Real Men
      </h2>
      <p style={{ color: "#666", fontSize: "1.1rem" }}>
        Join 400,000+ customers who started their hair journey with us.
      </p>
    </div>

    {/* REVIEWS GRID */}
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "30px"
    }}>
      {[
        {
          name: "James R.",
          days: "180 Days",
          text: "I was skeptical about the Sons Promise, but after 6 months, the density of my hair is visibly better. No drama, just results.",
          tag: "Verified Results"
        },
        {
          name: "David W.",
          days: "120 Days",
          text: "The combination spray is so easy to use. I noticed less shedding within the first few weeks. Definitely worth the subscription.",
          tag: "Popular Choice"
        },
        {
          name: "Michael T.",
          days: "200 Days",
          text: "Consistency is key. I followed the plan and the results speak for themselves. The support team was also very helpful.",
          tag: "Verified Buyer"
        }
      ].map((review, i) => (
        <div key={i} style={{
          background: "#fcfaf9",
          padding: "40px",
          borderRadius: "32px",
          border: "1px solid #f1f1f1",
          transition: "transform 0.3s ease",
          position: "relative"
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-10px)"}
        onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
        >
          {/* STAR RATING */}
          <div style={{ color: "#4100e5", marginBottom: "20px", fontSize: "1.2rem" }}>
            ★★★★★
          </div>

          <p style={{ 
            fontSize: "1.05rem", 
            lineHeight: "1.7", 
            color: "#333", 
            marginBottom: "30px",
            fontStyle: "italic" 
          }}>
            "{review.text}"
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <div style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              background: "#1a1a1a",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold"
            }}>
              {review.name.charAt(0)}
            </div>
            <div>
              <div style={{ fontWeight: "600", color: "#1a1a1a" }}>{review.name}</div>
              <div style={{ fontSize: "0.85rem", color: "#4100e5", fontWeight: "500" }}>{review.days} on Treatment</div>
            </div>
          </div>

          {/* VERIFIED BADGE */}
          <span style={{
            position: "absolute",
            top: "30px",
            right: "30px",
            fontSize: "0.7rem",
            textTransform: "uppercase",
            letterSpacing: "1px",
            color: "#999",
            fontWeight: "bold"
          }}>
            {review.tag}
          </span>
        </div>
      ))}
    </div>

    {/* TRUSTPILOT STYLE FOOTER */}
    <div style={{ 
      marginTop: "60px", 
      textAlign: "center", 
      paddingTop: "40px", 
      borderTop: "1px solid #eee" 
    }}>
      <div style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
        <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Excellent</span>
        <div style={{ display: "flex", gap: "2px" }}>
          {[1,2,3,4,5].map(s => (
            <div key={s} style={{ width: "24px", height: "24px", background: "#00b67a", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem" }}>★</div>
          ))}
        </div>
        <span style={{ color: "#666" }}>4.8 out of 5 based on 15,000+ reviews</span>
      </div>
    </div>

  </div>
</section>

      {/* faq */}
{/* <section style={{
  padding: "100px 5%",
  background: "#f6f6f6",
  display: "flex",
  justifyContent: "center"
}}>

  <div style={{
    maxWidth: "1200px",
    width: "100%",
    display: "flex",
    gap: "60px",
    alignItems: "flex-start"
  }}>

    LEFT SIDE
    <div style={{ flex: 1 }}>

      <h2 style={{
        fontSize: "clamp(2rem,4vw,3rem)",
        marginBottom: "20px"
      }}>
        Have a question ? <br/> We are here to help.
      </h2>

      <p style={{
        color: "#555",
        marginBottom: "30px",
        lineHeight: "1.6"
      }}>
        Check out the most common questions our patients ask. 
        Still have questions? Contact our support team.
      </p>

      SUPPORT AVATARS
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "-10px",
        marginBottom: "20px"
      }}>
        {[
          "https://i.pravatar.cc/50?img=1",
          "https://i.pravatar.cc/50?img=2",
          "https://i.pravatar.cc/50?img=3",
          "https://i.pravatar.cc/50?img=4"
        ].map((img, i) => (
          <img key={i}
            src={img}
            style={{
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              border: "3px solid #fff",
              marginLeft: "-10px"
            }}
          />
        ))}
      </div>

      <p style={{ color: "#333" }}>
        Our support is available Mon - Fri: 8am–8:30pm
      </p>

      <p style={{ color: "#888" }}>
        Average answer time: 24h
      </p>

    </div>


    RIGHT SIDE FAQ
    <div style={{
  flex: 1,
  background: "#fff",
  borderRadius: "20px",
  padding: "30px",
  boxShadow: "0 20px 50px rgba(0,0,0,0.05)"
}}>

  {[
    {
      q: "Is hair transplant permanent?",
      a: "Yes, transplanted hair is permanent and grows naturally."
    },
    {
      q: "Is the procedure painful?",
      a: "No, local anesthesia makes the procedure comfortable."
    },
    {
      q: "How long is recovery?",
      a: "Recovery usually takes 7–10 days."
    },
    {
      q: "When will I see results?",
      a: "Visible results start from 3 months."
    },
    {
      q: "Do you offer EMI?",
      a: "Yes, flexible EMI options are available."
    }
  ].map((item, i) => (

    <div key={i} style={{
      borderBottom: "1px solid #eee",
      padding: "20px 0"
    }}>

      QUESTION
      <div 
        onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer"
        }}
      >

        <span style={{ fontWeight: "500" }}>
          {item.q}
        </span>

        <span style={{
          transition: "0.3s",
          transform: openFAQ === i ? "rotate(180deg)" : "rotate(0deg)"
        }}>
          ▼
        </span>

      </div>

      ANSWER
      <div style={{
        maxHeight: openFAQ === i ? "200px" : "0px",
        overflow: "hidden",
        transition: "all 0.4s ease",
        color: "#666",
        marginTop: openFAQ === i ? "10px" : "0"
      }}>
        {item.a}
      </div>

    </div>

  ))}

</div>

  </div>

</section> */}
<section style={{
  padding: "100px 5%",
  background: "#fcfaf9", // Consistent warmer background
  display: "flex",
  justifyContent: "center",
  fontFamily: "'Poppins', sans-serif"
}}>

  <div style={{
    maxWidth: "1200px",
    width: "100%",
    display: "flex",
    gap: "80px",
    alignItems: "flex-start",
    flexWrap: "wrap"
  }}>

    {/* LEFT SIDE - Support Info */}
    <div style={{ flex: "1 1 400px" }}>
      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
        lineHeight: "1.1",
        marginBottom: "24px",
        color: "#1a1a1a"
      }}>
        Have a question? <br/> We are here to help.
      </h2>

      <p style={{
        color: "#4b5563",
        fontSize: "1.1rem",
        marginBottom: "40px",
        lineHeight: "1.8",
        fontWeight: "300"
      }}>
        Check out the most common questions our patients ask. <br/> 
        Still have questions? <strong style={{ color: "#4100e5", cursor: "pointer" }}>Contact our support team.</strong>
      </p>

      {/* SUPPORT AVATARS WITH STATUS */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "24px" }}>
        <div style={{ display: "flex", marginRight: "15px" }}>
          {[1, 2, 3, 4].map((n) => (
            <img key={n}
              src={`https://i.pravatar.cc/100?img=${n+10}`}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                border: "4px solid #fcfaf9",
                marginLeft: n === 1 ? "0" : "-15px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
              }}
            />
          ))}
        </div>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.9rem", fontWeight: "600", color: "#111" }}>
            <span style={{ width: "8px", height: "8px", background: "#22c55e", borderRadius: "50%" }}></span>
            Support Online
          </div>
        </div>
      </div>

      <div style={{ fontSize: "0.95rem", color: "#666" }}>
        <p style={{ margin: "5px 0" }}>Mon - Fri: <strong>8am–8:30pm</strong></p>
        <p style={{ margin: "5px 0", color: "#9ca3af" }}>Average answer time: <span style={{ color: "#4100e5", fontWeight: "600" }}>24h</span></p>
      </div>
    </div>

    {/* RIGHT SIDE - Clean FAQ Box */}
    <div style={{
      flex: "1 1 500px",
      background: "#fff",
      borderRadius: "32px",
      padding: "40px",
      boxShadow: "0 25px 60px rgba(0,0,0,0.04)",
      border: "1px solid rgba(0,0,0,0.02)"
    }}>
      {faqData.map((item, i) => (
        <div key={i} style={{
          borderBottom: i === faqData.length - 1 ? "none" : "1px solid #f3f4f6",
          padding: "24px 0"
        }}>
          <div 
            onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
              gap: "20px"
            }}
          >
            <span style={{ 
              fontWeight: "600", 
              fontSize: "1.1rem",
              color: openFAQ === i ? "#4100e5" : "#111",
              transition: "color 0.3s ease"
            }}>
              {item.q}
            </span>
            <span style={{
              fontSize: "1.2rem",
              fontWeight: "300",
              color: openFAQ === i ? "#4100e5" : "#ccc",
              transform: openFAQ === i ? "rotate(45deg)" : "rotate(0deg)",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            }}>
              +
            </span>
          </div>

          <div style={{
            maxHeight: openFAQ === i ? "200px" : "0px",
            overflow: "hidden",
            transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
            color: "#6b7280",
            marginTop: openFAQ === i ? "16px" : "0",
            lineHeight: "1.7",
            fontSize: "1rem"
          }}>
            {item.a}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Footer */}
      <footer style={{ background: "#111", color: "#888", padding: "56px 5% 32px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "40px", marginBottom: "48px" }}>
            <div>
              <div style={{ fontFamily: "'Georgia', serif", fontSize: "1.4rem", fontWeight: "bold", color: "#fff", marginBottom: "20px" }}>HAIR<span style={{ color: "#4100e5" }}>X</span></div>
              <p style={{ fontSize: "0.85rem", lineHeight: 1.7 }}>Clinically proven hair loss treatments delivered to your door.</p>
            </div>
            {[
              { heading: "Help", links: ["Contact Us", "FAQs", "Delivery & Returns", "Refund Policy"] },
              { heading: "Company", links: ["About Us", "Testimonials", "Our Blog", "Promise"] },
              { heading: "Legal", links: ["Terms & Conditions", "Privacy Policy", "Make a Complaint"] },
            ].map(col => (
              <div key={col.heading}>
                <h4 style={{ color: "#fff", fontSize: "0.82rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "16px" }}>{col.heading}</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {col.links.map(l => <span key={l} style={{ fontSize: "0.85rem", cursor: "pointer", transition: "color 0.2s" }} onMouseEnter={e => e.target.style.color="#4100e5"} onMouseLeave={e => e.target.style.color="#888"}>{l}</span>)}
                </div>
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid #222", paddingTop: "24px", textAlign: "center", fontSize: "0.78rem" }}>
            © 2024 HairX. All rights reserved. Products regulated by MHRA. *Free delivery on subscription plans.
          </div>
        </div>
      </footer>
    </div>
  );
}