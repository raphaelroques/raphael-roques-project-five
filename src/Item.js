import React from "react";
import AddCartButton from "./AddCartButton.js";

// Item function component
const Item = (props) => {
  return (
    <div className={`item-container ${props.id}`} key={props.id}>
      <img src={props.url} alt="" />
      <h2>{props.title}</h2>
      <p>Price: ${props.price}</p>
      {/* <p>Availability {props.availability}</p> */}

      {/* import AddCartButton component */}
      <AddCartButton addToCart={props.addToCart} />
    </div>
  );
};

export default Item;
