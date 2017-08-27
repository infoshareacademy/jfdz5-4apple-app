import React from 'react'

import products from '../../data/products.json'

const searchingName = "Apple";

export default (products.map(
  product => product.items
).reduce(
  (result, next) => result.concat(next),
  []
).filter(
  product => [product.brand, product.model, product.title, product.author].some(
    name => name && name.includes(searchingName)
  )
))


export default searchProducts