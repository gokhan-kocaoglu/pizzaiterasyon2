import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 25px;

  label {
    display: flex;
    margin-bottom: 8px;
    font-weight: 600;
    color: #1a1a1a;
    text-align: left;
    font-family: "Barlow", sans-serif;
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 3.5rem;
  padding: 12px;
  font-size: 14px;
  border: none;
  border-radius: 8px;
  background-color: #faf7f2;
  color: #333;
  resize: none;
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

const NoteInput = ({ label, value, onChange, placeholder }) => (
  <Wrapper data-cy="data-note">
    <label>{label}</label>
    <StyledTextarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </Wrapper>
);

export default NoteInput;
