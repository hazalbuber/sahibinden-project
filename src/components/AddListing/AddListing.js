import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import styles from './AddListing.module.css';
import { FormControl, InputLabel, Select, MenuItem, TextField, Button } from '@mui/material';
import categories from './AddListng.json';

const AddListing = ({ onAddListing }) => {
  const [selectedCategory, setSelectedCategory] = useState(null); // seçilen kategori tutan state
  const [formData, setFormData] = useState({}); // Form verilerini tutan state
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

  const handleSubmit = (e) => {
    e.preventDefault(); // Sayfanın yeniden yüklenmesini önlemek için
    if (Object.values(formData).every((value) => value !== "")) {
      // Kontrol kısmı, dolu olup olmadığını kontrol eder
      const newListing = { ...formData, category: selectedCategory.title };
      onAddListing(newListing);
      navigate('/'); // Ana sayfaya yönlendirme
      alert('İlan başarıyla eklendi!');

      setSelectedCategory(null);
      setFormData({});
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

          <Button type="submit" variant="contained" color="primary">
            İlan Ekle
          </Button>
        </form>
      )}

    </div>
  );
};

export default AddListing;




  /* resim dosyası seçtiğinde çağrılan fonksiyon.
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setFormData({ ...formData, image: file, previewImage: previewURL });
    }
  }; */



  /*
  
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

  */