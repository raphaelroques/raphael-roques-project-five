import React, { Component } from "react";

// addCartButton component
class AddCartButton extends Component {
  constructor() {
    super();
    this.state = {
      count: 20,
    };
  }
  // create a function that will manage the availability of each element added to the cart
  handleClick = () => {
    this.setState({
      count: this.state.count - 1,
    });
    this.props.addToCart();
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
