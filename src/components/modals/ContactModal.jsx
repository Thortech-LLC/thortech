import "./contact.css";

function ContactForm({ closeModal }) {
  return (
    <div className="contact">
      <header>
        <h1>Contact Us</h1>
        <button onClick={() => closeModal(false)}>X</button>
      </header>
      <div className="contactInfo">
        {/* name */}
        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name..."
        ></input>
        <label htmlFor="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name..."
        ></input>
        {/* email */}
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Your email..."></input>
      </div>
      <div className="message">
        {/* message */}
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Write something..."
          style={{ height: 200 }}
        ></textarea>
      </div>

      <input type="submit" value="Submit"></input>
    </div>
  );
}

export default ContactForm;
