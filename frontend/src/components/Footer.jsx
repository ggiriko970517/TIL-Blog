import React from 'react';
import '../style/component/Footer.scss';


function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#f8f9fa',
        padding: '20px 0',
        textAlign: 'center',
        marginTop: '30px',
        borderTop: '1px solid #dee2e6',
      }}
    >
      <h3>GoBoogie</h3>
      <p>
        © {new Date().getFullYear()} GoBoogie. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;