import React, {useState} from 'react'

function AddTarget() {
    const initTarget = {
        fName: '',
        lName: '',
        eliminated: false,
        bounty: '',
        type: ''
    }
    const [input, setInput] = useState()

    return (
        <form>
          <input 
            type="text" 
            name='' 
            value={} 
            onChange={} 
            placeholder='' />  
          <input 
            type="text" 
            name='' 
            value={} 
            onChange={} 
            placeholder='' />  
        <button></button>
        </form>
    )
}

export default AddTarget
