import { Link } from "react-router-dom";

import '../../styles/CartProduct.css';

const CartProduct = (props) => {
  return (
    <div className="cart-item">
      <div className="cart-item-img">
        <img src={props.imageUrl} />
      </div>
      <Link to={`/product/${props.id}`} className="cart-item-name">
        <p>{props.name}</p>
      </Link>
      <p className="cart-item-count">Items: {props.qty}</p>
      <p className="cart-item-price">AED {props.price}</p>
      <button
        className="cart-item-deleteBtn"
        onClick={() => props.removeHandler(props.id)}
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartProduct;