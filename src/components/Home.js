import React, { Component } from 'react';
import Filter from './Filter'
import MovieContainer from './MovieContainer'



class Home extends Component {

	state = {
		movies: [],
		genreFilter: []
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
		return this.state.movies.filter(movie=> {
			return !(this.state.genreFilter.map(genre => {
				 return movie.genre.split("/").includes(genre)
			}).includes(false))
		})
	}

	render(){

		return(
			<div>
				<Filter onLabelClick={this.onLabelClick}/>
				<MovieContainer addMovie={this.props.addMovie} movies={this.sortMovies().length ? this.sortMovies() : this.state.movies}/>
			</div>
		)
	}
}

export default Home