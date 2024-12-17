import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import styles from './SearchResults.module.css'; 

const SearchResults = ({ listings }) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  // Arama sonuçlarını filtrele
  const filteredListings = listings.filter((listing) =>
    listing.title.toLowerCase().includes(query.toLowerCase())
  );

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
