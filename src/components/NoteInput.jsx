import React from "react";

const NoteInput = ({ label, value, onChange, placeholder }) => (
  <div className="option-group" data-cy="data-note">
    <label>{label}</label>
    <textarea value={value} onChange={onChange} placeholder={placeholder} />
  </div>
);

export default NoteInput;
