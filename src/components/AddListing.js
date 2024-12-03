import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles.css';

const categories = [
  { title: 'Emlak', icon: '🏠', color: '#f7b500' },
  { title: 'Vasıta', icon: '🚗', color: '#e74c3c' },
];


const AddListing = ({ onAddListing }) => {
  const [selectedCategory, setSelectedCategory] = useState(null) //seçilen kategori için

  const [formData, setFormData] = useState({
    title: '',
    price: '',
    location: '',
    date: '' ,
    kimden: '' ,
    exchange: '' ,
    image: null,
    previewImage: null,

    //-----Emlak için
    homeType: '' ,
    metrekare: '' ,
    roomNum: '' ,
    homeAge: '' ,
    floor: '' ,
    bathroomsNum: '' ,
    kitchenNum: '' ,
    dues: '' ,

    //-----Vasıta için
    vehicleType:'',
    brand: '' ,
    model: '' ,
    modelYear: '' ,
    calor: '' ,
    km: '' ,


  });
  //seçilen katagoriye göre güncelleme
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const navigate = useNavigate();

  //  metin alanlarına girişi için
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // resim dosyası seçtiğinde çağrılan fonksiyon.
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setFormData({ ...formData, image: file, previewImage: previewURL });
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault(); // Sayfanın yeniden yüklenmesini önlemek için yoksa giidicek her şey
    if (formData.title && formData.price && formData.location) {
      const newListing = { ...formData, category: selectedCategory.title };
      onAddListing(newListing);
      navigate('/'); // Ana sayfaya yönlendirmek için
      alert('İlan başarıyla eklendi!');

      setSelectedCategory(null);
      setFormData({
        title: '',
        price: '',
        location: '',
        date: '' ,
        kimden: '' ,
        exchange: '' ,
        image: null,
        previewImage: null,
    
        //-----Emlak için
        homeType: '' ,
        metrekare: '' ,
        roomNum: '' ,
        homeAge: '' ,
        floor: '' ,
        bathroomsNum: '' ,
        kitchenNum: '' ,
        dues: '' ,
    
        //-----Vasıta için
        vehicleType:'',
        brand: '' ,
        model: '' ,
        modelYear: '' ,
        calor: '' ,
        km: '' ,
    
      });
    } else {
      alert('Lütfen tüm alanları doldurun!');
    }
  };

  return (
    <div>
      <Navbar />


      {!selectedCategory ? ( 
        <div className="outer-wrapper">
          <div className="category-page">
            <h2>Adım Adım Kategori Seç</h2> 
            <div className="card-container">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="card"
                  style={{ borderTop: `8px solid ${category.color}` }} 
                  onClick={() => handleCategoryClick(category)} 
                >
                  <div
                    className="icon"
                    style={{ backgroundColor: category.color }}
                  >
                    {category.icon} 
                  </div>
                  <h3>{category.title}</h3> 
                </div>
              ))}
            </div>
          </div>
        </div>
      ) :
      (

        // Seçilen kategoriye göre
        <form onSubmit={handleSubmit} style={{ padding: '1rem' }}>
          <h2>{selectedCategory.title} İlanı Ekle</h2> 
          <label>
            Başlık:
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Fiyat:
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Lokasyon:
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </label>

         {/* ---------------------------------------- */}

          <label>
            Kimden:
            <input

            type="text"
            name="kimden"
            value={formData.kimden}
            onChange={handleChange}
            required 

            />
          </label>

          <label>
            Takas:
            <input

            type="text"
            name="exchange"
            value={formData.exchange}
            onChange={handleChange}
            required 

            />
          </label>
        


         {/* ---------------------------------------- */}

          {selectedCategory.title === 'Emlak' && (
            <>
              {/* Emlak kategorisi için ek alanlar */}

              <label>
                Ev Türü
                <input

                type="text"
                name="homeType"
                value={formData.homeType}
                onChange={handleChange}
                required 

                />
              </label>

              <label>
                Metrekare:
                <input
                  type="text"
                  name="metrekare"
                  value={formData.metrekare}
                  onChange={handleChange}
                />
              </label>
              <label>
                Oda Sayısı:
                <input
                  type="text"
                  name="roomNum"
                  value={formData.roomNum}
                  onChange={handleChange}
                />
              </label>

            <label>
                Ev Yaşı: 
              <input
            
              type="text"
              name="homeAge"
              value={formData.homeAge}
              onChange={handleChange}
              required 

              />
            </label>
            <label>
              Kat:
              <input

              type="text"
              name="floor"
              value={formData.floor}
              onChange={handleChange}
              required 

              />
            </label>


            </>
          )}


         {/* ---------------------------------------- */}

          {selectedCategory.title === 'Vasıta' && (
            <>
              {/* Vasıta kategorisi için ek alanlar */}
              <label>
                Araç Türü:
                <input
                  type="text"
                  name="vehicleType"
                  value={formData.vehicleType}
                  onChange={handleChange}
                />
              </label>

              <label>
                Marka:
                <input
                  type="text"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                />
              </label>

              <label>
                Model:
                <input
                  type="text"
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                />
              </label>

              <label>
                Model Yılı:
                <input
                  type="text"
                  name="modelYear"
                  value={formData.modelYear}
                  onChange={handleChange}
                />
              </label>

              <label>
                Renk:
                <input
                  type="text"
                  name="calor"
                  value={formData.calor}
                  onChange={handleChange}
                />
              </label>

              <label>
                KM:
                <input
                  type="text"
                  name="km"
                  value={formData.km}
                  onChange={handleChange}
                />
              </label>
            </>
          )}



          <label>
            Fotoğraf:
            <input type="file" name="image" accept="image/*" onChange={handleImageChange} />
          </label>
          {formData.previewImage && (
            <img
              src={formData.previewImage}
              alt="Fotoğraf Önizleme"
              style={{ maxWidth: '100px', marginTop: '0.5rem' }}
            />
          )}
          <button type="submit">İlan Ekle</button> 
        </form>
      )}
      <Footer />
    </div>
  );
};

export default AddListing;
