import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './plugins/App.css'
import {UglyProvider} from './plugins/uglyContext'

ReactDOM.render(
    <UglyProvider>
        <App />
    </UglyProvider>, 
    document.getElementById('root'))