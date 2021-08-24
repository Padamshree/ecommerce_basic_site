const { db } = require('../config/firebase');

const getProducts = (req, res) => {
  let products = []

  db.collection('products').get()
    .then(response => {
        response.docs.map(doc => {
            products.push({
                id: doc.id,
                ...doc.data(),
            })
        })
        res.status(200).json({
            success: true,
            products,
        });
    })
    .catch(err => {
      console.log(err);
      res.status(200).json({
          success: false,
          products: [],
      });
  })
};

const getProductById = (req, res) => {
  const url = new URL(`https://anyrandomwebsite.com/${req.originalUrl}`);
  const id = url.searchParams.get('id');

  db.collection('products').doc(id).get()
  .then(response => {
      const product = {
          id: response.id,
          ...response.data()
      }
      res.status(200).json({
          success: true,
          product,
      });
  })
  .catch(err => {
      console.log(err);
      res.status(200).json({
          success: false,
          product: {},
      });
  })

};

module.exports = {
  getProducts,
  getProductById,
};
