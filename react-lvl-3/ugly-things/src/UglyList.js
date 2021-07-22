import React from 'react'
import {UglyConsumer} from './plugins/uglyContext'

function UglyList(props) {
    return (
        
        <UglyConsumer>
            {context => (
                <div>
                    {context.uglyArr.map(thing => {
                        return(
                        <div key='index'>
                            <img src={`${thing.imgUrl}`}/>
                            <h1>{thing.title}</h1> 
                            <h1>{thing.description}</h1> 
                        </div>
                    )})}
                </div>
            )}
        </UglyConsumer>
    )
}

export default UglyList