
const products = [];

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  // store an arr of products and fetch it
  save() {
    products.push(this)
  }

  static fetchAll() {
    return products;
  }
}