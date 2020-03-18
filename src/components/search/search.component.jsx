import React from 'react';
import "./search.style.css";

const Search = ({handleSearch}) => {
    return (  
        <div className="search-container">
            <input onChange={handleSearch} placeholder="Search by country"/>
        </div>
    );
}

 
export default Search;