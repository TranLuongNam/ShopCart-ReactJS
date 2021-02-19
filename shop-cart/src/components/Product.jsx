import React, { Component } from "react";
import "../constants/Message";
import { MSG_ADD_CART_DONE } from "../constants/Message";

class Product extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="col-lg-4 col-md-6 mb-r">
        <div className="card text-center card-cascade narrower">
          <div className="view overlay hm-white-slight z-depth-1">
            <img src={product.image} className="img-fluid" alt={product.name} />
            <a href="/#">
              <div className="mask waves-light waves-effect waves-light" />
            </a>
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <strong>
                <a href="/#">{product.name}</a>
              </strong>
            </h4>
            <ul className="rating">
              <li>{this.showRaiting(product.raiting)}</li>
            </ul>
            <p className="card-text">{product.description}</p>
            <div className="card-footer">
              <span className="left">15$</span>
              <span className="right">
                <a
                  href="/#"
                  className="btn-floating blue-gradient"
                  data-toggle="tooltip"
                  data-placement="top"
                  data-original-title="Add to Cart"
                  onClick={() => this.onAddToCart(product)}
                >
                  <i className="fa fa-shopping-cart" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  showRaiting = (raiting) => {
    const result = [];
    for (var i = 1; i <= raiting; i++) {
      result.push(<i key={i} className="fa fa-star"></i>);
    }
    for (var j = 1; j <= 5 - raiting; j++) {
      result.push(<i key={i + j} className="fa fa-star-o"></i>);
    }
    return result;
  };
  onAddToCart = (product) => {
    this.props.onAddToCart(product);
    this.props.onChangeMessage(MSG_ADD_CART_DONE);
  };
}

export default Product;
