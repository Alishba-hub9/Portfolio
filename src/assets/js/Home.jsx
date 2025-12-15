import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profileImage from "../images/my-img.jpg";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="home-left">
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/alishba-hanif-148b98350/" target="_blank" rel="noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/Alishba-hub9" target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>
                <a href="mailto:alishbahanif127@gmail.com">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="home-right">
              <motion.div
                className="text-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <TypeAnimation
                  sequence={["Frontend Developer", 1500, "Wordpress Developer", 1500, "Creative Coder", 1500]}
                  wrapper="h3"
                  className="typewriter"
                  cursor={true}
                  repeat={Infinity}
                />

                <h1 className="name">Alishba Hanif</h1>

                <p className="description">
                  I design and build sleek, responsive, and user-friendly digital experiences that combine creativity
                  with functionality.
                </p>

                <div className="buttons">
                  <a href="/My_Resume.pdf" download="My_Resume.pdf" className="btn primary-btn">
                    Download CV
                  </a>

                  <a href="#contact" className="btn secondary-btn">
                    Contact Me
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="home-img">
          <img src={profileImage} alt="Alishba Hanif" />
        </div>
      </div>
    </section>
  );
};

export default Home;
