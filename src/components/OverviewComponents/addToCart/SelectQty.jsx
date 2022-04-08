import React from 'react';
import './SelectQty.css';

function SelectQty({
  qty,
  changeState,
  purchaseQtys,
  selectedSize,
}) {
  return (
    <select
      value={qty}
      className="qty-input"
      name="quantity"
      onChange={changeState}
    >
      {(selectedSize !== 'SELECT SIZE'
        && purchaseQtys.map((quantity, idx) =>
          <option key={quantity} value={quantity}>
            {console.log(quantity)}
            {quantity}
          </option>
        ))
        || <option>-</option>
      }
    </select>
  );
}

export default SelectQty;