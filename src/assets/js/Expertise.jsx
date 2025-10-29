import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaDatabase, FaSass, FaGitAlt, FaWordpress } from "react-icons/fa";
import { SiJquery, SiBootstrap, SiMysql, SiVite } from "react-icons/si";

const Expertise = () => {
  const skills = [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <SiJquery />, name: "jQuery" },
    { icon: <FaSass />, name: "SCSS" },
    { icon: <SiBootstrap />, name: "Bootstrap" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiVite />, name: "Vite" },
    { icon: <FaPhp />, name: "PHP" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <FaWordpress />, name: "Wordpress" },
    { icon: <FaGitAlt />, name: "GitHub" },
  ];

  return (
    <section className="expertise-section" id="expertise">
      <div className="container">
        <h2 className="section-heading text-center">MY EXPERTISE</h2>

        <div className="row align-items-center gy-3">
          <div className="col-lg-6">
            <div className="expertise-content">
              <h3>Code with Vision</h3>
              <p>
                With a background in software engineering, I create responsive, user-focused digital experiences that
                balance design elegance with strong technical foundations. My approach combines creativity with
                analytical thinking to deliver seamless, scalable, and performance-driven web solutions. I’m passionate
                about turning ideas into meaningful digital products that not only look great but also work flawlessly
                across platforms.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="skills-wrapper">
              {skills.map((skill, index) => (
                <div className="skill" key={index}>
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
