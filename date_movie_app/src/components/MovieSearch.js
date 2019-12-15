import React from 'react'
import MovieInfo from './Movie'

class MovieSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            baseURL: 'http://www.omdbapi.com/?',
            apikey: 'apikey=' + '8d4170a0',
            query: '&t=',
            movieTitle: '',
            searchURL: '',
            movie: {}
        }
    }

    handleChangeMovie = (e) => {
        this.setState({[e.target.id] : e.target.value})
    }

    handleMovie = (event) => {
        event.preventDefault()
        this.setState({
            searchURL: this.state.baseURL + this.state.apikey + this.state.query + this.state.movieTitle
        }, () => {
            fetch(this.state.searchURL)
            .then(response => {
                return response.json()
                // console.log(response.json());
            }).then(json => this.setState({
                movie: json,
                movieTitle: ''
            }),
            err => console.log(err)
        )
    })
}

render() {
    return (
        <div className = "movie-search">
        <form
        onSubmit={this.handleMovie}>
        <label htmlFor="movieTitle">Movie Title </label>
        <input
        type = 'text'
        id='movieTitle'
        value={this.state.movieTitle}
        onChange={this.handleChangeMovie}
        /><br/>
        <input
        type='submit'
        value="Find Movie Info"
        />
        <button onClick={() => {this.props.handleView('home')}}>Cancel</button>
        </form>
        {
            (this.state.movie.Title && !this.state.movie.Error) ? <MovieInfo movie = {this.state.movie} saveMovie = {this.props.saveMovie}/> : (this.state.movie.Error)?<h1>Nothing Found!  Try again!</h1>:null
            //add response for when no value
        }

        </div>
    )
}
}



export default MovieSearch
