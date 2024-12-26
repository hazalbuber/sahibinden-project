import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import styles from './SearchResults.module.css'; 

const BACKEND_URL = "";

const SearchResults = ({ listings }) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query')?.toLowerCase() || '';

  // Arama sonuçlarını filtrele
  const filteredListings = listings.filter((listing) => {
    const searchableFields = [
      listing.title,
      listing.price?.toString(),
      listing.model?.toString(),
      listing.modelYear?.toString(),
      listing.location,
      listing.vehicleType,
      listing.description,
      listing.metrekare?.toString(),
      listing.homeType,
      listing.garage,
      listing.km?.toString(),
    ];
    
    return searchableFields.some(
      (field) => field && field.toLowerCase().includes(query)
    );
  });

  return (
    <div className={styles.searchResultsBody}>
      <div className="homepage-content">
        <Sidebar />
        <main>
          <h1>"{query}" için Arama Sonuçları</h1>
          {filteredListings.length === 0 ? (
            <p>Aramanızla eşleşen ilan bulunamadı.</p>
          ) : (
            <div className={styles.ilanListesi}>
              {filteredListings.map((listing) => (
                <Link to={`/detay/${listing.id}`} key={listing.id}>
                  <div className={styles.ilan}>
                    {listing.image && (
                      <img
                        className={styles.ilanImg}
                        src={
                          listing.image instanceof File || listing.image instanceof Blob
                            ? URL.createObjectURL(listing.image)
                            : listing.image // Eğer URL ise doğrudan kullan
                        }
                        alt={listing.title}
                      />
                    )}
                    <h2 className={styles.ilanTitle}>{listing.title}</h2>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default SearchResults;
