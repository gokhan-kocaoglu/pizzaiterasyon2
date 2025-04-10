import React from "react";

const SizeSelector = ({ label, name, options, selected, onChange }) => (
  <div className="option-group">
    <label>
      {label}
      <span className="required"> *</span>
    </label>
    <div className="radio-group" data-cy="data-size">
      {options.map((opt) => (
        <label key={opt}>
          <input
            type="radio"
            name={name}
            value={opt}
            checked={selected === opt}
            onChange={() => onChange(opt)}
          />
          {opt}
        </label>
      ))}
    </div>
  </div>
);

export default SizeSelector;
