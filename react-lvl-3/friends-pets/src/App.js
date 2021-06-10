import React from 'react'
import Friend from './components/Friend'
import friendData from './components/friendList'
import './App.css'

function App(){
    const data = friendData.map(friend => <Friend key={friend.id} friend={friend} pets={friend.pets}/> )
    return (
        <div className='friendBox'>
            {data}
        </div>
    )
}

export default App