import React from "react";
import styled from "styled-components";

const OptionGroup = styled.div`
  margin-bottom: 25px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 1rem;
  display: block;
  text-align: left;
`;

const InfoText = styled.p`
  font-size: 13px;
  color: #888;
  margin: 1rem 0 1rem 0;
  text-align: left;
`;

const CheckboxGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0;
  padding: 0;
`;

const CheckboxItem = styled.label`
  flex: 0 1 calc(33.33% - 10px);
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-family: "Barlow", sans-serif;
  font-weight: 500;
  cursor: pointer;
  user-select: none;
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    flex: 0 1 calc(50% - 10px);
  }
`;

const CustomCheckbox = styled.span`
  width: 45px;
  height: 45px;
  border-radius: 6px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: "Barlow", sans-serif;
  background-color: ${(props) => (props.checked ? "#ffc107" : "#faf7f2")};
  border: 2px solid ${(props) => (props.checked ? "#ffc107" : "#eee")};
  transition: background-color 0.2s ease;

  &::before {
    content: "${(props) => (props.checked ? "✔" : "")}";
    font-size: 16px;
    color: black;
  }
`;

const HiddenCheckbox = styled.input`
  display: none;
`;

const IngredientsSelector = ({
  label,
  items,
  selectedItems,
  onChange,
  max,
}) => (
  <OptionGroup data-cy="data-Ingredients">
    <Label>{label}</Label>
    <InfoText>En fazla {max} malzeme seçebilirsiniz. 5₺</InfoText>
    <CheckboxGrid>
      {items.map((item) => {
        const isChecked = selectedItems.includes(item);
        const isDisabled = !isChecked && selectedItems.length >= max;

        return (
          <CheckboxItem key={item} data-cy="data-label-check">
            <HiddenCheckbox
              type="checkbox"
              value={item}
              onChange={() => onChange(item)}
              checked={isChecked}
              disabled={isDisabled}
            />
            <CustomCheckbox checked={isChecked} />
            {item}
          </CheckboxItem>
        );
      })}
    </CheckboxGrid>
  </OptionGroup>
);

export default IngredientsSelector;
