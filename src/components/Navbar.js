import React from 'react';
import '../styles.css'; // Eğer styles.css bir üst dizindeyse
import { Link } from 'react-router-dom'; // React Router'dan Link'i içeri aktar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* sahibinden.com logosuna tıklayınca ana sayfaya yönlendir */}
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
        <li> 
          <Link to="giriş-yap">
         Girş Yap
        </Link>
        </li>
        <li>
          <a href="/" className="icon-link">
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="/" className="icon-link">
            <i className="fa fa-bell" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="/" className="icon-link">
            <i className="fa fa-star" aria-hidden="true"></i>
          </a>
        </li>
  
        <li> 
          <Link to="/ilan-ekle" className="post-ad-button">
            İlan Ver
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
