import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Index from './components/Index';
import Amoureux from './components/Amoureux';

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
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
