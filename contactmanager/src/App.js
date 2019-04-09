import React, { Component } from "react";
import Contacts from './Components/contacts/Contacts';
import Header from './Components/layouts/Header';
import {Provider}  from './Context';
import AddContactTextInput from './Components/contacts/addContactTextInput';
import "./App.css";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import About from './Components/Pages/About';
import NotFound from "./Components/Pages/NotFound";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
        <div className="App">
        <Header branding="Contact Manager"/>
        <div className="container">
        <Switch>
          <Route exact path="/" component={Contacts}/>
          {/*----- how to acces parameter of url -----*/}
          {/* <Route exact path="/about/:id" component={About}/> */}  
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact/add" component={AddContactTextInput}/>
          <Route component={NotFound}/>

          
        </Switch>
        {/* <AddContactTextInput/> */}
      
        {/* <Contact name='Ananya' email='das26ananya@gmail.com' phoneNo='0987654321' />
        <Contact name='Tamisra' email='das26ananya@gmail.com' phoneNo='0987654321' /> */}
         </div>
       
      </div> 
        </Router>
      
      </Provider>
     
    );
  }
}

export default App;
