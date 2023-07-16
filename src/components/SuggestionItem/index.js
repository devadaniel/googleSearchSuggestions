// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updateSearchBox} = props
  const {suggestion} = suggestionDetails

  const onEventSearchBox = () => {
    updateSearchBox(suggestion)
  }

  return (
    <li className="suggestion-lit-container">
      <p className="suggestion">{suggestion}</p>
      <button type="button" className="arrow-button" onClick={onEventSearchBox}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-image"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
