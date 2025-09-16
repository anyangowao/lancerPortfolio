import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MediaRelations.css';

const MediaRelations = () => {
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

  const mediaItems = [
    {
      image: '/media relations/MR 1.png',
      title: 'Africa Fintech Book - AERC',
      link: 'https://tech-ish.com/2024/11/25/africa-fintech-book-aerc/',
      description: 'Coverage on Africa\'s Fintech Revolution'
    },
    {
      image: '/media relations/mr 2.png',
      title: 'AERC-CBK Plenary on Africa\'s Fintech Revolution',
      link: 'https://www.femmehub.com/2024/11/27/aerc-cbk-to-host-plenary-on-africas-fintech-revolution/',
      description: 'Hosting plenary discussion on fintech transformation'
    },
    {
      image: '/media relations/mr 3.png',
      title: 'Infrastructure Challenges in African Fintech',
      link: 'https://www.capitalfm.co.ke/business/2024/12/lack-of-robust-infrastructure-hinders-fintech-operations-in-africa-cbk-governor/',
      description: 'CBK Governor discusses infrastructure challenges'
    },
    {
      image: '/media relations/mr 4.png',
      title: 'Video Coverage - Fintech Discussion',
      link: 'https://www.youtube.com/watch?v=OfM8qW0gsLQ',
      description: 'YouTube coverage of fintech discussions'
    }
  ];

  return (
    <div className="media-relations-page">
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

      <div className="media-content">
        <div className="newspaper-layout">
          <div className="newspaper-columns">
            <div className="main-column">
              {mediaItems.slice(0, 2).map((item, index) => (
                <article key={index} className={`newspaper-article ${index === 0 ? 'lead-story' : 'secondary-story'}`}>
                  {index === 0 && (
                    <div className="story-banner">LEAD STORY</div>
                  )}
                  <div className="article-header">
                    <h2 className="article-headline">{item.title}</h2>
                    <div className="article-byline">
                      <span className="article-source">{new URL(item.link).hostname.replace('www.', '').toUpperCase()}</span>
                    </div>
                  </div>
                  <div className="article-body">
                    <div className="article-image-wrapper">
                      <img src={item.image} alt={item.title} className="article-image" />
                      <div className="image-caption">Press coverage from {new URL(item.link).hostname}</div>
                    </div>
                    <div className="article-text-content">
                      <p className="article-lead">{item.description}</p>
                      <p className="article-continuation">
                        This coverage highlights the significant impact of fintech developments across Africa,
                        showcasing innovative solutions and regulatory frameworks that are shaping the continent's financial landscape.
                      </p>
                      <div className="article-footer">
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="read-more-link">
                          Continue reading at {new URL(item.link).hostname} →
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="sidebar-column">
              <div className="sidebar-header">
                <h3>RECENT COVERAGE</h3>
                <div className="sidebar-divider"></div>
              </div>

              {mediaItems.slice(2).map((item, index) => (
                <article key={index + 2} className="sidebar-article">
                  <div className="sidebar-article-content">
                    <h4 className="sidebar-headline">{item.title}</h4>
                    <div className="sidebar-meta">
                      <span className="sidebar-source">{new URL(item.link).hostname.replace('www.', '')}</span>
                      <span className="sidebar-date">2024</span>
                    </div>
                    <p className="sidebar-excerpt">{item.description}</p>
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="sidebar-link">
                      Read More
                    </a>
                  </div>
                  <div className="sidebar-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                </article>
              ))}

            </div>
          </div>
        </div>

      </div>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; <span id="current-year">{new Date().getFullYear()}</span> Lancer Wao. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MediaRelations;