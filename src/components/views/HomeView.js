import React from 'react'

import DataFetcher from "../DataFetcher/DataFetcher";
import Categories from "../Categories";
import SearchNavBar from "../SearchNavBar";

const HomeView = () => {
  return (
    <div>
      <DataFetcher
        dataUrl={'/data/products.json'}
        component={SearchNavBar}
        propName="searchedProducts"
      />
        <Categories/>
    </div>
  )
}

export default HomeView

