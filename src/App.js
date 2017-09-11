import React, { Component } from 'react';
import './App.css';
import {Route, Redirect} from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import Auth from './adapters/auth'
import WatchedMovie from './adapters/watchedMovie'
import ProfilePage from './components/ProfilePage'


class App extends Component {

  state = {
    currentUser: {}
  }

  addMovie = (movie) => {
    WatchedMovie.saveMovie(movie, this.state.currentUser.id)
    .then(user=> this.setState({currentUser: user}) )
  }

  componentDidMount(){
    if (localStorage.getItem('jwt')){
      Auth.getUserInfo()
        .then(user => this.setState({currentUser: user}) )
    }
  }

  loginUser = (userParams) => {
    Auth.login(userParams)
      .then(user => {
        localStorage.setItem('jwt', user.jwt)
        this.setState({
          currentUser: user
        })
        
      })
  }

  signupUser = (userParams) => {
    Auth.signup(userParams)
      .then(user => {
        localStorage.setItem('jwt', user.jwt)
        this.setState({
          currentUser: user
        })
        
      })
  }

  checkLoggedIn = (targetLink) => {
    return localStorage.getItem('jwt') ? (
            <Redirect to="/"/>
          ) : (
            targetLink
          )
  }

  render() {
    return (
      <div>
      	<NavBar/>
        <Route exact path='/' component={() => <Home addMovie={this.addMovie} />}/>
        <Route exact path='/login' render={() => this.checkLoggedIn(<LoginForm loginUser={this.loginUser}/>)}/>
        <Route exact path='/signup' render={() => this.checkLoggedIn(<SignupForm signupUser={this.signupUser}/>)}/>
        <Route exact path='/profile' component={ProfilePage}/>
      </div>
    );
  }
}

export default App;


        // <Route exact path='/login' component={LoginForm}/>
        // <Route exact path='/signup' component={SignupForm}/>