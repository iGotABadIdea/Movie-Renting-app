import React, { Component } from 'react'
import Form from './common/form';
import {getMovie,saveMovie} from '../services/fakeMovieService';
import {getGenres} from '../services/GenreService';
import Joi from 'joi-browser';
class MovieForm extends Form {
    state={
        data:{
            title:'',
            genreId:'',
            numberInStock:'', 
            rate:''
        },
        genres:[],
        errors:{}
    }
    schema={
        _id:Joi.string(),
        title:Joi.string().required().label('Title'),
        genreId:Joi.string().required().label('Genre'),
       numberInStock:Joi.number().integer().min(0).max(100).required().min(5).label('Number in Stock'),
       rate:Joi.number().integer().min(0).max(10).required().label('Daily rental Rate')
    }
    componentDidMount(){
        const genres=getGenres()
        this.setState({genres});

        const movieId=this.props.match.params.id;
        if(movieId==='new')return ;
        const movie=getMovie(movieId)
        if(!movie)return this.props.history.replace("/notFound");

        this.setState({data:this.mapToViewModel(movie)});
    }
    mapToViewModel(movie){
       return {
           _id:movie._id,
           title:movie.title,
           genreId:movie.genre._id,
           numberInStock:movie.numberInStock,
           
       }
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