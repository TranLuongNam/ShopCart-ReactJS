import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Cart from "../components/Cart";
import { MSG_CART_EMPTY } from "../constants/Message";
import CartItem from "../components/CartItem";
import CartResult from "../components/CartResult";
import {
  actChangeMessage,
  actDeleteProductCart,
  actUpdateQuantity,
} from "../actions";

class CartContainer extends Component {
  render() {
    const { cart } = this.props;
    return (
      <Cart>
        {this.showCartItem(cart)}
        {this.showTotalAmount(cart)}
      </Cart>
    );
  }
  showCartItem = (cart) => {
    const {
      onDeleteProductInCart,
      onChangeMessage,
      onUpdateQuantity,
    } = this.props;
    let result = MSG_CART_EMPTY;
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return (
          <CartItem
            item={item}
            key={index}
            onDeleteProductInCart={onDeleteProductInCart}
            onChangeMessage={onChangeMessage}
            onUpdateQuantity={onUpdateQuantity}
          />
        );
      });
    }

    return result;
  };
  showTotalAmount = (cart) => {
    let result = null;
    if (cart.length > 0) {
      result = <CartResult cart={cart} />;
    }
    return result;
  };
}

CartContainer.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired,
        raiting: PropTypes.number.isRequired,
      }).isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  onDeleteProductInCart: PropTypes.func.isRequired,
  onChangeMessage: PropTypes.func.isRequired,
  onUpdateQuantity: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteProductInCart: (product) => {
      dispatch(actDeleteProductCart(product));
    },
    onChangeMessage: (message) => {
      dispatch(actChangeMessage(message));
    },
    onUpdateQuantity: (product, quantity) => {
      dispatch(actUpdateQuantity(product, quantity));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
