import React from 'react'

class Search extends React.Component {
  render () {
    return (
      <input type="text" placeholder="Search..." onInput={this.props.updateQuery} />
    )
  }
}

export default Search