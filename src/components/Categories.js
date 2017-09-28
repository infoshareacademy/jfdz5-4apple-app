import React from 'react'
import styled from "styled-components";
import ListGroupItem from "react-bootstrap/es/ListGroupItem";
import ListGroup from "react-bootstrap/es/ListGroup";


class Categories extends React.Component {
    state = {
        chooseCategories:''

    };

    handleChange = (e) => {
        const name = e.target.value;
        this.setState({chooseCategories:name})
    };

    render() {
        const Div = styled.div`
        width:15%;
        background: white;
        height:100%;
        border-radius:5px
        border-bottom: 5px solid black;
        `;
       console.log(this.state.chooseCategories)
        return (
<Div>
    <ListGroup onClick={this.handleChange}>
        <ListGroupItem value="Ksiazki" onClick={this.handleChange}>Książki</ListGroupItem>
        <ListGroupItem value="RTV" onClick={this.handleChange}>RTV</ListGroupItem>
        <ListGroupItem value="OBUWIE" onClick={this.handleChange}>Obuwie</ListGroupItem>
        <ListGroupItem value="URODA" onClick={this.handleChange}>Uroda</ListGroupItem>
    </ListGroup>

</Div>

        )
    }
}

export default Categories