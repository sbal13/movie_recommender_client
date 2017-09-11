import React from 'react'
import MovieContainer from './MovieContainer'
import {Redirect} from 'react-router-dom'


class ProfilePage extends React.Component{
	state={
		movies: []
	}

	componentDidMount(){
		const jwtToken = localStorage.getItem("jwt")

		fetch('http://localhost:3000/api/v1/my_movies',{
	      headers:{
	        "Authorization":`Bearer ${jwtToken}`,
	        "Accept":"application/json"
	      }
	    }).then(res=>res.json())
	    .then(json=> this.setState({
			movies: json
		}))
	}


	render(){

		const profile = (
			<div>
				<h3>Profile</h3>
				<MovieContainer movies={this.state.movies}/>
			</div>
		)


		return localStorage.getItem("jwt") ? profile : <Redirect to="/login"/>
			
	}
}

export default ProfilePage