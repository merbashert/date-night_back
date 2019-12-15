import React from 'react'

import Date from './Date.js'
import Form from './Form.js'
import MovieSearch from './MovieSearch'


let baseUrl = '';
if (process.env.NODE_ENV === 'development') {
    baseUrl = 'http://localhost:8888'
} else {
    console.log('this is for heroku');
}

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dates: []
        }
    }

    fetchDates = () => {
        fetch(`${baseUrl}/dates`)
        .then(data => data.json())
        .then(jData => {
            this.setState({dates:jData})
        }).catch(err=>console.log(err))
    }

    handleCreate = (createData, savedMovie) => {
        fetch(`${baseUrl}/dates`, {
            body: JSON.stringify(createData),
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(createdDate => {
            return createdDate.json()
        })
        .then(json => {
            this.props.handleView('home')
            this.setState({
                dates: json,
                savedMovie: savedMovie
            })
        })
        .catch(err=>console.log(err))
    }

    handleUpdate = (updateData) => {
        fetch(`${baseUrl}/dates/${updateData.id}`, {
            body: JSON.stringify(updateData),
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(updatedDate => {
            this.props.handleView('home')
            this.fetchDates()
        }).catch(err=>console.log(err))
    }

    handleDelete = (id) => {
        fetch(`${baseUrl}/dates/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(json => {
            this.setState({
                dates: this.state.dates.filter(date => date.id !== id)

            })
        }).catch(err=>console.log(err))
    }


    saveMovie = (movie, poster) => {
        this.setState({
            savedMovie: movie,
            savedPoster: poster
        }, () => {
            {this.props.handleView('addDate')};
        })
    }



    componentDidMount(){//loads right after the page does
        this.fetchDates()
    }


    render () {

        return (
            <>
            <h1>{this.props.view.pageTitle}</h1>
            <main className = "main">
            {this.props.view.page === 'home'
            ? this.state.dates.map((dateData) => (
                <Date key={dateData.id} dateData={dateData} handleView={this.props.handleView} handleDelete={this.handleDelete}/>))
              : this.props.view.page === 'movieSearch' ? <MovieSearch movie = {this.state.movie} saveMovie={this.saveMovie}/>
              : <Form handleCreate={this.handleCreate}button={this.props.view.button} formInputs={this.props.formInputs}
            handleUpdate={this.handleUpdate} view={this.props.view} savedMovie={this.state.savedMovie} savedPoster={this.state.savedPoster}/>
        }
        </main>
        </>
    )
}
}

export default Main
