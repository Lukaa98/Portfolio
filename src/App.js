import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutMePage from './AboutMePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/aboutme" element={<AboutMePage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
