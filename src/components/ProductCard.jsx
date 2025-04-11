import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
  padding: 1rem;
  text-align: center;
  transition: transform 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 180px;
  object-fit: contain;
  margin-bottom: 1rem;
`;

const ProductName = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0.5rem 0;
`;

const ProductMeta = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  font-size: 0.9rem;
  color: #666;
`;

const ProductPrice = styled.div`
  margin-top: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
`;

const ProductCard = ({ product }) => {
  return (
    <Card>
      <ProductImage src={product.image} alt={product.name} />
      <ProductName>{product.name}</ProductName>
      <ProductMeta>
        <span>⭐ {product.rating}</span>
        <span>({product.reviews})</span>
      </ProductMeta>
      <ProductPrice>{product.price}₺</ProductPrice>
    </Card>
  );
};

export default ProductCard;
