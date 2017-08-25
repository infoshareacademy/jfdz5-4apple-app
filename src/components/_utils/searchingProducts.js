import React from 'react'

import products from '../../data/products.json'

const searchingName = "Nike"
let searchResults = [];

products.map(function (product) {
    return product.items
}).map(function (productList) {
    productList.map(function (product) {
        product.brand === searchingName ? searchResults.push(product) : null
        product.model === searchingName ? searchResults.push(product) : null
        product.title === searchingName ? searchResults.push(product) : null
        product.author === searchingName ? searchResults.push(product) : null
    })
});

