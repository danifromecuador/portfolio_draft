// Navbar.js
import { useState, useEffect } from 'react';
import './Navbar.css';

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [hoveredAbout, setHoveredAbout] = useState("")
  const [hoveredProjects, setHoveredProjects] = useState("")
  const [hoveredSkills, setHoveredSkills] = useState("")
  const [hoveredContact, setHoveredContact] = useState("")

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        block: 'start',
      });

      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Use Intersection Observer to determine which section is in the viewport
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { threshold: 0.8 } // Adjust the threshold as needed
      );

      // Observe each section
      ['about', 'projects', 'skills', 'contact'].forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.observe(element);
        }
      });
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the observer on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className='navbar'>
      <li
        onClick={() => scrollToSection('about')}
        onMouseMove={() => setHoveredAbout("hovered")}
        onMouseLeave={() => setHoveredAbout("")}
      >
        <span className={`about ${activeSection === 'about' ? 'active' : ''} ${hoveredAbout}`}>About Me</span>
      </li>
      <li
        onClick={() => scrollToSection('projects')}
        onMouseMove={() => setHoveredProjects("hovered")}
        onMouseLeave={() => setHoveredProjects("")}
      >
        <span className={`projects ${activeSection === 'projects' ? 'active' : ''} ${hoveredProjects}`}>Projects</span>
      </li>
      <li
        onClick={() => scrollToSection('skills')}
        onMouseMove={() => setHoveredSkills("hovered")}
        onMouseLeave={() => setHoveredSkills("")}
      >
        <span className={`skills ${activeSection === 'skills' ? 'active' : ''} ${hoveredSkills}`}>Skills</span>
      </li>
      <li
        onClick={() => scrollToSection('contact')}
        onMouseMove={() => setHoveredContact("hovered")}
        onMouseLeave={() => setHoveredContact("")}
      >
        <span className={`contact ${activeSection === 'contact' ? 'active' : ''} ${hoveredContact}`}>Contact</span>
      </li>
    </nav>
  );
};
