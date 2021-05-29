import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <header>
        <Router>
          <Navbar className="nav-ul" />
        </Router>
      </header>
    </>
  );
}

export default App;
