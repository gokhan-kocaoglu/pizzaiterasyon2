import React from "react";

const SubmitButton = ({ disabled }) => {
  return (
    <button
      data-cy="data-submit"
      type="submit"
      className="order-sbutton"
      disabled={disabled}
    >
      SİPARİŞ VER
    </button>
  );
};

export default SubmitButton;
