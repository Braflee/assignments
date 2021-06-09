import React from 'react'

function Pets(props){
   return(
   <div>
        <p>{props.pets.name}</p>
        <p>{props.pets.breed}</p>
    </div>
   )}

export default Pets