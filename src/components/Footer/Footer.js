import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Kurumsal</h4>
        <ul>
          <li>Hakkımızda</li>
          <li>Sürdürülebilirlik</li>
          <li>İnsan Kaynakları</li>
          <li>Haberler</li>
          <li>Site Haritası</li>
          <li>İletişim</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Hizmetlerimiz</h4>
        <ul>
          <li>Doping</li>
          <li>S - Param Güvende</li>
          <li>Güvenli e-Ticaret (GeT)</li>
          <li>Toplu Ürün Girişi</li>
          <li>Reklam</li>
          <li>Mobil</li>
          <li>Auto King</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Mağazalar</h4>
        <ul>
          <li>Neden Mağaza?</li>
          <li>Mağaza Açmak İstiyorum</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Gizlilik ve Kullanım</h4>
        <ul>
          <li>Güvenli Alışverişin İpuçları</li>
          <li>Sözleşmeler ve Kurallar</li>
          <li>Hesap Sözleşmesi</li>
          <li>Kullanım Koşulları</li>
          <li>Kişisel Verilerin Korunması</li>
          <li>Çerez Yönetimi</li>
          <li>Yardım ve İşlem Rehberi</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Bizi Takip Edin</h4>
        <ul>
          <li>Facebook</li>
          <li>X</li>
          <li>Linkedin</li>
          <li>Instagram</li>
          <li>Youtube</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
