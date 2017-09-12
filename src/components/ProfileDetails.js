import React from 'react'


const ProfileDetails = ({user}) => {
	return <ul><li>Username: {user.username}</li> <li>Email: {user.email}</li></ul>
}


export default ProfileDetails