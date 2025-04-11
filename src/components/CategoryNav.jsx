import React from "react";
import styled from "styled-components";
import categories from "../data/categories";

const CategoryWrapper = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: space-evenly;
    padding: 1rem;
  }
`;

const CategoryItem = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 1rem;
  padding: 1rem;
  min-width: max-content;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    width: calc(40% - 1rem);
    margin: 0rem 0rem;
  }
`;

const CategoryIcon = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 0.5rem;
`;

const CategoryLabel = styled.span`
  font-size: 1rem;
  font-weight: 500px;
  color: #333;
  white-space: nowrap;
`;

const CategoryNav = () => {
  return (
    <CategoryWrapper>
      {categories.map((cat) => (
        <CategoryItem key={cat.id}>
          <CategoryIcon src={cat.image} alt={cat.name} />
          <CategoryLabel>{cat.name}</CategoryLabel>
        </CategoryItem>
      ))}
    </CategoryWrapper>
  );
};

export default CategoryNav;
