import ExperienceImg from "../images/experience-section-img.svg";

const Experience = () => {
  const experiences = [
    {
      role: "Web Developer Intern",
      company: "WebDevSoft - Web & Software Solutions [Bihar,India]",
      duration: "Oct 2025 — Present (Part-Time)",
      description:
        "Contributing to live projects by building reusable components, fixing UI issues, and improving front-end functionality. Collaborating with senior developers to enhance UX and maintain coding best practices.",
    },
    {
      role: "WordPress Web Developer",
      company: "INFINITY Protection Inc [Florida,US]",
      duration: "Aug 2025 — Present (Full-Time)",
      description:
        "Working as a Full Stack WordPress Developer handling frontend and backend, including theme customization, plugin integration, responsive UI development, SEO optimization, and website performance improvements.",
    },
    {
      role: "Freelance Frontend Developer",
      company: "Remote",
      duration: "2022 — Present",
      description:
        "Developing modern, responsive, and high-performing websites for clients worldwide. Focused on clean UI, optimized performance, and delivering pixel-perfect results using HTML, SCSS, JavaScript, and React.",
    },
    {
      role: "Freelance WordPress Developer",
      company: "Remote",
      duration: "2022 — Present",
      description:
        "Developing responsive and scalable WordPress websites for clients worldwide. Focused on Themes customization, plugin integration, clean UI structure, performance optimization, and delivering reliable, client-ready solutions.",
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
