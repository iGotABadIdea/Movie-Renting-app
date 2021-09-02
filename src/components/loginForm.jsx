import React, { Component } from 'react';
class LoginForm extends Component {
    state = {  }
    render() { 
        return ( <div>
            <h1>Login</h1>
            <form>
            <div className="form-group"><label htmlFor="username"></label>Username<input id="username" type="text" className="form-control"/></div>
            <div className="form-group"><label htmlFor="password"></label>Password<input id="password" type="text" className="form-control"/></div>
            <button type="button" class="btn btn-primary">Primary</button>
            </form>
        </div> );
    }
}
 
export default LoginForm;