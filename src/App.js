import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Search from './components/Search';
import Contact from './components/Contact';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route path='/' exact component={Search} />
              <Route path='/contact' component={Contact} />
            </Switch>
          </div>
        </Router>
        <Footer />
      </div>
    )
  }
}


export default App;
