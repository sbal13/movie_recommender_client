class WatchedMovie {
	static saveMovie(movieId) {
 	    const userJSON = JSON.stringify({movie: movieId})

      const jwtToken = localStorage.getItem("jwt")

    return fetch(`http://localhost:3000/api/v1/add_movie`,{
      method: 'post',
      body: userJSON,
      headers: {
        "Authorization":`Bearer ${jwtToken}`,
        "Content-Type":"application/json",
        "Accept":"application/json"
      }
    }).then(res=>res.json())
	}

  static removeMovie(movieId) {
      const userJSON = JSON.stringify({movie: movieId})

      const jwtToken = localStorage.getItem("jwt")

    return fetch(`http://localhost:3000/api/v1/delete_movie`,{
      method: 'delete',
      body: userJSON,
      headers: {
        "Authorization":`Bearer ${jwtToken}`,
        "Content-Type":"application/json",
        "Accept":"application/json"
      }
    }).then(res=>res.json())
  }

}

export default WatchedMovie