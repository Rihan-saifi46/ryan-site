"use client";

import { useState, useEffect } from "react";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav style={{
  position: "sticky",
  top: 0,
  zIndex: 1000,
  background: scrolled ? "rgba(255, 255, 255, 0.85)" : "#fcfaf9",
  backdropFilter: scrolled ? "blur(12px)" : "none",
  boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.03)" : "none",
  transition: "all 0.3s ease",
  padding: scrolled ? "4px 5%" : "8px 5%",
  minHeight: "80px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}}>
        
        {/* LEFT */}
        <div 
            className="nav-pill"
            style={{
                background: scrolled ? "#1a1a1a" : "#fff",
                color: scrolled ? "#fff" : "#1a1a1a",
                padding: "10px 28px",
                borderRadius: "40px",
                fontSize: "15px",
                fontWeight: "600",
                cursor: "pointer",
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                transition: "all 0.3s ease",
                border: "1px solid rgba(0,0,0,0.05)"
            }}
            onClick={() => setMenuOpen(!menuOpen)}
        >
            Menu
        </div>

        {/* CENTER */}
        <div style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: scrolled ? "1.5rem" : "1.8rem",
            fontWeight: "800",
            letterSpacing: "0.05em",
            color: "#1a1a1a",
            transition: "all 0.4s ease",
            cursor: "pointer"
        }}>
            HAIR<span style={{ color: "#4100e5" }}>X</span>
        </div>

        {/* RIGHT */}
        <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
            <div style={{
                background: "#fff",
                padding: "10px 24px",
                borderRadius: "40px",
                fontSize: "14px",
                fontWeight: "500",
                cursor: "pointer",
                border: "1px solid rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
                display: scrolled ? "none" : "block"
            }}>
                Account
            </div>

            <div style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                background: "#4100e5",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "600",
                fontSize: "14px",
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(65,0,229,0.2)",
                transition: "all 0.3s ease"
            }}>
                0
            </div>
        </div>
      </nav>

      {menuOpen && (
        <div style={{
          background: "#fff",
          padding: "24px 5%",
          borderBottom: "1px solid #eee",
          display: "flex",
          flexDirection: "column",
          gap: "20px"
        }}>
          {["Hair Loss", "Beard Growth", "Consultation", "Our Story", "Blog"].map(l => (
            <span key={l} style={{ fontSize: "1.1rem", cursor: "pointer" }}>{l}</span>
          ))}
        </div>
      )}
    </>
  );
}