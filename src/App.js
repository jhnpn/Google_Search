import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home/Home';
import Search from './Pages/Search/Search';
import Saved from './Pages/Saved/Saved';
import './App.css';

export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />

        <Router>
          <switch>
            <Route exact path="/" component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/saved" component={Saved} />
          </switch>
        </Router>

        <Footer />
      </React.Fragment>

    )
  }
}

export default App
