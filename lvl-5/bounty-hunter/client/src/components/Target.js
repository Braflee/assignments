import React from 'react'

function Target(props) {
    const {fName, lName, bounty, type, _id} = props
    return (
        <div className='target'>
            <h1>{fName} {lName}</h1>
            <p>{bounty}</p>
            <p>{type}</p>
            <button 
                onClick={() => props.deleteTarget(_id)}
                className='delete-btn'>Delete</button>
        </div>
    )
}

export default Target
