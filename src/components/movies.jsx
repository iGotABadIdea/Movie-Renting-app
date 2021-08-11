import React, { Component } from 'react';
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from '../services/fakeGenreService';
import Like from './common/like';
import Pagination from './common/pagination'
import {paginate} from '../utils/paginate';
import ListGroup from './common/listGroup'
class Movies extends Component {
    state = {
        movies:[],
        genres:[],
        pageSize:4,
        currentPage:1
     };
     componentDidMount() {
       this.setState({movies:getMovies(),genres:getGenres()});
     }
     handleDelete=movie=>{
       const movies2=this.state.movies.filter(m=>(m._id!==movie._id))
       this.setState({movies:movies2})
     }
     handleLike=(movie)=>{
      const movies=[...this.state.movies];
      const index=movies.indexOf(movie);
      movies[index]={...movies[index]};
      movies[index].liked=!movies[index].liked
      this.setState({movies}); 
     };
     handlePageChange=(page)=>{
       this.setState({currentPage:page})
     };
     handleGenreSelect=genre=>{

     }
    render() {
      const {length:count}=this.state.movies;
      const {pageSize,currentPage,genres,movies:allMovies}=this.state;
      if(count===0) return <p>There are no Movies in the data base</p>
      const movies=paginate(allMovies,currentPage,pageSize)
        return (
              <div className='row'>
          <div className="col-3">
            <ListGroup 
            items={genres } 
            textProperty="name" 
            valueProperty="_id"
            onItemSelect={this.handleGenreSelect } />
          </div>
           <div className="col">
             <p>Showing {count} movies in the data-base</p>
           <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">genre</th>
      <th scope="col">Stock</th>
      <th scope="col">Rate</th>
      <th/>
      <th/>
    </tr>
  </thead>
  <tbody>
      {movies.map(movie=>(
    <tr key={movie._id}>
      <td>{movie.title}</td>
      <td>{movie.genre.name}</td>
      <td>{movie.numberInStock}</td>
      <td>{movie.dailyRentalRate}</td>
      <td><Like liked={movie.liked} onClick={()=>this.handleLike(movie)}/></td>
      <td><button onClick={()=>this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
    </tr>

      ))}


  </tbody>
</table> 
<Pagination itemsCount={count} pageSize={pageSize} onPageChange={this.handlePageChange}
currentPage={currentPage}/>
          </div>
        </div>
      
        )}
}

export  default Movies ;
