import React from 'react'
import {LoreConsumer} from './LoreContext'

function Monsters() {
    return (
        <LoreConsumer>
            {context => (
                context.loreArr.map(card => {
                    return (
                        <div className='card-cont'>
                            <div key={card.id}>
                                <div className='flip-card'>
                                    <div className='flip-card-inner'>
                                        <div className='flip-card-front'>
                                            <img src={card.image} alt='charImg' />
                                        </div>
                                        <div className='flip-card-back'>
                                            <h1>Name: {card.name}</h1>
                                            <h3>Class: {card.class}</h3>
                                        </div>
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

export default Monsters
