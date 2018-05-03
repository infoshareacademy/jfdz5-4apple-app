import React from 'react'

import Loader from '../../components/Loader'

class DataFetcher extends React.Component {
  state = {
    data: null,
    fetching: false,
    error: null
  }

  componentDidMount() {
    this.setState({
      fetching: true,
      error: null
    })
    fetch(
      this.props.dataUrl
    ).then(
      response => response.json()
    ).then(
      data => this.setState({
        data: data,
        fetching: false,
        error: null
      })
    ).catch(
      error => this.setState({
        error: error,
        fetching: false
      })
    )
  }

  render() {
    const {data, fetching, error} = this.state
    const {component, propName, propCategories, propInitialName} = this.props
    return (
      <div>
        {
          fetching === false ? null : <Loader/>

        }
        {
          error === null ? null : <p>{error.message}</p>
        }
        {
          data === null ? null :
            (
              data.length === 0 ?
                <p>No data found</p> :
                React.createElement(
                  component,
                  {
                    [propName]: data,
                    [propInitialName]: propCategories
                  }
                )
            )
        }
      </div>
    )
  }
}

export default DataFetcher