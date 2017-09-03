import React from 'react'
import DataFetcher from "../DataFetcher/DataFetcher";
import SearchBar from "../SearchBar";

const ProductDetailsView = () => (
  <div>
    <DataFetcher
      dataUrl={'http://localhost:3000/data/products.json'}
      component={SearchBar}
      propName="searchedProducts"
    />
    <h1>Product Details</h1>
  </div>
)


export default ProductDetailsView

