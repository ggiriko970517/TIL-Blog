import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyBlog from './pages/MyBlog.jsx';
import './styles/App.scss';
import PostBlog from './pages/PostBlog.jsx';
import BlogEditor from "./pages/BlogEditor";
import MySetting from "./pages/MySetting.jsx"
import Header from './components/Home/Header.jsx'
import Home from './pages/Home.jsx'
import Alarm from './pages/Alarm.jsx'
import BookMark from './pages/BookMark.jsx'
import Loginpage from './pages/LoginPage.jsx';
import Signuppage from './pages/SignupPage.jsx';
import Mainpage from './pages/LoginMainPage.jsx'

const App = () => (
  <Router>
  <div>
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/signup" element={<Signuppage />} />
    </Routes>
  </div>
</Router>


//   <div>
// <BookMark/>
//   </div>

);

export default App;
