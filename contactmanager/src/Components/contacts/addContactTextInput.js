import React, { Component } from 'react';
import {Consumer} from '../../Context';
import uuid from 'uuid';
import TextInputGroup from '../layouts/textInputGroup';

 class AddContact extends Component {
     state={
         name:'',
         email:'',
         phone:'',
         errors:{}
     };
     onChangeHandler=(e)=>
     {
        this.setState({[e.target.name]:e.target.value})
     };

     onSubmitHandler=(dispatch,e)=>{
        e.preventDefault(); 
        const {name,email,phone}=this.state;

        //check for errors
        if(name==='')
        {
            this.setState({erorrs:{name:'Name is required'}})
        };
        if(email==='')
        {
            this.setState({erorrs:{name:'Email is required'}})
        };

        if(phone==='')
        {
            this.setState({erorrs:{name:'Phone is required'}})
        }
        
        const newContact={
            id: uuid(),
            name,
            email,
            phone
        }
         dispatch({type:'ADD_CONTACT',payload:newContact})
         
         this.setState({name:'',
                        email:'',
                        phone:'',
                        errors:{}
        })
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

export default AddContact;