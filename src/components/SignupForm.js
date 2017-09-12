import React from 'react';
import {Form, Button, Grid, Message} from 'semantic-ui-react'


class SignupForm extends React.Component{

	state = {
		username: "",
		password: "",
		email: "",
		passwordConfirmation: "",
		errorMessages: [],
		error: true
	}

	handleSubmit = (event)=>{
		event.preventDefault()
		if (this.state.password === this.state.passwordConfirmation){
			this.props.signupUser(this.state).then(res => {
				if (res) {
					this.setState({
						errorMessages: res,
						error: false
					})
				
				}
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

		let errorMessages = []


		for (var prop in this.state.errorMessages){
			errorMessages.push(prop + " " + this.state.errorMessages[prop][0])
    	}

		return(
			<div>
			<Message error
					header='There was some errors with your submission'
    				list={errorMessages}
    				hidden={this.state.error}/>

			<Grid centered columns={3}>
				<Grid.Column>
				<Form onSubmit={this.handleSubmit}>
					<Form.Field>
						<input type="text" 
							   value={this.state.usernme} 
							   placeholder="Username" 
							   name="username"
							   onChange={this.handleChange}/>
					</Form.Field>
					<Form.Field>
						<input type="email" 
							   value={this.state.email} 
							   placeholder="Email" 
							   name="email"
							   onChange={this.handleChange}/>
					</Form.Field>
					<Form.Field>
						<input type="password" 
							   value={this.state.password} 
							   placeholder="Password" 
							   name="password"
							   onChange={this.handleChange}/>
					</Form.Field>
					<Form.Field>
						<input type="password" 
							   value={this.state.passwordConfirmation} 
							   placeholder="Password Confirmation" 
							   name="passwordConfirmation"
							   onChange={this.handleChange}/>
					</Form.Field>
					<Button type="submit">Sign up!</Button>
				</Form>
				</Grid.Column>
			</Grid>
			</div>
		)
	}
}

export default SignupForm