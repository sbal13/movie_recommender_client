import React, { Component } from 'react';
import Filter from './Filter'
import MovieContainer from './MovieContainer'

class Home extends Component {

	state = {
		movies: []
	}

	onLabelClick = (event, data) => {
		console.log("event", event)
		console.log("data", data)
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
				<Filter onLabelClick={this.onLabelClick}/>
				<MovieContainer movies={this.state.movies}/>
			</div>
		)
	}
}

export default Home