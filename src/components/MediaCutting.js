import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MediaCutting.css';

const MediaCutting = () => {
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
    <div className="media-cutting-page" style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
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
            <li className="nav-item"><Link to="/social-media-management" className="nav-link" onClick={closeMenu}>Social Media Content</Link></li>
            <li className="nav-item"><Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link></li>
          </ul>
        </div>
      </nav>

      <main className="media-cutting-content" style={{flex: 1}}>

        <section className="published-features" style={{paddingTop: '120px'}}>
          <div className="container">
            <h2>Published Features</h2>
            <div className="features-grid">
              <div className="media-card">
                <div className="card-image">
                  <img src="/Environmental Challenges.png" alt="Women environmental challenges" />
                </div>
                <div className="card-content">
                  <h3>Environmental Challenges Facing Women in Kenya</h3>
                  <p className="source">Source: Standard Media</p>
                  <a href="/Read More/Environmental Challenges Facing Women in Kenya.pdf" target="_blank" rel="noopener noreferrer" className="read-more-btn">Read More</a>
                </div>
              </div>

              <div className="media-card">
                <div className="card-image">
                  <img src="/Financing is the backbone.png" alt="Climate resilience financing" />
                </div>
                <div className="card-content">
                  <h3>Financing the backbone to building a resilient climate in Kenya</h3>
                  <p className="source">Source: Standard Media</p>
                  <a href="/Read More/Financing_the backbone to building a resilient climate in Kenya.pdf" target="_blank" rel="noopener noreferrer" className="read-more-btn">Read More</a>
                </div>
              </div>

              <div className="media-card">
                <div className="card-image">
                  <img src="/Water harvesting.png" alt="Water harvesting technology" />
                </div>
                <div className="card-content">
                  <h3>Water harvesting technology is a key remedy for ASAL regions</h3>
                  <p className="source">Source: Standard Media</p>
                  <a href="/Read More/Water harvesting technology is a key remedy for ASAL regions.pdf" target="_blank" rel="noopener noreferrer" className="read-more-btn">Read More</a>
                </div>
              </div>

              <div className="media-card">
                <div className="card-image">
                  <img src="/Water problems.png" alt="Water funding solutions" />
                </div>
                <div className="card-content">
                  <h3>More funding required to address the water problem in Kenya</h3>
                  <p className="source">Source: Standard Media</p>
                  <a href="/Read More/More funding required to address the water problem in Kenya.pdf" target="_blank" rel="noopener noreferrer" className="read-more-btn">Read More</a>
                </div>
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

export default MediaCutting;
