const { db } = require('../config/firebase');
const products = require("./productList");

const addProducts = () => {
  
  products.forEach((prod) => {
    const { 
      name,
      imageUrl,
      description,
      price,
      stockCount } = prod;

    db.collection('products').add({
      name,
      imageUrl,
      description,
      price,
      stockCount
    }).then(() => {
      console.log(prod.name, ' added to DB.');
    }).catch((err) => {
      console.log(err);
    });
  })
}

addProducts();
