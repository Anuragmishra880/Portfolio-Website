import { NavLink } from "react-router-dom";
import "./Introduction.css";
import Resume from "../assets/Anurag_Kumar_MERN_Developer_Resume .pdf";
export default function Introduction() {
  const phoneNumber = 9821497411;

  return (
    <section className="intro">
      {/* CONTENT */}
      <div className="intro-content" data-aos="flip-left">
        <h1>
          Hi there! 👋 <br />
          I'm <span>Anurag</span>
        </h1>

        <h2>MERN Stack Developer</h2>

        <p>
          I’m a MERN Stack Developer passionate about building modern, scalable,
          and user-friendly web applications using React and Node.js.
        </p>
      </div>
      {/* SOCIAL ICONS */}
      <div className="social">
        <div className="buttons">
          <NavLink className="btn primary mx-sm-auto text-light" to="/contact">
            Contact Me Here →
          </NavLink>
          <button
            className="btn secondary"
            onClick={() => {
              const link = document.createElement("a");
              link.href = Resume;
              link.download = "Anurag_Resume.pdf";
              link.click();
            }}
          >
            Download CV ↆ
          </button>
        </div>
      <button className="socialIconColor linkedin mx-sm-auto">
  <a
    href="https://linkedin.com/in/anurag-kumar-31b51135a"
    target="_blank"
  >
    <i className="fa-brands fa-linkedin-in text-light fs-5"></i>
  </a>
</button>

<button className="socialIconColor github mx-sm-auto">
  <a href="https://github.com/Anuragmishra880/" target="_blank">
    <i className="fa-brands fa-github text-light fs-5"></i>
  </a>
</button>
      </div>
    </section>
  );
}
