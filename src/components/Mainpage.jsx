import React from 'react';

function Mainpage() {
  return (
    <div>
      <header className="header-wrap">
        <h1>Welcome to Velog Clone</h1>
        <nav>
          <a href="/login">Login</a>
          <a href="/signup">Sign Up</a>
        </nav>
      </header>
      <main>
        <h2>Main Page Content</h2>
        <p>This is a placeholder for main page content.</p>
      </main>
    </div>
  );
}

export default Mainpage;