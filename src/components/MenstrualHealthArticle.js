import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ArticlePage.css';

const MenstrualHealthArticle = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="article-page">
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

      <main className="article-main">

        {/* Article Content */}
        <div className="article-container">
          <div className="article-layout-newspaper">

            {/* Main Story */}
            <article className="main-story">
              <header className="story-header">
                <div className="story-banner">HEALTH & SOCIETY</div>
                <h1 className="story-headline">Menstrual Health Hygiene</h1>
                <h2 className="story-subheadline">Breaking the silence around period-shaming and its deadly consequences</h2>

              </header>

              <div className="story-content">
                <div className="story-image-section">
                  <figure className="story-image">
                    <img src="/articles/1568295023745.png" alt="Menstrual Health Hygiene" />
                    <figcaption>
                      Girls in rural Kenya face significant challenges accessing menstrual hygiene products,
                      leading to school absenteeism and in tragic cases, period-shaming that has deadly consequences.
                    </figcaption>
                  </figure>
                </div>

                <div className="story-text">
                  <div className="lead-paragraph">
                    The World Health Organization estimates that in every forty seconds, one person dies because of suicide. Such a realization hit hard in Bomet, Kenya, where a class six pupil committed suicide because her teacher picked on and embarrassed her for soiling her skirt with her menses.
                  </div>

                  <p>She walked home crying. Her mother told her to go fetch water, clean herself and go back to school. She picked up a jerrican going to the river. However, she had other plans. She hanged herself at a tree near their tea farm. The news of her death angered many people. Parents demonstrated demanding the immediate arrest of the teacher.</p>

                  <h3 className="section-heading">A Global Crisis</h3>

                  <p>Period-shaming is on the rise at a time when the developing world is grappling with problems like poverty, unemployment, school drop-out, and teenage pregnancies. In India, a 7th-grade student jumped off the terrace of her neighbour's house, 25ft building, because her teacher reprimanded her for staining her uniform with her menses.</p>

                  <blockquote className="article-quote">
                    "She left a note saying that she took her own life because she did not see any other way to cope with the embarrassment she faced when her teacher called her out in front of her peers."
                  </blockquote>

                  <h3 className="section-heading">The Kenyan Context</h3>

                  <p>The Human Rights Watch organization estimates that in every ten girls from the Sub-Saharan region, one misses school during their periods. Also, at least two-thirds of girls who have reached the school-going age in Kenya do not have pads.</p>

                  <div className="info-box">
                    <h4>Key Statistics</h4>
                    <ul>
                      <li>1 in 10 girls miss school during menstruation in Sub-Saharan Africa</li>
                      <li>66% of school-going girls in Kenya lack access to sanitary pads</li>
                      <li>65% of girls in Kibra, Nairobi reportedly engaged in transactional relationships for pads</li>
                    </ul>
                  </div>

                  <h3 className="section-heading">Government Response and Challenges</h3>

                  <p>When the amendment to the Basic Education Act came into effect from July 7th, 2017, it made it compulsory for the Kenyan government to provide sanitary towels to girls in primary and secondary schools. Consequently, the ministry of education, coordinated with local chiefs and school heads to make pads available.</p>

                  <p>However, the programme is now marred with confusion stemming from unclear chains of commands. Ironically, the funds for the acquisition of sanitary towels were moved to be under the docket of gender affairs within the public service ministry.</p>

                  <h3 className="section-heading">Desperate Measures</h3>

                  <p>As the confusion takes the centre stage of an issue that is in dire need of a solution, girls coming from poor backgrounds continue to suffer in silence. Some of them have resorted to desperate measures like using feathers, blankets, and grass during their menses. In September 2018, a report claimed that 65% of girls from Kibra, Nairobi, engaged in transactional sex for pads.</p>

                  <p>Although the numbers were disputed by many people, including the late Kibera member of parliament, Ken Okoth, it was established that there are girls in the region that engages in transactional sex for pads. Apart from exposing them to a myriad of health risks, the methods adversely affect their self-esteem, self-image, and prevent them from achieving desirable outcomes in their academics.</p>

                  <h3 className="section-heading">The Path Forward</h3>

                  <p>The reported cases of period-shaming represent the numerous heart-breaking tales of girls from middle and low-income countries. Also, they reflect the mind-set of the society regarding a naturally-occurring biological process that should be acceptable.</p>

                  <p>Girls need emotional, psychological support during puberty. The stage is critical in who they become in future. We cannot continue tolerating period-shaming and expect to have confidence, become powerful, and live successfully. We need to empower parents, guardians, teachers and peers to provide support. We need to evaluate the parameters used to assess and evaluate the capacity of teachers to support girls during puberty.</p>
                </div>
              </div>

              <footer className="story-footer">
                <div className="story-tags">
                  <span className="tag">Women's Rights</span>
                  <span className="tag">Education</span>
                  <span className="tag">Health Policy</span>
                  <span className="tag">Kenya</span>
                </div>

              </footer>
            </article>

            {/* Sidebar */}
            <aside className="article-sidebar-news">
              <div className="sidebar-section">
                <h3 className="sidebar-title">Related Stories</h3>
                <div className="sidebar-story">
                  <h4><Link to="/articles/youth-unemployment">Youth Unemployment in Kenya - Nothing to Smile At</Link></h4>
                  <p className="sidebar-excerpt">Economic challenges facing young people across the country...</p>
                  <span className="sidebar-date">Jan 2, 2024</span>
                </div>

                <div className="sidebar-story">
                  <h4><a href="#">Education Access in Rural Areas</a></h4>
                  <p className="sidebar-excerpt">Examining barriers to quality education in remote communities...</p>
                  <span className="sidebar-date">Coming Soon</span>
                </div>
              </div>

              <div className="sidebar-section">
                <h3 className="sidebar-title">Share This Story</h3>
                <div className="share-buttons-news">
                  <button className="share-btn-news twitter">Twitter</button>
                  <button className="share-btn-news facebook">Facebook</button>
                  <button className="share-btn-news linkedin">LinkedIn</button>
                  <button className="share-btn-news email">Email</button>
                </div>
              </div>

              <div className="sidebar-section">
                <h3 className="sidebar-title">About the Author</h3>
                <div className="author-sidebar">
                  <div className="author-image">
                    <img src="/Portfolio_Home.png" alt="Lancer Wao" />
                  </div>
                  <div className="author-info-sidebar">
                    <p><strong>Lancer Wao</strong> is a communications specialist and social advocate focused on youth development and social justice issues in Kenya. He writes extensively about education, health policy, and human rights.</p>
                  </div>
                </div>
              </div>

              <div className="sidebar-section">
                <h3 className="sidebar-title">Categories</h3>
                <ul className="category-list">
                  <li><a href="#">Health & Society</a></li>
                  <li><a href="#">Economics</a></li>
                  <li><a href="#">Education</a></li>
                  <li><a href="#">Politics</a></li>
                  <li><a href="#">Youth Issues</a></li>
                </ul>
              </div>
            </aside>

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

export default MenstrualHealthArticle;
