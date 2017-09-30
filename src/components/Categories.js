import React from 'react'
import ListGroupItem from "react-bootstrap/es/ListGroupItem";
import ListGroup from "react-bootstrap/es/ListGroup";
import withRouter from "react-router-dom/es/withRouter";
import connect from "react-redux/es/connect/connect";
import '../components/Categories.css'
import {CategoriesResults, filterResults} from "../state/searching";

class Categories extends React.Component {
    state = {
        findProductsCategories: this.props.categoriesProducts
    };

    
    handleChange = (e) => {
        e.preventDefault();
        this.props.history.push('/results')
        this.props.addSearchedResults(this.state.findProductsCategories, e.target.value)
    };
    handleChoose = (e) => {
        e.preventDefault();
        this.props.history.push('/results')
        this.props.addCategoriesResults(this.state.findProductsCategories, e.target.value)
    }

    render() {

        const productsFromInput = this.props.filteredResults;
        const {initialState} = this.props;
        const initialCategories = this.props.categoriesProducts;
        const productsCategories = productsFromInput.map(products => products.brand === undefined ? products.author : products.brand)
        const deleteDuplication = (array) => {
            for (let i = 0; i < array.length; i++) {
                let start = i;
                for (let j = i + 1; j < array.length; j++) {
                    if (array[j] === array[start]) {
                        productsCategories.splice(start, 1)
                    }
                }
            }
        };

        deleteDuplication(productsCategories)

        return (
            <div className="categories">
                <ListGroup className="categories-list">
                    {
                        initialState === undefined && productsFromInput.toString() !== "" ?

                            productsCategories.map((products,index) => {
                                return (
                                    <ListGroupItem key={index} className="categories-list-item"
                                                   value={products}
                                                   onClick={this.handleChange}
                                    >{products}
                                    </ListGroupItem>
                                )
                            })
                            :
                            initialCategories.map((products, index) => {
                                return (

                                    <ListGroupItem key={index} className="categories-list-item"
                                                   value={products.category}
                                                   onClick={this.handleChoose}
                                    >{products.category}
                                    </ListGroupItem>

                                )
                            })
                    }
                </ListGroup>
            </div>

        )
    }
}



export default withRouter(
    connect(
        state => ({
            filteredResults: state.searching.filteredResults
        }),
        dispatch => ({
            addSearchedResults: (searchedProducts, searchedItem) => dispatch(filterResults(searchedProducts, searchedItem)),
            addCategoriesResults: (searchedProducts, searchedItem) => dispatch(CategoriesResults(searchedProducts, searchedItem))
        })
    )(Categories))