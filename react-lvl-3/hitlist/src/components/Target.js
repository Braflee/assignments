import React from 'react'

function Target(props) {
    return(
        <div className='target'>
            <img src={props.mark.image}></img>
            <h1>{props.mark.name}</h1>
        </div>
    )
}

export default Target