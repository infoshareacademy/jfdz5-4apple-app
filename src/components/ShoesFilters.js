import React from 'react'
import {connect} from "react-redux";
import {Checkbox, ControlLabel, FormControl, FormGroup, Panel, PanelGroup} from "react-bootstrap";

import ButtonBlue from "./ButtonBlue";
import "./Filters.css"

const ShoesFilters = (props) => {

  const results = props.filteredResults;

  const createDetailsList = (filterName) => {
    return results.reduce((productFirst, productNext) => {
      return productFirst[filterName].concat(productNext[filterName])
    }, ["Brak produktu"]).filter((value, index, inputArray) => {
      return inputArray.indexOf(value) === index
    }).sort()
  };
//array.indexOf finds 1st occurrence of argument passed. If certain value is doubled, next occurrence index will be different then indexOf(argument). That's why filter returns only one of any values to array.

  return (
    <PanelGroup defaultActiveKey="1" accordion>
      <Panel header={"Szczegóły filtrów"} eventKey="1">
        <form>
          <ControlLabel>Cena
            <FormControl type="text" placeholder="od"/>
            -
            <FormControl type="text" placeholder="do"/>
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
              {createDetailsList("size").map((value, index) => {
                return <option key={index} value={value}>{value}</option>
              })}
            </FormControl>
            <ControlLabel>Kolor</ControlLabel>
            <FormControl componentClass="select" placeholder="Wybierz rozmiar">
              {}
              <option value="select">Wybierz kolor</option>
              {createDetailsList("color").map((value, index) => {
                return <option key={index} value={value}>{value}</option>
              })}
            </FormControl>
          </FormGroup>
          <ButtonBlue textContent="Filtruj"/>
        </form>
      </Panel>
    </PanelGroup>
  )
};

export default connect(
  state => ({
    filteredResults: state.searching.filteredResults
  })
)(ShoesFilters)
