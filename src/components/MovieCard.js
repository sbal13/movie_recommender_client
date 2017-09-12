import React from 'react';
import {Image, Popup, Button} from 'semantic-ui-react'
import MovieInfo from './MovieInfo'


const MovieCard = ({profilePage, movie, addMovie, removeMovie}) => {

	const handleClick = (event)=>{
		event.preventDefault()
		addMovie(movie.id)
	}

	const handleDelete = (event)=>{
		event.preventDefault()
		removeMovie(movie.id)
	}

	let button = profilePage ? 
	<Button className="centered-button" onClick={handleDelete} color="red">Remove Movie</Button> :
	<Button className="centered-button" onClick={handleClick} color="blue">Add Movie</Button>

	let movieImage = <Image shape="rounded" src={movie.poster_path ? `http://image.tmdb.org/t/p/w185//${movie.poster_path}` : "http://www.wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg"} />
	if(localStorage.getItem('jwt')){
		movieImage = (
			<div>
				<Image shape="rounded" src={movie.poster_path ? `http://image.tmdb.org/t/p/w185//${movie.poster_path}` : "http://www.wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg"} />
				{button}
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

// <Popup trigger={movieImage} content={<MovieInfo movie={movie} />} />

export default MovieCard