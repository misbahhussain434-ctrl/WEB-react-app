import React from "react";
function Contact() {
  const myEmail = "misbahhussain434@gmail.com";
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
        <a href={`mailto:${myEmail}`} target="_blank" rel="noopener noreferrer">
          {myEmail}
        </a>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;

