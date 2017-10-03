import React from 'react'

import FavsProducts from '../FavsProducts'
import DataFetcher from "../DataFetcher/DataFetcher";
import SearchBar from "../SearchBar";


const FavsProductsView = () => {
  return (
    <div>
      <DataFetcher
        dataUrl={'../../../public/data/products.json'}
        component={SearchBar}
        propName="searchedProducts"
      />
      <FavsProducts/>
    </div>)
}

export default FavsProductsView