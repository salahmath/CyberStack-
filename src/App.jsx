import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Contact from './component/Contact/Contact';
// Import other components as needed

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />$
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
