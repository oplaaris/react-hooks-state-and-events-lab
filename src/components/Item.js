import React, {useState} from "react";

function Item({ name, category }) {
  /* create a state variable and a setter function for keeping track of 
  the item’s cart status */
  const[inInCart,setIsInCart]=useState(false);
  // create a function to handle the click event on the button 
  function handleAddToCart(){
    // toggle the value of isInCart by calling setIsInCart with the opposite value
    setIsInCart(!isInCart);
  }
//use the isInCart variable to determine the className of the li element and the text of the button element
const liClass = isInCart?"in-cart": "";
const buttonText = isInCart? "Remove From Cart" : "Add to Cart";

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>{buttonText}</button>
    </li>
  );
}

export default Item;
