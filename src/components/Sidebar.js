import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const categories = [
    "Emlak",
    "Konut",
    "İş Yeri",
    "Arsa",
    "Konut Projeleri Yeni",
    "Bina",
    "Devre Mülk",
    "Turistik Tesis",
    "Vasıta",
    "Otomobil",
    "Arazi, SUV & Pickup",
    "Motosiklet",
    "Minivan & Panelvan",
    "Ticari Araçlar",
    "Elektrikli Araçlar",
    "Kiralık Araçlar",
    "Deniz Araçları",
    "Hasarlı Araçlar"
    
  ];

  
  return (
    <div className="sidebar">
      <div className="sidebar-section">
        <ul>
          <li>
          {categories.slice(0,1).map((category, index) => (
            <h3 key={index}>
              <Link to={`/kategori/${category}`}>{category}</Link>
            </h3>
          ))}
          </li>
          <li>
          {categories.slice(1, 8).map((category, index) => (
            <li key={index}>
              <Link to={`/kategori/${category}`}>{category}</Link>
            </li>
          ))}
          </li>
        </ul>
      </div>
      <div className="sidebar-section">
          <p>-------------------------------------------</p>
        <ul>
          <li>
          {categories.slice(8,9).map((category, index) => (
            <h3 key={index}>
              <Link to={`/kategori/${category}`}>{category}</Link>
            </h3>
          ))}
          </li>
          <li>
          {categories.slice(9).map((category, index) => (
            <li key={index}>
              <Link to={`/kategori/${category}`}>{category}</Link>
            </li>
          ))}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;



/*
Emlak
Konut
İş Yeri
Arsa
Konut Projeleri Yeni
Bina
Devre Mülk
Turistik Tesis


Otomobil
Arazi, SUV & Pickup
Motosiklet
Minivan & Panelvan
Ticari Araçlar
Elektrikli Araçlar
Kiralık Araçlar
Deniz Araçları
Hasarlı Araçlar

*/