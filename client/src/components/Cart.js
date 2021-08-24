import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import CartProduct from "./common/CartProduct";
import { removeFromCart } from "../actions/cartActions";

import '../styles/Cart.css';

const Cart = () => {
  const dispatch = useDispatch();

  const cartList = useSelector((state) => state.cart);
  const { cart } = cartList;

  const removeItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const cartCount = () => {
    return cart.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const cartSubTotal = () => {
    return cart
      .reduce((price, item) => Number(price + item.price) * Number(item.qty), 0)
      .toFixed(2);
  };

  return (
    <>
      <div className="cart-main">
        <div className="cart-left">
          <h2>Shopping Cart</h2>

          {cart.length === 0 ? (
            <div>
              Well, this is embarrassing. <Link to="/">Buy A Car.</Link>
            </div>
          ) : (
            cart.map((item) => (
              <CartProduct
                {...item}
                key={item.product}
                removeHandler={removeItem}
              />
            ))
          )}
        </div>

        <div className="cart-right">
          <div className="cart-info">
            <p>Subtotal ({cartCount()}) items</p>
            <p>AED {cartSubTotal()}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;