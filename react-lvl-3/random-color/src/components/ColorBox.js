import React from 'react'

function ColorBox(props) {
    return(
        <div className='colorBox' style={{backgroundColor: '#' + props.colr.hex}}></div>
    )
}

export default ColorBox