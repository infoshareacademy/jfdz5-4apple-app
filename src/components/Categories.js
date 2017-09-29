import React from 'react'
import ListGroupItem from "react-bootstrap/es/ListGroupItem";
import ListGroup from "react-bootstrap/es/ListGroup";
import withRouter from "react-router-dom/es/withRouter";
import connect from "react-redux/es/connect/connect";
import '../components/Categories.css'

class Categories extends React.Component {
    state = {
        chooseCategories: ''

    };

    handleChange = (e) => {
        const name = e.target.value;
        this.setState({chooseCategories: name})
    };

    render() {
        const productsFromInput = this.props.filteredResults;
        // console.log(this.state.chooseCategories);
        const {initialState} = this.props;
        const initialCategories = this.props.categoriesProducts;


        // console.log(productsFromInput)


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
        console.log(productsCategories)


        return (



            <div className="categories">
                <ListGroup className="categories-list">
                    {
                        initialState === undefined ?

                            productsFromInput.map((products,index) => {
                                return (
                                    <ListGroupItem key={index} className="categories-list-item"
                                                   value={products.author === undefined ?
                                                       products.brand : products.author}
                                                   onClick={this.handleChange}
                                    >{products.author === undefined ?
                                        products.brand : products.author}
                                    </ListGroupItem>
                                )
                            })
                            :
                            initialCategories.map((products, index) => {
                                return (

                                    <ListGroupItem key={index} className="categories-list-item"
                                                   value={products.category}
                                                   onClick={this.handleChange}
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
    )(Categories))