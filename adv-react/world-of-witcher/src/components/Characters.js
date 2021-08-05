import React from 'react'
import {LoreConsumer} from './LoreContext'

function Characters() {
    return (
        <LoreConsumer>
            {context => (
                context.loreArr.map(card => {
                    return (
                            <div className='card-cont'>
                                <div className='flip-card'>
                                    <div className='flip-card-inner'>
                                        <div className='flip-card-front' style={{backgroundImage: `url(${card.image})`}}>
                                        </div>
                                        <div className='flip-card-back'>
                                            <h1>Name: {card.name}</h1>
                                            <h3>Gender: {card.gender}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    )
                })
            )}
        </LoreConsumer>
    )
}

export default Characters
