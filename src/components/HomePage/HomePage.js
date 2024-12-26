import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import './HomePage.css';

const BACKEND_URL ="";

const HomePage = ({ listings}) => {
  const activeListings = listings.filter((listing) => listing.hasOwnProperty('active') ? listing.active : true);
  return (
    <div>
      <div className="homepage-content">
        <Sidebar />
        <main>
          <h1>İlanlar</h1>
          {/* Aktif ilan yoksa mesaj göster */}
          {activeListings.length === 0 ? (
            <p>Şu anda yayında olan ilan bulunmamaktadır.</p>
          ) : (
            <div className="ilan-listesi">
              {activeListings.map((listing) => (
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
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;