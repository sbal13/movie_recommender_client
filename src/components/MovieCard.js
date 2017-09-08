import React from 'react';
import {Image, Popup} from 'semantic-ui-react'
import MovieInfo from './MovieInfo'


const MovieCard = ({ movie }) => {
	return(
		<div>
			<br/>
			<Popup trigger={<Image src={`http://image.tmdb.org/t/p/w185//${movie.poster_path}`} />} content={<MovieInfo movie={movie} />} />
		</div>
	)
}

export default MovieCard