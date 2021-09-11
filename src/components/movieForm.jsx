import React, { Component } from 'react'
import Form from './common/form';
import Joi from 'joi-browser';
class MovieForm extends Form {
    state={
        data:{
            title:'',
            numberInStock:'', 
            rate:''
        },
        errors:{}
    }
    schema={
        title:Joi.string().required().label('Title'),
       numberInStock:Joi.number().integer().min(0).max(100).required().min(5).label('Number in Stock'),
       rate:Joi.number().integer().min(0).max(10).required().label('Rate')
    }
    render() { 
        return <div>
            <h1>Movie Form</h1>
            {this.renderInput('title','Title')}
            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option selected>Genre</option>
            <option value="1">Action</option>
            <option value="2">Comedy</option>
            <option value="3">Thriller</option>
            </select>
            {this.renderInput('numberInStock','Number in Stock')}
            {this.renderInput('rate','Rate')}
            {this.renderButton('Save')}


        </div>;
    }
}
 
export default MovieForm;