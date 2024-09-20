import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Assured Contract Farming</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/farmer">Farmer Dashboard</a></li>
          <li><a href="/buyer">Buyer Dashboard</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
