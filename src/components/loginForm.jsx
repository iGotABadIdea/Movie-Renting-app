import React, { Component } from 'react';
import Joi from 'joi-browser'
import Input from './common/input';
class LoginForm extends Component {
   state={
    account:{username:'', password:''},
    errors:{}
   }
   schema ={
       username:Joi.string().required(),
       password:Joi.string().required()
   }
   validateProperty=({name,value})=>{
       if(name==='username')
       if(value.trim()==='')return 'Username is required';

       //...other rules 

       if(name==='password')
       if(value.trim()==='')return 'Password is required';
       //...other rules 

   }
   handleChange=({currentTarget:input})=>{
        const errors={...this.state.errors};
        const errorMessage=this.validateProperty(input);
        if(errorMessage) errors[input.name]=errorMessage;
        else delete errors[input.name];


       const account={...this.state.account};
       account[input.name]=input.value;
       this.setState({account,errors});
   };
   validate=()=>{
       const result=Joi.validate(this.state.account,this.schema,{abortEarly:false});
      
   }
    handleSubmit = e =>{
        e.preventDefault();
        const errors=this.validate();
        this.setState({errors:errors || {} });
        if(errors) return;
        console.log("submitted");

    };
    render() { 
        const {account,errors}=this.state;
        return ( <div>
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
            <Input name="username" value={account.username} label="Username" onChange={this.handleChange} error={errors.username}/>
            <Input name="password" value={account.password} label="Password" onChange={this.handleChange} error={errors.password}/>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div> );
    }
}
 
export default LoginForm;




