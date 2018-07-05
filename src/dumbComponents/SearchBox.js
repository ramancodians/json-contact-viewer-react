import React, { Component } from "react"

class SeachBox extends Component {

  state = {
    searchText: "",
  }

  handleInput = (e) => {
    const { handleSearch } = this.props
    const value = e.target.value
    this.setState({
      [e.target.name]: value
    }, () => {
      handleSearch(value)
    })
  }

  render() {
    const { searchText } = this.state
    return (
      <div className="search-wrap">
        <input
          type="text"
          value={searchText}
          onChange={this.handleInput}
          name="searchText"
          placeholder="Search by name, email and agency"
        />
      </div>
    )
  }
}

export default SeachBox
