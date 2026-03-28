import React from "react";
import "./Project.css";
import ProjectCard from "../Components/ProjectCard";
const Project = () => {
  const projects = [
    {
      img: "Shop-Page-copy.png",
      title: "Nandini Medical Store",
      desc: "Developed a full-stack medical e-commerce application with separate user and admin panels, including product management, cart system, and Cloudinary-based image uploads.",
      tech: ["React", "Redux", "Node", "Express", "MongoDB"],
      live: "https://nandini-medical.vercel.app/",
      github:
        "https://github.com/Anuragmishra880/Nandini-medical-User-frontend",
    },
    {
      img: "weather.png",
      title: "Weather Project",
      desc: "Developed a responsive weather application using React that fetches real-time weather data from API, displaying temperature, location, and weather conditions with a clean UI.",
      tech: ["HTML", "CSS", "Javascript", "React js"],
      live: "https://weather10-neon.vercel.app/",
      github: "https://github.com/Anuragmishra880/Weather-App",
    },
    {
      img: "portfolio.png",
      title: "Portfolio Project",
      desc: "Built a modern and responsive portfolio using React, showcasing projects with smooth animations, contact form integration (EmailJS), and downloadable resume.",
      tech: ["HTML", "CSS", "Javascript", "React js", "Email JS"],
      live: "https://anurag-portfolio-chi-six.vercel.app/",
      github: "https://github.com/Anuragmishra880/Portfolio-Website",
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
