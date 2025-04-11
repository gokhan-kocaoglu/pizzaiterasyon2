import React from "react";
import "../styles/main.css";
import HeaderSection from "../components/HeaderSection";
import CategoryNav from "../components/CategoryNav";
import MainProductSection from "../components/MainProductSection";

const Home = () => {
  return (
    <>
      <HeaderSection></HeaderSection>
      <CategoryNav />
      <MainProductSection />
    </>
  );
};

export default Home;
