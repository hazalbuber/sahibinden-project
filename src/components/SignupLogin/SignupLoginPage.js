import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignupLoginPage.css";

const SignupLoginPage = ({ onLogin, onSignUp }) => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (username && email && password) {
      const newUser = { username, email, password };
      onSignUp(newUser);
      alert("Üye oldunuz!");
      navigate("/");
    } else {
      alert("Lütfen tüm alanları doldurun!");
    }
  };

  const handleLogin = () => {
    if (email && password) {
      const loginSuccess = onLogin(email, password);
      if (loginSuccess) {
        alert("Başarıyla giriş yaptınız!");
        navigate("/");
      }
    } else {
      alert("Lütfen e-posta ve şifre alanlarını doldurun!");
    }
  };

  return (
    <div className="page-container">
      <div className="logo-container" onClick={() => navigate("/")}>
        <h1 className="logo-text">sahibinden.com</h1>
      </div>

      <div className="form-container">
        {isSignUp ? (
          <div className="form-box">
            <h2 className="form-title">Üye Ol</h2>
            <div className="form-group">
              <input
                className="form-input"
                type="text"
                placeholder="Kullanıcı Adı"
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                className="form-input"
                type="email"
                placeholder="E-posta Adresi"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="form-input"
                type="password"
                placeholder="Şifre"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="form-button" onClick={handleSignUp}>
              Hesap Aç
            </button>
            <p>
              Zaten hesabınız var mı?{" "}
              <button
                className="switch-button"
                onClick={() => setIsSignUp(false)}
              >
                Giriş Yap
              </button>
            </p>
          </div>
        ) : (
          <div className="form-box">
            <h2 className="form-title">Giriş Yap</h2>
            <div className="form-group">
              <input
                className="form-input"
                type="email"
                placeholder="E-posta Adresi"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="form-input"
                type="password"
                placeholder="Şifre"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="form-button" onClick={handleLogin}>
              Giriş Yap
            </button>
            <p>
              Henüz hesabınız yok mu?{" "}
              <button
                className="switch-button"
                onClick={() => setIsSignUp(true)}
              >
                Üye Ol
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignupLoginPage;
