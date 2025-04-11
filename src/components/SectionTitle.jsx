// src/components/SectionTitle.jsx
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  margin-top: 1rem;
`;

const SubTitle = styled.p`
  font-family: "Satisfy", cursive;
  font-size: 2rem;
  color: #ce2829;
  margin: 0;
`;

const MainTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-top: 0.5rem;
`;

const SectionTitle = () => {
  return (
    <Wrapper>
      <SubTitle>en çok paketlenen menüler</SubTitle>
      <MainTitle>Acıktıran Kodlara Doyuran Lezzetler</MainTitle>
    </Wrapper>
  );
};

export default SectionTitle;
