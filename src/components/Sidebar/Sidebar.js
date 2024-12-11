import React from 'react';
import SidebarSection from './SidebarSection';
import './Sidebar.css';

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

  const generateItems = (items, categoryId) =>
    items.map((item, index) => ({
      title: item,
      id: categoryId, // Tüm bu kategorilere aynı ID atanır
    }));

  return (
    <div className="sidebar">
      <SidebarSection
        title={categories[0]}
        items={generateItems(categories.slice(1, 8), 'real_estate')}
      />
      <p>-------------------------------------------</p>
      <SidebarSection
        title={categories[8]}
        items={generateItems(categories.slice(9), 'vehicles')}
      />
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