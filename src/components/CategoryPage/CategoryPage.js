import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './CategoryPage.css';

const CategoryPage = ({ listings = [] }) => {
  const { id } = useParams();
  const [filteredListings, setFilteredListings] = useState([]);

  useEffect(() => {
    const filtered = listings.filter((listing) => listing.category === id);
    setFilteredListings(filtered);
  }, [id, listings]);

  return (
    <div>
      <Navbar showUserOptions={false} />
      <div className="category-page">
        <main className="category-main-content">
          <h1>
            {id === 'real_estate' ? 'Emlak' : 'Vasıta'}
          </h1>
          <div className="ilan-listesi">
            {filteredListings.length > 0 ? (
              filteredListings.map((listing) => (
                <Link to={`/detay/${listing.id}`} key={listing.id} className="ilan">
                  {listing.image && (
                    <img
                      className="ilan-img"
                      src={
                        listing.image instanceof File || listing.image instanceof Blob
                          ? URL.createObjectURL(listing.image)
                          : listing.image
                      }
                      alt={listing.title}
                    />
                  )}
                  <h2>{listing.title}</h2>
                </Link>
              ))
            ) : (
              <p>Bu kategoriye ait ilan bulunamadı.</p>
            )}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default CategoryPage;
