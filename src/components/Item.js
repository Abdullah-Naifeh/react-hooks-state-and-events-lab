import React,{useState} from "react";

function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState('');

  const addToCart = () => {
    if(isInCart === ""){
      setIsInCart("in-cart");
    }else if (isInCart === "in-cart"){
      setIsInCart("");
    }
  };
  return (
    <li className={isInCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addToCart} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
