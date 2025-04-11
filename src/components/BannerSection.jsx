import React from "react";
import styled from "styled-components";
import LeftBannerCard from "./LeftBannerCard";
import RightBannerCard from "./RightBannerCard";

const BannerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
  height: 430px;
  margin: 0rem auto 0;
  flex-wrap: wrap;

  @media (max-width: 1200px) {
    flex-direction: column;
    height: auto;
    gap: 0.5rem;
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 530px;
  height: 100%;
  gap: 0.2rem;

  @media (max-width: 1200px) {
    width: 100%;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
  }
`;

const BannerSection = () => {
  return (
    <BannerWrapper>
      <LeftBannerCard
        title="Özel Lezzetus"
        desc="Position: Absolute Acı Burger"
        image="../images/iteration-2-images/cta/kart-1.png"
      />
      <RightColumn>
        <RightBannerCard
          title="Hackathon Burger Menü"
          image="../images/iteration-2-images/cta/kart-2.png"
          bg="#1c1c1c"
          color="#fff"
        />
        <RightBannerCard
          title="Çooook hızlı npm kurye"
          image="../images/iteration-2-images/cta/kart-3.png"
          bg="#fdf3dc"
          color="#000"
        />
      </RightColumn>
    </BannerWrapper>
  );
};

export default BannerSection;
