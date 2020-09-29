import React, { Component } from "react";

class AddCartButton extends Component {
  constructor() {
    super();
    this.state = {
      count: 20,
      myCart: {},
    };
  }
  handleClick = () => {
    // alert("Item added to the shopping cart!");
    this.setState({
      count: this.state.count - 1,
      myCart: this.state.myCart,
    });
    this.props.addToCart();
    // console.log(this.state.myCart);
    // console.log(`The current state is ${this.state.count}!`);
  };

  render() {
    // console.log(this.state.myCart);
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
