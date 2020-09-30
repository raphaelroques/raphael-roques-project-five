import React, { Component } from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userIsLoggedIn: false,
      cart: [],
      countCartItems: 0,
    };
  }
  handleClick = () => {
    this.setState({
      userIsLoggedIn: !this.state.userIsLoggedIn,
    });
  };

  removeItem = (keyToBeRemoved) => {
    const oldCart = [...this.state.cart];
    const itemsCount = this.state.countCartItems - 1;
    const cartIndex = this.state.cart.findIndex((item) => {
      return item.key === keyToBeRemoved;
    });
    oldCart.splice(cartIndex, 1);
    this.setState({
      cart: oldCart,
      countCartItems: itemsCount,
    });
  };

  addToCart = (addToCartItem) => {
    const newItem = { ...addToCartItem };
    const newCart = [...this.state.cart];
    const itemsCount = this.state.countCartItems + 1;
    // console.log("addtocartitem", addToCartItem);
    newItem.key = Math.random() * 1000;

    newCart.push(newItem);
    this.setState({
      cart: newCart,
      countCartItems: itemsCount,
    });
  };

  render() {
    console.log(this.state.countCartItems);
    return (
      <div className="App">
        <Header
          cart={this.state.cart}
          removeItem={this.removeItem}
          countCartItems={this.state.countCartItems}
        />

        {this.state.userIsLoggedIn ? (
          <>
            <Main
              addToCart={(item) => {
                this.addToCart(item);
              }}
            />
          </>
        ) : (
          <main className="landing-page">
            <div className="landing-page-container">
              <h2>
                WELCOME TO <span>Run</span>ning.ca
              </h2>
              <button onClick={this.handleClick}>START SHOPPING</button>
            </div>
          </main>
        )}

        <Footer />
      </div>
    );
  }
}

export default App;
