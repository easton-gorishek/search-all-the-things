import React, { Component } from 'react';

export default class Search extends Component {

  state = {
    search: 'Select a Sector'
  };

  sectorOptions = [
    'Technology',
    'Industrials',
    'Health Care',
    'Energy',
    'Financials'
  ];

  createSelectOptions() {
    let options = [];
    for(let i = 0; i < this.sectorOptions.length; i++) {
      options.push(<option key={i} value={this.sectorOptions[i]}>{this.sectorOptions[i]}</option>);
    }
    return options;
  }

  handleChange = ({ target }) => {
    this.setState({ search: target.value });
  };

  // handleSubmit = event => {
  //   event.preventDefault();
  //   this.props.onSearch(this.state);
  // };

  render() {
    const { search } = this.state;

    return (
      <form className="search-form">
        <select value={search} onChange={this.handleChange}>
          {this.createSelectOptions()}
        </select>
        <button>Search</button>
      </form>
    );
  }
}
