import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <header className="header">
        <nav>
            <Link className="navLink" to="/about-show">Powerpuff Girls Tv show</Link>
        </nav>
    </header>
  );
}

export default Header;