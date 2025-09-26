import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ArticlePage.css';

const YouthUnemploymentArticle = () => {
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
                <div className="story-banner">ECONOMICS</div>
                <h1 className="story-headline">Youth Unemployment in Kenya - Nothing to Smile At</h1>
                <h2 className="story-subheadline">The harsh reality behind Kenya's youth unemployment crisis and its impact on national development</h2>
              </header>

              <div className="story-content">
                <div className="story-image-section">
                  <figure className="story-image">
                    <img src="/articles/1574149155824.jpg" alt="Youth Unemployment in Kenya" />
                    <figcaption>
                      Young Kenyans face unprecedented unemployment challenges, with 55% of youth lacking formal employment opportunities despite government initiatives and education reforms.
                    </figcaption>
                  </figure>
                </div>

                <div className="story-text">
                  <div className="lead-paragraph">
                    Every time I hear someone use the phrase 'youth unemployment', I cringe. Maybe it is because I have heard it too frequently to believe that the people using it, especially those in the position to change the situation, understand what it really means. So, I ask again, does youth unemployment sound like a joke?
                  </div>

                  <p>The number of youths who are unemployed in Kenya alone is equal to that in Ethiopia and Rwanda combined. According to the Africa Check, 55% of the youths in the country are unemployed. 61% of those unemployed in the country are youths. The organization used the definition of youths according to the African Youth Charter, which covers anyone between 18 and 35 years.</p>

                  <div className="info-box">
                    <h4>Key Statistics</h4>
                    <ul>
                      <li>55% of Kenyan youth are unemployed</li>
                      <li>61% of all unemployed people in Kenya are youth (ages 18-35)</li>
                      <li>Kenya's youth unemployment equals Ethiopia and Rwanda combined</li>
                      <li>Target: 10% annual growth needed for Vision 2030</li>
                    </ul>
                  </div>

                  <h3 className="section-heading">Government Initiatives and Their Limitations</h3>

                  <p>In 2006, the Kenyan government launched the Youth Enterprise Development Fund. The kitty was meant to empower youths by giving them access to finances that they could use to venture into entrepreneurship and connect them to mentors and marketing opportunities. While the project has contributed towards helping youths attain financial independence and stability, its benefits are short-term.</p>

                  <blockquote className="article-quote">
                    "Research on the effects of the kitty on youth enterprises, a case study of youth beneficiaries from Siaya County, Kenya, showed that it has not led to tangible benefits in ending poverty."
                  </blockquote>

                  <h3 className="section-heading">Education Reform Challenges</h3>

                  <p>Just recently, the competency-based curriculum was launched to match the youths' skills set to the labor market. However, it is not yet clear how this is going to be successfully implemented, especially after KNUT released evidence that Kenyan schools are not prepared to implement CBC. The findings showed that teachers have not been sufficiently prepared on the curriculum's content and teaching methods.</p>

                  <h3 className="section-heading">The Human Cost</h3>

                  <p>Youth unemployment in Kenya is not a joke. Unemployment is a predominantly youth affair in Kenya. It is sad. Many of them have been forced to endure the pain of the informal sector, which is marred with low earnings, extended working periods, and dubious contract terms. Those that lack better options are occasionally used as handymen by politicians to scare the latter's opponents.</p>

                  <h3 className="section-heading">Vision 2030 and the Youth Potential</h3>

                  <p>Kenya targets to be a middle-income country by 2030. The goal can only be achieved if we exploit the potential of the 'youth bulge' to advance the economy. It is only through that we will achieve the 10% annual uninterrupted growth required to achieve the vision 2030.</p>

                  <h3 className="section-heading">A Call for Real Action</h3>

                  <p>We needed to be better keepers for a generation that is expected to lead the country to economic prosperity. It is neither about putting the phrases 'youth unemployment' and 'youth empowerment' in speeches, nor is it about organizing and attending high-level meetings to discuss youth unemployment. Come to the ground and understand the pain of unemployment from the lens of youths. Be intentional about supporting the youths through viable projects and a friendly business environment.</p>
                </div>
              </div>

              <footer className="story-footer">
                <div className="story-tags">
                  <span className="tag">Economics</span>
                  <span className="tag">Youth Development</span>
                  <span className="tag">Employment</span>
                  <span className="tag">Kenya</span>
                  <span className="tag">Vision 2030</span>
                </div>
              </footer>
            </article>

            {/* Sidebar */}
            <aside className="article-sidebar-news">
              <div className="sidebar-section">
                <h3 className="sidebar-title">Related Stories</h3>
                <div className="sidebar-story">
                  <h4><Link to="/articles/menstrual-health">Menstrual Health Hygiene</Link></h4>
                  <p className="sidebar-excerpt">Breaking the silence around period-shaming and its deadly consequences...</p>
                  <span className="sidebar-date">Jan 3, 2024</span>
                </div>

                <div className="sidebar-story">
                  <h4><a href="#">Education Policy Reform</a></h4>
                  <p className="sidebar-excerpt">Examining the challenges facing CBC implementation in Kenya...</p>
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
                  <li><a href="#">Economics</a></li>
                  <li><a href="#">Youth Development</a></li>
                  <li><a href="#">Education</a></li>
                  <li><a href="#">Employment</a></li>
                  <li><a href="#">Policy Analysis</a></li>
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

export default YouthUnemploymentArticle;
