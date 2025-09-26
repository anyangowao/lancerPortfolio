import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Articles.css';

const Articles = () => {
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
    <div className="articles-page">
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

      <main className="articles-main">

        <div className="articles-container">
          <div className="articles-layout">
            {/* Featured Article - Left Side */}
            <section className="featured-section">
              <div className="featured-article">
                <img src="/articles/1568295023745.png" alt="Menstrual Health Hygiene" className="featured-bg-image" />
                <div className="featured-overlay">
                  <div className="featured-content">
                    <div className="featured-badge">Featured</div>
                    <div className="featured-meta">
                      <span className="category">Health & Society</span>
                      <span className="date">Jan 3</span>
                      <span className="read-time">2 min</span>
                    </div>
                    <h2>Menstrual Health Hygiene</h2>
                    <p className="featured-excerpt">
                      A shocking story from Bomet, Kenya reveals the devastating consequences of period-shaming in schools.
                    </p>
                    <Link to="/opinions-features/menstrual-health" className="read-more-featured">
                      Read Full Article
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Top Headlines - Right Side */}
            <section className="headlines-section">
              <h2 className="section-title">Top Headlines</h2>
              <div className="headlines-list">
                <article className="headline-item">
                  <div className="headline-image-small">
                    <img src="/articles/1574149155824.jpg" alt="Youth Unemployment in Kenya" />
                  </div>
                  <div className="headline-content-small">
                    <div className="headline-meta-small">
                      <span className="category-small">Economics</span>
                      <span className="date-small">Jan 3</span>
                    </div>
                    <h3>Youth Unemployment in Kenya - Nothing to Smile At</h3>
                    <p className="headline-excerpt-small">
                      Every time I hear someone use the phrase 'youth unemployment', I cringe...
                    </p>
                    <Link to="/opinions-features/youth-unemployment" className="read-more-small">
                      Read More →
                    </Link>
                  </div>
                </article>

                {/* Additional headline placeholder */}
                <article className="headline-item">
                  <div className="headline-image-small">
                    <img src="/articles/1568295023745.png" alt="Another Article" />
                  </div>
                  <div className="headline-content-small">
                    <div className="headline-meta-small">
                      <span className="category-small">Society</span>
                      <span className="date-small">Jan 2</span>
                    </div>
                    <h3>Coming Soon: More Stories</h3>
                    <p className="headline-excerpt-small">
                      More compelling stories about social issues in Kenya...
                    </p>
                    <span className="read-more-small coming-soon">
                      Coming Soon
                    </span>
                  </div>
                </article>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; <span id="current-year">{new Date().getFullYear()}</span> Lancer Wao. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Articles;
