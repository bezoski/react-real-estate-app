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

  const Clear = (value) => {
    setName("");
    setEmail("");
    setMessage("");
    document.getElementById("value").innerHTML = "Your message has been sent";
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let errors = {};
    if (!name.trim()) {
      errors.name = "Please enter your name";
      document.getElementById("value").innerHTML = errors.name;
    }
    if (!email.trim()) {
      errors.email = "Please enter your email";
      document.getElementById("value").innerHTML = errors.email;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Please enter a valid email address";
      document.getElementById("value").innerHTML = errors.email;
    }
    if (!message.trim()) {
      errors.message = "Please enter your message";
      document.getElementById("value").innerHTML = errors.message;
    }
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Message:", message);
      document.getElementById("value").innerHTML = "Your message has been sent";
      Clear();
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
          <br />
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
          <br />
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
          <br />
          <textarea
            id="message"
            value={message}
            placeholder="Write your message*"
            onChange={(event) => setMessage(event.target.value)}
          ></textarea>
        </div>
        <p id="value"></p>
        <button className="forms-btn" type="submit">
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
