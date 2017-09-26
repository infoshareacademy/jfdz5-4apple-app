import React from 'react'
import DataFetcher from "../DataFetcher/DataFetcher";
import SearchBar from "../SearchBar";
import ShopListDetails from "../ShopListDetails";

//console.log(this.props.params.productId)
const ProductDetailsView = (props) => {
    const productId = props.match.params.productId;
    console.log(productId)
return (
    <div>
        <DataFetcher
            dataUrl={'http://localhost:3000/data/products.json'}
            component={SearchBar}
            propName="searchedProducts"
        />
        <ShopListDetails item={productId}/>
    </div>)

}



export default ProductDetailsView

