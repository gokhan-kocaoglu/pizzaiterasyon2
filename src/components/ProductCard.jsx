import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
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

  @media (max-width: 768px) {
    width: 100%;
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
  color: black;
  text-align: left;
`;

const ProductFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 0.5rem;
`;

const ProductMeta = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 0.9rem;
  color: #666;
  width: calc(100% - 60px);
`;

const ProductPrice = styled.div`
  font-weight: 600;
  font-size: 1rem;
  color: black;
  text-align: left;
`;

const ProductCard = ({ product }) => {
  const history = useHistory();

  const handleOrderClick = () => {
    history.push("/siparis");
  };
  return (
    <Card onClick={handleOrderClick}>
      <ProductImage src={product.image} alt={product.name} />
      <ProductName>{product.name}</ProductName>
      <ProductFooter>
        <ProductMeta>
          <span>⭐ {product.rating}</span>
          <span>({product.reviews})</span>
        </ProductMeta>
        <ProductPrice>{product.price}₺</ProductPrice>
      </ProductFooter>
    </Card>
  );
};

export default ProductCard;
