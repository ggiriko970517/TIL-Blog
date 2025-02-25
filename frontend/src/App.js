import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Content from './components/MyBlog/Content';
import NewHome from './pages/NewHome';
import Header from './components/Header';
import BlogEditor from './pages/BlogEditor';
import MySetting from './pages/MySetting';
import MyBlog from './pages/MyBlog';
import SiteHeader from './components/SiteHeader';
import SiteHome from './pages/SiteHome';
import SiteFooter from './components/SiteFooter';
import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogin = (token, userID, email, userName) => {
    localStorage.setItem('token', token);
    localStorage.setItem('userID', userID);
    localStorage.setItem('email', email);
    localStorage.setItem('userName', userName);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userID');
    localStorage.removeItem('email');
    localStorage.removeItem('userName');
    setIsLoggedIn(false);
  };
  
  return (
    <div className="App">
      <Router>
      <div className="App">
        <SiteHeader isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<SiteHome />} />
          {/* <Route path="/write" element={<SiteWrite />} /> */}
          {/* <Route path="/profile" element={<SiteSetting />} /> */}
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <SiteFooter />
      </div>
    </Router>
        {/*<Router>*/}
        {/*    <Routes>*/}
        {/*        /!*<Route path="/" element={<NewHome />} />*!/*/}
        {/*        <Route path="/myblog" element={<MyBlog />} />*/}
        {/*        <Route path="/editor" element={<BlogEditor />} />*/}
        {/*    </Routes>*/}
        {/*</Router>*/}
      {/* <Header /> */}
       {/* <HeaderBar /> */}
       {/* <Home /> */}
        {/* <NewHome /> */}
        {/* <BookMark /> */}
         {/* <Alarm /> */}
      {/*  <Footer />  */}
       {/* <BlogEditor/> */}
      {/*<MySetting/>*/}



    </div>
  );
}

export default App;
