import React from "react";
import "./Skills.css";

const skillsData = {
  usingNow: [
    {
      name: "HTML",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "Bootstrap",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "JavaScript",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "MongoDB",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Git",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
  ],
  learning: [
    {
      name: "Next.js",

      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    },

    {
      name: "TypeScript",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },
  ],
  other: [
    {
      name: "C Lang",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
    },
    {
      name: "C++",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    },
  ],
};

const Skills = () => {
  return (
    <div className="skills-section ">
      <h2 className="text-center mb-5">SKILLS</h2>

      {/* Using Now */}
      <SkillCategory title="Using Now" skills={skillsData.usingNow} />

      {/* Learning Now */}
      <SkillCategory title="Learning Now" skills={skillsData.learning} />

      {/* Other Skills */}
      <SkillCategory title="Other Skills" skills={skillsData.other} />
    </div>
  );
};

const SkillCategory = ({ title, skills }) => (
  <>
    <h3 className=" mt-4">{title}</h3>
    <div
      className="skills-grid"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      {skills.map((skill, index) => (
        <div key={index} className="col-lg-3 col-md-4 col-6 mb-4">
          <div className="skill-item text-center">
            <img src={skill.img} alt={skill.name} className="img-fluid mb-2" />
            <p>{skill.name}</p>
          </div>
        </div>
      ))}
    </div>
  </>
);

export default Skills;
