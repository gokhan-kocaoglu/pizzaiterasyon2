import React from "react";
import styled from "styled-components";

const OptionGroup = styled.div`
  margin-bottom: 25px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
  text-align: left;

  .required {
    color: red;
  }
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: ${({ checked }) => (checked ? "#ffe9c9" : "#f9f6f3")};
  font-size: 1rem;
  color: #333;
  font-weight: 500;
  margin-top: 0.5rem;
  font-family: "Barlow";
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: ${({ checked }) =>
    checked ? "0 0 0 2px #ffc107" : "0 0 0 1px #ddd"};

  &:hover {
    box-shadow: 0 0 0 2px #ffc107;
  }

  input {
    display: none;
  }
`;

const SizeSelector = ({ label, name, options, selected, onChange }) => {
  return (
    <OptionGroup>
      <Label>
        {label}
        <span className="required"> *</span>
      </Label>
      <RadioGroup data-cy="data-size">
        {options.map((opt) => (
          <RadioLabel key={opt} checked={selected === opt}>
            <input
              type="radio"
              name={name}
              value={opt}
              checked={selected === opt}
              onChange={() => onChange(opt)}
            />
            {opt}
          </RadioLabel>
        ))}
      </RadioGroup>
    </OptionGroup>
  );
};

export default SizeSelector;
