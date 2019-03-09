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
                    email:'jdoe@ gmail.com',
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

     deleteContact=(id)=>{
       const {contacts}=this.state;
       const newContact=contacts.filter(contact=>contact.id!==id);
       this.setState({contacts:newContact});
     }
  render() {
      const {contacts}=this.state;
    return (
      <React.Fragment>

          {/* {contacts.map(contact=>(<Contact Key={contact.id}
        name={contact.name} email={contact.email} phone={contact.phone}/>))}  */}
         {contacts.map(contact=>(<Contact key={contact.id}
        contact={contact} deleteClickHandler={this.deleteContact.bind(this,contact.id)} />))} 
      </React.Fragment>
       
        
        
     
    )
  }
}

export default Contacts;
