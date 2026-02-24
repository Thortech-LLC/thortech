import { useState } from "react";
import "./Home.css";
import ContactForm from "../../components/modals/ContactModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import logo from "/images/white-hammer.png";

function Home() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <header>
        <img id="logo" src={logo} alt="Thortech Logo" />
        <div>
          <h1>Thortech</h1>
          <h2>Software Development Solutions</h2>
          <p className="subtitle">Empowering your business with modern, reliable, and scalable software.</p>
        </div>
        <a
          href="#"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Contact Us
        </a>
      </header>

      <section className="services">
        <h2>What We Offer</h2>
        <ul>
          <li>Custom Web Application Development</li>
          <li>Mobile App Development</li>
          <li>UI/UX Design & Prototyping</li>
          <li>API & Backend Engineering</li>
          <li>Cloud Integration & Deployment</li>
          <li>Maintenance & Support</li>
        </ul>
      </section>

      <section className="about">
        <h2>About the Owner</h2>
        <p>
          Hi, I'm <strong>William Torman</strong>, founder of Thortech. With years of experience in full-stack software engineering, I am passionate about helping businesses grow through technology. I work closely with clients to deliver solutions tailored to their needs, from idea to launch and beyond.
        </p>
      </section>

      <section className="reviews">
        <h2>What People Say</h2>
        {/* Add testimonials or reviews here in the future */}
      </section>

      <div className="socials">
        <a id="ig" href="#" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          id="fb"
          href="https://www.facebook.com/profile.php?id=61576092674965"
          target="_blank"
        >
          <FontAwesomeIcon icon={faSquareFacebook} />
        </a>
        <a id="yt" href="https://www.youtube.com/@Thortech117" target="_blank">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
      <footer>
        <hr></hr>
        <a href="#">Hire Us</a>
        <a
          href="#"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Contact Us
        </a>
        {openModal && <ContactForm closeModal={setOpenModal} />}
      </footer>
    </>
  );
}

export default Home;
