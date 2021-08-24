import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "../../styles/Navbar.css";

const Navbar = (props) => {

  const cartList = useSelector((state) => state.cart);
  const { cart } = cartList;

  const cartCount = () => {
    return cart.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  return (
    <nav className="navbar">
      <div className="navbar-header">
      <Link to="/"><h2>The Car Shop</h2></Link>
      </div>
      <ul className="navbar-list">
        <li>
          <Link to="/cart" className="cart">
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

      <div className="hamburger-icon" onClick={props.click}>
        <div className="hamburger-drawer"></div>
        <div className="hamburger-drawer"></div>
        <div className="hamburger-drawer"></div>
      </div>
    </nav>
  );
};

export default Navbar;