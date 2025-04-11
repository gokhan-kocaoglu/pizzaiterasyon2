import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";

const ListWrapper = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  padding: 0 1rem;
`;

const ProductList = ({ products }) => {
  return (
    <ListWrapper>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ListWrapper>
  );
};

export default ProductList;
