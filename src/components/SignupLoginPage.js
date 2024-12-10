import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../styles.css';

const SignupLoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(true); // Üye Ol ve Giriş Yap arasında geçişi yapmak için

  return (
    <div className="page-container">
          <nav className="navbar2">
      <div className="navbar-logo2">
        {/* sahibinden.com logosuna tıklayınca ana sayfaya yönlendir */}
        <Link to="/">
          <span className="logo-text2">sahibinden.com</span>
        </Link>
      </div>  
      </nav>


    {/* ------------------- */}

    <div className="form-container">

    {isSignUp ? (
        <div className="form-box" >
          <h2 className="form-title">Üye Ol</h2>
          <div className="form-group">
            <input className="form-input" type="text" placeholder="Ad" />
            <input className="form-input" type="text" placeholder="Soyad" />
          </div>
          <div className="form-group">
            <input className="form-input" type="email" placeholder="E-posta Adresi" />
          </div>
          <div className="form-group">
            <input className="form-input" type="password" placeholder="Şifre" />
          </div>
          <div className="form-group" >
          <div className="form-actions">
          <button className="form-button" >Hesap Aç</button>
          <div>  Zaten hesabınız var mı?<button  className="switch-button"  onClick={() => setIsSignUp(false)}>Giriş Yap</button> </div>
          </div>
          </div>
        </div>
      ) : 
      
      (
        <div className="form-box">
          <h2 className="form-title">Giriş Yap</h2>
          <div className="form-group" >
            <input className="form-input" type="email" placeholder="E-posta Adresi" />
          </div>
          <div className="form-group" >
            <input className="form-input" type="password" placeholder="Şifre" />
          </div>
          <div className="form-group" >
            <div className="form-actions">
              <button className="form-button" >E-posta ile giriş yap</button>
            <div> Henüz hesabın yok mu? <button  className="switch-button" onClick={() => setIsSignUp(true)}>Üye Ol</button> </div> </div>
          </div>
        </div>
      )}

    </div>

      <div>

      </div>

    </div>
  );
};

export default SignupLoginPage;
