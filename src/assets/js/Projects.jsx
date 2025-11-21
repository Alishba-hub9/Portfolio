import SpiralyzeImg from "../images/Spiralyze-Project.png";
import AIBusinessIntegratorsImg from "../images/AIBusiness-Integrators.png";
import BeFoodieImg from "../images/BefoodieHome-project.png";
import AmazonImg from "../images/Amazon-Project.png";
import MutualFundsImg from "../images/Mutual-Funds.png";
import DemoitImg from "../images/Demoit-Project.png";
import DarazImg from "../images/Daraz-Project.png";
import BeautyParlourImg from "../images/Beauty-Parlour-website.png";
import BlogsProjectImg from "../images/Blogs-project.png";

const Projects = () => {
  const projects = [
    {
      title: "Spiralyze Project",
      category: "Figma to Code Conversion",
      description:
        "Converted from Figma to real code using HTML, SCSS, JS, jQuery, Bootstrap, and responsive design. Includes API-based testimonials, npm handling, and JS contact form validation.",
      img: SpiralyzeImg,
      link: "https://spiralyze-bay.vercel.app/",
    },
    {
      title: "AI Business Integrators Website",
      category: "WordPress Development",
      description:
        "A fully developed and customized business website built using WordPress, Elementor, and theme customization. Implemented responsive layouts, section structuring, UI improvements, and performance optimization to deliver a polished, client-ready website.",
      img: AIBusinessIntegratorsImg,
      link: "https://aibusinessintegrators.ai/",
    },
    {
      title: "BeFoodieHome",
      category: "Figma Conversion & Modern Animations",
      description:
        "A responsive homepage built from Figma using HTML, SCSS, and jQuery with AOS scroll animations and npm packages for performance and UI enhancement.",
      img: BeFoodieImg,
      link: "https://befoodie-homepage.vercel.app/",
    },
    {
      title: "Amazon Clone",
      category: "Frontend E-commerce Replica",
      description:
        "Developed a responsive e-commerce UI clone using HTML, SCSS, and JavaScript, replicating product listing, cart UI, and interactive hover effects.",
      img: AmazonImg,
      link: "https://amazon-project-flax.vercel.app/",
    },
    {
      title: "Mutual Funds Dashboard",
      category: "Data Visualization",
      description:
        "A task-based project built using mock JSON data fetched dynamically to display updated fund trends over dates and years. Responsive UI with Chart.js integration and npm package handling.",
      img: MutualFundsImg,
      link: "https://mutual-funds-proj.vercel.app/",
    },
    {
      title: "Demoit Website",
      category: "Animated Corporate Website",
      description:
        "Developed with HTML, SCSS, JS, and Bootstrap using CSS animations, libraries, and npm-based build setup with Gulp for optimization and automation.",
      img: DemoitImg,
      link: "https://demoit-three.vercel.app/",
    },
    {
      title: "Daraz Clone",
      category: "E-commerce UI Build",
      description:
        "Created using pure HTML, CSS, and vanilla JavaScript. Focused on pixel-perfect responsiveness and functional UI with hover and navigation effects.",
      img: DarazImg,
      link: "https://daraz-project-two.vercel.app/",
    },
    {
      title: "Beauty Parlour Website",
      category: "Animated Service Website",
      description:
        "A fully responsive website made with HTML and pure CSS. Includes smooth animations and JS contact form validation.",
      img: BeautyParlourImg,
      link: "https://beauty-parlour-project-ten.vercel.app/",
    },
    {
      title: "Blogs-Project",
      category: "Full-Stack Blog Website",
      description:
        "A complete PHP + MySQL blog platform where multiple users can register, add, edit, and update their blogs. Integrated with HTML, SCSS, JS, and jQuery for frontend dynamics.",
      img: BlogsProjectImg,
      link: "https://github.com/Alishba-hub9/Blogs_Project",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <h2 className="section-heading text-center">FEATURED PROJECTS</h2>

        <div className="row gy-5 gy-lg-4">
          {projects.map((project, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="project-card">
                <div className="project-image">{project.img && <img src={project.img} alt={project.title} />}</div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p className="category">{project.category}</p>
                  <p className="description">{project.description}</p>
                  <a href={project.link} className="btn-view" target="_blank" rel="noreferrer">
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
