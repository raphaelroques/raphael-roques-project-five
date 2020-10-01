import React, { Component } from "react";

class AddCartButton extends Component {
  constructor() {
    super();
    this.state = {
      count: 20,
    };
  }
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
