import React, {useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './CategoryPage.css';

const BACKEND_URL ="";

const CategoryPage = ({ listings = [] }) => {
  const { id } = useParams();

  //Büyük listelemelerde performans sorunlarını azaltmak için 
  const filteredListings = useMemo(
    () =>
      listings.filter(
        (listing) =>
          listing.category &&
          listing.category.trim().toLowerCase() === id.trim().toLowerCase()
      ),
    [id, listings]
  );
  

  return (
    <div>
      <div className="category-page">
        <main className="category-main-content">
          {/* kategori id'sine göre başlık belriliyoruz */}
          <h1>
            {id === 'real_estate' ? 'Emlak' : 'Vasıta'}
          </h1>
          <div className="ilan-listesi">
            {filteredListings.length > 0 ? (
              // Eğer filtrelenmiş ilanlar varsa:
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

//homePage ile benze yapıya sahiptir. tek farkı kategorilerin olmaması ve sidebarın çıkarılmış olması 