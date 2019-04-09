import React, { Component } from 'react';
import {Consumer} from '../../Context';
import uuid from 'uuid';
import TextInputGroup from '../layouts/textInputGroup';

 class AddContactTextInput extends Component {
     state={
         name:'',
         email:'',
         phone:'',
         errors:{}
     };
    
     onSubmitHandler=(dispatch,e)=>{
        e.preventDefault(); 
        const {name,email,phone}=this.state;
    
        //check for errors
        if(name === '')
        {   
            this.setState({errors: {name:"Name is required"}},()=>{ console.log(this.state.errors.name +"here")});
           // console.log(this.state.errors.name +"here");
      
         
            return;
        }
        if(email === '')
        {
            this.setState({errors: {email: 'Email is required'}});
            return;
        }

        if(phone === '')
        {
            this.setState({errors: {phone: 'Phone is required'}});
         
          
            return;
        }
        
        const newContact={
            id: uuid(),
            name,
            email,
            phone
        }
         dispatch({type:'ADD_CONTACT',payload:newContact});
         
         this.setState({name:'',
                        email:'',
                        phone:'',
                        errors:{}
        });

        this.props.history.push('/')
     };

     onChangeHandler=(e)=>
     {
        this.setState({[e.target.name]:e.target.value})
     };


  render() {

    const {name,email,phone,errors}=this.state;
    return(
        <Consumer>
            {
                value=>{
                    const {dispatch}=value;
                    
                    return (
                        <div className="card mb-3">
                         <div className="card-header">Add Contacts</div>
                         <div className="card-body">
                          <form onSubmit={this.onSubmitHandler.bind(this,dispatch)}>
                             <TextInputGroup
                             label="Name"
                             name="name"
                             placeholder="Enter Name..."
                             value={name}
                             onChange={this.onChangeHandler}
                             error={errors.name}
                             />
                             <TextInputGroup
                             label="Email"
                             name="email"
                             type="email"
                             placeholder="Enter Email..."
                             value={email}
                             onChange={this.onChangeHandler}
                             error={errors.email}
                             />
                              <TextInputGroup
                             label="Phone"
                             name="phone"
                             placeholder="Enter Phone..."
                             value={phone}
                             onChange={this.onChangeHandler}
                             error={errors.phone}
                             />
                              <input type="submit" value="Add Contacts" 
                              className="btn btn-light btn-block"/>
                          </form>
                         </div>
                  
                        </div>
                      )
                }
            }

        </Consumer>
    )
   
  }
}

export default AddContactTextInput;