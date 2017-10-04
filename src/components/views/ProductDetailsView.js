import React from 'react'
import DataFetcher from "../DataFetcher/DataFetcher";
import SearchBar from "../SearchBar";
import ShopListDetails from "../ShopListDetails";
import Categories from '../Categories'

const ProductDetailsView = (props) => {
  const {productId} = props.match.params;
  return (
    <div className="">
      <DataFetcher
        dataUrl={'/data/products.json'}
        component={SearchBar}
        propName="searchedProducts"
      />
      <DataFetcher
        dataUrl={'/data/products.json'}
        component={Categories}
        propName="categoriesProducts"
      />
      <ShopListDetails item={productId}/>
    </div>)

}


export default ProductDetailsView

