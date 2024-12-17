import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AddListing.module.css';
import { FormControl, InputLabel, Select, MenuItem, TextField, Button } from '@mui/material';
import categories from './AddListng.json';

const AddListing = ({ onAddListing, user }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [formData, setFormData] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  //kategori seçildiğinde, o kategorinin form alanlarını başlangıç değerleriyle doldurur
  useEffect(() => {
    if (selectedCategory) {
      const initialFormData = {};
      selectedCategory.fields.forEach((field) => {
        initialFormData[field.name] = '';
      });
      setFormData(initialFormData);
    }
  }, [selectedCategory]);

  //Kategori Seçimi
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  //input alanlarında değişiklik olduğunda formData state'ini güncelle
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //kullanıcının seçtiği resmi selectedImage state'ine kaydetme
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  //Form Gönderme 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).every((value) => value !== '')) {
      const newListing = {
        id: Date.now(), // Benzersiz ID
        ...formData,
        category: selectedCategory.category, // Kategori id'si
        categoryTitle: selectedCategory.title, // Kategori başlığı
        image: selectedImage,
        owner: user.username,
        active: true,
      };
      onAddListing(newListing);
      navigate('/');
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
      {!selectedCategory ? (
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
              {field.type === 'text' && (
                <TextField
                  fullWidth
                  label={field.label}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                />
              )}
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
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="fileInput" style={{ cursor: 'pointer', color: 'blue' }}>
              Fotoğraf Seç
            </label>
            <input
              id="fileInput"
              type="file"
              onChange={handleFileChange}
              accept="image/*"
              style={{ display: 'none' }}
            />
            {selectedImage && <p style={{ marginTop: '0.5rem' }}>Fotoğraf Seçildi!</p>}
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
