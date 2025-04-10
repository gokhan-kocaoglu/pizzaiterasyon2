import React from "react";

const NameInput = ({ label, value, onChange, error }) => (
  <div className="option-group" data-cy="data-name">
    <label>
      {label}
      <span className="required"> *</span>
    </label>
    <input
      data-cy="data-name-input"
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Adınızı giriniz"
    />
    {error && <p className="error">{error}</p>}
  </div>
);

export default NameInput;
