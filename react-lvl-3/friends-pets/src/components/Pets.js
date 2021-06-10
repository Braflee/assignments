import React from 'react'

function Pets(props){
   return(
   <div className='pet'>
        <p>Name- {props.pet.name}</p>
        <p>Breed- {props.pet.breed}</p>
    </div>
   )}

export default Pets