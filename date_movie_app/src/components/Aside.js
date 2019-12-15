import React from 'react'


class Aside extends React.Component {

  render () {
    return (
      <aside>
        <ul className = "nav-bar">
          <li onClick={() => {this.props.handleView('home')}}>Home</li>
          <li onClick={() => {this.props.handleView('addDate')}}>Add Date</li>
          <li onClick={() => {this.props.handleView('movieSearch')}}>Search for movie</li>
        </ul>
      </aside>
    )
  }
}

// =============================
// EXPORT
// =============================
export default Aside
