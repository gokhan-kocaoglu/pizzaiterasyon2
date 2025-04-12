import React from "react";
import styled from "styled-components";

const Left = styled.div`
  flex: 1;
  min-width: 250px;
  text-align: left;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: left;
  gap: 0.5rem;
  width: 60%;
  img.logo {
    width: 160px;
    margin-bottom: 1rem;
  }

  .info {
    display: flex;
    align-items: flex-start;
    margin-bottom: 0.75rem;

    img.adress {
      width: 28px;
      margin-right: 0.75rem;
      margin-top: 0.75rem;
    }

    img {
      width: 28px;
      margin-right: 0.75rem;
    }

    span {
      font-size: 1.125rem;
      margin-top: 0.2rem;
    }
  }
`;

const FooterLeft = () => {
  return (
    <Left>
      <img
        src="../images/iteration-2-images/footer/logo-footer.svg"
        alt="Teknolojik Yemekler"
        className="logo"
      />
      <div className="info">
        <img
          className="adress"
          src="../images/iteration-2-images/footer/icons/icon-1.png"
          alt="location"
        />
        <div className="address-text">
          <p>341 Londonderry Road,</p>
          <p>İstanbul Türkiye</p>
        </div>
      </div>
      <div className="info">
        <img
          src="../images/iteration-2-images/footer/icons/icon-2.png"
          alt="email"
        />
        <span>aciktim@teknolojikyemekler.com</span>
      </div>
      <div className="info">
        <img
          src="../images/iteration-2-images/footer/icons/icon-3.png"
          alt="phone"
        />
        <span>+90 216 123 45 67</span>
      </div>
    </Left>
  );
};

export default FooterLeft;
