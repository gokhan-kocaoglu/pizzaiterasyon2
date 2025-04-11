import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import ProductFilter from "./ProductFilter";
import ProductList from "./ProductList";
import BannerSection from "./BannerSection";

import categories from "../data/productCategories";
import allProducts from "../data/products";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  max-width: 100%;
  flex-direction: column;
  background-color: #fafafa; // Açık arka plan
  padding: 4rem 1rem;
  gap: 2rem;

  @media (min-width: 768px) {
    padding: 6rem 2rem;
  }
`;

const MainProductSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);

  const filteredProducts = allProducts.filter(
    (product) => product.category === selectedCategory
  );

  return (
    <Wrapper>
      <BannerSection />
      <SectionTitle />
      <ProductFilter
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <ProductList products={filteredProducts} />
    </Wrapper>
  );
};

export default MainProductSection;
