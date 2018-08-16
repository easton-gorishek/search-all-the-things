import React, { Component } from 'react';
import Search from './Search';
import Companies from './companies/Companies';
import { getSector } from '../services/stocksApi';

class App extends Component {

  state = {
    sector: 'Select a Sector',
    companies: []
  };

  handleSearch = (sector) => {
    this.setState({ sector }, () => {
      getSector(this.state.sector)
        .then(companies => this.setState({ companies }));
    });
  };

  render() {
    const { sector, companies } = this.state;

    return (
      <main>
        <h1>{sector}</h1>
        <Search onSearch={this.handleSearch} onSelect/>
        <Companies companies={companies}/>
      </main>
    );
  }
}

export default App;