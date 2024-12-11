import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useParams } from 'react-router-dom';
import "./DetailPage.css";

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

  const renderVehicleDetails = () => (
    <>
 <p><strong>Model:</strong> {listing.model}</p>
    <p><strong>Model Yılı:</strong> {listing.modelYear}</p>
    <p><strong>KM:</strong> {listing.km}</p>
    <p><strong>Renk:</strong> {listing.colar}</p>
    <p><strong>Kimden:</strong> {listing.kimden}</p>
    <p><strong>Garanti:</strong> {listing.guarantee}</p>
    <p><strong>Ağır Hasar Kaydı:</strong> {listing.damageInfo}</p>
    <p><strong>Plaka / Uyruk:</strong> {listing.plateNationality}</p>
    <p><strong>Araç Plakası:</strong> {listing.plateVehicle}</p>
    <p><strong>Şasi No:</strong> {listing.plateNo}</p>
    <p><strong>Takas:</strong> {listing.exchange}</p>
    </>
  );

  const renderRealEstateDetails = () => (
    <>
    <p><strong>Metrekare:</strong> {listing.metrekare}</p>
    <p><strong>Oda Sayısı:</strong> {listing.roomNum}</p>
    <p><strong>Bina Yaşı:</strong> {listing.homeAge}</p>
    <p><strong>Bulunduğu Kat:</strong> {listing.floor}</p>
    <p><strong>Kat Sayısı:</strong> {listing.buildingFloors}</p>
    <p><strong>Isıtma:</strong> {listing.heating}</p>
    <p><strong>Tapu Durumu:</strong> {listing.titleDeed}</p>
    <p><strong>Kimden:</strong> {listing.kimden}</p>
    <p><strong>Takas:</strong> {listing.exchange}</p>
    </>
  );

  return (
    <div>
      <Navbar />
      <main className="detail-page">
        <h1>{listing.title}</h1>
        <div className="detail-info">
          <p><strong>Fiyat:</strong> {listing.price} TL</p>
          <p><strong>İlan Tarihi:</strong> {listing.date}</p>
          <p><strong>İlan No:</strong> {listing.id}</p>
          <p><strong>İl:</strong> {listing.il}</p>
          <p><strong>İlçe:</strong> {listing.ilce}</p>
          <p><strong>Mahalle:</strong> {listing.mahalle}</p>
          {listing.category === 'Vasıta' && renderVehicleDetails()}
          {listing.category === 'Emlak' && renderRealEstateDetails()}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DetailPage;
