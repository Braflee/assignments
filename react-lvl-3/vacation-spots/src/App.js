import React from 'react'
import Card from './components/Card'
import vacationData from './components/vacationData'
import './App.css'

function App(){
    const cardData = vacationData.map(item => <Card key={item.place} card={item}/>)
    return (
        <div className='cardContainer'>
            {cardData}
        </div>
    )}

export default App