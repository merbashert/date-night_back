import React from 'react'


class Aside extends React.Component {

  render () {
    return (
      <aside>
        <h1>NAVIGATE</h1>
        <ul>
          <li onClick={() => {this.props.handleView('home')}}>Home</li>
          <li onClick={() => {this.props.handleView('addDate')}}>Add Date</li>
        </ul>
      </aside>
    )
  }
}

// =============================
// EXPORT
// =============================
export default Aside
