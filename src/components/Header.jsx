import React from "react";
import "../styles/header.css";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-div">
        <h1 className="header-title">Teknolojik Yemekler</h1>
        <p className="header-subtitle">
          <span>Anasayfa</span> - <strong>Sipariş Oluştur</strong>
        </p>
      </div>
    </header>
  );
};

export default Header;
