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
            <form onSubmit={this.handleSubmit}>

            <label id="movie-name">
            <input type="text" placeholder="What are you going to watch?" id="moviename" value={this.state.moviename} onChange={this.handleChange}/>
            </label>
            <br/>
            <label id="movie-date">
            <input type="text" placeholder="What date is your date?" id="moviedate" value={this.state.moviedate} onChange={this.handleChange}/>
            </label>
            <br/>
            <label id="snack">
            <input type="text" placeholder="What are you going to eat?" id="moviesnack" value={this.state.moviesnack} onChange={this.handleChange}></input>
            </label>
            <br/>
            <button className = "form-button">{this.props.view.button}</button>
            </form>
            </div>
            </div>
        )
    }
}

export default Form
