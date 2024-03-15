const db = require('../util/database');

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    db.execute('INSERT INTO products (title, price, imageUrl, description) VALUES (?, ?, ?, ?)',
      [this.title, this.price, this.imageUrl, this.description]
    );
  }

  static fetchAll() {
    return db.execute('SELECT * FROM products');
  }

  static findById(id) {
    return db.execute('SELECT * FROM products WHERE products.id = ?', [id]);
  }
}

// const fs = require('fs');
// const path = require('path');
// const Cart = require('./cart');

// const p = path.join(path.dirname(require.main.filename),
// 'data',
// 'products.json'
// );

// // const getProductsFromFile = (aCallback) => {
// //   fs.readFile(p, (err, fileContent) => {
// //     if (err) {
// //       return aCallback([]) // dont return []
// //     }
// //     // aCallback(JSON.parse(fileContent));
// //     const products = JSON.parse(fileContent);
// //     aCallback(products);
// //   });
// // }
// const getProductsFromFile = (aCallback) => {
//   fs.readFile(p, (err, fileContent) => {
//     if (err) {
//       return aCallback([]); // Return an empty array if there's an error reading the file
//     }

//     // Check if fileContent is empty
//     if (!fileContent || fileContent.length === 0) {
//       return aCallback([]); // Return an empty array if the file content is empty
//     }

//     try {
//       const products = JSON.parse(fileContent);
//       aCallback(products);
//     } catch (error) {
//       console.error('Error parsing JSON:', error);
//       return aCallback([]); // Return an empty array if there's an error parsing JSON
//     }
//   });
// };
// module.exports = class Product {
//   constructor(id, title, imageUrl, description, price) {
//     this.id = id;
//     this.title = title;
//     this.imageUrl = imageUrl;
//     this.description = description;
//     this.price = price;
//   }

//   // store an arr of products and fetch it
//   save() {
//     getProductsFromFile(products => {
//       if (this.id) {
//         const existingProductIndex = products.findIndex(prod => prod.id === this.id);
//         const updatedProducts = [...products];
//         updatedProducts[existingProductIndex] = this;
//         fs.writeFile(p, JSON.stringify(updatedProducts), err => {
//           console.log(err);
//         });
//       } else {
//         this.id = Math.random().toString();
//         products.push(this); // Push the new product to the array
//         fs.writeFile(p, JSON.stringify(products), err => {
//           console.log(err);
//         });
//       }
//     });
//   }

//   static deleteById(id) {
//     getProductsFromFile((products) => {
//       const product = products.find(prod => prod.id === id);
//       const updatedProducts = JSON.stringify((updatedProducts, product.price), err) => {
//         if (!err) {
//           Cart.deleteProduct(id)
//         }
//       }
//     })
//   }
  

//   static fetchAll(aCallback) { // aCallback refers to the anonymous fm passed into fetchAll in the controller/products.getShopProducts
//     getProductsFromFile(aCallback);
//   }

//   static findById(id, aCallback) {
//     getProductsFromFile(products => {
//       const product = products.find(thisProd => thisProd.id === id);
//       aCallback(product);
//     })
//   }
// }