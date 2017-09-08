import React from 'react'
import GENRES from '../genres'

const MovieInfo = ({movie}) => {


	return(
		<div>
			<ul>
				<h3>{movie.title}</h3>
				<li>{movie.overview}</li>
		    	<li>{movie.release_date}</li>
		    	<li>{movie.genre.split("/").map(genre_id => GENRES[genre_id]).join(" - ")}</li>
			</ul>
		</div>
	)
}
//add rating and genres
export default MovieInfo