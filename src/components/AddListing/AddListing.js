import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import styles from './AddListing.module.css';
import { FormControl, InputLabel, Select, MenuItem, TextField, Button } from '@mui/material';
import categories from './AddListng.json';

const AddListing = ({ onAddListing }) => {
  const [selectedCategory, setSelectedCategory] = useState(null); // Seçilen kategori tutan state
  const [formData, setFormData] = useState({}); // Form verilerini tutan state
  const [selectedImage, setSelectedImage] = useState(null); // Fotoğraf için state
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedCategory) {
      const initialFormData = {};
      selectedCategory.fields.forEach((field) => {
        initialFormData[field.name] = ""; // Boş yer
      });
      setFormData(initialFormData);
    }
  }, [selectedCategory]);

  // Seçilen kategoriye göre güncelleme
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Metin alanlarına giriş için
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Fotoğraf dosyası değiştiğinde çağrılır
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Sayfanın yeniden yüklenmesini önlemek için
    if (Object.values(formData).every((value) => value !== "")) {
      // Kontrol kısmı, dolu olup olmadığını kontrol eder
      const newListing = { 
        ...formData, 
        category: selectedCategory.title, 
        image: selectedImage 
      };
      onAddListing(newListing);
      navigate('/'); // Ana sayfaya yönlendirme
      alert('İlan başarıyla eklendi!');

      setSelectedCategory(null);
      setFormData({});
      setSelectedImage(null);
    } else {
      alert('Lütfen tüm alanları doldurun!');
    }
  };

  return (
    <div>
      <Navbar />
      {!selectedCategory ? ( // Kategori seçilmeden önceki sayfa
        <div className={styles.outerWrapper}>
          <div className={styles.categoryPage}>
            <h2>Adım Adım Kategori Seç</h2>
            <div className={styles.cardContainer}>
              {categories.map((category, index) => (
                <div
                  key={index}
                  className={styles.card}
                  style={{ borderTop: `8px solid ${category.color}` }}
                  onClick={() => handleCategoryClick(category)}
                >
                  <div
                    className={styles.icon}
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
      ) : (
        <form onSubmit={handleSubmit} style={{ padding: '1rem' }}>
          <h2>{selectedCategory.title} İlanı Ekle</h2>
          {selectedCategory.fields.map((field, index) => (
            <div key={index} style={{ marginBottom: '1rem' }}>
              {/* Metin alanı için */}
              {field.type === 'text' && (
                <TextField
                  fullWidth
                  label={field.label}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                />
              )}

              {/* Seçenekli yapı için */}
              {field.type === 'select' && (
                <FormControl fullWidth>
                  <InputLabel>{field.label}</InputLabel>
                  <Select
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                  >
                    {field.options.map((option, i) => (
                      <MenuItem key={i} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            </div>
          ))}

          {/* Fotoğraf Yükleme Alanı */}
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="fileInput" style={{ cursor: 'pointer', color: 'blue' }}>Fotoğraf Seç</label>
            <input
              id="fileInput"
              type="file"
              onChange={handleFileChange}
              accept="image/*"
              style={{ display: 'none' }} // Görünmez yaparak yalnızca label tıklanabilir olur
            />
            {selectedImage && (
              <p style={{ marginTop: '0.5rem' }}>Fotoğraf Seçildi!!</p>
            )}
          </div>


          <Button type="submit" variant="contained" color="primary">
            İlan Ekle
          </Button>
        </form>
      )}
    </div>
  );
};

export default AddListing;

