import React from "react";
import styled from "styled-components";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";

// Arka planlı tam ekran kapsayıcı
const HeaderContainer = styled.section`
  height: 100vh;
  width: 100%;
  background-image: url("/images/iteration-1-images/home-banner.png");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  color: white;
  position: relative;
  min-width: 320px;

  @media (max-width: 500px) {
    align-items: flex-start;
  }
`;

const Parent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 500px) {
    width: 100%;
    padding: 0 1rem;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// İçerik hizalayıcı
const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;

  @media (max-width: 500px) {
    height: auto;
    margin-top: 1rem;
  }
`;

const Slg = styled.p`
  font-size: 2rem;
  font-weight: 400px;
  font-family: "Satisfy", cursive;
  margin: 0;
  color: #fdc913;

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

// Yazılar
const Brand = styled.h1`
  font-size: 3.12rem;
  font-weight: 400px;
  font-family: "Londrina Solid", sans-serif;
  margin-top: 1.8rem;

  @media (max-width: 500px) {
    font-size: 2.2rem;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
`;

const Slogan = styled.h2`
  font-size: 5rem;
  font-weight: 300;
  line-height: 1.1;
  margin: 0rem 0;
  font-family: "Barlow", sans-serif;
  text-align: center;

  @media (max-width: 500px) {
    font-size: 4.6rem;
    text-align: center;
  }
`;

const OrderButton = styled(Button)`
  background-color: #ffca28;
  color: black;
  margin-top: 1rem;
  padding: 1rem 2rem;
  font-weight: 600;
  font-size: 1.1rem;
  border: none;
  border-radius: 100px;
  width: 175px;
  font-family: "Barlow", sans-serif;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ffc107;
  }

  @media (max-width: 500px) {
    width: 150px;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }
`;

const HeaderSection = () => {
  const history = useHistory();

  const handleOrderClick = () => {
    history.push("/siparis");
  };
  return (
    <HeaderContainer>
      <Parent>
        <Title>
          <Brand>Teknolojik Yemekler</Brand>
        </Title>
        <Overlay>
          <Slg>fırsatı kaçırma</Slg>
          <Slogan>
            KOD AÇIKTIRIR
            <br />
            PIZZA, DOYURUR
          </Slogan>
          <OrderButton data-cy="btn-aciktim" onClick={handleOrderClick}>
            ACIKTIM
          </OrderButton>
        </Overlay>
      </Parent>
    </HeaderContainer>
  );
};

export default HeaderSection;
