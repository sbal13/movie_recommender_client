import React from 'react';
import {Image, Popup, Button} from 'semantic-ui-react'
import MovieInfo from './MovieInfo'



const MovieCard = ({profilePage, movie, addMovie, removeMovie}) => {

	const handleClick = (event)=>{
		event.preventDefault()
		addMovie(movie)
	}

	const handleDelete = (event)=>{
		event.preventDefault()
		removeMovie(movie)
	}

	let button = profilePage ? 
	<Button className="centered-button" onClick={handleDelete} style={{background: "#135589", color: "white"}}>Remove </Button> :
	<Button className="centered-button" onClick={handleClick} style={{background: "#1AA6B7", color: "white"}}> + Watch list</Button>

	let movieImage =  (
			<div>
				<Image className="movie-image" shape="rounded" style={{minHeight: 278}} src={movie.poster_path ? `http://image.tmdb.org/t/p/w185//${movie.poster_path}` : "../export.png"} />
				{localStorage.getItem('jwt') ? button : null}
			</div>
		)

	return(
		<div>
			<br/>
			<Popup wide trigger={movieImage} content={<MovieInfo movie={movie} />} />
		</div>
	)
}

// <Popup trigger={movieImage} content={<MovieInfo movie={movie} />} />

export default MovieCard