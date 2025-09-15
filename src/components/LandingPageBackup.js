import React from 'react';
import ImagePlaceholder from './ImagePlaceholder';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <nav className="navbar">
        <div className="nav-container">
          <ul className="nav-menu">
            <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
            <li className="nav-item"><a href="#media-relations" className="nav-link">Media Relations</a></li>
            <li className="nav-item"><a href="#resume" className="nav-link">Resume</a></li>
            <li className="nav-item"><a href="#articles" className="nav-link">Articles</a></li>
            <li className="nav-item"><a href="#media-cutting" className="nav-link">Media Cutting</a></li>
            <li className="nav-item"><a href="#social-media" className="nav-link">Social Media Management</a></li>
            <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </div>
      </nav>
      <section className="hero-section">
        <div className="container">
        <div className="content-section">
          <div className="badge">
            Communications Specialist
          </div>
          
          <h1 className="main-title">
            <span className="title-dark">Lancer</span>
            <span className="title-accent"> Wao</span>
          </h1>
          
          <p className="description">
            Crafting compelling narratives that drive 
            engagement and build lasting connections 
            between brands and their audiences.
          </p>
          
          <div className="cta-buttons">
            <button className="btn btn-primary">View Portfolio</button>
            <button className="btn btn-secondary">Download Resume</button>
          </div>
        </div>
        
        <div className="image-section">
          <ImagePlaceholder 
            src="/Portfolio_Home.png" 
            alt="Lancer Wao - Communications Professional" 
            className="landing-image"
            fallbackText="LW"
          />
        </div>
        </div>
      </section>
      
      <section className="about-section">
        <div className="about-container">
          <div className="about-content">
            <div className="about-text-section">
              <h3 className="about-title">About Me</h3>
              <p className="about-text">
                I am a skilled and innovative communications professional with a passion for 
                turning ideas into impactful messages. With a strong foundation in strategic 
                communication and a curiosity that drives me to explore new perspectives, I 
                specialize in crafting tailored solutions that inform, engage, and inspire.
              </p>
              
              <div className="connect-section">
                <h4 className="connect-title">Connect with me:</h4>
                <div className="connect-links">
                  <a href="#" className="connect-link">LinkedIn</a>
                  <a href="#" className="connect-link">Email</a>
                  <a href="#" className="connect-link">Phone</a>
                </div>
              </div>
            </div>
            
            <div className="services-section">
              <div className="service-item">
                <div className="service-image">
                  <ImagePlaceholder 
                    src="/event-management.jpg" 
                    alt="Event Management and Communications" 
                    className="service-placeholder"
                    fallbackText="EM"
                  />
                </div>
                <h4 className="service-title">Event Management and Communications</h4>
              </div>
              
              <div className="service-item">
                <div className="service-image">
                  <ImagePlaceholder 
                    src="/editing-writing.jpg" 
                    alt="Editing and Writing" 
                    className="service-placeholder"
                    fallbackText="EW"
                  />
                </div>
                <h4 className="service-title">Editing and Writing</h4>
              </div>
              
              <div className="service-item">
                <div className="service-image">
                  <ImagePlaceholder 
                    src="/social-media.jpg" 
                    alt="Social Media Management" 
                    className="service-placeholder"
                    fallbackText="SM"
                  />
                </div>
                <h4 className="service-title">Social Media Management</h4>
              </div>
              
              <div className="service-item">
                <div className="service-image">
                  <ImagePlaceholder 
                    src="/media-relations.jpg" 
                    alt="Media Relations" 
                    className="service-placeholder"
                    fallbackText="MR"
                  />
                </div>
                <h4 className="service-title">Media Relations</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;