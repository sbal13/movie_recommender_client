import React, { Component } from 'react';
import MovieCard from './MovieCard'
import {Grid} from 'semantic-ui-react'


class MovieContainer extends Component {

	state = {
		numDisplayed: 36
	}

	renderMoreResults = (event)=> {
	    if (document.body.scrollHeight === document.body.scrollTop + window.innerHeight) {
	        this.setState({
	        	numDisplayed: this.state.numDisplayed + 36
	        });
	    }
	}



	componentDidMount(){
		document.addEventListener("scroll", this.renderMoreResults)
	}
	componentWillUnmount(){
		document.removeEventListener("scroll", this.renderMoreResults)
	}

	render(){

		return(
			<div className="movie-container">
				<Grid >
					<Grid.Row columns={6}>
						{this.props.movies.slice(0, this.state.numDisplayed).map((movie,index)=> {
							return <Grid.Column key={index}><MovieCard key={index} profilePage={!!this.props.profilePage} removeMovie={this.props.removeMovie} addMovie={this.props.addMovie} movie={movie}/></Grid.Column>
						})}
					</Grid.Row>
				</Grid>
			</div>
		)
	}
}

export default MovieContainer