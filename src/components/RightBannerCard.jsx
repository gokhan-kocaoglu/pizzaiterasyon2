import React from "react";
import styled from "styled-components";
import { Button } from "reactstrap";

const Card = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  height: 50%;
  width: 530px;
  border-radius: 0.5rem;
  overflow: hidden;

  @media (max-width: 1200px) {
    min-height: 270px;
    flex-direction: column;
    gap: 1rem;
  }
`;

const TextGroup = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 2;

  font-family: "Barlow", sans-serif;
  font-size: 2rem;
  font-weight: 600;
  width: 50%;

  @media (max-width: 1200px) {
    width: 50%;
    min-height: 270px;
  }
`;

const Title = styled.h3`
  font-size: 2rem;
  font-family: "Barlow", sans-serif;
  text-align: left;
  font-weight: 600;
  margin: 0;
`;

const OrderBtn = styled(Button)`
  background-color: white;
  color: red;
  font-weight: 600;
  border-radius: 10rem 10rem 10rem 10rem;
  border: none;
  font-family: "Barlow", sans-serif;
  padding: 0.8rem 1.5rem;
  margin-top: 2rem;

  &:hover {
    background-color: #fcd34d;
  }
`;

const Image = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  border-radius: inherit;

  @media (max-width: 1200px) {
    position: absolute;
    inset: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: 0;
  }
`;

const RightBannerCard = ({ title, image, bg, color }) => {
  return (
    <Card bg={bg} color={color}>
      <TextGroup>
        <Title>{title}</Title>
        <OrderBtn>SİPARİŞ VER</OrderBtn>
      </TextGroup>
      <Image src={image} alt={title} />
    </Card>
  );
};

export default RightBannerCard;
