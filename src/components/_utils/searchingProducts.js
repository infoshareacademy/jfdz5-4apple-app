import React from 'react'

import products from '../../data/products.json'

const searchingName = "Nike"

function searchProducts() {
    let searchResults = [];
    products.map(function (product) {
        return product.items
    }).map(function (productList) {
        productList.map(function (product) {
            (product.brand || product.model || product.title || product.author) === searchingName ? searchResults.push(product) : null
        })
    });
    return searchResults
}


export default searchProducts