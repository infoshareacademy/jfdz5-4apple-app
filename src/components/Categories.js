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
        console.log(productsFromInput)
        //   console.log(this.state.chooseCategories);
        const {initialState} = this.props;
        // console.log(initialState)
        const initialCategories = this.props.categoriesProducts
       //console.log(initialCategories)
        const x =  initialCategories.map(products => products.category)
        console.log(x)
        return (



            <div className="categories">

                {
                    initialState === undefined ? null :

                        <ListGroup className="categories-list">
                            <ListGroupItem className="categories-list-item" value="Ksiazki"
                                           onClick={this.handleChange}>Książki</ListGroupItem>
                            <ListGroupItem value="RTV" onClick={this.handleChange}>RTV</ListGroupItem>
                            <ListGroupItem value="OBUWIE" onClick={this.handleChange}>Obuwie</ListGroupItem>
                            <ListGroupItem value="URODA" onClick={this.handleChange}>Uroda</ListGroupItem>
                        </ListGroup>
                }
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