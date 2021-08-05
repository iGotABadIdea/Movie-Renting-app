import React, { Component } from 'react';
import { getMovies } from "../services/fakeMovieService";
class Movies extends Component {
    state = {
        movies:getMovies()
     };
     handleDelete=movie=>{
       const movies2=this.state.movies.filter(m=>(m._id!==movie._id))
       this.setState({movies:movies2})
     }
    render() {
      if(this.state.movies.length===0) return <p>There are no Movies in the data base</p>
        return (
          <React.Fragment>
            <p>Showing {this.state.movies.length} movies in the data-base</p>
        <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">genre</th>
      <th scope="col">Stock</th>
      <th scope="col">Rate</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
      {this.state.movies.map(movie=>(
    <tr key={movie._id}>
      <td>{movie.title}</td>
      <td>{movie.genre.name}</td>
      <td>{movie.numberInStock}</td>
      <td>{movie.dailyRentalRate}</td>
      <td><button onClick={()=>this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
    </tr>

      ))}


  </tbody>
</table> 
 </React.Fragment>);
    }
}

export  default Movies ;
