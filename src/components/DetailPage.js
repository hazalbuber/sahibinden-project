import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useParams } from 'react-router-dom';

const DetailPage = ({ listings }) => {
  const { id } = useParams();
  const listing = listings.find((item) => item.id === Number(id));

  if (!listing) {
    return (
      <div>
        <Navbar />
        <main className="detail-page">
          <h1>İlan Bulunamadı</h1>
        </main>
        <Footer />
      </div>
    );
  }

  //**********************************************************DÜNZENLENVEK ARAÇ,VASITA ya da EŞYAYA GÖRE 
  return (
    <div>
      <Navbar />
      <main className="detail-page">
        <h1>{listing.title}</h1>
        {listing.image && (
          <img
            src={
              typeof listing.image === 'string'
                ? listing.image
                : URL.createObjectURL(listing.image)
            }
            alt={listing.title}
          />
        )}
        <div className="detail-info">
        <p>{listing.price} TL</p>
        <p>{listing.location}</p>
        <p>İlan No</p>
        <p>İlan Tarihi</p>
        <p>Metrekare: {listing.metrekare}</p>
        <p>Oda Sayısı: {listing.roomNum}</p>
        <p>Bina Yaşı</p>
        <p>Bulunduğu Kat</p>
        <p>Kat Sayısı</p>
        <p>Isıtma </p>
        <p>Banyo Sayısı</p>
        <p>Mutfak</p>
        <p>Balkon</p>
        <p>Asansör</p>
        <p>Otopark</p>
        <p>Eşyalı</p>
        <p>Kullanım Durumu</p>
        <p>Site İçerisinde</p>
        <p>Site Adı</p>
        <p>Aidat(TL)</p>
        <p>Krediye Uygun</p>
        <p>Tapu Durumu</p>
        <p>Kimden</p>
        <p>Takas</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DetailPage;
