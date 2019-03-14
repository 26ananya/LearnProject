import React, { Component } from "react";
import Contacts from './Components/contacts/Contacts';
import Header from './Components/layouts/Header';
import {Provider}  from './Context';
import AddContact from './Components/contacts/addContactTextInput';
import "./App.css";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
//import Contacts from "./Components/Contacts";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
        <div className="App">
        <Header branding="Contact Manager"/>
        <div className="container">
        <Switch>
          <Route exact="/" component={Contacts}/>

          
        </Switch>
        <AddContact/>
        <Contacts/>
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
