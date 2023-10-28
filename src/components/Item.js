import React, { useState } from "react";

function Item({ name, category }) {
  const [isAdd, addToCart] = useState(true)

  const cart = isAdd ? 'Add to Cart' : 'Remove from Cart'
  const itemClass = isAdd ? '' : 'in-cart'

  function handleClick(){
    addToCart(!isAdd)
  }

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{cart}</button>
    </li>
  );
}

export default Item;
