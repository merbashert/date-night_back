import React from 'react'

class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            moviename: '',
            moviedate: '',
            moviesnack: '',
            id: null
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.id] : e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if(this.props.view.page === 'addDate') {
            this.props.handleCreate(this.state)
        } else if (this.props.view.page === 'editDate') {
            this.props.handleUpdate(this.state)
        }

    }

    componentDidMount(){
        this.setState({
            moviename: this.props.formInputs.moviename,
            moviedate: this.props.formInputs.moviedate,
            moviesnack: this.props.formInputs.moviesnack,
            id: this.props.formInputs.id
        })
    }

    render () {
        return (
            <div className = "center-flex">
            <div className = "date-entry">
            {(this.props.savedMovie) ?
                (<img src={this.props.savedPoster} className="saved-movie-poster"/>):null}
            <form onSubmit={this.handleSubmit}>
            <label id="movie-name">
            {(this.props.savedMovie) ?
                (this.state.moviename=this.props.savedMovie,
                    <div>
                    <div className="saved-movie-name">{this.props.savedMovie}</div></div>)
                    :
                    <input type="text" placeholder="What are you going to watch?" id="moviename" value={this.state.moviename} onChange={this.handleChange}/>}
                    </label>
                    <label id="movie-date">
                    <input type="text" placeholder="What date is your date?" id="moviedate" value={this.state.moviedate} onChange={this.handleChange}/>
                    </label>
                    <label id="snack">
                    <input type="text" placeholder="What are you going to eat?" id="moviesnack" value={this.state.moviesnack} onChange={this.handleChange}></input>
                    </label>
                    <button className = "form-button">{this.props.view.button}</button>
                    </form>
                    </div>
                    </div>
                )
            }
        }

        export default Form
