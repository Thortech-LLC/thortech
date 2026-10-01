import "../../styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCheck, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const services = [
  ["01", "Software Development", "Custom applications, APIs, backend systems, and software solutions built around your workflow.", "Discuss software"],
  ["02", "Web Development", "Responsive websites and web applications that are clear, fast, and ready for real users.", "Discuss a website"],
  ["03", "Custom Technology", "Hardware and software projects, custom computing solutions, and thoughtful technology guidance.", "Talk through an idea"],
  ["04", "Maintenance & Improvements", "Bug fixes, feature development, updates, and ongoing improvements for existing projects.", "Improve a project"],
];

const projects = [
  { number: "01", type: "PRODUCT APPLICATION", name: "Clockr", description: "An Android application for tracking work hours, pay rates, and expected earnings in one focused tool.", tags: ["Kotlin", "Android", "Database integration"], href: "https://play.google.com/store/apps/details?id=com.thortech.clockr&hl=en", link: "View on Google Play", visual: "clockr" },
  { number: "02", type: "E-COMMERCE", name: "Wizard Alters", description: "A React-based storefront with product and inventory functionality, API and database work, and Stripe integration.", tags: ["React", "Stripe", "API / database"], href: "https://wizard-alters.github.io/wizardalters/", link: "Visit the storefront", visual: "wizard" },
  { number: "03", type: "BUSINESS WEBSITE", name: "Gordon's Gutters", description: "A custom website for a local gutter cleaning company, designed to support quoting and customer contact.", tags: ["Responsive web", "Lead capture", "Client delivery"], href: "https://gordons-gutters.github.io/website/", link: "View the website", visual: "business" },
];

function ProjectVisual({ project }) {
  if (project.visual === "wizard") return <div className="work-visual wizard"><img src="/thortech/images/project-thumbnails/wizard-alter-preview.png" alt="Wizard Alters storefront preview" /></div>;
  if (project.visual === "business") return <div className="work-visual business"><span className="business-mark">GG</span><span className="work-label">CLIENT WEBSITE / LOCAL BUSINESS</span><strong>Gordon's Gutters</strong></div>;
  return <div className="work-visual clockr"><span className="work-label">ANDROID / KOTLIN</span><strong>clockr<span>_</span></strong><small>Hours. Earnings. Clarity.</small></div>;
}

export default function LandingPage() {
  return (
    <main>
      <header className="hero" id="hero">
        <nav className="navbar" aria-label="Main navigation">
          <a className="brand" href="#hero" aria-label="Thortech home"><img src="/thortech/images/logos/white-hammer.png" alt="" /><span>Thortech<small>LLC</small></span></a>
          <ul className="nav-links">
            <li className="nav-menu"><details><summary>General <span aria-hidden="true">+</span></summary><div className="nav-dropdown"><a href="#services">Services</a><a href="#work">Work</a><a href="#about">About</a><a href="#process">Process</a></div></details></li>
            <li className="nav-menu"><details><summary>Hardware <span aria-hidden="true">+</span></summary><div className="nav-dropdown"><a href="#pcs">PCs for sale</a><a href="#contact">Custom Consoles</a></div></details></li>
            <li><a className="nav-cta" href="#contact">Start a Project <FontAwesomeIcon icon={faArrowRight} /></a></li>
          </ul>
        </nav>
        <div className="hero-content content-width">
          <div className="hero-copy" data-animate><p className="eyebrow">THORTECH LLC <span>///</span> PRACTICAL TECHNOLOGY</p><h1>Technology <em>built right.</em></h1><p className="hero-lede">Software, websites, and custom technology solutions for people and businesses that need useful work done well.</p><div className="cta-buttons"><a href="#contact" className="btn btn-primary">Start a Project <FontAwesomeIcon icon={faArrowRight} /></a><a href="#work" className="btn btn-secondary">View Our Work</a></div></div>
          <div className="hero-visual" aria-label="Thortech builds dependable technology solutions" data-animate><div className="hero-grid" aria-hidden="true"></div><div className="signal-card"><span className="status-dot"></span> BUILD / TEST / DELIVER</div><div className="hero-mark"><img src="/thortech/images/logos/white-hammer.png" alt="" /><span>THOR<br />TECH</span></div><p className="hero-note">Custom systems<br />for real needs.</p></div>
        </div>
        <div className="hero-footer content-width"><span>Web & software development</span><span>Based on clear communication</span><span>Built to be maintained</span></div>
      </header>

      <section className="section services" id="services" aria-labelledby="services-title"><div className="content-width"><div className="section-heading" data-animate><p className="eyebrow">01 / CAPABILITIES</p><h2 id="services-title">Useful technology,<br /><span>carefully engineered.</span></h2><p>From a focused website to a custom application, Thortech brings practical engineering to the work that matters.</p></div><div className="services-grid">{services.map(([number, title, text, link]) => <article className="service-card" data-animate key={title}><span className="service-number">{number}</span><h3>{title}</h3><p>{text}</p><a href="#contact">{link} <FontAwesomeIcon icon={faArrowRight} /></a></article>)}</div></div></section>

      <section className="section work" id="work" aria-labelledby="work-title"><div className="content-width"><div className="section-heading split-heading" data-animate><div><p className="eyebrow">02 / SELECTED WORK</p><h2 id="work-title">Built for the<br /><span>real world.</span></h2></div><p>Projects that show how Thortech turns a specific need into a working product.</p></div><div className="work-list">{projects.map((project, index) => <article className={`work-item ${index % 2 ? "reverse" : ""}`} data-animate key={project.name}><ProjectVisual project={project} /><div className="work-details"><p className="eyebrow">{project.number} / {project.type}</p><h3>{project.name}</h3><p>{project.description}</p><ul className="tag-list">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul><a className="text-link" href={project.href} target="_blank" rel="noreferrer">{project.link} <FontAwesomeIcon icon={faExternalLinkAlt} /></a></div></article>)}</div></div></section>

      <section className="section why" id="why" aria-labelledby="why-title"><div className="content-width why-layout"><div className="section-heading" data-animate><p className="eyebrow">03 / THE THORTECH APPROACH</p><h2 id="why-title">Small team.<br /><span>Serious craft.</span></h2></div><div className="why-copy" data-animate><p>Thortech is built for clients who want direct communication, thoughtful engineering, and a solution that fits the way they actually work.</p><div className="principles"><p><FontAwesomeIcon icon={faCheck} /> Talk directly with the builder</p><p><FontAwesomeIcon icon={faCheck} /> Choose the right technology for the job</p><p><FontAwesomeIcon icon={faCheck} /> Keep the result maintainable</p><p><FontAwesomeIcon icon={faCheck} /> Adapt to small-business realities</p></div></div></div></section>

      <section className="section about" id="about" aria-labelledby="about-title"><div className="content-width about-layout"><div className="about-photo" data-animate><img src="/thortech/images/will-profile-pic-green.jpeg" alt="William Torman, founder of Thortech LLC" /><span>FOUNDER / BUILDER</span></div><div className="about-copy" data-animate><p className="eyebrow">04 / ABOUT THE COMPANY</p><h2 id="about-title">Technology with a<br /><span>human point of contact.</span></h2><p>Thortech LLC was founded by William Torman, a software engineer and technology builder. A long-standing interest in computers, custom builds, and software grew into a company focused on making dependable technology more accessible.</p><p>When you work with Thortech, you work directly with the person responsible for building your solution.</p></div></div></section>

      <section className="section process" id="process" aria-labelledby="process-title"><div className="content-width"><div className="section-heading" data-animate><p className="eyebrow">05 / HOW WE WORK</p><h2 id="process-title">A clear path from<br /><span>idea to launch.</span></h2></div><ol className="process-list"><li data-animate><span>01</span><h3>Discuss</h3><p>Understand the problem, requirements, and goals.</p></li><li data-animate><span>02</span><h3>Plan</h3><p>Define the solution, scope, technology, and timeline.</p></li><li data-animate><span>03</span><h3>Build</h3><p>Develop, test, and refine the working solution.</p></li><li data-animate><span>04</span><h3>Launch</h3><p>Deploy the project and provide necessary follow-up.</p></li></ol></div></section>

      <section className="contact" id="contact" aria-labelledby="contact-title"><div className="content-width contact-layout"><div className="contact-intro" data-animate><p className="eyebrow">06 / START A PROJECT</p><h2 id="contact-title">Have a project<br /><em>in mind?</em></h2><p>Tell us what you are trying to build, improve, or figure out. We will start with a conversation.</p><a href="mailto:thortech117@gmail.com" className="contact-email">thortech117@gmail.com <FontAwesomeIcon icon={faArrowRight} /></a></div><form className="contact-form" autoComplete="off" aria-label="Contact form" action="https://formspree.io/f/mjgejonz" method="POST"><div className="form-row"><label htmlFor="name">Name<input type="text" id="name" name="name" required aria-required="true" placeholder="Your name" /></label><label htmlFor="email">Email<input type="email" id="email" name="email" required aria-required="true" placeholder="you@email.com" /></label></div><div className="form-row"><label htmlFor="company">Company <span>(optional)</span><input type="text" id="company" name="company" placeholder="Company or organization" /></label><label htmlFor="project-type">Project type<select id="project-type" name="project-type" defaultValue=""><option value="" disabled>Select one</option><option>Software development</option><option>Web development</option><option>Custom technology</option><option>Maintenance or improvements</option></select></label></div><label htmlFor="message">Project description<textarea id="message" name="message" rows="4" required aria-required="true" placeholder="What are you trying to build or improve?"></textarea></label><div className="form-footer"><label htmlFor="budget">Budget <span>(optional)</span><input type="text" id="budget" name="budget" placeholder="e.g. $2,000-$5,000" /></label><button type="submit" className="btn btn-primary">Send Inquiry <FontAwesomeIcon icon={faArrowRight} /></button></div></form></div></section>

      <footer className="footer" aria-label="Footer"><div className="footer-content"><a className="footer-logo" href="#hero">Thortech<span>LLC</span></a><span>&copy; 2026 Thortech LLC</span><nav className="footer-links" aria-label="Footer links"><a href="#privacy">Privacy Policy</a><a href="#terms">Terms of Service</a></nav></div></footer>
    </main>
  );
}
