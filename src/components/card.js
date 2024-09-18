import React from 'react';
import AddIcon from '@mui/icons-material/Add';
export default function Card(props){
   
    return(
         <div className="cardborder">
          
        <img src={props.image} alt="" />
        
        <h3>{props.header}</h3>
        <AddIcon onClick={props.handleCart}/>
        

        </div>
 )
}