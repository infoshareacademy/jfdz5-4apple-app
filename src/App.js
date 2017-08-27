import React, {Component} from 'react';

import './App.css';
import SearchResultsListView from '../src/components/views/SearchResultsListView'

class App extends Component {
  render() {
    return (
      <div>
        <SearchResultsListView/>
      </div>

    );
  }
}

export default App;
