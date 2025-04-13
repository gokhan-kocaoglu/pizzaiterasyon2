import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const SubTitle = styled.p`
  font-family: "Satisfy", cursive;
  font-size: 2rem;
  color: #ce2829;
  margin: 0;
`;

const MainTitle = styled.h2`
  font-size: 2.5rem;
  font-family: "Barlow", sans-serif;
  font-weight: 600;
  margin-top: 0.5rem;
  color: black;
  text-align: center;

  span {
    display: inline;
  }

  @media (max-width: 768px) {
    span {
      display: block;
    }
  }
`;

const SectionTitle = () => {
  return (
    <Wrapper>
      <SubTitle>en çok paketlenen menüler</SubTitle>
      <MainTitle>
        <span>Acıktıran </span>
        <span>Kodlara Doyuran </span>
        <span>Lezzetler</span>
      </MainTitle>
    </Wrapper>
  );
};

export default SectionTitle;
