import React from 'react'
import {Link} from 'react-router-dom'
import Auth from '../adapters/auth'


const NavBar = () => {

	const logLinks = (localStorage.getItem('jwt')) ? 
	<div>
		<Link to={`/profile`}>Profile</Link>
		<Link to="" onClick={Auth.logOut}>Log out</Link>
	</div> :
	<div>
		<Link to={'/signup'}>Sign up</Link>
		<Link to={'/login'}>Log in</Link>
	</div>

	return(

		<div>
			<Link to={'/'}>Home</Link> 
			
			{logLinks}
		</div>
	)
}


export default NavBar