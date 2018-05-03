import React from 'react'
import DataFetcher from "../DataFetcher/DataFetcher";
import SearchNavBar from "../SearchNavBar";
import ShopListDetails from "../ShopListDetails";
import Categories from '../Categories'

const ProductDetailsView = (props) => {
  const {productId} = props.match.params;
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
        <div className={'content-container'}>
          <ShopListDetails item={productId}/>
        </div>
        <div> </div>
      </div>
    </div>
  )
};


export default ProductDetailsView

