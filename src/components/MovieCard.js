import React from 'react';
import {Image, Popup, Button} from 'semantic-ui-react'
import MovieInfo from './MovieInfo'


const MovieCard = ({ movie, addMovie}) => {

	const handleClick = (event)=>{
		event.preventDefault()
		addMovie(movie.id)
	}

	let movieImage = <Image src={movie.poster_path ? `http://image.tmdb.org/t/p/w185//${movie.poster_path}` : "http://www.wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg"} />
	if(localStorage.getItem('jwt')){
		movieImage = (
			<div>
				<Image src={movie.poster_path ? `http://image.tmdb.org/t/p/w185//${movie.poster_path}` : "http://www.wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg"} />
				<Button onClick={handleClick}>Add Movie</Button>
			</div>
		)
	}

	return(
		<div>
			<br/>
			<Popup trigger={movieImage} content={<MovieInfo movie={movie} />} />
		</div>
	)
}

export default MovieCard