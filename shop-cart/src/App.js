import React, { Component } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductsContainer from "./containers/ProductsContainer";
import CartContainer from "./containers/CartContainer";
import MessageContainer from "./containers/MessageContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <main id="mainContainer">
          <div className="container">
            <Header />
            <ProductsContainer />
            <MessageContainer />
            <CartContainer />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
