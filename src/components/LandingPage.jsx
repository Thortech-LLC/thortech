// Thortech Landing Page as a React component
import "../../styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function LandingPage() {
  return (
    <>
      {/* Header / Hero Section */}
      <header className="hero" id="hero" data-animate>
        <nav className="navbar" aria-label="Main Navigation">
          <div
            className="logo"
            style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}
          >
            <img
              src="/thortech/images/logos/white-logo.png"
              alt="Thortech logo"
              style={{
                height: "10rem",
                width: "10rem",
                verticalAlign: "middle",
                borderRadius: "15px",
                border: "3px solid var(--color-primary)",
              }}
            />
            {/* Thortech */}
          </div>
          <ul className="nav-links">
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#why">Why Thortech</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="hero-content">
          <h1>Custom Software Solutions That Power Your Vision</h1>
          <p className="subtitle">
            We build high-performance web, mobile, and business software for
            startups and enterprises. Quality, transparency, and scalability at
            every step.
          </p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">
              Contact Us
            </a>
            <a href="#services" className="btn btn-secondary">
              View Services
            </a>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section
        className="services"
        id="services"
        aria-labelledby="services-title"
        data-animate
      >
        <h2 id="services-title">Our Services</h2>
        <div className="services-grid">
          <div className="service-card" data-animate>
            <div className="service-icon" aria-hidden="true">
              💻
            </div>
            <h3>Web Application Development</h3>
            <p>Modern, scalable web apps tailored to your business needs.</p>
          </div>
          <div className="service-card" data-animate>
            <div className="service-icon" aria-hidden="true">
              📱
            </div>
            <h3>Mobile App Development</h3>
            <p>Cross-platform mobile solutions for iOS and Android.</p>
          </div>
          <div className="service-card" data-animate>
            <div className="service-icon" aria-hidden="true">
              ⚙️
            </div>
            <h3>Custom Business Software</h3>
            <p>Automate, optimize, and grow with bespoke business tools.</p>
          </div>
          <div className="service-card" data-animate>
            <div className="service-icon" aria-hidden="true">
              🔗
            </div>
            <h3>API Development & Integration</h3>
            <p>Robust APIs and seamless integrations for your ecosystem.</p>
          </div>
          <div className="service-card" data-animate>
            <div className="service-icon" aria-hidden="true">
              🎨
            </div>
            <h3>UI/UX Design</h3>
            <p>Intuitive, beautiful interfaces that delight users.</p>
          </div>
          <div className="service-card" data-animate>
            <div className="service-icon" aria-hidden="true">
              🧠
            </div>
            <h3>Software Consulting</h3>
            <p>Expert advice to guide your software strategy and execution.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        className="about"
        id="about"
        aria-labelledby="about-title"
        data-animate
      >
        <h2 id="about-title">About Thortech</h2>
        <div className="about-content">
          <img
            src="/thortech/images/will-profile-pic.jpg"
            alt="William Torman - Founder of Thortech"
            className="about-profile-pic"
          />
          <div className="about-bio">
            <p>
              <strong>Founded by, William Torman, a software engineer</strong>{" "}
              committed to building robust, high-performance solutions. Every
              project is crafted with care, clean architecture, and a relentless
              focus on reliability. William’s passion for technology began in
              middle school, building and selling custom PCs — an early
              foundation for a career focused on solving real-world problems
              through software.
            </p>
            <ul className="about-values">
              <li>Quality</li>
              <li>Transparency</li>
              <li>Scalability</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        className="portfolio"
        id="portfolio"
        aria-labelledby="portfolio-title"
        data-animate
      >
        <h2 id="portfolio-title">Portfolio</h2>
        <div className="portfolio-grid">
          <div className="portfolio-card" data-animate>
            <div className="portfolio-img" aria-hidden="true">
              <img
                src="https://api.microlink.io/?url=https://willtorman.github.io/clockr/&screenshot=true&meta=false&embed=screenshot.url"
                alt="Clockr preview"
                className="portfolio-img"
              ></img>
            </div>
            <h3>Clockr</h3>
            <p>
              Android application for tracking work hours, calculating projected
              earnings, and giving users real-time insight into their income.
            </p>
            <a
              href="https://willtorman.github.io/clockr/"
              target="blank_"
              style={{ color: "var(--color-primary)" }}
            >
              View Project →
            </a>
          </div>
          <div className="portfolio-card" data-animate>
            <div className="portfolio-img">
              <img
                src="https://api.microlink.io/?url=https://wizard-alters.github.io/wizardalters/&screenshot=true&meta=false&embed=screenshot.url"
                alt="Wizard Alters preview"
                className="portfolio-img"
              />
            </div>
            <h3>Wizard Alters</h3>
            <p>
              E-commerce storefront with secure payment processing powered by
              Stripe, enabling seamless online transactions.
            </p>
            <a
              href="https://wizard-alters.github.io/wizardalters/"
              target="blank_"
              style={{ color: "var(--color-primary)" }}
            >
              View Project →
            </a>
          </div>
          <div className="portfolio-card" data-animate>
            <div className="portfolio-img" aria-hidden="true"></div>
            <h3>Project Three</h3>
            <p>Custom CRM platform designed for scalability and performance.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Thortech Section */}
      <section
        className="why"
        id="why"
        aria-labelledby="why-title"
        data-animate
      >
        <h2 id="why-title">Why Choose Thortech?</h2>
        <div className="why-grid">
          <div className="why-card" data-animate>
            <h3>Clean, Maintainable Code</h3>
            <p>
              Code that’s easy to read, extend, and maintain for years to come.
            </p>
          </div>
          <div className="why-card" data-animate>
            <h3>Performance-First Mindset</h3>
            <p>Optimized solutions for speed, scalability, and reliability.</p>
          </div>
          <div className="why-card" data-animate>
            <h3>Direct Communication</h3>
            <p>
              Work directly with the developer for clarity and fast feedback.
            </p>
          </div>
          <div className="why-card" data-animate>
            <h3>Long-Term Support</h3>
            <p>Ongoing partnership and support for your evolving needs.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="contact"
        id="contact"
        aria-labelledby="contact-title"
        data-animate
      >
        <h2 id="contact-title">Contact Thortech</h2>
        <form
          className="contact-form"
          autoComplete="off"
          aria-label="Contact form"
          onSubmit={(e) => {
            e.preventDefault();
            e.target.reset();
          }}
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            aria-required="true"
            placeholder="Your Name"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            aria-required="true"
            placeholder="you@email.com"
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            aria-required="true"
            placeholder="How can we help?"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
        <div className="contact-social">
          <span>
            <FontAwesomeIcon icon={faEnvelope} />{" "}
            <a href="mailto:thortech117@gmail.com">thortech117@gmail.com</a>
          </span>
          <span>
            <FontAwesomeIcon icon={faGithub} />{" "}
            <a href="#" aria-label="Thortech GitHub profile">
              github.com/thortech
            </a>
          </span>
          <span>
            <FontAwesomeIcon icon={faLinkedin} />{" "}
            <a
              href="https://www.linkedin.com/in/william-torman-b7bb8b291/"
              aria-label="William's LinkedIn profile"
            >
              Will Torman
            </a>
          </span>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" aria-label="Footer">
        <div className="footer-content">
          <span className="footer-logo">Thortech</span>
          <span>&copy; 2026 Thortech. All rights reserved.</span>
          <nav className="footer-links" aria-label="Footer links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
