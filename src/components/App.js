import React, { Component } from 'react';
import Header from './Header';
import Results from './companies/Results.js';
import Home from './home/Home.js';
import CompanyDetail from './companies/CompanyDetail.js';
import Favorites from './favorites/Favorites.js';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import styles from './App.css';

class App extends Component {

  render() {

    return (
      <div className={styles.app}>
        <Router>
          <div>
            <header>
              <Header/>
            </header>

            <main>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/companies" component={Results}/>
                <Route path="/companies/:id" component={CompanyDetail}/>
                <Route path="/favorites" component={Favorites}/>
                <Redirect to="/"/>
              </Switch>
            </main>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
