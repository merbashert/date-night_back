import React from 'react'

import Date from './Date.js'
import Form from './Form.js'

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

    handleCreate = (createData) => {
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
                dates: json
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
    componentDidMount(){//loads right after the page does
        this.fetchDates()
    }


    render () {
        return (
            <main>
            <h1>{this.props.view.pageTitle}</h1>
            {this.props.view.page === 'home'
            ? this.state.dates.map((dateData) => (
                <Date
                key={dateData.id}
                dateData={dateData}
                handleView={this.props.handleView}
                handleDelete={this.handleDelete}
                />
            ))
            : <Form handleCreate={this.handleCreate}button={this.props.view.button} formInputs={this.props.formInputs}
            handleUpdate={this.handleUpdate} view={this.props.view}/>
        }
        </main>
    )
}
}

export default Main
