import React, { useState } from 'react';
import s from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <header className={s.header}>
      <div className="container">
        <div className={s.nav}>
          <div className={s.logo}>Logo</div>
          <button
            className={`${s.burger} ${isMenuOpen ? s.active : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav className={`${s.menu} ${isMenuOpen ? s.open : ''}`}>
              <Link>Home</Link>
              <Link>About</Link>
              <Link>Service</Link>
              <Link>Contacts</Link>
          </nav>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;
