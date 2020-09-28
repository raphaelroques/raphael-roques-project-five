import React from "react";

const ItemPrice = (props) => {
  return (
    <div className={props.id}>
      <p>price{props.price}</p>
    </div>
  );
};

export default ItemPrice;
