import React from 'react'


export default function sidebar(props){
    return(
        <div>
            
                <a href={props.link}>{props.title}</a>
            
        </div>
    )
}