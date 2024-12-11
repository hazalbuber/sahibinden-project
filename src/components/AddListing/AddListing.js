import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import "./AddListing.css";
import { FormControl, InputLabel, Select, MenuItem,TextField,Button } from '@mui/material';
import categories from "./AddListng.json";


const AddListing = ({onAddListing}) => {
  const [selectedCategory, setSelectedCategory] = useState(null) //seçilen kategori tutan state
  const [formData, setFormData] = useState({}); // Form verilerini tutan state
  const navigate = useNavigate();


  useEffect(() => {
    if (selectedCategory) {
      const initialFormData = {};
      selectedCategory.fields.forEach((field) => {
        initialFormData[field.name] = ""; //boş yer
      });
      setFormData(initialFormData);
    }
  }, [selectedCategory]);

    //seçilen katagoriye göre güncelleme
    const handleCategoryClick = (category) => {
      setSelectedCategory(category);
    };

    //  metin alanlarına girişi için
    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
     };

    

     const handleSubmit = (e) => {
      e.preventDefault(); // Sayfanın yeniden yüklenmesini önlemek için yoksa gidicek her şey
      if (Object.values(formData).every((value) => value !== "")) { //kontrol kısmı dolu olup olmadığıan bakıyoruz zorunlu yerlerin
        const newListing = { ...formData, category: selectedCategory.title };
        onAddListing(newListing);
        navigate('/'); // Ana sayfaya yönlendirmek için
        alert('İlan başarıyla eklendi!');
  
        setSelectedCategory(null);
        setFormData({
        });
      } else {
        alert('Lütfen tüm alanları doldurun!');
      }
    };

    
    return (
      <div>
        <Navbar /> 
        {!selectedCategory ? ( //kategori seçilmeden önceki sayfa 
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
       )
       //kategoriye göre gelicek şeyleri belirliyoruz 
       : ( <form onSubmit={handleSubmit} style={{ padding: "1rem" }}>
          <h2>{selectedCategory.title} İlanı Ekle</h2>
          {selectedCategory.fields.map((field, index) => (
            <div key={index} style={{ marginBottom: "1rem" }}>
              
              {/* text yapısı için burası gelcek */}
              {field.type === "text" && (
                <TextField
                  fullWidth
                  label={field.label}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                />
              )}

              {/* burasıda seçenekleri olan yapı için */}
              {field.type === "select" && (
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

        <Footer></Footer>
      </div>
    );
}

export default AddListing



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