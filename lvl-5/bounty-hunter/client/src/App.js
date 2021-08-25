import React, {useState, useEffect} from 'react'
import Target from './components/Target'
import AddTarget from './components/TargetForm'
import axios from 'axios'

function App(props) {
    const [targets, setTargets] = useState([])

    function getTargets() {
        axios.get('/targets')
            .then(res => setTargets(res.data))
            .catch(err => console.log(err))
    }

    function addTarget(newTarget) {
        axios.post('/targets', newTarget)
            .then(res => {
                setTargets(prevTarget => [...prevTarget, res.data])
            })
            .catch(err => console.log(err))
    }

    function deleteTarget(targetID) {
        axios.delete(`/targets/${targetID}`)
        .then(res => {
            setTargets(prevTarget => prevTarget.filter(target => target._id !== targetID))
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getTargets()
    }, [])

    return(
        <div>
            <div className='target-cont'>
                <AddTarget addTarget={addTarget} />
                {targets.map(target => 
                    <Target 
                        {...target} 
                        key={target._id}
                        deleteTarget={deleteTarget}/>)}
            </div>
        </div>
    )
}

export default App