import React from 'react'



function SearchBar(){
    return(
        <div className="search">
            <div className="searchInputs">
                <input type="text"  placeholder='Search'/>
                <div className="searchIcon"></div>
            </div>
            <div className="dataResult"></div>
        </div>
    )
}

export default SearchBar;
