import React from "react";
import {Link} from 'react-router-dom'

export default function Search(prop){



return (
    <div className="search-icon">
        <Link to='/search'><input type="text" placeholder="search" className='search' value={prop.searchQuery} onChange={prop.search}/></Link>
        {prop.filteredSuggestions.length > 0 && (
        <ul className="suggestions-list">
          {prop.filteredSuggestions.map((suggestion, index) => (
                    <div>
<li
              key={index}
              onClick={() => prop.handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
            </div>
          ))}
        </ul>
      )}
    </div>
)


}




