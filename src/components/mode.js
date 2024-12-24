import React from 'react'

export default function Mode(prop){
return(
    <div>
        <button onClick={prop.handleTheme}>light-mode</button>
    </div>
)
}