import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Index from './components/Index';
import Amoureux from './components/Amoureux';
import About from './components/About';
import Prestations from './components/Prestations';
import Contact from './components/Contact';
import Login from './components/Login';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Index} />
          <Route exact path="/en-amoureux" component={Amoureux} />
          <Route exact path="/a-propos" component={About} />
          <Route exact path="/prestations" component={Prestations} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/connexion" component={Login} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
