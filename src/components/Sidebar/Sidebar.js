import React from 'react';
import SidebarSection from './SidebarSection';
import "./Sidebar.css";

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
      <SidebarSection title={categories[0]} items={categories.slice(1, 8)} />
      <p>-------------------------------------------</p>
      <SidebarSection title={categories[8]} items={categories.slice(9)} />
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