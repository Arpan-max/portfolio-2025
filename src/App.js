import React, { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

// --- DATA ---
const IMAGES = {
  alpha: "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&q=80",
  neon: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
  finance: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80",
  minimal: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&q=80"
};

const LOGOS = ["Google", "Nike", "Apple", "Spotify", "Amazon", "Tesla", "Vogue", "Meta"];

const SERVICES = [
  { title: "Strategy", desc: "Brand Identity & Positioning" },
  { title: "Art Direction", desc: "Visual Systems & Guides" },
  { title: "Development", desc: "Websites & Applications" },
  { title: "Content", desc: "Photography & Motion" }
];

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => setDarkMode(!darkMode);

  // Animation Variant
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className={`app-container ${darkMode ? "dark-mode" : "light-mode"}`}>
      
      {/* 1. NOISE TEXTURE */}
      <div className="noise-overlay"></div>

      {/* 2. NAVBAR */}
      <nav className="navbar glass-panel">
        <div className="logo">AESTHETE.</div>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <button onClick={toggleTheme} className="theme-btn">
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>
      </nav>

      {/* 3. HERO SECTION */}
      <header className="hero-section">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="hero-content"
        >
          <h1 className="editorial-font">Pure <br/> Elegance</h1>
          <p className="subtitle">Simplicity is the ultimate sophistication.</p>
        </motion.div>
      </header>

      {/* 4. MARQUEE SECTION */}
      <section className="marquee-section">
        <div className="marquee-track">
          {[...LOGOS, ...LOGOS].map((logo, index) => (
            <span className="marquee-item editorial-font" key={index}>
              {logo} <span className="separator">/</span>
            </span>
          ))}
        </div>
      </section>

      {/* 5. BENTO GRID SECTION */}
      <section id="work" className="bento-section">
        <motion.div 
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3>Selected Works</h3>
          <span className="year">2025 Collection</span>
        </motion.div>

        <div className="bento-grid">
          {/* Main Feature */}
          <motion.div 
            className="bento-item span-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img src={IMAGES.alpha} alt="Architecture" />
            <div className="hover-info">
              <h2>Modern Living</h2>
              <p>Architecture</p>
            </div>
          </motion.div>

          {/* Tall Feature */}
          <motion.div 
            className="bento-item span-row-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <img src={IMAGES.neon} alt="Tech" />
            <div className="hover-info">
              <h2>Cyber</h2>
              <p>Future Tech</p>
            </div>
          </motion.div>

          {/* Standard */}
          <motion.div 
            className="bento-item"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
             <img src={IMAGES.finance} alt="Abstract" />
             <div className="hover-info"><h2>Abstract</h2></div>
          </motion.div>

          {/* Standard */}
          <motion.div 
            className="bento-item"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
             <img src={IMAGES.minimal} alt="Portrait" />
             <div className="hover-info"><h2>Portrait</h2></div>
          </motion.div>
        </div>
      </section>

      {/* 6. AESTHETIC SERVICE BOXES */}
      <section id="services" className="services-section">
        <div className="section-header">
            <h3>Our Expertise</h3>
        </div>
        
        <div className="services-grid">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="watermark">0{index + 1}</div>
              <div className="card-top">
                <span className="card-num">0{index + 1}</span>
                <span className="arrow">↗</span>
              </div>
              <div className="card-bottom">
                <h4>{service.title}</h4>
                <p>{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="footer">
        <h2 className="editorial-font">Create with us.</h2>
        <a href="mailto:hello@aesthete.com" className="email-link">Get in Touch</a>
      </footer>
    </div>
  );
}

export default App;