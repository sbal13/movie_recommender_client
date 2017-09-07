import React, { Component } from 'react';
import MovieCard from './MovieCard'

class MovieContainer extends Component {
	render(){

		return(
			<div>
				{this.props.movies.map((movie,index)=> {
					return <MovieCard key={index} movie={movie}/>
				})}
			</div>
		)
	}
}

export default MovieContainer