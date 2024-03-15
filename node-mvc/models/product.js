const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(require.main.filename),
'data',
'products.json'
);

// const getProductsFromFile = (aCallback) => {
//   fs.readFile(p, (err, fileContent) => {
//     if (err) {
//       return aCallback([]) // dont return []
//     }
//     // aCallback(JSON.parse(fileContent));
//     const products = JSON.parse(fileContent);
//     aCallback(products);
//   });
// }
const getProductsFromFile = (aCallback) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      return aCallback([]); // Return an empty array if there's an error reading the file
    }

    // Check if fileContent is empty
    if (!fileContent || fileContent.length === 0) {
      return aCallback([]); // Return an empty array if the file content is empty
    }

    try {
      const products = JSON.parse(fileContent);
      aCallback(products);
    } catch (error) {
      console.error('Error parsing JSON:', error);
      return aCallback([]); // Return an empty array if there's an error parsing JSON
    }
  });
};
module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  // store an arr of products and fetch it
  save() {
    this.id = Math.random().toString();
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