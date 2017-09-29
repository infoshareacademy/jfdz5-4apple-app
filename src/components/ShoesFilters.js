import React from 'react'
import {connect} from "react-redux";
import {Checkbox, ControlLabel, FormControl, FormGroup} from "react-bootstrap";

import "./Filters.css"
import {createDetailsList}from "./_utils/filtersDetails"

const ShoesFilters = (props) => {

  let results;
  props !== undefined ? results = props.filteredResults : results = [];

  return (
    <div className="filters--container">
      <ControlLabel>Cena
        <FormControl className="price-filter" type="text" placeholder="od"/>
        -
        <FormControl className="price-filter" type="text" placeholder="do"/>
      </ControlLabel>
      <div>
        <Checkbox>
          Damskie
        </Checkbox>
        <Checkbox>Męskie
        </Checkbox>
      </div>
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
    </div>
  )
};

export default connect(
  state => ({
    filteredResults: state.searching.filteredResults
  })
)(ShoesFilters)
