import React, { Component } from "react";
import itemsPricesList from "./itemsPricesList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      clicked: 0,
      prices: itemsPricesList.results,
    };
  }

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
            <a href="#contact">CONTACT</a>
          </li>
          <li className="nav-cart">
            {/* MY CART */}
            <FontAwesomeIcon
              icon={faShoppingCart}
              size="2x"
              onClick={this.handleClick}
            />
            <p className="cart-items-counter">{this.props.countCartItems}</p>
            {this.state.clicked % 2 ? (
              <ul className="display-cart">
                {this.props.cart.map((item, index) => {
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
                      <p>{itemsPricesList[index].price}</p>
                    </li>
                  );
                })}
                {/* <li>TOTAL</li>
                <li>
                  <button>proceed to checkout</button>
                </li> */}
              </ul>
            ) : null}
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
