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
              dataUrl={'../../../public/data/products.json'}
                component={SearchBar}
                propName="searchedProducts"
            />
            <ShopListDetails item={productId}/>
            <DataFetcher
              dataUrl={'../../../public/data/products.json'}
                component={Categories}
                propName="categoriesProducts"
            />
        </div>)

}


export default ProductDetailsView

