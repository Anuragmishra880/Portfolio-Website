import React from "react";
import "./About.css";

export default function About() {
  return (
    <section className="about-section">
      <h2 data-aos="fade-up">
        About <span>Me</span>
      </h2>

      {/* TEXT */}
      <div className="about-text" data-aos="fade-up">
        <p>
          I’m Anurag, a MERN Stack Developer, passionate about building modern
          and scalable web applications. My expertise lies in React, Node.js,
          Express, and MongoDB, with a strong focus on clean UI/UX and
          responsive layouts. I enjoy turning ideas into polished,
          recruiter‑friendly projects that balance creativity with technical
          excellence.
        </p>
        <p>
          My journey began as a BCA student, where I discovered my love for web
          development and honed my skills through real‑world projects. Beyond
          coding, I enjoy prototyping in Figma, designing intuitive dashboards,
          and ensuring every project reflects both creativity and functionality.
        </p>
        <button className="About_section_Explore_Btn" data-aos="flip-left">
          Explore
        </button>
      </div>

      {/* SKILLS */}
      <Divider />
      <div className="skill-grid" data-aos="fade-up" data-aos-duration="2000">
        <SkillCard
          title="Design"
          text="I can design the site based on your needs and suggestions. I can also design from scratch and consult you during the job."
        />
        <SkillCard
          title="Development"
          text="I build scalable, modern applications using React, Node.js, Express, and MongoDB with recruiter-friendly UI/UX."
        />
      </div>

      <SkillCard
        title="Maintenance"
        text="I ensure your site stays updated, secure, and optimized for performance with ongoing support."
        center
      />
      <Divider />
    </section>
  );
}

function Divider() {
  return (
    <div className="divider">
      <svg viewBox="0 0 300 30" fill="none">
        <line x1="0" y1="15" x2="100" y2="15" className="draw" />
        <line x1="110" y1="10" x2="120" y2="20" className="draw" />
        <line x1="125" y1="10" x2="135" y2="20" className="draw" />
        <line x1="140" y1="10" x2="150" y2="20" className="draw" />
        <line x1="150" y1="20" x2="160" y2="10" className="draw" />
        <line x1="165" y1="20" x2="175" y2="10" className="draw" />
        <line x1="180" y1="20" x2="190" y2="10" className="draw" />
        <line x1="200" y1="15" x2="300" y2="15" className="draw" />
      </svg>
    </div>
  );
}

function SkillCard({ title, text, center }) {
  return (
    <div
      className={`skill-card ${center ? "center" : ""}`}
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
