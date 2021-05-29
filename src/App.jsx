import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar className="nav-ul" />
      </Router>
    </>
  );
}

export default App;
