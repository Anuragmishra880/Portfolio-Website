import React from "react";
import "./Project.css";
import ProjectCard from "../Components/ProjectCard";
const Project = () => {
  const projects = [
    {
      img: "Shop-Page-copy.png",
      title: "Nandini Medical Store",
      desc: "Built a MERN-based medical e-commerce application...",
      tech: ["HTML", "CSS", "Bootstrap", "React", "Redux"],
      live: "https://nandini-medical.vercel.app/",
      github:
        "https://github.com/Anuragmishra880/Nandini-medical-User-frontend",
    },
    {
      img: "weather.png",
      title: "Weather Project",
      desc: "A responsive web application...",
      tech: ["Javascript", "React js"],
      live: "https://weather10-neon.vercel.app/",
      github: "https://github.com/Anuragmishra880/Weather-App",
    },
    {
      img: "portfolio.png",
      title: "Portfolio Project",
      desc: "A responsive web application...",
      tech: ["Javascript", "React js"],
      live: "#",
      github: "#",
    },
  ];
  return (
    <section className="project-section">
      <h2 data-aos="flip-up">PROJECTS</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            data-aos={index % 2 === 0 ? "flip-right" : "flip-left"}
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            data-aos-delay={index * 100}
            {...project}
          ></ProjectCard>
        ))}

       
      </div>
    </section>
  );
};

export default Project;
