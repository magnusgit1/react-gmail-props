
function SearchBar({input, setInput}) {

    const handleInput = (it) => {
        setInput(it.target.value)
    }
    return (
        <>
        <div className="search">
          <input className="search-bar" placeholder="Search mail" 
          value={input}
          onChange={handleInput}/>
        </div>
        </>
    )
}

export default SearchBar