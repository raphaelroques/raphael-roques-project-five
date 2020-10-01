import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

// NavBar component
class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      clicked: 0,
    };
  }

  // create a function that will toogle the cart menu
  handleClick = () => {
    this.setState({
      clicked: this.state.clicked + 1,
    });
  };

  render() {
    return (
      <nav className="navbar wrapper">
        <ul>
          <li>
            <a className="nav-top" href="#contact">
              CONTACT
            </a>
          </li>
          <li className="nav-cart">
            <span class="sr-only">my cart</span>
            <FontAwesomeIcon
              className="nav-top"
              icon={faShoppingCart}
              size="2x"
              onClick={this.handleClick}
            />
            <p className="cart-items-counter">{this.props.countCartItems}</p>
            {this.state.clicked % 2 ? (
              <ul className="display-cart">
                {this.props.cart.map((item) => {
                  return (
                    <li key={item.key} className="cart-item-container">
                      <img src={item.urls.regular} alt="" />
                      <div className="name-and-button">
                        <h3>{item.alt_description}</h3>
                        <button
                          className="remove-item"
                          onClick={() => {
                            this.props.removeItem(item.key);
                          }}
                        >
                          REMOVE ITEM
                        </button>
                      </div>
                      <p>${item.price}</p>
                    </li>
                  );
                })}
                <li>
                  <div className="subtotal">
                    {/* display the subtotal */}
                    <p>SUBTOTAL</p>
                    <p>
                      $
                      {this.props.cart
                        .reduce((sum, item) => (sum += item.price * 1), 0)
                        .toFixed(2)}
                    </p>
                  </div>
                </li>

                <li>
                  <button>proceed to checkout</button>
                </li>
              </ul>
            ) : null}
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
