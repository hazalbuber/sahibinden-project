import React from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

const HomePage = ({ listings, user, onLogin, onLogout }) => {
  return (
    <div>
      <Navbar user={user} onLogin={onLogin} onLogout={onLogout} />
      <div className="homepage-content">
        <Sidebar />
        <main>
          <h1>İlanlar</h1>
          <div className="ilan-listesi">
            {listings.map((listing) => (
              <Link to={`/detay/${listing.id}`} key={listing.id}>
                <div className="ilan">
                  {listing.image && (
                    <img
                      className="ilan-img"
                      src={listing.image}
                      alt={listing.title}
                    />
                  )}
                  <h2>{listing.title}</h2>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;



/*
                <Link to={`/detay/${listing.id}`} className="details-button">
                  Detaylar
                </Link>
*/