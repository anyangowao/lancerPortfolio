import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SocialMediaManagement.css';

const SocialMediaManagement = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [animatedElements, setAnimatedElements] = useState(new Set());
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const carouselImages = [
    {
      src: '/carousel/Social media analytics (1).png',
      alt: 'Social Media Analytics Dashboard',
      title: 'Analytics & Insights'
    },
    {
      src: '/carousel/WEMA Social media sample.png',
      alt: 'WEMA Social Media Sample',
      title: 'WEMA Foundation Campaign'
    },
    {
      src: '/carousel/Top Tweets.png',
      alt: 'Top Performing Tweets',
      title: 'Engagement Success'
    },
    {
      src: '/carousel/Video performance.png',
      alt: 'Video Performance Metrics',
      title: 'Video Content Strategy'
    },
    {
      src: '/carousel/wema social sample.png',
      alt: 'WEMA Social Sample Post',
      title: 'Community Building'
    }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleServiceClick = (service) => {
    setActiveService(activeService === service ? null : service);
  };

  const handleLearnMore = (service) => {
    console.log(`Learn more about ${service}`);
    // This could navigate to a detailed service page or show a modal
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
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

  // Auto-play carousel
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        nextSlide();
      }, 4000);
      
      return () => clearInterval(interval);
    }
  }, [currentSlide, isAutoPlaying]);

  return (
    <div className="social-media-management-page" style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
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

      <main className="main-content" style={{flex: '1'}}>
        <div className="carousel-container">
          <div className="carousel-wrapper">
            <div className="carousel-slides" style={{transform: `translateX(-${currentSlide * 100}%)`}}>
              {carouselImages.map((image, index) => (
                <div key={index} className="carousel-slide">
                  <img src={image.src} alt={image.alt} />
                  <div className="slide-overlay">
                    <h3 className="slide-title">{image.title}</h3>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="carousel-btn carousel-btn-prev" onClick={prevSlide} aria-label="Previous slide">
              <span>‹</span>
            </button>
            <button className="carousel-btn carousel-btn-next" onClick={nextSlide} aria-label="Next slide">
              <span>›</span>
            </button>
            
            <div className="carousel-indicators">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-indicator ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <section className="newspaper-section">
          <div className="newspaper-container">
            <div className="newspaper-header">
              <img src="/social.jpg" alt="Social Media Management" className="header-image" />
              <div className="header-content">
                <h1 className="newspaper-title">Digital Storytelling That Drives Impact</h1>
                <div className="newspaper-lead">
                  <p>
                    If you're looking for someone who understands how to turn meaningful work into powerful digital stories that connect, engage, and inspire—then you're in the right place. I specialize in bringing development-focused missions to life online, using strategy, creativity, and a deep understanding of community impact.
                  </p>
                  <p className="highlight-text">
                    Above is a glimpse into my work with <span className="brand-name">Wema Health Foundation</span>, <span className="brand-name">AERC</span>, <span className="brand-name">HFAW</span> and <span className="brand-name">KEWASNET</span> where I helped grow their digital presence, amplify their message, and build an engaged community around women's health and empowerment.
                  </p>
                  <p className="impact-text">
                    <strong>This is the kind of impact I can create for your brand too.</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="services-magazine">
              <div className="magazine-layout">
                {/* Feature Article - Social Media Strategy */}
                <article className="feature-article">
                  <div className="feature-image-container">
                    <img src="/services/marketing-ideas-share-research-planning-concept.jpg" alt="Social Media Strategy" className="feature-image" />
                    <div className="feature-overlay">
                      <span className="feature-category">STRATEGY</span>
                    </div>
                  </div>
                  <div className="feature-content">
                    <h3 className="feature-headline">Social Media Strategy</h3>
                    <p className="feature-lead">
                      Brands deserve to cut through the online noise with social media strategies that truly deliver.
                    </p>
                    <p className="feature-text">
                      From content creation to engagement and analytics, tailored approaches are crafted to boost visibility, spark conversations, and turn followers into loyal customers. Blending creativity with data-driven insight ensures every post serves a purpose—whether it's raising awareness, driving sales, or building community.
                    </p>
                    <div className="feature-quote">
                      "The goal is simple: enabling your brand to show up online with clarity, consistency, and impact."
                    </div>
                  </div>
                </article>

                {/* Side Articles */}
                <div className="side-articles">
                  <article className="side-article">
                    <div className="side-image-container">
                      <img src="/services/creativity-creative-ideas-imagination-inspiration-design-concept.jpg" alt="Content Creation" className="side-image" />
                      <div className="side-overlay">
                        <span className="side-category">CREATIVE</span>
                      </div>
                    </div>
                    <div className="side-content">
                      <h4 className="side-headline">Content Creation</h4>
                      <p className="side-text">
                        Content is the voice of your brand. From compelling copy and eye-catching graphics to videos and infographics, every piece of content is designed to capture attention and connect with your audience.
                      </p>
                      <p className="side-summary">
                        Creating engaging, relevant, and shareable content that drives action and aligns with your brand's goals.
                      </p>
                    </div>
                  </article>

                  <article className="side-article">
                    <div className="side-image-container">
                      <img src="/services/advisory-board-members-team-leaders-gathering-review-project-outcomes.jpg" alt="Analytics and Reporting" className="side-image" />
                      <div className="side-overlay">
                        <span className="side-category">ANALYTICS</span>
                      </div>
                    </div>
                    <div className="side-content">
                      <h4 className="side-headline">Analytics & Reporting</h4>
                      <p className="side-text">
                        Effective strategy thrives on insights. Through in-depth analytics and clear reporting, performance is tracked to show what's working and where opportunities lie.
                      </p>
                      <p className="side-summary">
                        Every metric is translated into actionable steps that strengthen your brand's online presence.
                      </p>
                    </div>
                  </article>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <footer className="footer" style={{marginTop: 'auto'}}>
        <div className="footer-content">
          <p>&copy; <span id="current-year">{new Date().getFullYear()}</span> Lancer Wao. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default SocialMediaManagement;