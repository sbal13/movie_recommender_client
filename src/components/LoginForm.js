import React from 'react';
import {Form, Button, Grid, Message} from 'semantic-ui-react'


class LoginForm extends React.Component{

	state = {
		username: "",
		password: "",
		error: true
	}

	handleSubmit = (event)=>{
		event.preventDefault()
		this.props.loginUser(this.state).then( res => {
			if (res) {
				this.setState({
					error: false
				})
			}
		})

		
	}

	handleChange = (event)=>{
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	render(){

		return(
			<div>
			<Message error 
					 header='Signin unsuccessful!'
    				 content="Invalid username or password"
    				 hidden={this.state.error}/>
			<Grid centered columns={3} verticalAlign='middle'>
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
						<input type="password" 
							   value={this.state.password} 
							   placeholder="Password" 
							   name="password"
							   onChange={this.handleChange}/>
					</Form.Field>
					<Button type="submit">Log in!</Button>
				</Form>
				</Grid.Column>
			</Grid>
			</div>
		)
	}
}

export default LoginForm