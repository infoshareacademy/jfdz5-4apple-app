import React from 'react'
import {connect} from "react-redux";
import {Checkbox, ControlLabel, FormControl, FormGroup} from "react-bootstrap";

import {createDetailsList} from "./_utils/filtersDetails"

const ShoesFilters = (props) => {
  let results;
  props !== undefined ? results = props.filteredResults : results = [];

  const categories = results.map((result) => {
    return result.category
  }).filter((category, index, inputArray) => {
    return inputArray.indexOf(category) === index
  })
  console.log('płeć', categories.includes("Uroda") || categories.includes("Obuwie"))
  console.log('okładka', categories.includes("Książki"))
  console.log('rozmiar', categories.includes("RTV") || categories.includes("Obuwie"))
  console.log('kolor', categories.includes("RTV") || categories.includes("Obuwie"))


  return (
    categories.toString() === "" ? null
      :
      <div className="filters--container">
        <ControlLabel>Cena
          <FormControl className="price-filter" type="text" placeholder="od"/>
          -
          <FormControl className="price-filter" type="text" placeholder="do"/>
        </ControlLabel>
        <div className="filters--checkboxes">
          {categories.includes("Uroda") || categories.includes("Obuwie") ?
            <div>
              <ControlLabel> Płeć</ControlLabel>
              <Checkbox>
                Damskie
              </Checkbox>
              <Checkbox>Męskie
              </Checkbox>
            </div>
            : null
          }
          {categories.includes("Książki") ?
            <div>
              <ControlLabel> Okładka </ControlLabel>
              <Checkbox>
                Trarda
              </Checkbox>
              <Checkbox>Miękka
              </Checkbox>
            </div>
            : null}
        </div>
        {categories.includes("RTV") || categories.includes("Obuwie") ?
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Rozmiar</ControlLabel>
            <FormControl componentClass="select" placeholder="Wybierz rozmiar">
              {}
              <option value="select">Wybierz rozmiar</option>
              {createDetailsList(results, "size").map((value, index) => {
                return <option key={index} value={value}>{value}</option>
              })}
            </FormControl>
            <ControlLabel>Kolor</ControlLabel>
            <FormControl componentClass="select" placeholder="Wybierz rozmiar">
              {}
              <option value="select">Wybierz kolor</option>
              {createDetailsList(results, "color").map((value, index) => {
                return <option key={index} value={value}>{value}</option>
              })}
            </FormControl>
          </FormGroup>
          : null}
      </div>
  )
};

export default connect(
  state => ({
    filteredResults: state.searching.filteredResults
  })
)(ShoesFilters)
