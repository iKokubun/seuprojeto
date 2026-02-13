import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Pagina2 from './Pagina2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pagina2" element={<Pagina2 />} />
      </Routes>
    </Router>
  );
}

export default App;
