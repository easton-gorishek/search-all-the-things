import React, { Component } from 'react';
import Search from './Search';
// import Sector from './sector/Sector';
import { getSector } from '../services/stocksApi';

class App extends Component {

  state = {
    companies: []
  };

  handleSearch = (sector) => {
    getSector(sector)
      .then(companies => this.setState({ companies }));
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