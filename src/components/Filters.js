import React from 'react'
import {connect} from "react-redux";
import {Panel, PanelGroup, Checkbox, ControlLabel, FormControl, FormGroup} from "react-bootstrap";

import {createDetailsList} from "./_utils/filtersDetails"
import ButtonBlue from "./ButtonBlue";


class Filters extends React.Component {
  state = {
    priceMin: "",
    priceMax: "",
    female: false,
    male: false,
    hardCover: false,
    softCover: false,
    color: "",
    size: ""
  };

  render() {
    let results;
    this.props !== undefined ? results = this.props.filteredResults : results = [];

    const categories = results.map((result) => {
      return result.category
    }).filter((category, index, inputArray) => {
      return inputArray.indexOf(category) === index
    });

    const submitFilters = (event) => {
      event.preventDefault();
      console.log(this.props.filteredResults);
      console.log(this.state);
      this.props.filteredResults.filter((product) => {
        console.log(product.price >= parseInt(this.state.priceMin, 10) && product.price <= parseInt(this.state.priceMax, 10) ? product : null);
        return product.price >= parseInt(this.state.priceMin, 10) && product.price <= parseInt(this.state.priceMax, 10) ? product : null
      })
    };

    const updateCheckboxState = (key) => {
      this.setState({
        ...this.state,
        [key]: !this.state[key],
      });
    };
    const updateColorSelectState = (event) => {
      this.setState({
        ...this.state,
        color: event.target.value,
      });
    };
    const updateSizeSelectState = (event) => {
      this.setState({
        ...this.state,
        size: event.target.value,
      });
    };

    const handleMinChange = event => this.setState({
      priceMin: event.currentTarget.value
    });
    const handleMaxChange = event => this.setState({
      priceMax: event.currentTarget.value
    });

    return (
      categories.toString() === "" ? null
        : <PanelGroup defaultActiveKey="1" accordion>
          <Panel header={"Szczegóły wyszukiwania"} eventKey="1">
            <form onSubmit={submitFilters} className="container">
              <div className="filters--container">
                <ControlLabel>Cena
                  <FormControl onChange={handleMinChange} className="price-filter" type="text" placeholder="od"/>
                  -
                  <FormControl onChange={handleMaxChange} className="price-filter" type="text" placeholder="do"/>
                </ControlLabel>
                <div className="filters--checkboxes">
                  {categories.includes("Uroda") || categories.includes("Obuwie") ?
                    <div>
                      <ControlLabel> Płeć</ControlLabel>
                      <Checkbox onClick={() => {
                        updateCheckboxState('female')
                      }} id="female-checkbox">
                        Damskie
                      </Checkbox>
                      <Checkbox onClick={() => {
                        updateCheckboxState('male')
                      }} id="male-checkbox">
                        Męskie
                      </Checkbox>
                    </div>
                    : null
                  }
                  {categories.includes("Książki") ?
                    <div>
                      <ControlLabel> Okładka </ControlLabel>
                      <Checkbox onClick={() => {
                        updateCheckboxState('hardCover')
                      }}>
                        Twarda
                      </Checkbox>
                      <Checkbox onClick={() => {
                        updateCheckboxState('softCover')
                      }}>
                        Miękka
                      </Checkbox>
                    </div>
                    : null}
                </div>
                {categories.includes("RTV") || categories.includes("Obuwie") ?
                  <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Rozmiar</ControlLabel>
                    <FormControl onChange={updateSizeSelectState} componentClass="select" placeholder="Wybierz rozmiar">
                      {}
                      <option value="select">Wybierz rozmiar</option>
                      {createDetailsList(results, "size").map((value, index) => {
                        return <option key={index} value={value}>{value}</option>
                      })}
                    </FormControl>
                    <ControlLabel>Kolor</ControlLabel>
                    <FormControl onChange={updateColorSelectState} componentClass="select" placeholder="Wybierz rozmiar">
                      {}
                      <option value="select">Wybierz kolor</option>
                      {createDetailsList(results, "color").map((value, index) => {
                        return <option key={index} value={value}>{value}</option>
                      })}
                    </FormControl>
                  </FormGroup>
                  : null}
              </div>
              <ButtonBlue type={"submit"} textContent="Filtruj"/>
            </form>
          </Panel>
        </PanelGroup>
    )
  };
}

export default connect(
  state => ({
    filteredResults: state.searching.filteredResults
  })
)(Filters)
