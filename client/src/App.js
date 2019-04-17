// Utilities
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser } from './actions/authActions';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// Components
import Footer from './components/layout/Footer';
import Index from './components/Index';
import Amoureux from './components/Amoureux';
import About from './components/About';
import Prestations from './components/Prestations';
import Contact from './components/Contact';
import Login from './components/auth/Login';

// Bootstrap, jQuery, Popper.js
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';

// Custom CSS
import './App.scss';

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);

  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            {/*<Navbar shrink={this.state.shrink} />*/}
            <Route exact path="/" component={Index} />
            <Route exact path="/en-amoureux" component={Amoureux} />
            <Route exact path="/a-propos" component={About} />
            <Route exact path="/prestations" component={Prestations} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/connexion" component={Login} />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
