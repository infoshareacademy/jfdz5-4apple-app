import products from '../../data/products.json'

const searchingName = "Apple";
let searchResults = [];

products.map(function (product) {
  return product.items
}).map(function (productList) {
  productList.map(function (product) {
    (product.brand || product.model || product.title || product.author) === searchingName ?
      searchResults.push(product)
      : null
  })
});
export default searchResults

