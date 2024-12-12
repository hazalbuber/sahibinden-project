import React from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import './HomePage.css';

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
            // listings dizisindeki her ilan için bir kart oluşturuluyor
              <Link to={`/detay/${listing.id}`} key={listing.id}>
                <div className="ilan">
                  {/* Fotoğraf Gösterimi */}
                  {listing.image && (
                    <img
                      className="ilan-img"
                      src={
                        listing.image instanceof File || listing.image instanceof Blob
                          ? URL.createObjectURL(listing.image)
                          : listing.image // Eğer zaten bir URL ise doğrudan kullan
                      }
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

