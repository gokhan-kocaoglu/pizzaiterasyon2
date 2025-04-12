import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 25px;
`;

const Label = styled.label`
  display: flex;
  font-weight: 600;
  margin-bottom: 8px;
  text-align: left;
  font-family: "Barlow", sans-serif;
  color: #1a1a1a;

  .required {
    color: red;
    margin-left: 0.25rem;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: none;
  border-radius: 8px;
  background-color: #faf7f2;
  box-sizing: border-box;
  font-family: "Barlow", sans-serif;

  &::placeholder {
    color: #666;
  }

  &:focus {
    outline: none;
    border: 2px solid #ffc107;
    background-color: #fff8e1;
  }
`;

const Error = styled.p`
  color: red;
  font-size: 13px;
  margin-top: 5px;
  text-align: left;
`;

const NameInput = ({ label, value, onChange, error }) => (
  <Wrapper data-cy="data-name">
    <Label>
      {label}
      <span className="required">*</span>
    </Label>
    <StyledInput
      data-cy="data-name-input"
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Adınızı giriniz"
    />
    {error && <Error>{error}</Error>}
  </Wrapper>
);

export default NameInput;
