import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Search from './components/Search';




class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/Search' component={Search} />
              {/* <Route path='/contact' component={Contact} />
               <Route path='/Map' component={Map} /> */} */}

            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}


export default App;
