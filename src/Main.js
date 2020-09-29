import React, { Component } from "react";
import axios from "axios";
import Item from "./Item.js";
import itemsPricesList from "./itemsPricesList";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      prices: itemsPricesList.results,
    };
  }
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
            <Item
              key={item.id}
              id={item.id}
              url={item.urls.regular}
              title={item.alt_description}
              price={itemsPricesList[index].price}
              addToCart={() => {
                this.props.addToCart(item);
              }}
            />
          );
        })}
      </main>
    );
  }
}

export default Main;
