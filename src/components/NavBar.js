import React from 'react'
import Auth from '../adapters/auth'
import { Menu } from 'semantic-ui-react'



const NavBar = () => {

	const logLinks = (localStorage.getItem('jwt')) ? 

		[<Menu.Item key={1} href={`/profile`}>Profile</Menu.Item>, 
		<Menu.Item key={2} position="right" href="" onClick={Auth.logOut}>Log out</Menu.Item>] :

		<Menu.Menu position="right">
			<Menu.Item href={'/signup'}>Sign up</Menu.Item>
			<Menu.Item href={'/login'}>Log in</Menu.Item>
		</Menu.Menu>

	return(

		<Menu>
			<Menu.Item href={'/'}>Home</Menu.Item> 
			{logLinks}
		</Menu>
	)
}


export default NavBar