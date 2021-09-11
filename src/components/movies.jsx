import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from '../services/fakeGenreService';
import MoviesTable from './moviesTable'
import Pagination from './common/pagination'
import {paginate} from '../utils/paginate';
import ListGroup from './common/listGroup'
import SearchBox from './common/searchBox';
import _ from 'lodash';
class Movies extends Component {
    state = {
        movies:[],
        genres:[],
        pageSize:4,
        currentPage:1,
        sortColumn:{path:'title', order:'asc'},
        searchQuery:'',
        selectedGenre:null
     };
     componentDidMount() {
       const genres=[{_id:"", name:"All Genres"},...getGenres()];
       this.setState({movies:getMovies(),genres});
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
       this.setState({selectedGenre:genre,searchQuery:'', currentPage:1});
     };
     handleSort=sortColumn=>{
      
       this.setState({sortColumn});
    };
    handleSearch=query=>{
      this.setState({searchQuery:query,selectedGenre:null,currentPage:1})
    }
    getPageData=()=>{
      const {pageSize,currentPage,sortColumn,selectedGenre,searchQuery,movies:allMovies}=this.state;
      let filtered=allMovies;
      if(searchQuery)
      filtered=allMovies.filter(f=>f.title.toLowerCase().startsWith(searchQuery.toLowerCase()));
      else if(selectedGenre && selectedGenre._id)
      filtered=allMovies.filter(m=>m.genre._id===selectedGenre._id);
      else filtered=allMovies;
      const sorted=_.orderBy(filtered,[sortColumn.path],[sortColumn.order]);
      const movies=paginate(sorted,currentPage,pageSize);
      return {totalCount:filtered.length,data:movies };
    };
    render() {
      const {length:count}=this.state.movies;
      const {pageSize,currentPage,sortColumn,genres,selectedGenre,}=this.state;
      if(count===0) return <p>There are no Movies in the data base</p>
      
      const {totalCount,data:movies}=this.getPageData();
        return (
          <React.Fragment>
              
              <div className='row'>
          <div className="col-3">
            <ListGroup 
            items={genres } 
            selectedItem={selectedGenre}
            onItemSelect={this.handleGenreSelect } />
          </div>
           <div className="col">
             <Link to='/movies/new' type="button" className="btn btn-primary movieButton">New Movie</Link>
             <p>Showing {totalCount} movies in the data-base</p>
             <SearchBox value={this.searchQuery} onChange={this.handleSearch}/>
             <MoviesTable 
             movies={movies} 
             onLike={this.handleLike} 
             onDelete={this.handleDelete}
             onSort={this.handleSort}
             sortColumn={sortColumn}/>

           
<Pagination itemsCount={totalCount} pageSize={pageSize} onPageChange={this.handlePageChange}
currentPage={currentPage}/>
          </div>
        </div>
        </React.Fragment>
      
        )}
}

export  default Movies ;
