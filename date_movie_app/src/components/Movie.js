import React from 'react'

class MovieInfo extends React.Component {
    render() {
        return (

            <div className = "movie-result">

            <div className = "movie-poster">
                <img src={this.props.movie.Poster} alt={this.props.movie.Title}/>
                </div>
                <div className="movie-info">
            <h2>Title: {this.props.movie.Title}</h2>
            <h3>Year: {this.props.movie.Year}</h3>

            <h4>Genre: {this.props.movie.Genre}</h4>
            <h5>Plot: {this.props.movie.Plot}</h5>
            <div className="save-movie">
            <button onClick={() => this.props.saveMovie(this.props.movie.Title, this.props.movie.Poster)}>Save Movie</button>
            </div>
            </div>
            </div>
        )
    }
}

export default MovieInfo
