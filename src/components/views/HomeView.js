import React from 'react'

import DataFetcher from "../DataFetcher/DataFetcher";
import Categories from "../Categories";
import SearchNavBar from "../SearchNavBar";

const HomeView = () => {
  return (
    <div>
      <div className={'helper-container'}> </div>
      <DataFetcher
        dataUrl={'/data/products.json'}
        component={SearchNavBar}
        propName="searchedProducts"
      />
      <Categories/>
      <div className={'app-container'}>
      </div>
    </div>
  )
}

export default HomeView

