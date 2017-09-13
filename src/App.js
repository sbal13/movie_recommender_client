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
import AlertContainer from 'react-alert'



class App extends Component {

  state = {
    currentUser: {},
    currentUserMovies: []
  }

  alertOptions = {
    offset: 0,
    position: 'top left',
    theme: 'light',
    time: 5000,
    transition: 'fade'
  }

  addMovie = (movie) => {
    console.log(movie)
    WatchedMovie.saveMovie(movie.id)
    .then(json=> {
      this.msg.success(movie.title + " Saved to Your List",{ time: 4000 })
      this.setState({currentUser: json.user, currentUserMovies: json.movies}) 
    })
  }

  removeMovie = (movie) => {
    WatchedMovie.removeMovie(movie.id)
    .then(json=> {
      this.msg.info(movie.title + " Removed from Your List",{ time: 4000 })
      this.setState({currentUser: json.user, currentUserMovies: json.movies})
    })
  }

  componentDidMount(){
    if (localStorage.getItem('jwt')){
      Auth.getUserInfo()
        .then(json => this.setState({currentUser: json.user, currentUserMovies: json.movies }) )
    }
  }

  loginUser = (userParams) => {
    return Auth.login(userParams)
      .then(res => {
        if (res.message){
          return res
        } else {
          localStorage.setItem('jwt', res.jwt)
          this.msg.success(`WELCOME BACK ${res.user.username.toUpperCase()}!`,{ time: 4000 })
          this.setState({currentUser: res.user, currentUserMovies: res.movies})
        }
        
        
      })
  }

  signupUser = (userParams) => {
    return Auth.signup(userParams)
      .then(res => {

        if (res.success) {
          localStorage.setItem('jwt', res.jwt)
          this.msg.success('WELCOME TO FABULA MAGNA!',{ time: 4000 })
          this.setState({currentUser: res.user})
        } else {
          return res
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
      	<NavBar currentUser={this.state.currentUser}/>
        <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
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