import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';

import { getProductDetails } from "../actions/productActions";
import { addToCart } from "../actions/cartActions";

import '../styles/ProductView.css';

const ProductView = () => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const { id } = useParams();

  const product = useSelector((state) => state.products);
  const { productDetails } = product;

  useEffect(() => {
      dispatch(getProductDetails(id));
  }, []);

  const addProdToCart = () => {
    dispatch(addToCart(productDetails, qty));
  };

  return (
    <div className="product-details">
      {productDetails.id !== id ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <div className="product-tab-left">
            <div className="tab-left-image">
              <img src={productDetails.imageUrl} alt={productDetails.name} />
            </div>
            <div className="tab-left-info">
              <p className="tab-left-name">{productDetails.name}</p>
              <p>Price: AED {productDetails.price}</p>
            </div>
          </div>
          <div className="product-tab-right">
            <div className="tab-right-info">
              <p>
                Price:
                <span>AED {productDetails.price}</span>
              </p>
              <p>
                Status:
                <span>
                  {productDetails.stockCount > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </p>
              <p>
                Qty
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(productDetails.stockCount).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <button type="button" onClick={addProdToCart} >
                  Add To Cart
                </button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductView;