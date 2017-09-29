import React from 'react'
import {connect} from "react-redux";
import ShopList from "./ShopList";
import NoItemFound from "./NoItemFound";


class ShopListDetails extends React.Component {

    render() {

        const ProductList = this.props.filteredResults;
        const item = parseInt(this.props.item);
        const Shops = ProductList.filter(product => [product.id]
            .some(id => id === item))
            .map(product => product.shops)
            .reduce((result, next) => result.concat(next), [])

        console.log(Shops)

        return (
            <div className="container products--container">
                {Shops === undefined ? <NoItemFound/> :
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