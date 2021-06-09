import React from 'react'
import Friend from './Friend'
import friendData from './friendList'

function App(){
    const data = friendData.map(friend => <Friend key={friend.id} friend={friend} pets={friend.pets}/> )
    return (
        <div>
            {data}
        </div>
    )
}

export default App