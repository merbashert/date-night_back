import React from 'react';

import Main from './components/Main.js'
import Aside from './components/Aside.js'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            view: {
                page: 'home',
                pageTitle: "Date Nights",
                button: null
            },
            formInputs: {
                moviename: null,
                moviedate: null,
                moviesnack: null,
                id: null
            }
        }
    }


    handleView = (view, dateData) => {
        let pageTitle = ''
        let button = ''
        let formInputs = {
            moviename: '',
            moviedate: '',
            moviesnack: '',
            id: null
        }
        switch(view) {
            case 'home':
            pageTitle = 'Date Nights'
            break
            case 'addDate':
            pageTitle = 'Make a Date!'
            button = "Make a date!"
            break
            case 'editDate':
            pageTitle = "Change of Plans?"
            button = "Update your date!"
            formInputs = {
                moviename: dateData.moviename,
                moviedate: dateData.moviedate,
                moviesnack: dateData.moviesnack,
                id: dateData.id
            }
            break
            case 'movieSearch':
            pageTitle = 'Search for a movie!'
            button = "Search for movie"
            break
            default:
            break

        }
        this.setState({
            view: {
                page: view,
                pageTitle: pageTitle,
                button: button
            },
            formInputs: formInputs
        })

    }


    render () {
        return (
            <div>
            <Aside handleView={this.handleView} className = 'nav-bar'/>
            <Main
            view={this.state.view}
            handleView = {this.handleView}
            formInputs={this.state.formInputs}
            /></div>
        )
    }
}

export default App
