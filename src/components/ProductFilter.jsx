import React from "react";
import styled from "styled-components";

const FilterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: none;
  background-color: ${({ active }) => (active ? "#1c1c1c" : "#f3f3f3")};
  color: ${({ active }) => (active ? "white" : "#333")};
  font-weight: 500;
  padding: 0.6rem 1rem;
  border-radius: 50px;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ active }) => (active ? "#1c1c1c" : "#ddd")};
  }

  img {
    width: 20px;
    height: 20px;
  }
`;

const ProductFilter = ({ categories, selected, onSelect }) => {
  return (
    <FilterWrapper>
      {categories.map((cat) => (
        <FilterButton
          data-cy="product-card"
          key={cat.id}
          active={selected === cat.id}
          onClick={() => onSelect(cat.id)}
        >
          <img src={cat.image} alt={cat.name} />
          {cat.name}
        </FilterButton>
      ))}
    </FilterWrapper>
  );
};

export default ProductFilter;
