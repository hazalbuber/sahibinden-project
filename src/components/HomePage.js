import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom'; // Yönlendirme için kullanıyoruz

const HomePage = ({ listings }) => {
  return (
    <div>
      <Navbar />
      <div className="homepage-content">
        {/* <Sidebar /> */}
        <Sidebar />
        <main>
          <h1>İlanlar</h1>
          <div className="ilan-listesi">
            {listings.map((listing) => (
              <div className="ilan" key={listing.id}>
                {listing.image && (
                  <img
                    className="ilan-img"
                    src={listing.image}
                    alt={listing.title}
                  />
                )}
                <h2>{listing.title}</h2>
                {/* Detaylar düğmesi */}
                <Link to={`/detay/${listing.id}`} className="details-button">
                  Detaylar
                </Link>
              </div>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
