import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
const Contact = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          name: Name,
          Email: Email,
          message: message,
        },
        import.meta.env.VITE_PUBLIC_KEY,
      );

      setSuccessMsg("Message Sent Successfully ✅");

      // clear form
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
      setSuccessMsg("Failed ❌ Try again");
    }
  };

  return (
   

    <div className="contact" id="contact" >
      <div className="contact-container">
        {/* TOP CONTENT */}
        <div className="contact-info" data-aos="fade-up">
          <h2>Contact Me</h2>

          <div className="info-items">
            <span>
              Please contact me directly at{" "}
              <a href="mailto:anuragmishra9821497411@gmail.com">
                📧 anuragmishra9821497411@gmail.com
              </a>{" "}
              for any query
            </span>
          </div>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            data-aos="fade-up"
            data-aos-duration="1500"
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            value={Name}
            onChange={handleNameChange}
          />
          <input
            data-aos="fade-up"
            data-aos-duration="1800"
            type="text"
            name="Email"
            placeholder="Your Email"
            required
            value={Email}
            onChange={handleEmailChange}
          />

          <textarea
            data-aos="fade-up"
            data-aos-duration="2000"
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            value={message}
            onChange={handleMessageChange}
          ></textarea>

          <button type="submit">
            Send Message <i class="bi bi-send"></i>
          </button>

          <p className="success-msg">{successMsg}</p>
        </form>
      </div>
    </div>
  );
};
export default Contact;
