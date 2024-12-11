import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import DetailPage from './components/DetailPage/DetailPage';
import AddListing from './components/AddListing/AddListing';

import SignupLoginPage from './components/SignupLogin/SignupLoginPage';
import CategoryPage from './components/CategoryPage/CategoryPage';


const App = () => {
  const [listings, setListings] = useState([
    {
      id: 1,
      title: 'Satılık Daire',
      price: '2.000.000 ',
      location: 'İstanbul',
      metrekare: 123,
      roomNum: '3+1',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR980ox7lRMQdKxbggj-LoSa7XctfePUAROdA&s', // Örnek görsel
    },
    {
      id: 2,
      title: 'Kiralık Daire',
      price: '5.000 TL/ay',
      location: 'Ankara',
      metrekare: 123,
      roomNum: '3+1',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR980ox7lRMQdKxbggj-LoSa7XctfePUAROdA&s', // Örnek görsel
    },
    {
      id: 3,
      title: 'Satılık Araba',
      price: '350.000 TL',
      location: 'İzmir',
      metrekare: 123,
      roomNum: '3+1',
      image: 'data:image/png;base64,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', // Örnek görsel
    },
    {
      id: 4,
      title: 'Kiralık Araba',
      price: '1.500 TL/gün',
      location: 'Antalya',
      metrekare: 123,
      roomNum: '3+1',
      image: 'data:image/png;base64,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', // Örnek görsel
    },
    {
      id: 5,
      title: 'Kadın Mont',
      price: '750 TL',
      location: 'Bursa',
      metrekare: 123,
      roomNum: '3+1',
      image: 'https://via.placeholder.com/300x200?text=Kadın+Mont',
    },
    {
      id: 6,
      title: 'Erkek Ayakkabı',
      price: '500 TL',
      location: 'Adana',
      metrekare: 123,
      roomNum: '3+1',
      image: 'https://via.placeholder.com/300x200?text=Erkek+Ayakkabı',
    },
    {
      id: 7,
      title: 'Çocuk Bisikleti',
      price: '1.200 TL',
      location: 'Eskişehir',
      metrekare: 123,
      roomNum: '3+1',
      image: 'https://via.placeholder.com/300x200?text=Çocuk+Bisikleti',
    },
    {
      id: 8,
      title: 'Satılık Motosiklet',
      price: '45.000 TL',
      location: 'Kocaeli',
      metrekare: 123,
      roomNum: '3+1',
      image: 'https://via.placeholder.com/300x200?text=Satılık+Motosiklet',
    },
    {
      id: 9,
      title: '2+1 Eşyalı Ev',
      price: '3.500 TL/ay',
      location: 'Muğla',
      metrekare: 123,
      roomNum: '3+1',
      image: 'https://via.placeholder.com/300x200?text=Eşyalı+Ev',
    },
    {
      id: 10,
      title: 'Klasik Araba',
      price: '700.000 TL',
      location: 'Gaziantep',
      metrekare: 123,
      roomNum: '3+1',
      image: 'https://via.placeholder.com/300x200?text=Klasik+Araba',
    },
    {
      id: 11,
      title: 'Bebek Arabası',
      price: '900 TL',
      location: 'Samsun',
      metrekare: 123,
      roomNum: '3+1',
      image: 'https://via.placeholder.com/300x200?text=Bebek+Arabası',
    },
    {
      id: 12,
      title: 'Kiralık Yazlık',
      price: '15.000 TL/ay',
      location: 'Bodrum',
      metrekare: 123,
      roomNum: '3+1',
      image: 'https://via.placeholder.com/300x200?text=Kiralık+Yazlık',
    },
    {
      id: 13,
      title: 'Kadın Elbise',
      price: '300 TL',
      location: 'Denizli',
      metrekare: 123,
      roomNum: '3+1',
      image: 'https://via.placeholder.com/300x200?text=Kadın+Elbise',
    },
    {
      id: 14,
      title: 'Tablet',
      price: '4.000 TL',
      location: 'Konya',
      metrekare: 123,
      roomNum: '3+1',
      image: 'https://via.placeholder.com/300x200?text=Tablet',
    },
    {
      id: 15,
      title: 'Satılık Tarla',
      price: '1.000.000 TL',
      location: 'Tekirdağ',
      metrekare: 123,
      roomNum: '3+1',
      image: 'https://via.placeholder.com/300x200?text=Satılık+Tarla',
    },

  ]);
  const [user, setUser] = useState(null); // Aktif kullanıcı
  const [users, setUsers] = useState([ // Örnek kayıtlı kullanıcılar
    { username: "ElifHzl", email: "elif@outlook.com", password: "123456" },
  ]);

  const handleAddListing = (newListing) => {
    setListings((prevListings) => [...prevListings, { id: Date.now(), ...newListing }]);
  };

  const handleLogin = (email, password) => {
    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );
    if (foundUser) {
      setUser(foundUser);
      return true; // Giriş başarılı
    } else {
      alert("Kullanıcı bulunamadı veya şifre hatalı!");
      return false; // Giriş başarısız
    }
  };

  const handleSignUp = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
    setUser(newUser);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage listings={listings} user={user} onLogout={handleLogout} />
          }
        />
        <Route
          path="/ilan-ekle"
          element={
            user ? (
              <AddListing onAddListing={handleAddListing} />
            ) : (
              <SignupLoginPage onLogin={handleLogin} onSignUp={handleSignUp} />
            )
          }
        />
        <Route
          path="/giriş-yap"
          element={
            <SignupLoginPage onLogin={handleLogin} onSignUp={handleSignUp} />
          }
        />
        <Route path="/detay/:id" element={<DetailPage listings={listings} />} />
        <Route path="/kategori/:categoryName" element={<CategoryPage />} />
      </Routes>
    </Router>
  );
};

export default App;