import React from 'react';
import Like from './common/like';
const MoviesTable = (props) => {
    const {movies,onDelete,onLike,onSort} = props;
    return ( 
        <table className="table table-hover">
  <thead>
    <tr>
      <th onClick={()=>onSort('title')} scope="col"><span className="tableTitle">Title</span>Title</th>
      <th onClick={()=>onSort('genre.name')} scope="col">genre</th>
      <th onClick={()=>onSort('numberInStock')} scope="col">Stock</th>
      <th onClick={()=>onSort('dailyRentalrate')} scope="col">Rate</th>
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
      <td><Like liked={movie.liked} onClick={()=>onLike(movie)}/></td>
      <td><button onClick={()=>onDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
    </tr>

      ))}


  </tbody>
</table> 
     );
}
 
export default MoviesTable;