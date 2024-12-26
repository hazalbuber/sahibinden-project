import React from 'react';
import Footer from '../Footer/Footer';
import { useParams } from 'react-router-dom';
import './DetailPage.css';

const BACKEND_URL ="";

const DetailPage = ({ listings }) => {
  const { id } = useParams();
  const listing = listings.find((item) => item.id === Number(id));

  // Eğer ilan bulunamazsa:
  if (!listing) {
    return (
      <div>
        <main className="detail-page">
          <h1>İlan Bulunamadı</h1>
        </main>
        <Footer />
      </div>
    );
  }

  //Fotoğraf varsa ekrana gösterir; yoksa bir mesaj yazar.
  const renderImage = () => {
    if (listing.image) {
      if (listing.image instanceof File || listing.image instanceof Blob) {
        return (
          <img
            className="detail-img"
            src={URL.createObjectURL(listing.image)}
            alt={listing.title}
          />
        );
      }
      return (
        <img
          className="detail-img"
          src={listing.image}
          alt={listing.title}
        />
      );
    }
    return <p>Fotoğraf mevcut değil.</p>;
  };

  const renderDetails = () => (
    <>
      <p><strong>İlan Sahibi:</strong> {listing.owner}</p>
      <p><strong>Fiyat:</strong> {listing.price } TL</p>
      <p><strong>İlan No:</strong> {listing.id}</p>
      <p><strong>Lokasyon:</strong> {listing.location}</p>
      {listing.category === 'vehicles' && (
        <>
          <p><strong>Model Yılı:</strong> {listing.modelYear }</p>
          <p><strong>KM:</strong> {listing.km }</p>
          <p><strong>Açıklama</strong> {listing.description }</p>
        </>
      )}
      {listing.category === 'real_estate' && (
        <>
          <p><strong>Metrekare:</strong> {listing.metrekare }</p>
          <p><strong>Garaj:</strong> {listing.garage }</p>
          <p><strong>Açıklama</strong> {listing.description }</p>
        </>
      )}
    </>
  );

  return (
    <div>
      <main className="detail-page">
        <div className="detail-container">
          <div className="image-section">
            <h1>{listing.title}</h1>
            {renderImage()}
          </div>
          <div className="details-section">{renderDetails()}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DetailPage;

