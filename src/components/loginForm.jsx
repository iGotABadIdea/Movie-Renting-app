import React, { Component } from 'react';
class LoginForm extends Component {
    handleSubmit = e =>{
        e.preventDefault();
        console.log('Submitted');
    
    };
    render() { 
        return ( <div>
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
            <div className="form-group"><label htmlFor="username"></label>Username<input id="username" type="text" className="form-control"/></div>
            <div className="form-group"><label htmlFor="password"></label>Password<input id="password" type="text" className="form-control"/></div>
            <button type="button" className="btn btn-primary loginButton">Login</button>
            </form>
        </div> );
    }
}
 
export default LoginForm;