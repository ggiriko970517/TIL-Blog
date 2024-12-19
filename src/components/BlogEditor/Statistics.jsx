import React from 'react';
import '../styles./State.scss';
import Blogintro from './Blogintro';

const State = () => (
  <div className="state-section">
    <div className="state-item">
      <span className="state-label">구독자 수:</span>
      <span className="state-value">150</span>
    </div>
    <div className="state-item">
      <span className="state-label">구독한 사람 수:</span>
      <span className="state-value">80</span>
    </div>
    <Blogintro />
  </div>
);

export default State;