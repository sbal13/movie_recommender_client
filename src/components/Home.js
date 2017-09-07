import React, { Component } from 'react';
import Filter from './Filter'
import MovieContainer from './MovieContainer'

class Home extends Component {

	state = {
		movies: []
	}

	componentDidMount(){
		fetch("http://localhost:3000/api/v1/movies")
		.then(res => res.json())
		.then(movieList => this.setState({
			movies: movieList
		}))
	}

	render(){
		return(
			<div>
				<Filter/>
				<MovieContainer movies={this.state.movies}/>
			</div>
		)
	}
}

export default Home