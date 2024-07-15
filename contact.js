import React from "react";
import Footer from "./footer";
import Common_nav from "./common_nav";

const Contact = () => {
  return (
    <div className="contact_page">
      <Common_nav />
      <br />
      <form>
        <h2>
          <strong>Contact Us</strong>
        </h2>
        <p>
          Feel free to get in touch with us using any of the following methods.
          We're here to help and answer any questions you may have.
        </p>
        <h3>Address</h3>
        <p>
          AI Nexus
          <br />
          123 Main Street
          <br />
          Newtown, ASA
          <br />
          12345
        </p>
        <h3>Phone</h3>
        <p>
          Main: 1234567890
          <br />
          Support: 555-000-8880
        </p>
        <h3>Email</h3>
        <p>
          General Inquiries: general@gen.com
          <br />
          Support: mailsupport@sup.com
        </p>
        <h3>Contact Form</h3>
        <p>
          You can also send us a message directly using the form below. We'll
          get back to you as soon as possible.
        </p>
        <label for="name">Name:</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          required
        />
        <br />

        <label for="email">Email:</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email"
          required
        />
        <br />

        <label for="message">Message:</label>
        <br />
        <textarea
          id="message"
          name="message"
          rows="4"
          placeholder="Your message"
          required></textarea>
        <br />

        <button type="submit">Send Message</button>
      </form>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Contact;
