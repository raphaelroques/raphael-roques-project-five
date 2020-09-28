import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      clicked: 0,
      myCart: [],
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
          <li className="nav-cart" onClick={this.handleClick}>
            {/* MY CART */}
            <FontAwesomeIcon icon={faShoppingCart} size="2x" />
            {this.state.clicked % 2 ? (
              <ul className="display-cart">
                <li>MY CART</li>
                <li>
                  {this.props.cart.map(() => {
                    return <li></li>;
                  })}
                </li>
                <li>TOTAL</li>
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
