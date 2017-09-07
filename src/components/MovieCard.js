import React, { Component } from 'react';

const MovieCard = ({ movie }) => {
	return(
		<div>
			<h3>{movie.title}</h3>
		</div>
	)
}

export default MovieCard