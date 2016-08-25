import React from 'react'

class Search extends React.Component {
  render () {
    debugger
    return (
      <header>
        <input type="text" placeholder="Search..." onInput={this.props.updateQuery} />
        <ul>
          {this.props.list.map(place => (<li>{place.locations}</li>))}
        </ul>
      </header>
    )
  }
}

export default Search