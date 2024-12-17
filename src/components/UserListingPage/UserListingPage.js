import React, { useState } from 'react';
import { Menu, MenuItem } from '@mui/material';
import styles from "./UserListingPage.module.css";
import Footer from '../Footer/Footer';

const UserListingPage = ({ listings, user, onUpdateListings }) => {
  const [activeTab, setActiveTab] = useState("active"); // Varsayılan sekme: Yayında Olanlar
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedListing, setSelectedListing] = useState(null);

  // Kullanıcı oturum açmamışsa mesaj göster
  if (!user) {
    return <p>Lütfen giriş yapınız!</p>;
  }

  // Kullanıcının ilanlarını filtrele
  const userListings = listings.filter(
    (listing) => listing.owner === user.username
  );

  // Aktif ve inaktif ilanları ayır
  const activeListings = userListings.filter((listing) => listing.active); // Yayında olanlar
  const inactiveListings = userListings.filter((listing) => !listing.active); // Yayında olmayanlar

  // Menü açıldığında seçili ilanı belirle
  const handleMenuOpen = (event, listing) => {
    setAnchorEl(event.currentTarget);
    setSelectedListing(listing);
  };

  // Menü kapatma
  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedListing(null);
  };

  const handleToggleStatus = () => {
    if (selectedListing) {
      const updatedListings = listings.map((listing) =>
        listing.id === selectedListing.id
          ? { ...listing, active: !listing.active } // Sadece active durumunu değiştir
          : listing
      );
  
      console.log("Güncellenen İlanlar:", updatedListings); // Debug için
  
      onUpdateListings(updatedListings); // App bileşenindeki listings'i güncelle
    }
    handleMenuClose();
  };
  
  
  const handleDeleteListing = () => {
    if (selectedListing) {
      const updatedListings = listings.filter(
        (listing) => listing.id !== selectedListing.id
      );
      onUpdateListings(updatedListings); // Listeyi güncelle
    }
    handleMenuClose();
  };
  

  // Aktif sekmeye göre gösterilecek ilanları belirle
  const listingsToShow = activeTab === "active" ? activeListings : inactiveListings;

  return (
    <div>
      <div className={styles.userListingPage}>
        <div className={styles.sidebar}>
          <h3>İlan Yönetimi</h3>
          <ul>
            <li
              className={activeTab === "active" ? styles.active : ""}
              onClick={() => setActiveTab("active")}
            >
              Yayında Olanlar
            </li>
            <li
              className={activeTab === "inactive" ? styles.active : ""}
              onClick={() => setActiveTab("inactive")}
            >
              Yayında Olmayanlar
            </li>
          </ul>
        </div>
        <div className={styles.content}>
          <h2>
            {activeTab === "active"
              ? "Yayında Olan İlanlar"
              : "Yayında Olmayan İlanlar"}
          </h2>
          {listingsToShow.length === 0 ? (
            <p>
              {activeTab === "active"
                ? "Hiç yayında olan ilanınız bulunmamaktadır."
                : "Hiç yayında olmayan ilanınız bulunmamaktadır."}
            </p>
          ) : (
            <div className={styles.listingContainer}>
              {listingsToShow.map((listing) => (
                <div key={listing.id} className={styles.listingItem}>
                  <img
                    src={
                      listing.image instanceof File || listing.image instanceof Blob
                        ? URL.createObjectURL(listing.image)
                        : listing.image
                    }
                    alt={listing.title}
                  />
                  <div className={styles.listingDetails}>
                    <h3>{listing.title}</h3>
                    <p>{listing.location}</p>
                    <p>
                      Son Yayınlanma Tarihi: {listing.lastPublishDate || "Bilinmiyor"} <br />
                      Yayından Kalktığı Tarih: {listing.removeDate || "Bilinmiyor"}
                    </p>
                    <p className={styles.price}>{listing.price}</p>
                  </div>
                  <div className={styles.listingActions}>
                    <button
                      className={styles.actionButton}
                      onClick={(event) => handleMenuOpen(event, listing)}
                    >
                      İşlemler
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleDeleteListing}>İlan Sil</MenuItem>
        <MenuItem onClick={handleToggleStatus}>
          {selectedListing?.active ? "Yayından Kaldır" : "Yayına Al"}
        </MenuItem>
      </Menu>
      <Footer />
    </div>
  );
};

export default UserListingPage;
