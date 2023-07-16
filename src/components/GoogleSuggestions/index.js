// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  updateSearchBox = value => {
    this.setState({
      searchInput: value,
    })
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResult = suggestionsList.filter(eachTitle =>
      eachTitle.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="suggestion-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-image"
        />
        <div className="suggestion-card-container">
          <div className="search-box-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="search-icon"
              alt=" search icon"
            />
            <input
              type="search"
              className="search-box"
              placeholder="Search google"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
          </div>
          <ul className="suggestion-list-container">
            {searchResult.map(eachSuggestion => (
              <SuggestionItem
                key={eachSuggestion.id}
                suggestionDetails={eachSuggestion}
                updateSearchBox={this.updateSearchBox}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
