import React from 'react'
import Friends from './components/Friend'
import friendData from './friendList'

function App(){
    const data = friendData.map(friend => <Friends key={friend.name}/> )
    return (
        <div>

        </div>
    )
}

export default App