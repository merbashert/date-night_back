import React from 'react'

class Date extends React.Component {

    render () {
        return (
            <div className = "card">
            <div className = "movieposter">
            <img src={this.props.dateData.movieposter}/>
            </div>
            <div className="moviename">
            <h3>{this.props.dateData.moviename}</h3>
            </div>
            <div className="moviedate">
            <h3>{this.props.dateData.moviedate}</h3>
            </div>
            <div className="moviesnack">
            <h3>{this.props.dateData.moviesnack}</h3>
            </div>

            <div className="date-options">
            <button onClick={() => {
                {this.props.handleView('editDate', this.props.dateData)}
            }}>Edit Date</button>
            <button onClick={() => {
                this.props.handleDelete(this.props.dateData.id)
            }}>Delete Date</button>
            </div>
            </div>

        )
    }
}
// =============================
// EXPORT
// =============================
export default Date
