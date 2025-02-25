import React from "react";
import "../style/component/SiteFooter.scss"; // SCSS 불러오기

function SiteFooter() {
  return (
    <div className="footer-container">
      <div className="footer-contents">
        <h1>Goboogie</h1>
        <p>Rome wasn't built in a day!</p>
      </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Goboogie. All rights reserved.</p>
        </div>

      {/* 파도 애니메이션 영역 */}
      <div className="wave-container">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
      </div>
    </div>
  );
}

export default SiteFooter;
