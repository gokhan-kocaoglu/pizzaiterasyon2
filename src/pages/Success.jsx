import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer";

const Container = styled.div`
  background-color: #d32f2f;
  min-height: 100vh;
  color: white;
  font-family: "Barlow", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 5.3rem;
  margin-top: 1rem;
  letter-spacing: 2px;
  font-weight: 300;
  height: auto;
  font-family: "Roboto Condensed", sans-serif;
  margin-block-start: 0;
  margin-block-end: 40;
`;

const TitleWrapper = styled.div`
  margin: 0;
  padding: 0;
`;

const Subtitle = styled.p`
  font-family: "Satisfy", cursive;
  font-weight: 400;
  font-size: 2rem;
  color: #ffc107;
  margin-bottom: 0.5rem;
`;

const Divider = styled.hr`
  width: 100%;
  margin: 1rem 0;
  border: none;
  border-top: 1px solid white;
`;

const PizzaTitle = styled.p`
  font-family: "Barlow", sans-serif;
  font-weight: 600;
  font-size: 22px;
  margin: 1rem 0 0.5rem 0;
  text-align: left;
`;

const OrderItemDiv = styled.div`
  margin-top: 1rem;
`;

const OrderBox = styled.div`
  border: 1px solid white;
  border-radius: 10px;
  padding: 1.5rem;
  margin-top: 2rem;
  width: 90%;
  max-width: 300px;
  text-align: left;
`;

const OrderItem = styled.p`
  margin: 1rem 0;
  font-size: 0.95rem;
  text-align: left;
  width: 100%;
  max-width: 200px;

  span {
    font-weight: bold;
  }
`;

const SuccessPage = () => {
  const { state } = useLocation();
  const { isim, boyut, hamur, malzemeler, toplamTutar } = state || {};

  const extraPrice = malzemeler?.length * 5 || 0;

  return (
    <>
      <Container>
        <h2>Teknolojik Yemekler</h2>
        <Subtitle>lezzetin yolda</Subtitle>
        <TitleWrapper>
          <Title>SİPARİŞ ALINDI</Title>
          <Divider />
        </TitleWrapper>

        <PizzaTitle>Position Absolute Acı Pizza</PizzaTitle>
        <OrderItemDiv>
          <OrderItem>
            Boyut: <span>{boyut}</span>
          </OrderItem>
          <OrderItem>
            Hamur: <span>{hamur}</span>
          </OrderItem>
          <OrderItem>
            Ek Malzemeler:{" "}
            {malzemeler?.map((item, index) => (
              <span key={index}>
                {item}
                {index < malzemeler.length - 1 ? ", " : ""}
              </span>
            ))}
          </OrderItem>
        </OrderItemDiv>

        <OrderBox>
          <p>
            <strong>Sipariş Toplamı</strong>
          </p>
          <OrderItem>
            <span>Seçimler:</span> {extraPrice.toFixed(2)}₺
          </OrderItem>
          <OrderItem>
            <span>Toplam:</span> {toplamTutar}₺
          </OrderItem>
        </OrderBox>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default SuccessPage;
