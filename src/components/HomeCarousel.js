import React from 'react'
import { Carousel, Thumbnail } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import ButtonBlue from "./ButtonBlue";
import './HomeCarousel.css'
import { removeDuplicates } from "./_utils/removeDuplicates";
import { filterResults } from "../state/searching";

const HomeCarousel = (props) => {

  const suggestions = props.allProducts.map(product => product.items)
    .reduce((result, next) => result.concat(next), [])
  const randomSuggestions = [];

  for (let i = 1; i <= 4; i++) {
    randomSuggestions.push(suggestions[Math.floor(Math.random() * suggestions.length)])
  }

  const showProduct = event => {
    event.preventDefault();
    props.history.push('/results');
    props.addSearchedResults(props.allProducts, event.target.parentNode.dataset.name);
  };

  return (
    <div className='carousel-container'>
      <h2>Sugerowane produkty</h2>
      <Carousel>
        {randomSuggestions[0] ?
          removeDuplicates(randomSuggestions).map((product, index) => {
            return (
              <Carousel.Item className={'home-carousel__item'} key={index}>
                <Thumbnail key={index} className="thumbnail--cell carousel__cell">
                  <img className="thumbnail--img" src={product.image} alt={product.model || product.title}/>
                  <div className="thumbnail--info">
                    <div className="product__description">
                      <div className="thumbnail--name">
                        <h3
                          className="thumbnail--name-details">{product.brand} {product.model} {product.author} {product.title} </h3>
                      </div>
                    </div>
                    <div data-name={product.model || product.author} className="thumbnail--price-item">
                      <h3 className="thumbnail--price">już od: <span
                        className="thumbnail--price">{(product.price).toFixed(2)}</span> zł</h3>
                      <ButtonBlue helperClass={'button--small'}
                                  func={showProduct}
                                  textContent={"Sprawdź"}/>
                    </div>
                  </div>
                </Thumbnail>
              </Carousel.Item>
            )
          })
          :
          null}
      </Carousel>
    </div>
  )
};

export default withRouter(
  connect(
    state => ({
      filteredResults: state.searching.searchedProducts,
      allProducts: state.allProducts.data
    }),
    dispatch => ({
      addSearchedResults: (searchedProducts, searchedItem) => dispatch(filterResults(searchedProducts, searchedItem)),
    })
  )(HomeCarousel))