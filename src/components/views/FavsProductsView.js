import React from 'react'

import FavsProducts from '../FavsProducts'
import DataFetcher from "../DataFetcher/DataFetcher";
import SearchNavBar from "../SearchNavBar";


const FavsProductsView = () => {
  return (
    <div>
      <DataFetcher
        dataUrl={'/data/products.json'}
        component={SearchNavBar}
        propName="searchedProducts"
      />
      <FavsProducts/>
    </div>
  )
}

export default FavsProductsView