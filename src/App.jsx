import React from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Content from './components/Content';
import './styles/App.scss';

const App = () => (
  <div className="app">
    <Header />
    <div className="main-container">
      <SideBar />
      <div className="content-wrapper">
        <Content />
      </div>
    </div>
  </div>
);

export default App;
