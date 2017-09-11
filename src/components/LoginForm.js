import React from 'react';

class LoginForm extends React.Component{

	state = {
		username: "",
		password: ""
	}

	handleSubmit = (event)=>{
		event.preventDefault()
		this.props.loginUser(this.state)

		this.setState({
			username: "",
			password: ""
		})
	}

	handleChange = (event)=>{
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	render(){

		return(
			<form onSubmit={this.handleSubmit}>
				<input type="text" 
					   value={this.state.usernme} 
					   placeholder="Username" 
					   name="username"
					   onChange={this.handleChange}/>
				<input type="password" 
					   value={this.state.password} 
					   placeholder="Password" 
					   name="password"
					   onChange={this.handleChange}/>
				<input type="submit" value="Submit"/>
			</form>
		)
	}
}

export default LoginForm