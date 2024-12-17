import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate eklendi
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import "./Navbar.css";

const Navbar = ({ user, onLogout, showUserOptions = true }) => {
  const [anchorEl, setAnchorEl] = useState(null); // profil menüsünün açılıp açılmadığını kontrol eder
  const [searchQuery, setSearchQuery] = useState(''); // arama sorgusu
  const isMenuOpen = Boolean(anchorEl); // anchorEl'e bağlı olarak menünün açık/kapalı durumunu kontrol eder
  const navigate = useNavigate();

  //profil Menüsünü Açma/Kapatma
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  //sayfa Yönlendirme Fonksiyonu
  const handleNavigateToListings = () => {
    handleMenuClose();
    navigate('/ilanlarim');
  };

  // arama Fonksiyonu
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/" className="logo-text">
            sahibinden.com
          </Link>

          <form className="navbar-search" onSubmit={handleSearch}>
            <input
              type="text"
              className="search-input"
              placeholder="Kelime, ilan no.. adı ile ara"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button" aria-label="Ara">
              <i className="fa fa-search"></i> {/* Büyüteç ikonu */}
            </button>
          </form>
        </div>

        {showUserOptions && (
          <ul className="navbar-links">
            {user ? (
              <>
                <li>
                  <span
                    className="navbar-username"
                    aria-controls="profile-menu"
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                  >
                    {user.username}
                  </span>
                  <Menu
                    id="profile-menu"
                    anchorEl={anchorEl}
                    open={isMenuOpen}
                    onClose={handleMenuClose}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                  >
                    <MenuItem onClick={handleNavigateToListings}>İlanlarım</MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleMenuClose();
                        onLogout();
                      }}
                    >
                      Çıkış Yap
                    </MenuItem>
                  </Menu>
                </li>
                <li>
                  <Link to="/ilan-ekle" className="post-ad-button">
                    İlan Ver
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link to="/giriş-yap" className="login-link">
                  Giriş Yap / Üye Ol
                </Link>
              </li>
            )}
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
