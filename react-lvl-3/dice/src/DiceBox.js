import React from 'react'

function DiceBox(props) {
    return (
        <div>
            <h1>Pretend these are dice..?</h1>
            <h3>Number : {props.number.num1}</h3>
            <h3>Number : {props.number.num2}</h3>
            <h3>Number : {props.number.num3}</h3>
            <h3>Number : {props.number.num4}</h3>
            <h3>Number : {props.number.num5}</h3>
        </div>
    )
    
}

export default DiceBox