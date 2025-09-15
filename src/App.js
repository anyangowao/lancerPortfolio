import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AboutMePage from './components/AboutMePage';
import MediaRelations from './components/MediaRelations';
import Resume from './components/Resume';
import Articles from './components/Articles';
import MenstrualHealthArticle from './components/MenstrualHealthArticle';
import YouthUnemploymentArticle from './components/YouthUnemploymentArticle';
import MediaCutting from './components/MediaCutting';
import SocialMediaManagement from './components/SocialMediaManagement';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<AboutMePage />} />
          <Route path="/about" element={<AboutMePage />} />
          <Route path="/media-relations" element={<MediaRelations />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/menstrual-health" element={<MenstrualHealthArticle />} />
          <Route path="/articles/youth-unemployment" element={<YouthUnemploymentArticle />} />
          <Route path="/media-cutting" element={<MediaCutting />} />
          <Route path="/social-media-management" element={<SocialMediaManagement />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;