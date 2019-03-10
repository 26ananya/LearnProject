import React, { Component } from "react";
import Contacts from './Components/contacts/Contacts';
import Header from './Components/layouts/Header';
import {Provider}  from './Context';
import AddContact from './Components/contacts/addContact';
import "./App.css";
//import Contacts from "./Components/Contacts";

class App extends Component {
  render() {
    return (
      <Provider>
         <div className="App">
        <Header branding="Contact Manager"/>
        <div className="container">
        <AddContact/>
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
