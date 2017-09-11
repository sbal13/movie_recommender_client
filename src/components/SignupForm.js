import React from 'react';

class SignupForm extends React.Component{

	state = {
		username: "",
		password: "",
		email: "",
		passwordConfirmation: ""
	}

	handleSubmit = (event)=>{
		event.preventDefault()
		if (this.state.password === this.state.passwordConfirmation){
			this.props.signupUser(this.state)

			this.setState({
				username: "",
				password: "",
				email: "",
				passwordConfirmation: ""
			})
		} else {
			alert("Passwords do not match!")
		}
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
				<input type="email" 
					   value={this.state.email} 
					   placeholder="Email" 
					   name="email"
					   onChange={this.handleChange}/>
				<input type="password" 
					   value={this.state.password} 
					   placeholder="Password" 
					   name="password"
					   onChange={this.handleChange}/>
				<input type="password" 
					   value={this.state.passwordConfirmation} 
					   placeholder="Password Confirmation" 
					   name="passwordConfirmation"
					   onChange={this.handleChange}/>
				<input type="submit" value="Submit"/>
			</form>
		)
	}
}

export default SignupForm