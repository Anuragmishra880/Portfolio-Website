export default function ProjectCard({
  img,
  title,
  desc,
  tech,
  live,
  github,
  adminLive,
  adminGithub,
  ...rest
}) {
  return (
    <div className="project-card" {...rest}>
      <img src={img} alt={title} />
      <div className="project-content">
        <h3>{title}</h3>
        <p>{desc}</p>

        <div className="tech">
          {tech.map((tech, i) => (
            <span key={i}>{tech}</span>
          ))}
        </div>

        <div className="links">
          <a href={live} target="_blank" rel="noreferrer">
            {" "}
            Live
          </a>
          <a href={github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>

        {adminLive && adminGithub && (
          <div className="links">
            <a href={adminLive} target="_blank" rel="noreferrer">
              Admin Panel
            </a>
            <a href={adminGithub} target="_blank" rel="noreferrer">
              Admin GitHub
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
