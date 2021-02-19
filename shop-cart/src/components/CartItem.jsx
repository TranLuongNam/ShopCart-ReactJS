import React, { Component } from "react";
import {
  MSG_DELETE_PRODUCT_IN_CART,
  MSG_UPDATE_CART,
} from "../constants/Message";

class CartItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <tr>
        <th scope="row">
          <img
            src={item.product.image}
            alt="logo"
            className="img-fluid z-depth-0"
          />
        </th>
        <td>
          <h5>
            <strong>{item.product.name}</strong>
          </h5>
        </td>
        <td>{item.product.price}$</td>
        <td className="center-on-small-only">
          <span className="qty">{item.quantity}</span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label
              onClick={() =>
                this.onUpdateQuantity(item.product, item.quantity - 1)
              }
              className="btn btn-sm btn-primary
                      btn-rounded waves-effect waves-light"
            >
              <a href="/#">—</a>
            </label>
            <label
              onClick={() =>
                this.onUpdateQuantity(item.product, item.quantity + 1)
              }
              className="btn btn-sm btn-primary
                      btn-rounded waves-effect waves-light"
            >
              <a href="/#">+</a>
            </label>
          </div>
        </td>
        <td>{item.product.price * item.quantity}$</td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-primary waves-effect waves-light"
            data-toggle="tooltip"
            data-placement="top"
            data-original-title="Remove item"
            onClick={() => this.onDeleteProductInCart(item.product)}
          >
            X
          </button>
        </td>
      </tr>
    );
  }
  onDeleteProductInCart = (product) => {
    // console.log(product);
    const { onDeleteProductInCart, onChangeMessage } = this.props;
    onDeleteProductInCart(product);
    onChangeMessage(MSG_DELETE_PRODUCT_IN_CART);
  };
  onUpdateQuantity = (product, quantity) => {
    // console.log(product, quantity);
    if (quantity > 0) {
      const { onChangeMessage, onUpdateQuantity } = this.props;
      onUpdateQuantity(product, quantity);
      onChangeMessage(MSG_UPDATE_CART);
    }
  };
}
export default CartItem;
