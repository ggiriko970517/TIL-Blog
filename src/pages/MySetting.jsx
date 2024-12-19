import React from 'react';
import Profile from '../components/BlogEditor/Profile';
import Bloginfo from '../components/BlogEditor/Bloginfo';
import Header from '../components/BlogEditor/Header';
import Footer from '../components/Common/Footer';
import 'animate.css';
import '../styles/MySetting/MySetting.scss';

const Settingicon = '/common/Setting_icon.png';

const Mysetting = () => (
  <div className="my-setting-container">
    <Header />

    <div className="setting">
      <div className="icon"><img src={Settingicon} /></div>
      <span className="bottom" >Setting</span>
    </div>

    <div className="profile-col">
    </div>

    <Profile />
    <div className="blog-info-col">
      <Bloginfo />
    </div>
    <Footer />
  </div>
);

export default Mysetting;