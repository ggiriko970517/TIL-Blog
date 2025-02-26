import React from "react";
import "../style/component/SiteFooter.scss"; // SCSS 불러오기
import Wave from "react-wavify";

function SiteFooter() {
  return (
    <div className="footer-container">
      <div className="footer-contents">
        <div className="footer-text">
          <h1>Goboogie</h1>
          <p>Rome wasn't built in a day!</p>
        </div>

        {/* 파도 애니메이션 추가 */}
        <div className="wave-container">
          <Wave
            fill="#1277b0"
            paused={false}
            options={{
              height: 40,
              amplitude: 30,
              speed: 0.2,
              points: 4,
            }}
          />
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Goboogie. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default SiteFooter;
