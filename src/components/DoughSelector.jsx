import React from "react";
import styled from "styled-components";

const OptionGroup = styled.div`
  margin-bottom: 25px;
`;

const Label = styled.label`
  display: flex;
  margin-bottom: 8px;
  font-weight: bold;
  text-align: left;

  .required {
    color: red;
    margin-left: 0.25rem;
  }
`;

const StyledSelect = styled.select`
  width: 100%;
  height: 56px;
  padding: 12px 14px;
  font-size: 14px;
  border: 1px solid #eee;
  border-radius: 6px;
  background-color: #f9f6f3;
  font-family: "Barlow", sans-serif;
  color: #333;
  appearance: none;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAnIGhlaWdodD0nNycgdmlld0JveD0nMCAwIDEwIDcnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZD0nTTEgMUw1IDVMOSAxJyBzdHJva2U9JyMzMzMnIHN0cm9rZS13aWR0aD0nMicvPjwvc3ZnPg==");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 10px 7px;
  transition: border 0.2s ease;
  margin-top: 0.5rem;

  &:focus {
    outline: none;
    border-color: #ffc107;
    box-shadow: 0 0 0 3px rgba(255, 193, 7, 0.2);
  }

  option {
    background: white;
    color: #333;
  }
`;

const DoughSelector = ({ label, value, onChange, options }) => (
  <OptionGroup data-cy="data-dough">
    <Label>
      {label}
      <span className="required">*</span>
    </Label>
    <StyledSelect onChange={onChange} value={value}>
      <option value="" disabled>
        — {label} —
      </option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </StyledSelect>
  </OptionGroup>
);

export default DoughSelector;
