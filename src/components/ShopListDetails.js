import React from 'react'
import {connect} from "react-redux";


class ShopListDetails extends React.Component {

    render() {
        const x = this.props.filteredResults;
        console.log(x)




        return <h1>{this.props.item}</h1>
    }
}





export default connect(
    state => ({
        filteredResults: state.searching.filteredResults
    }),
)(ShopListDetails)