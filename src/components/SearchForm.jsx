
const SearchForm = () => {
  
  const handleFormSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="search-container">
      <form className="search-form">
        <input type="text" className='search-input' id="search" autoFocus placeholder="Enter City"/>
        <button type="submit" className='search-button' onSubmit={handleFormSubmit}>Search</button>
      </form>
    </div>
  )
}

export default SearchForm