import React from 'react'
import {connect} from "react-redux";
import ShopList from "./ShopList";
import NoItemFound from "./NoItemFound";


class ShopListDetails extends React.Component {

    render() {
        const ProductList = this.props.filteredResults;
        const {itemId} = this.props
        const Shops= ProductList.map(product => product.shops)
            .find(product => product.id === itemId)
    console.log(Shops)
        return (
            <div className="container products--container">
            {Shops === undefined ?  <NoItemFound/> :
            <ShopList shops={Shops}/>}
            </div>
        )


    }
}


export default connect(
    state => ({
        filteredResults: state.searching.filteredResults
    }),
)(ShopListDetails)