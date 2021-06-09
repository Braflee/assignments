import React from 'react'

function Card(props) {
    return (
        <div className="vacationCard">
            <h3 className='place'>{props.card.place}</h3>
            <p className='price'>{props.card.price.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</p>
            <p className='time'>Time to go: {props.card.timeToGo}</p>
        </div>
    )
}

export default Card