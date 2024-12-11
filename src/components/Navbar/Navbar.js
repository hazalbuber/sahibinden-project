import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = ({ user, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <span className="logo-text">sahibinden.com</span>
        </Link>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Kelime, ilan no.. adı ile ara" />
        <button className="search-button">
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>

      <ul className="navbar-links">
        {user ? (
          <>
            <li className="navbar-user">
             {user.username}
              <button onClick={onLogout} className="logout-button">
                Çıkış Yap
              </button>
            </li>
            <li>
              <Link to="/ilan-ekle" className="post-ad-button">
                İlan Ver
              </Link>
            </li>
          </>
        ) : (
          <li>
            <Link to="/giriş-yap">Giriş Yap</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
