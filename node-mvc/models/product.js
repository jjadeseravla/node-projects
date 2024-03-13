const fs = require('fs');
const path = require('path');

// const p = path.join(path.dirname(require.main.filename), 'data', 'products.json');

// const getProductsFromFile = (aCallback) => {
//   fs.readFile(p, (err, fileContent) => {
//     if (err) {
//       return aCallback([]); // Return an empty array if file read fails
//     }
//     const products = JSON.parse(fileContent);
//     aCallback(products);
//   });
// }

// module.exports = class Product {
//   constructor(title) {
//     this.title = title;
//   }

//   // Store an array of products and fetch it
//   save() {
//     getProductsFromFile((products) => {
//       products.push(this); // Add the current product to the array
//       fs.writeFile(p, JSON.stringify(products), err => {
//         console.log(err);
//       });
//     });
//   }

//   static fetchAll(aCallback) {
//     getProductsFromFile(aCallback);
//   }
// }


const p = path.join(path.dirname(require.main.filename),
'data',
'products.json'
);

const getProductsFromFile = (aCallback) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      return aCallback([]) // dont return []
    }
    // aCallback(JSON.parse(fileContent));
    const products = JSON.parse(fileContent);
    aCallback(products);
  });
}
module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  // store an arr of products and fetch it
  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }

  static fetchAll(aCallback) { // aCallback refers to the anonymous fm passed into fetchAll in the controller/products.getShopProducts
    getProductsFromFile(aCallback);
  }
}