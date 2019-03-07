import React, { Component } from "react";
import Contact from './Components/Contact';
import Header from './Components/Header';

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager"/>
        <div className="container">
        <Contact name='Ananya' email='das26ananya@gmail.com' phoneNo='0987654321' />
        <Contact name='Tamisra' email='das26ananya@gmail.com' phoneNo='0987654321' />
         </div>
       
      </div>
    );
  }
}

export default App;
