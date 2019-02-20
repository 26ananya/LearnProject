import React, { Component } from "react";
import Contact from './Components/Contact';
import Header from './Components/Header';

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager"/>
        <Contact name="Ananya Das" email="ananya.das2@mindtree.com" phoneNo="9876543210"/>
      </div>
    );
  }
}

export default App;
