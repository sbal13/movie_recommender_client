import React from 'react';
import {Form, Button, Grid} from 'semantic-ui-react'
import AlertContainer from 'react-alert'


class SignupForm extends React.Component{

	state = {
		username: "",
		password: "",
		email: "",
		passwordConfirmation: "",
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
		if (this.state.password === this.state.passwordConfirmation){
			this.props.signupUser(this.state).then(res => {
				if (res) {
					for (let errorKey in res){
						this.msg.error(errorKey + " " + res[errorKey][0], {time: 4000})
					}
				}
			})
			
		} else {
			this.msg.error("Passwords do not match!",{time: 4000})
		}
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
			<Grid centered columns={3}>
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
						<input required type="email" 
							   value={this.state.email} 
							   placeholder="Email" 
							   name="email"
							   onChange={this.handleChange}/>
					</Form.Field>
					<Form.Field>
						<input required type="password" 
							   value={this.state.password} 
							   placeholder="Password" 
							   name="password"
							   onChange={this.handleChange}/>
					</Form.Field>
					<Form.Field>
						<input required type="password" 
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