import React, { Component } from 'react'
import Form from './common/form';
import {getMovie,saveMovie} from '../services/fakeMovieService';
import {getGenres} from '../services/fakeGenreService';
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
           rate:movie.dailyRentalRate

       }
    }
    doSubmit=()=>{
        saveMovie(this.state.data);
        this.props.history.push("/movies");
    }
    render() { 
        return <div>
            <h1>Movie Form</h1>
            <form onSubmit={this.handleSubmit}>
            {this.renderInput('title','Title')}
            {this.renderSelect('genreId','Genre',this.state.genres)}
            {this.renderInput('numberInStock','Number in Stock','number')}
            {this.renderInput('rate','Rate')}
            {this.renderButton('Save')}
            </form>

        </div>;
    }
}
 
export default MovieForm;