import React from 'react'
import { Carousel, Thumbnail } from "react-bootstrap";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

import ButtonBlue from "./ButtonBlue";
import './HomeCarousel.css'
import { removeDuplicates } from "./_utils/removeDuplicates";

const HomeCarousel = (props) => {

  const suggestions = props.allProducts.map(product => product.items)
    .reduce((result, next) => result.concat(next), [])
  const randomSuggestions = [];

  for (let i = 1; i <= 4; i++) {
    randomSuggestions.push(suggestions[Math.floor(Math.random() * suggestions.length)])
  }

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
                    <div className="thumbnail--price-item">
                      <h3 className="thumbnail--price">już od: <span
                        className="thumbnail--price">{(product.price).toFixed(2)}</span> zł</h3>
                      <Link to={`/results/details/${product.id}`}><ButtonBlue textContent={"Sprawdź"}/>
                      </Link>
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
      allProducts: state.allProducts.data
    }),
  )(HomeCarousel))