import React from 'react'
import GENRES from '../genres'

const MovieInfo = ({movie}) => {


	return(
		<div>
			<h3>{movie.title}</h3>
			<ul>
				<li><h4>{movie.rating}</h4></li>
				<li>{movie.overview}</li>
		    	<li>{movie.release_date}</li>
		    	<li>{movie.genre.split("/").map(genre_id => GENRES[genre_id]).join(" - ")}</li>
			</ul>
		</div>
	)
}
//add rating and genres
export default MovieInfo