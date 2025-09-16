import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const mediaCards = document.querySelectorAll('.media-card');
      
      mediaCards.forEach((card, index) => {
        const cardTop = card.offsetTop;
        const scrollPosition = window.scrollY + window.innerHeight;
        
        if (scrollPosition > cardTop + 100) {
          setTimeout(() => {
            card.classList.add('animate');
          }, index * 100);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="contact-page">
      <nav className="navbar">
        <div className="nav-container">
          <button className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle navigation menu">
            <span className="nav-toggle-icon"></span>
            <span className="nav-toggle-icon"></span>
            <span className="nav-toggle-icon"></span>
          </button>
          <ul className={`nav-menu ${isMenuOpen ? 'nav-menu-active' : ''}`}>
            <li className="nav-item"><Link to="/home" className="nav-link" onClick={closeMenu}>Home</Link></li>
            <li className="nav-item"><Link to="/resume" className="nav-link" onClick={closeMenu}>Resume</Link></li>
            <li className="nav-item"><Link to="/media-mentions" className="nav-link" onClick={closeMenu}>Media Mentions</Link></li>
            <li className="nav-item"><Link to="/opinions-features" className="nav-link" onClick={closeMenu}>Opinions & Features</Link></li>
            <li className="nav-item"><Link to="/press-contributions" className="nav-link" onClick={closeMenu}>Press Contributions</Link></li>
            <li className="nav-item"><Link to="/social-media-management" className="nav-link" onClick={closeMenu}>Social Media Management</Link></li>
            <li className="nav-item"><Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link></li>
          </ul>
        </div>
      </nav>

      <main className="contact-content">
        <section className="hero-section" style={{
          background: `linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.4) 100%), url(${process.env.PUBLIC_URL}/Contact_Photo.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          backgroundAttachment: 'scroll'
        }}>
          <div className="hero-content">
            <h1>Let's Connect</h1>
            <p>Ready to collaborate on your next project? Get in touch and let's create something amazing together.</p>
          </div>
        </section>

        <section className="contact-info-section">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-details">
                <h2>Get In Touch</h2>
                <div className="contact-items">
                  <div className="contact-item">
                    <div className="contact-icon">
                      <span>📧</span>
                    </div>
                    <div className="contact-text">
                      <h3>Email</h3>
                      <a href="mailto:lancerwao@gmail.com">lancerwao@gmail.com</a>
                    </div>
                  </div>


                  <div className="contact-item">
                    <div className="contact-icon">
                      <span>📍</span>
                    </div>
                    <div className="contact-text">
                      <h3>Location</h3>
                      <p>Nairobi, Kenya</p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">
                      <span>💼</span>
                    </div>
                    <div className="contact-text">
                      <h3>LinkedIn</h3>
                      <a href="https://linkedin.com/in/lancer-wao" target="_blank" rel="noopener noreferrer">Connect with me</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-form-container">
                <h2>Send a Message</h2>
                <form className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" name="subject" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="6" required></textarea>
                  </div>

                  <button type="submit" className="submit-btn">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="worked-with-section">
          <div className="container">
            <h2>Proudly Worked With</h2>
            <div className="logos-grid">
              <div className="logo-item">
                <img src={`${process.env.PUBLIC_URL}/worked with/Standard Media logo.png`} alt="Standard Media" />
              </div>
              <div className="logo-item">
                <img src={`${process.env.PUBLIC_URL}/worked with/AERC Logo downloaded.png`} alt="AERC" />
              </div>
              <div className="logo-item">
                <img src={`${process.env.PUBLIC_URL}/worked with/WEMA logo Without Background edited (1).png`} alt="WEMA" />
              </div>
              <div className="logo-item">
                <img src={`${process.env.PUBLIC_URL}/worked with/307314012_476411011185412_760573613198515657_n.png`} alt="Company" />
              </div>
              <div className="logo-item">
                <img src={`${process.env.PUBLIC_URL}/worked with/945adbba-73b1-445b-81e2-89ec561f8cdb-e1750866036984.png`} alt="Company" />
              </div>
              <div className="logo-item">
                <img src={`${process.env.PUBLIC_URL}/worked with/1630630163404.jpg`} alt="Company" />
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; <span id="current-year">{new Date().getFullYear()}</span> Lancer Wao. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;