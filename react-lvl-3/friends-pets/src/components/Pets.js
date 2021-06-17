import React from 'react'

function Pets(props){
   return(
   <div className='pet'>
        <p>{props.pet.name} the {props.pet.breed}.</p>
    </div>
   )}

export default Pets