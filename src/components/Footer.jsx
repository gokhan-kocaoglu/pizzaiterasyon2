import React from "react";
import { FooterWrapper, FooterContent, FooterBottom } from "./FooterWrapper";
import FooterLeft from "./FooterLeft";
import FooterMenu from "./FooterMenu";
import FooterInstagram from "./FooterInstagram";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterLeft />
        <FooterMenu />
        <FooterInstagram />
      </FooterContent>
      <FooterBottom>
        <span>© 2023 Teknolojik Yemekler.</span>
        <img
          src="../images/iteration-2-images/footer/icons/Frame.png"
          alt="twitter"
        />
      </FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;
