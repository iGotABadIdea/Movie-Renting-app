import React, { Component } from 'react';
import Input from './common/input';
class LoginForm extends Component {
   state={
    account:{username:'', password:''}
   }
   handleChange=({currentTarget:input})=>{
       const account={...this.state.account};
       account[input.name]=input.value;
       this.setState({account});
   };
    handleSubmit = e =>{
        e.preventDefault();
        const username=this.username.current.value;
    
    };
    render() { 
        const {account}=this.state;
        return ( <div>
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
            <Input name="username" value={account.username} label="Username" onchange={this.handleChange}/>
            <Input name="password" value={account.password} label="Password" onchange={this.handleChange}/>
            
            </form>
        </div> );
    }
}
 
export default LoginForm;