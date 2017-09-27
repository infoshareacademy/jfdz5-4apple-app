import React from 'react'
import {connect} from "react-redux";


class ShopListDetails extends React.Component {

    render() {
        const ProductList = this.props.filteredResults;
        const {itemId} = this.props
        const Shops= ProductList.map(product => product.shops)
            .find(product => product.id === itemId)

        console.log(Shops)

        return <h1>{itemId}</h1>


    }
}


export default connect(
    state => ({
        filteredResults: state.searching.filteredResults
    }),
)(ShopListDetails)