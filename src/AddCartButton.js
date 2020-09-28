import React, { Component } from "react";
import Main from "./Main.js";

class AddCartButton extends Component {
  constructor() {
    super();
    this.state = {
      count: 20,
      myCart: {},
    };
    // this.handleClick = this.handleClick.bind(this);
  }
  handleClick = () => {
    // alert("Item added to the shopping cart!");
    this.setState({
      count: this.state.count - 1,
      myCart: this.state.myCart,
    });
    console.log(this.state.myCart);
    // console.log(`The current state is ${this.state.count}!`);
  };

  render() {
    return (
      <>
        <p>Qty Available: {this.state.count} </p>
        <button className="buy-now-button" onClick={this.handleClick}>
          Add to cart
        </button>
      </>
    );
  }
}

export default AddCartButton;
