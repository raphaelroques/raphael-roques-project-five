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
      available: 20,
    };
  }
  //make a function that will check is the user is logged in to start shopping
  handleClick = () => {
    this.setState({
      userIsLoggedIn: !this.state.userIsLoggedIn,
    });
  };
  //create a function that will run when elements are removed from the cart
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
      available: this.state.available + 1,
    });
  };
  //create a function that will run when items are added to the cart
  addToCart = (addToCartItem) => {
    const newItem = { ...addToCartItem };
    const newCart = [...this.state.cart];
    const itemsCount = this.state.countCartItems + 1;
    newItem.key = Math.random() * 1000;
    newCart.push(newItem);
    this.setState({
      cart: newCart,
      countCartItems: itemsCount,
      available: this.state.available - 1,
    });
  };

  render() {
    return (
      <div className="App">
        {/* import Header component */}
        <Header
          cart={this.state.cart}
          removeItem={this.removeItem}
          countCartItems={this.state.countCartItems}
        />

        {/* displays the landing page if the user is not logged in or else the store */}
        {this.state.userIsLoggedIn ? (
          <>
            {/* render the Main component */}
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

        {/* rehnder the Footer component */}
        <Footer />
      </div>
    );
  }
}

export default App;
