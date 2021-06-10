import React from 'react'
import Pets from './Pets'
function Friends(props){
    const petData = props.pets.map(pet => <Pets key={pet.name} pet={pet}/>)
    return(
        <div className='friend'>
            <h2>Friend- {props.friend.name}</h2>
            <h2>Age- {props.friend.age}</h2>
            <h2>Pets: {petData}</h2>
        </div>
    )
}

export default Friends