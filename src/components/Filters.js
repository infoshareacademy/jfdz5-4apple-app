import React from 'react'
import {connect} from "react-redux";
import {Panel, PanelGroup, Checkbox, ControlLabel, FormControl, FormGroup} from "react-bootstrap";

import {createDetailsList} from "./_utils/filtersDetails"
import ButtonBlue from "./ButtonBlue";
import {searchResults} from "../state/searching";


class Filters extends React.Component {
  state = {
    priceMin: "0",
    priceMax: "1000000000",
    female: false,
    male: false,
    hardCover: false,
    softCover: false,
    cover: ["miękka", "twarda"],
    color: "",
    size: undefined
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
      defineCover();
      const searchedProducts = this.props.filteredResults.filter((product) => {
        return product.price >= parseInt(this.state.priceMin, 10) && product.price <= parseInt(this.state.priceMax, 10) ? product : null
      }).filter((product) => {
        return product.female === (this.state.female || undefined ) || product.male === (this.state.male || undefined) ? product : null
      }).filter((product) => {
        product.cover = product.cover || [];
        return product.cover.includes(this.state.cover[0] || this.state.cover[1] || (this.state.cover[0] && this.state.cover[1])) || product.cover.toString() === "" ? product : null
      }).filter((product) => {
        product.size = product.size || [];
        return product.size.includes(parseInt(this.state.size, 10)) || product.size.includes(this.state.size) || product.size.toString() === "" ? product : null
      }).filter((product) => {
        product.color = product.color || [];
        return product.color.includes(this.state.color) || product.size.toString() === "" ? product : null
      })
      this.props.addSearchedResults(searchedProducts,)
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

    const defineCover = () => {
      if (this.state.softCover === true && this.state.hardCover === true) {
        this.state.cover = ["miękka", "twarda"]
      }
      else if (this.state.softCover === false && this.state.hardCover === true) {
        this.state.cover = ["twarda"]
      }
      else if (this.state.softCover === true && this.state.hardCover === false) {
        this.state.cover = ["miękka"]
      }
      else {
        this.state.cover = ["miękka", "twarda"]
      }
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
  }),
  dispatch => ({
    addSearchedResults: (searchedProducts) => dispatch(searchResults(searchedProducts)),
  })
)(Filters)
