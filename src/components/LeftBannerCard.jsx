import React from "react";
import styled from "styled-components";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const Card = styled.div`
  background-color: #ce2829;
  color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  width: 530px;
  position: relative;
  height: 100%;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    width: 100%;
    min-height: 330px;
    border-radius: 1rem;
    height: auto;
  }
`;

const BackgroundImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

const TextGroup = styled.div`
  z-index: 2;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;

const Title = styled.h3`
  font-size: 3rem;
  font-weight: 700;
  width: 60%;
  font-family: "Quattrocento", sans-serif;
  margin: 0;
`;

const Desc = styled.p`
  font-size: 1rem;
  margin: 0;
`;

const OrderBtn = styled(Button)`
  background-color: white;
  color: red;
  font-weight: 600;
  border-radius: 10rem 10rem 10rem 10rem;
  font-family: "Barlow", sans-serif;
  border: none;
  padding: 0.8rem 1.5rem;
  margin-top: 1rem;
  &:hover {
    background-color: #fcd34d;
  }
`;

const LeftBannerCard = ({ title, desc, image }) => {
  const history = useHistory();

  const handleOrderClick = () => {
    history.push("/siparis");
  };
  return (
    <Card>
      <BackgroundImage src={image} alt={title} />
      <TextGroup>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
        <OrderBtn onClick={handleOrderClick}>SİPARİŞ VER</OrderBtn>
      </TextGroup>
    </Card>
  );
};

export default LeftBannerCard;
