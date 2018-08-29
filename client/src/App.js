import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import CreateComponent from './components/CreateComponent';
import EditComponent from './components/EditComponent';
import IndexComponent from './components/IndexComponent';

class App extends Component {
  render() {
    return (
    <Router>
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">React Express App</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Create</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/index'} className="nav-link">Index</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/edit/:id'} className="nav-link">Edit</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
              <Route exact path='/create' component={CreateComponent} />
              <Route path='/edit/:id' component={EditComponent} />
              <Route path='/index' component={IndexComponent} />
          </Switch>
        </div>
      </Router>
    );
  }
}

// class App extends Component {
//   state = { cities: [] };

//   async componentDidMount() {
//     // const response = await fetch('/cities');
//     const response = await fetch('/api/cidades');
//     const cities   = await response.json();
//     this.setState({cities: cities});
//   }

//   render() {
//     return (
//       <div>
//         <ul>
//           {this.state.cities.map( city => {
//             return <li key={city.name}> <b>{city.name}</b>: {city.population}</li>
//           })}
//         </ul>
//       </div>
//     );
//   }
// };

export default App;