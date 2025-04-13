import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer";

const Container = styled.div`
  background-color: #d32f2f;
  color: white;
  font-family: "Barlow", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  text-align: center;
`;

const Title1 = styled.h1`
  font-size: 3.2rem;
  margin-top: 1rem;
  letter-spacing: 2px;
  font-weight: 400;
  height: auto;
  font-family: "Londrina Solid", sans-serif;
`;

const Title2 = styled.h1`
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

const SummaryBox = styled.div`
  border-radius: 0.3rem;
  flex-grow: 1;
  min-width: 350px;
  min-height: 180px;
  border: 1px solid rgba(255, 255, 255, 1);
  margin-top: 2rem;
  margin-bottom: 5.2rem;
  color: white;
`;

const SummaryTitle = styled.p`
  text-align: left;
  padding-top: 1rem;
  padding-left: 2rem;
  font-weight: bold;
  font-family: "Barlow", sans-serif;
  font-size: 16px;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
  padding: 0 1rem;
`;

const Label = styled.span`
  font-size: 14px;
  padding-left: 1rem;
  padding-top: 1rem;
  color: white;
`;

const WhiteLabel = styled(Label)`
  color: white;
`;

const Value = styled.span`
  font-size: 14px;
  padding-right: 1rem;
  padding-top: 1rem;
`;

const WhiteValue = styled(Value)`
  color: white;
`;

const SuccessPage = () => {
  const { state } = useLocation();
  const { isim, boyut, hamur, malzemeler, toplamTutar } = state || {};

  const extraPrice = malzemeler?.length * 5 || 0;

  return (
    <>
      <Container>
        <Title1>Teknolojik Yemekler</Title1>
        <Subtitle>lezzetin yolda</Subtitle>
        <TitleWrapper>
          <Title2>SİPARİŞ ALINDI</Title2>
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

        <SummaryBox>
          <SummaryTitle>Sipariş Toplamı</SummaryTitle>
          <SummaryRow>
            <Label>Seçimler</Label>
            <Value data-cy="data-light-value">{extraPrice.toFixed(2)}₺</Value>
          </SummaryRow>
          <SummaryRow>
            <WhiteLabel>Toplam</WhiteLabel>
            <WhiteValue data-cy="data-red-value">{toplamTutar}₺</WhiteValue>
          </SummaryRow>
        </SummaryBox>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default SuccessPage;
