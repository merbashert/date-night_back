import React from 'react'

class Date extends React.Component {

  render () {
    return (
      <article>
        <div className="date-header">
        <h1>{this.props.dateData.moviename}</h1>
        <h3>{this.props.dateData.moviedate}</h3>
        </div>
        <div className='date-body'>
        {this.props.dateData.moviesnack}
        </div>
        <div className="date-options">
        <button onClick={() => {
            {this.props.handleView('editDate', this.props.dateData)}
        }}>edit date</button>
        <button onClick={() => {
            this.props.handleDelete(this.props.dateData.id)
        }}>delete date</button>
        </div>
      </article>
    )
  }
}
// =============================
// EXPORT
// =============================
export default Date
