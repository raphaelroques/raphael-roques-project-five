import React, { Component } from "react";
import axios from "axios";
import Item from "./Item.js";

// Main Component
class Main extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
    };
  }

  // making a Get request with axios to get datas from the unsplash API
  componentDidMount() {
    const apiKey = "arDW3ugxF65qos5neWg3z7FAkKs7g1f4HjgSwRae8ZM";
    axios({
      method: "GET",
      url: "https://api.unsplash.com/search/photos",
      dataResponse: "json",
      params: {
        client_id: apiKey,
        format: "json",
        query: "running shoes",
        per_page: 20,
      },
    }).then((res) => {
      const storeItems = res.data.results;
      // add random prices between 60 and 100 to each objects in the storeItems array
      storeItems.forEach((items) => {
        items.price = (
          Math.round((Math.random() * (100 - 60) + 60) * 100) / 100
        ).toFixed(2);
      });
      // storeItems.forEach((items) => {
      //   items.availability = Math.floor(
      //     ((Math.random() * (5 - 30) + 30) * 100) / 100
      //   );
      // });
      this.setState({
        items: storeItems,
      });
    });
  }

  render() {
    return (
      <main className="Main wrapper">
        {this.state.items.map((item, index) => {
          return (
            <>
              {/* render the index component*/}
              <Item
                key={item.id}
                id={item.id}
                url={item.urls.regular}
                title={item.alt_description}
                price={item.price}
                // availability={item.availability}
                addToCart={() => {
                  this.props.addToCart(item);
                }}
              />
            </>
          );
        })}
      </main>
    );
  }
}

export default Main;
