import React from 'react';
import {Form, Button, Grid} from 'semantic-ui-react'
import AlertContainer from 'react-alert'



class LoginForm extends React.Component{

	state = {
		username: "",
		password: ""
	}

	alertOptions = {
		offset: 0,
		position: 'top left',
		theme: 'light',
		time: 5000,
		transition: 'fade'
	}

	handleSubmit = (event)=>{
		event.preventDefault()
		this.props.loginUser(this.state).then( res => {
			if (res) {
				this.msg.error("Invalid username or password!", {time: 4000})
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
			<AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
			<Grid centered columns={3} verticalAlign='middle'>
				<Grid.Column>
				<Form onSubmit={this.handleSubmit}>
					<Form.Field>
						<input required type="text" 
							   value={this.state.usernme} 
							   placeholder="Username" 
							   name="username"
							   onChange={this.handleChange}/>
					</Form.Field>
					<Form.Field>
						<input required type="password" 
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