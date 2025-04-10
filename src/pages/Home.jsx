import React from "react";
import { useHistory } from "react-router-dom";
import "../styles/main.css";

const Home = () => {
  const history = useHistory();

  const handleOrderClick = () => {
    history.push("/siparis");
  };
  return (
    <>
      <section className="home-section">
        <div className="app">
          <div className="overlay">
            <h1 className="brand">Teknolojik Yemekler</h1>
            <h2 className="slogan">
              KOD ACIKTIRIR <br /> PİZZA, DOYURUR
            </h2>
            <button
              data-cy="btn-aciktim"
              className="order-button"
              onClick={handleOrderClick}
            >
              ACIKTIM
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
