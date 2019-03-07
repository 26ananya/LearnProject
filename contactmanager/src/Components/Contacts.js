import React, { Component } from 'react';
import Contact from './Contact';

 class Contacts extends Component {
     constructor()
     {
         super();
         this.state={
             contacts:[
                 {  id:1,
                    name:'John Doe',
                    email:'jdoe@gmail.com',
                    phone:'0987654321'
                 },
                 {  id:2,
                    name:'Ananya Das',
                    email:'adas@gmail.com',
                    phone:'0987654321'
                 },
                 {  id:3,
                    name:'S Das',
                    email:'sdas@gmail.com',
                    phone:'0987654321'
                 }

                
             ]
         }
     }
  render() {
      const {contacts}=this.state;
    return (
      <div>
        {contacts.map(contact=><Contact key={contact.id}
        name={contact.name} phone={contact.phone}/>)}
      </div>
    )
  }
}

export default Contacts;
