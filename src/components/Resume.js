import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Resume.css';

const Resume = () => {
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
    <div className="resume-page">
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

      <div className="cv-document">
        <div className="cv-header">
          <h1 className="cv-name">Lancer Wao</h1>
          <h2 className="cv-title">Communications and Research Publications Professional</h2>
          <div className="cv-contact">
            <span>Email: anyangowao@gmail.com</span>
            <span>Address: Mebank Tower, 3rd Floor, Nairobi</span>
          </div>
        </div>

        <div className="cv-section profile">
          <h3 className="cv-section-title">Professional Profile</h3>
          <p className="cv-text">
            Communications and learning professional with 6+ years' experience advancing visibility, knowledge management, and project coordination for non-profits across Africa. A member of the Public Relations Society of Kenya (MPRSK) and proven ability to synthesize learning, coordinate research initiatives, and deliver compelling content that engages diverse stakeholders. Passionate about digital innovation, entrepreneurship, and amplifying voices from the vulnerable for development and empowerment. Strong track record in creating and implementing program communication strategies, supporting internal and external communications strategies, and facilitating stakeholder engagement across. Fluent in English with intermediate proficiency in French (A2 certified).
          </p>
        </div>

        <div className="cv-section contact">
          <h3 className="cv-section-title">Contact Information</h3>
          <div className="cv-contact-info">
            <p><strong>Email:</strong> anyangowao@gmail.com</p>
            <p><strong>Address:</strong> Mebank Tower, 3rd Floor, Nairobi</p>
          </div>
        </div>

        <div className="cv-section skills">
          <h3 className="cv-section-title">Core Competencies</h3>
          <div className="cv-skills">
            <div className="cv-skill-category">
              <h4>Writing & Publishing</h4>
              <ul>
                <li>Writing, Editing, and Publishing</li>
                <li>Research Publication Management</li>
                <li>Knowledge Dissemination</li>
              </ul>
            </div>
            <div className="cv-skill-category">
              <h4>Digital Marketing</h4>
              <ul>
                <li>Digital Marketing & SEO</li>
                <li>Website and Social Media Management</li>
                <li>External Media Relations</li>
              </ul>
            </div>
            <div className="cv-skill-category">
              <h4>Monitoring & Evaluation</h4>
              <ul>
                <li>Monitoring and Evaluation</li>
                <li>Project Coordination</li>
                <li>Stakeholder Engagement</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="cv-section experience">
          <h3 className="cv-section-title">Work Experience</h3>
          
          <div className="cv-experience">
            <div className="cv-job">
              <div className="cv-job-header">
                <h4>African Economic Research Consortium (AERC)</h4>
                <span className="cv-date">February 2022 - Present</span>
              </div>
              <p className="cv-job-description">
                Lead internal communications initiatives including monthly newsletters, staff bulletins, and internal updates. Coordinate the Communications Division in promoting the AERC brand through digital platforms, policy outreach, and research publications. Process research and general publications—editing, proofreading, and typesetting. Notable achievements include securing mainstream media coverage (BBC Radio), supporting dissemination of over 200 publications across Africa, and implementing a real-time tracking system that reduced publication turnaround time by 20%.
              </p>
            </div>

            <div className="cv-job">
              <div className="cv-job-header">
                <h4>Kenya Water and Sanitation Civil Society Network (KEWASNET)</h4>
                <span className="cv-date">August 2020 - December 2021</span>
              </div>
              <p className="cv-job-description">
                Communications and Knowledge Management Officer (part-time). Developed impact stories, case studies, and documented sector best practices. Managed social media platforms and created graphic content and reports. Led development of periodic newsletters and launched KEWASNET's first quarterly newsletter in March 2021. Supported fundraising efforts by producing a strategic documentary showcasing organizational impact.
              </p>
            </div>

            <div className="cv-job">
              <div className="cv-job-header">
                <h4>Hope Foundation for African Women (HFAW)</h4>
                <span className="cv-date">January 2019 - January 2022</span>
              </div>
              <p className="cv-job-description">
                Communications, Outreach, and Advocacy Officer. Managed communications, social media, event planning, and reporting. Published two editions of Ability Magazine with AWDF funding support. Launched an activity-centered social media campaign that increased online engagement by 30% and organized successful menstrual hygiene events.
              </p>
            </div>

            <div className="cv-job">
              <div className="cv-job-header">
                <h4>Standard Media Newspaper</h4>
                <span className="cv-date">Seasonal Writer</span>
              </div>
              <p className="cv-job-description">
                Researched and developed content for the water, sanitation, and climate change pull-out section. Drafted and proofread articles addressing challenges in water and sanitation, the role of women in environmental conservation, and economic drivers of sand harvesting and its impact on water scarcity.
              </p>
            </div>

            <div className="cv-job">
              <div className="cv-job-header">
                <h4>Baraka FM</h4>
                <span className="cv-date">January 2015 - February 2017</span>
              </div>
              <p className="cv-job-description">
                Program Researcher and Producer Intern. Supported radio production and content monitoring for various programs. Contributed to increasing audience engagement by 25% on the station's evening show and successfully secured sponsorship for a health-focused segment.
              </p>
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

export default Resume;