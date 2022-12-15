const Search = ({ handleSearch }) => {
    const serchTextHandler = (e) => {
        const searchText = e.target.value;
        if (searchText.trim().length > 0) {
            //console.log(searchText);
            handleSearch(searchText);
        }
    }

    return(
        <div className="search">
            <i className="fas fa-search search-icons"></i>
            <input 
                type="text" 
                placeholder="Type to Search..."
                onChange={serchTextHandler}
            />
        </div>
    );
}

export default Search;