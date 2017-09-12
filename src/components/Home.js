import React, { Component } from 'react';
import Filter from './Filter'
import MovieContainer from './MovieContainer'



class Home extends Component {

	state = {
		movies: [],
		genreFilter: [],
		yearRange: {min: 1920, max: (new Date()).getFullYear()}
	}

	onLabelClick = (event, data) => {
		this.setState({
			genreFilter: data.value
		})
	}

	componentDidMount(){
		fetch("http://localhost:3000/api/v1/movies")
		.then(res => res.json())
		.then(movieList => this.setState({
			movies: movieList
		}))
	}

	sortMovies = () =>{
		let sortedMovies = this.filteredMovies().filter(movie => movie.rating !== "N/A")

		let unratedMovies = this.filteredMovies().filter(movie => movie.rating === "N/A")

		return sortedMovies.sort((movieA, movieB)=>{
			return movieB.rating - movieA.rating
		}).concat(unratedMovies)
	}

	filteredMovies = ()=>{
		let filtersList = this.state.movies.filter(movie=> {
			return !(this.state.genreFilter.map(genre => {
				 return movie.genre.split("/").includes(genre)
			}).includes(false))
		})

		filtersList = filtersList.filter(movie =>{
			let releaseYear = movie.release_date.split("-")[0]
			return releaseYear >= this.state.yearRange.min && releaseYear <= this.state.yearRange.max
		})

		return filtersList.filter(movie => {
			return !this.props.currentUserMovies.find(userMovie => userMovie.title === movie.title)
		})
	}

	handleYear = (newRange)=>{
		this.setState({
			yearRange: newRange
		})
	}

	render(){

		return(
			<div>
				<Filter handleYear={this.handleYear} yearRange={this.state.yearRange} onLabelClick={this.onLabelClick}/>
				<MovieContainer addMovie={this.props.addMovie} movies={this.sortMovies().length ? this.sortMovies() : this.filteredMovies()}/>
			</div>
		)
	}
}

export default Home