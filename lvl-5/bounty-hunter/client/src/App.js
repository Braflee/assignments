import React, {useState, useEffect} from 'react'
import Target from './components/Target'
import axios from 'axios'

function App(props) {
    const [targets, setTargets] = useState([])

    function getTargets() {
        axios.get('/targets')
            .then(res => setTargets(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getTargets()
    }, [])

    return(
        <div>
            {targets.map(target => <Target {...target} key={target._id}/>)}
        </div>
    )
}

export default App