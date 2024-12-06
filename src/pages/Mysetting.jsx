import React from 'react';
import Profile from '../components/Profile';
import Bloginfo from '../components/Bloginfo';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Settingicon from '../components/common/Setting_icon.png'
import 'animate.css';
import './Mysetting.scss';

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
