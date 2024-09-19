import React from "react";


export default function Search(prop){



return (
    <div className="search-icon">
        <input type="text" placeholder="search" className='search' value={prop.searchQuery} onChange={prop.search}/>
        
    </div>
)


}