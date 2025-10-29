import React, { useState, useEffect } from "react";
import { FaHome, FaLaptopCode, FaProjectDiagram, FaBriefcase, FaEnvelope, FaTimes } from "react-icons/fa";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > document.getElementById("home").offsetHeight - 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const handleLinkClick = () => setSidebarOpen(false);

  const links = [
    { href: "#home", icon: <FaHome />, label: "Home" },
    { href: "#expertise", icon: <FaLaptopCode />, label: "Expertise" },
    { href: "#projects", icon: <FaProjectDiagram />, label: "Projects" },
    { href: "#experience", icon: <FaBriefcase />, label: "Experience" },
    { href: "#contact", icon: <FaEnvelope />, label: "Contact" },
  ];

  return (
    <>
      <header className={scrolled && !sidebarOpen ? "header scrolled" : "header"}>
        <div className="container">
          <div className="my-navbar">
            <div className="logo">Alishba Hanif</div>
            <div className={`nav-toggle ${sidebarOpen ? "hidden" : ""}`} onClick={toggleSidebar}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>
        </div>
      </header>

      <div className={sidebarOpen ? "sidebar open" : "sidebar"}>
        <div className="close" onClick={toggleSidebar}>
          <FaTimes />
        </div>

        <nav>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={handleLinkClick}>
              <div className="icon">{link.icon}</div>
              <span>{link.label}</span>
            </a>
          ))}
        </nav>
      </div>

      {sidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Header;
