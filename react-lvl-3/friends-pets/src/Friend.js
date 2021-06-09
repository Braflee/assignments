import React from 'react'
import Pets from './Pets'
function Friends(props){
    return(
        <div>
            <h2>Name: {props.friend.name}</h2>
            <h2>Age: {props.friend.age}</h2>
            <h2>Pets: {props.friend.pets.map(pet => <Pets pet={pet.name}/>)}</h2>
        </div>
    )
}

export default Friends