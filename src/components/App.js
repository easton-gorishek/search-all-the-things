import React, { Component } from 'react';
import Search from './Search';
import { getSector } from '../services/stocksApi';

class App extends Component {

  handleSearch = (sector) => {
    getSector(sector);
  };

  render() {

    return (
      <main>
        <h1>REACT TIME</h1>
        <Search onSearch={this.handleSearch}/>
      </main>
    );
  }
}

export default App;