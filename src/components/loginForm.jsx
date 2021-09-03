import React, { Component } from 'react';
import Input from './components/common/input';
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
            <Input/>
            <div className="form-group"><label htmlFor="password">Password</label>
            <input value={account.password} onChange={this.handleChange} id="password" name="password" type="text" className="form-control"/></div>
            <button type="button" className="btn btn-primary loginButton">Login</button>
            </form>
        </div> );
    }
}
 
export default LoginForm;