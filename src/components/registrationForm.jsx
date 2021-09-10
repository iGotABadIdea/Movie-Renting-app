import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
class RegistrationForm extends Form {
    state={
        data:{
            username:'',
            password:'', 
            name:''
        },
        errors:{}
    }
    schema={
        username:Joi.string().email().required().label('Username'),
       password:Joi.string().required().label('Password'),
       name:Joi.string().required().label('Name')
    }
    render() { 
        return <div>
            <h1>Registration Form</h1>
            
        </div>;
    }
}
 
export default RegistrationForm;