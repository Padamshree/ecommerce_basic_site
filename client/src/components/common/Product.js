import { Link } from "react-router-dom";

import "../../styles/Product.css";

const Product = (props) => {
  
  return (
    <div className="product">
      <img src={props.imageUrl} alt={props.name} />

      <div className="product-info">
        <p className="product-name">{props.name}</p>

        <p className="product-price">AED {props.price}</p>

        <Link to={`/product/${props.id}`} className="product-button">
          View
        </Link>
      </div>
    </div>
  );
};

export default Product;