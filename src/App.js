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
import {Message} from 'semantic-ui-react'


class App extends Component {

  state = {
    currentUser: {},
    currentUserMovies: [],
    signupMessage: true
  }

  addMovie = (movie) => {
    WatchedMovie.saveMovie(movie)
    .then(json=> this.setState({currentUser: json.user, currentUserMovies: json.movies}, alert(json.message)) )
  }

  removeMovie = (movie) => {
    WatchedMovie.removeMovie(movie)
    .then(json=> this.setState({currentUser: json.user, currentUserMovies: json.movies}, alert(json.message)) )
  }

  componentDidMount(){
    if (localStorage.getItem('jwt')){
      Auth.getUserInfo()
        .then(json => this.setState({currentUser: json.user, currentUserMovies: json.movies }) )
    }
  }

  loginUser = (userParams) => {
    return Auth.login(userParams)
      .then(user => {
        if (user.message){
          return user
        } else {
          localStorage.setItem('jwt', user.jwt)
          this.setState({
            currentUser: user
          })
        }
        
        
      })
  }

  signupUser = (userParams) => {
    return Auth.signup(userParams)
      .then(user => {

        if (user.success) {
          localStorage.setItem('jwt', user.jwt)
          this.setState({
            currentUser: user,
            signupMessage: false
          })
        } else {
          return user
        }
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
        <Message
          success
          header="Welcome to Movie Recommender!"
          content="Signup Successful!"
          hidden={this.state.signupMessage}
        />
        <Route exact path='/' render={() => <Home currentUserMovies={this.state.currentUserMovies} addMovie={this.addMovie} />}/>
        <Route exact path='/login' render={() => this.checkLoggedIn(<LoginForm loginUser={this.loginUser}/>)}/>
        <Route exact path='/signup' render={() => this.checkLoggedIn(<SignupForm signupUser={this.signupUser}/>)}/>
        <Route exact path='/profile' render={() => <ProfilePage user={this.state.currentUser} movies={this.state.currentUserMovies} removeMovie={this.removeMovie}/>}/>
      </div>
    );
  }
}

export default App;


        // <Route exact path='/login' component={LoginForm}/>
        // <Route exact path='/signup' component={SignupForm}/>