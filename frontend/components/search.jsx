import React from 'react'

class Search extends React.Component {
  componentDidMount() {
    this.props.updateQuery({target: {value: ""}})
  }

  render () {
    return (
      <header>
        <input type="text" placeholder="Search..." onInput={this.props.updateQuery} />
        <span>{this.props.list.length > 9 ? "at least " : ""}{this.props.list.length} matches</span>
        <ul>
          <li key="title-li">Matches:</li>
          {this.props.list.map(item => (<li key={`${item.title} ${item.locations}`}>{item.title}</li>))}
        </ul>
      </header>
    )
  }
}

export default Search
