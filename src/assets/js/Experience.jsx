import ExperienceImg from "../images/experience-section-img.svg";

const Experience = () => {
  const experiences = [
    {
      role: "Web Developer Intern",
      company: "WebDevSoft - Web & Software Solutions",
      duration: "Oct 2025 — Present",
      description:
        "Contributing to live projects by building reusable components, fixing UI issues, and improving front-end functionality. Collaborating with senior developers to enhance UX and maintain coding best practices.",
    },
    {
      role: "Freelance Frontend Developer",
      company: "Remote",
      duration: "2023 — Present",
      description:
        "Developing modern, responsive, and high-performing websites for clients worldwide. Focused on clean UI, optimized performance, and delivering pixel-perfect results using HTML, SCSS, JavaScript, and React.",
    },
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <h2 className="section-heading text-center">EXPERIENCE</h2>

        <div className="row align-items-end gy-4">
          <div className="col-md-5">
            <div className="experience-image">
              <img src={ExperienceImg} alt="Experience" />
            </div>
          </div>

          <div className="col-md-7">
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div className="timeline-item" key={index}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h3>{exp.role}</h3>
                    <h4>{exp.company}</h4>
                    <span className="duration">{exp.duration}</span>
                    <p>{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
