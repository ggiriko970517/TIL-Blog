import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mainpage from './components/Mainpage';
import Loginpage from './pages/Loginpage';
import Signuppage from './pages/Signuppage';
import './styles/styles.scss';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/signup" element={<Signuppage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;