import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Product from "../components/common/Product";
import { getProductList } from "../actions/productActions";

import "../styles/Main.css";

const Home = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.products);
  const { products, loading } = getProducts;

  useEffect(() => {
    dispatch(getProductList());
  }, []);

  return (
    <div className="home">
      <h2 className="home-title">Vintage Cars</h2>
      <div className="products">
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          products.map((product) => (
            <Product
              key={product.id}
              {...product}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
