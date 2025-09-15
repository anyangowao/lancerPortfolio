import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AboutMePage.css';

const AboutMePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.querySelector('.about-section');
      const images = document.querySelectorAll('.taped-image');
      
      if (aboutSection) {
        const sectionTop = aboutSection.offsetTop;
        const sectionHeight = aboutSection.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight;
        
        if (scrollPosition > sectionTop + sectionHeight * 0.5) {
          images.forEach((image, index) => {
            setTimeout(() => {
              image.classList.add('animate');
            }, index * 200);
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="about-me-page">
      <nav className="navbar">
        <div className="nav-container">
          <button className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle navigation menu">
            <span className="nav-toggle-icon"></span>
            <span className="nav-toggle-icon"></span>
            <span className="nav-toggle-icon"></span>
          </button>
          <ul className={`nav-menu ${isMenuOpen ? 'nav-menu-active' : ''}`}>
            <li className="nav-item"><Link to="/about" className="nav-link" onClick={closeMenu}>About</Link></li>
            <li className="nav-item"><Link to="/media-relations" className="nav-link" onClick={closeMenu}>Media Relations</Link></li>
            <li className="nav-item"><Link to="/resume" className="nav-link" onClick={closeMenu}>Resume</Link></li>
            <li className="nav-item"><Link to="/articles" className="nav-link" onClick={closeMenu}>Articles</Link></li>
            <li className="nav-item"><Link to="/media-cutting" className="nav-link" onClick={closeMenu}>Media Cutting</Link></li>
            <li className="nav-item"><Link to="/social-media-management" className="nav-link" onClick={closeMenu}>Social Media Management</Link></li>
            <li className="nav-item"><Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link></li>
          </ul>
        </div>
      </nav>

      <section id="hero-about-section" className="hero-about-section">
        <div className="newspaper-layout">
          <div className="main-article">
            <div className="headline-section">
              <div className="specialist-badge">
                <div className="beeping-circle"></div>
                <span className="specialist-text">Communication Specialist</span>
              </div>
              <h1 className="headline">
                Lancer Wao
              </h1>
              <div className="cta-section">
                <Link to="/articles" className="btn btn-primary">View Articles</Link>
                <Link to="/resume" className="btn btn-secondary">Download Resume</Link>
              </div>
            </div>
            
            <div className="sidebar">
              <div className="sidebar-article featured-work-large">
                <div className="feature-image-extra-large">
                  <img 
                    src="/Portfolio_Home.png" 
                    alt="Lancer Wao - Communications Professional" 
                    className="landing-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="newspaper-layout about-layout">
          <div className="about-text-section">
            <div className="about-intro">
              <h2 className="about-title">About Me</h2>
            </div>
            
            <div className="about-content-wrapper">
              <div className="about-text">
                <div className="text-highlight">
                  I am a <span className="emphasis-text">skilled and innovative communications professional</span> with a passion for turning ideas into impactful messages.
                </div>
                <p>
                  With a strong foundation in strategic communication and a curiosity that drives me to explore new perspectives, I specialize in crafting tailored solutions that <strong>inform, engage, and inspire</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pinboard-section">
          <div className="newspaper-layout">
            <div className="pinboard-container">
              <div className="taped-image">
                <div className="image-container">
                  <div className="masking-tape tape-top"></div>
                  <div className="masking-tape tape-bottom"></div>
                  <img 
                    src="/Event Management and Communications.jpg" 
                    alt="Event Management and Communications" 
                    className="image-content"
                  />
                </div>
                <div className="image-label">
                  <h3 className="image-title">Event Management and Communications</h3>
                </div>
              </div>
              
              <div className="taped-image">
                <div className="image-container">
                  <div className="masking-tape tape-left"></div>
                  <div className="masking-tape tape-right"></div>
                  <img 
                    src="/Editing and Writing.png" 
                    alt="Editing and Writing" 
                    className="image-content"
                  />
                </div>
                <div className="image-label">
                  <h3 className="image-title">Editing and Writing</h3>
                </div>
              </div>
              
              <div className="taped-image">
                <div className="image-container">
                  <div className="masking-tape tape-top"></div>
                  <div className="masking-tape tape-bottom"></div>
                  <img 
                    src="/Social Media Management.jpg" 
                    alt="Social Media Management" 
                    className="image-content"
                  />
                </div>
                <div className="image-label">
                  <h3 className="image-title">Social Media Management</h3>
                </div>
              </div>
              
              <div className="taped-image">
                <div className="image-container">
                  <div className="masking-tape tape-left"></div>
                  <div className="masking-tape tape-right"></div>
                  <img 
                    src="/Media Relations.jpg" 
                    alt="Media Relations" 
                    className="image-content"
                  />
                </div>
                <div className="image-label">
                  <h3 className="image-title">Media Relations</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; <span id="current-year">{new Date().getFullYear()}</span> Lancer Wao. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutMePage;