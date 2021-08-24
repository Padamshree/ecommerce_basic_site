import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "../../styles/SideDrawer.css";

const SideDrawer = (props) => {
  const sideDrawerClass = ["sidedrawer"];

  const cartList = useSelector((state) => state.cart);
  const { cart } = cartList;

  const cartCount = () => {
    return cart.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  if (props.toggle) {
    sideDrawerClass.push("show");
  }

  return (
    <div className={sideDrawerClass.join(" ")}>
      <ul className="sidedrawer-list" onClick={props.click}>
        <li>
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="cart-badge">
                {cartCount()}
              </span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideDrawer;
