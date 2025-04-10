import React from "react";

const QuantityControl = ({ quantity, setQuantity }) => {
  return (
    <div className="quantity">
      <button
        data-cy="data-btn-reduce"
        type="button"
        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
      >
        -
      </button>
      <span data-cy="data-piece">{quantity}</span>
      <button
        data-cy="data-btn-increase"
        type="button"
        onClick={() => setQuantity((q) => q + 1)}
      >
        +
      </button>
    </div>
  );
};

export default QuantityControl;
