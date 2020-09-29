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
    };
  }
  handleClick = () => {
    this.setState({
      userIsLoggedIn: !this.state.userIsLoggedIn,
    });
  };

  addToCart = (addToCartItem) => {
    const newCart = [...this.state.cart];
    newCart.push(addToCartItem);
    // console.log(addToCartItem);

    this.setState({
      cart: newCart,
    });
  };

  render() {
    return (
      <div className="App">
        <Header cart={this.state.cart} />

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
