import React, { useEffect, useState } from "react";
//import styles
import "./Contact.css";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us";
  }, []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = {};
    if (!name.trim()) {
      nextErrors.name = "Please enter your name";
    }
    if (!email.trim()) {
      nextErrors.email = "Please enter your email";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      nextErrors.email = "Please enter a valid email address";
    }
    if (!message.trim()) {
      nextErrors.message = "Please enter your message";
    }
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setName("");
      setEmail("");
      setMessage("");
      setSent(true);
    } else {
      setSent(false);
    }
  };
  return (
    <section className="contact fade-bottom">
      <h1 className="header">Contact Us</h1>
      <form className="forms" onSubmit={handleSubmit}>
        <div className="name">
          <label htmlFor="name" id="name_label">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            placeholder="Name*"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="email">
          <label htmlFor="email" id="email_label">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Email*"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="message">
          <label htmlFor="message" id="message_label">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            placeholder="Write your message*"
            onChange={(event) => setMessage(event.target.value)}
          ></textarea>
        </div>
        <p id="value" className={sent ? "form_sent" : undefined}>
          {sent
            ? "Your message has been sent"
            : errors.name || errors.email || errors.message}
        </p>
        <button className="forms-btn" type="submit">
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
