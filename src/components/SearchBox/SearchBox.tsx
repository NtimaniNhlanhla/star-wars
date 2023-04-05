import React from 'react'
import './SearchBox.css'

function SearchBox(props: { searchChange: any}) {

  return (
    <div className="search">
    <input
      className="search-text"
      type="search"
      placeholder="Search Movies"
      onChange={props.searchChange}
    />
  </div>
  )
}

export default SearchBox