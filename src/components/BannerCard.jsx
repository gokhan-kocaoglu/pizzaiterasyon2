// src/components/BannerCard.jsx
import React from "react";
import styled from "styled-components";
import { Button } from "reactstrap";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 2rem;
  border-radius: 1rem;
  flex: 1;
  width: 530px;
  min-width: 250px;
  position: relative;
  overflow: hidden;
  height: 450px;
`;

const TextGroup = styled.div`
  position: absolute;
  text-align: left;
  align-items: flex-start;
  z-index: 2;
  margin: 2rem 2rem;
  max-width: 60%;
  padding: 2rem;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  font-size: 3rem;
  margin: 0rem;
  width: 50%;
  font-family: "Quattrocento", serif;
`;

const Desc = styled.p`
  font-size: 0.95rem;
  margin: 0.5rem 0;
`;

const OrderBtn = styled(Button)`
  background-color: white;
  color: black;
  font-weight: 600;
  border-radius: 999px;
  border: none;
  padding: 0.5rem 1rem;

  &:hover {
    background-color: #fcd34d;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BannerCard = ({ title, desc, image, bg, color }) => {
  return (
    <Card bg={bg} color={color}>
      <TextGroup>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
        <OrderBtn>Sipariş Ver</OrderBtn>
      </TextGroup>
      <Image src={image} alt={title} />
    </Card>
  );
};

export default BannerCard;
