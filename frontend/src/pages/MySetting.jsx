import React from 'react';
import Profile from '../components/MySetting/Profile';
import Bloginfo from '../components/MySetting/Bloginfo';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../style/page/MySetting.scss';

const Settingicon = '/components/common/Setting_icon.png';

const MySetting = () => (
  <div className="my-setting-container">
    <Header />

    <div className="setting">
      <div className="icon">
        <img src={Settingicon} alt="Setting Icon" />
      </div>
      <span className="bottom">Setting</span>
    </div>

    <div className="content-wrapper">
      <div className="profile-col">
        <Profile />
      </div>
      <div className="blog-info-col">
        <Bloginfo />
      </div>
    </div>

    <Footer />
  </div>
);

export default MySetting;
