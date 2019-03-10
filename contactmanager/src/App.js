import React, { Component } from "react";
import Contacts from './Components/Contacts';
import Header from './Components/Header';
import {Provider}  from './Context';

import "./App.css";
//import Contacts from "./Components/Contacts";

class App extends Component {
  render() {
    return (
      <Provider>
         <div className="App">
        <Header branding="Contact Manager"/>
        <div className="container">
        <Contacts/>
        {/* <Contact name='Ananya' email='das26ananya@gmail.com' phoneNo='0987654321' />
        <Contact name='Tamisra' email='das26ananya@gmail.com' phoneNo='0987654321' /> */}
         </div>
       
      </div> 
      </Provider>
     
    );
  }
}

export default App;
