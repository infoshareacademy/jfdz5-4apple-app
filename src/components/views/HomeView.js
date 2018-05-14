import React from 'react'

import DataFetcher from "../DataFetcher/DataFetcher";
import Categories from "../Categories";
import SearchNavBar from "../SearchNavBar";
import HomeCarousel from '../HomeCarousel'

const HomeView = () => {
  return (
    <div>
      <div className={'helper-container'}> </div>
      <DataFetcher
        dataUrl={'/data/products.json'}
        component={SearchNavBar}
        propName="searchedProducts"
      />
      <div className={'app-container'}>
        <Categories/>
        <HomeCarousel/>
        <div> </div>
      </div>
    </div>
  )
}

export default HomeView

