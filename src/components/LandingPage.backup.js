import React, { useState, useEffect } from 'react';
import ImagePlaceholder from './ImagePlaceholder';
import './LandingPage.css';

const LandingPage = () => {
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
    <div className="landing-page">
      <nav className="navbar">
        <div className="nav-container">
          <button className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle navigation menu">
            <span className="nav-toggle-icon"></span>
            <span className="nav-toggle-icon"></span>
            <span className="nav-toggle-icon"></span>
          </button>
          <ul className={`nav-menu ${isMenuOpen ? 'nav-menu-active' : ''}`}>
            <li className="nav-item"><a href="#about" className="nav-link" onClick={closeMenu}>About</a></li>
            <li className="nav-item"><a href="#media-relations" className="nav-link" onClick={closeMenu}>Media Relations</a></li>
            <li className="nav-item"><a href="#resume" className="nav-link" onClick={closeMenu}>Resume</a></li>
            <li className="nav-item"><a href="#articles" className="nav-link" onClick={closeMenu}>Articles</a></li>
            <li className="nav-item"><a href="#media-cutting" className="nav-link" onClick={closeMenu}>Media Cutting</a></li>
            <li className="nav-item"><a href="#social-media-management" className="nav-link" onClick={closeMenu}>Social Media Management</a></li>
            <li className="nav-item"><a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a></li>
          </ul>
        </div>
      </nav>

      <section className="hero-section">
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
                <button className="btn btn-primary">View Articles</button>
                <button className="btn btn-secondary">Download Resume</button>
              </div>
            </div>
            
            <div className="sidebar">
              <div className="sidebar-article featured-work-large">
                <div className="feature-image-extra-large">
                  <ImagePlaceholder 
                    src="/Portfolio_Home.png" 
                    alt="Lancer Wao - Communications Professional" 
                    className="landing-image"
                    fallbackText="LW"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="about-section">
        <div className="newspaper-layout">
          <div className="about-text-section">
            <h2 className="about-title">About Me</h2>
            <p className="about-text">
              I am a skilled and innovative communications professional with a passion for turning ideas into impactful messages. With a strong foundation in strategic communication and a curiosity that drives me to explore new perspectives, I specialize in crafting tailored solutions that inform, engage, and inspire.
            </p>
          </div>
        </div>
        
        <div className="pinboard-section">
          <div className="newspaper-layout">
            <div className="pinboard-container">
              <div className="taped-image">
                <div className="masking-tape tape-top"></div>
                <div className="masking-tape tape-bottom"></div>
                <ImagePlaceholder 
                  src="/Event Management and Communications.jpg" 
                  alt="Event Management and Communications" 
                  className="image-content"
                />
                <div className="image-label">
                  <h3 className="image-title">Event Management and Communications</h3>
                </div>
              </div>
              
              <div className="taped-image">
                <div className="masking-tape tape-left"></div>
                <div className="masking-tape tape-right"></div>
                <ImagePlaceholder 
                  src="/Editing and Writing.png" 
                  alt="Editing and Writing" 
                  className="image-content"
                />
                <div className="image-label">
                  <h3 className="image-title">Editing and Writing</h3>
                </div>
              </div>
              
              <div className="taped-image">
                <div className="masking-tape tape-top"></div>
                <div className="masking-tape tape-bottom"></div>
                <ImagePlaceholder 
                  src="/Social Media Management.jpg" 
                  alt="Social Media Management" 
                  className="image-content"
                />
                <div className="image-label">
                  <h3 className="image-title">Social Media Management</h3>
                </div>
              </div>
              
              <div className="taped-image">
                <div className="masking-tape tape-left"></div>
                <div className="masking-tape tape-right"></div>
                <ImagePlaceholder 
                  src="/Media Relations.jpg" 
                  alt="Media Relations" 
                  className="image-content"
                />
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

export default LandingPage;