import React from 'react'
import filmIcon from './filmicon.jpg'

class Date extends React.Component {

    render () {
        return (
            <div className = "card">
            <div className = "movieposter">
            {(this.props.dateData.movieposter)?<img src={this.props.dateData.movieposter} alt='movie poster'/>:<img src={filmIcon}/>}
            </div>
            <div className="movieinfo">
            <div className="moviedata">
            <div className="moviename">
            <h2>{this.props.dateData.moviename}</h2>
            </div>
            <div className="moviedate">
            <h3>{this.props.dateData.moviedate}</h3>
            </div>
            <div className="moviesnack">
            <h3>{this.props.dateData.moviesnack}</h3>
            </div>
            </div>
            <div className="date-options">
            <button onClick={() => {
                this.props.handleView('editDate', this.props.dateData)}
            }>Edit Date</button>
            <button onClick={() => {
                this.props.handleDelete(this.props.dateData.id)
            }}>Delete Date</button>
            </div>
            </div>
            </div>

        )
    }
}
// =============================
// EXPORT
// =============================
export default Date
