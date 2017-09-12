import React from 'react'
import MovieContainer from './MovieContainer'
import {Redirect} from 'react-router-dom'
import ProfileDetails from './ProfileDetails'


const ProfilePage = ({user, movies, removeMovie})=> {
	const profile = (
		<div>
			<h3>Profile</h3>
			<ProfileDetails user = {user}/>
			<h3>Your Movies</h3>
			<MovieContainer movies={movies} removeMovie={removeMovie} profilePage={true}/>
		</div>
	)


	return localStorage.getItem("jwt") ? profile : <Redirect to="/login"/>
			
}

export default ProfilePage