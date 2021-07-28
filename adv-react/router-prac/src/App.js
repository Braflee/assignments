import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'

import Home from './Home'
import About from './About'
import Services from './Services'

function App(props) {
    return (
        <div>
            <Link to='/'>Home</Link>
                <hr />
            <Link to='/about'>About</Link>
                <hr />
            <Link to='/services'>Services</Link>

            <Switch>
                <Route exact path='/'>
                   <Home /> 
                </Route>
                <Route path='/about'>
                    <About />
                </Route>
                <Route path='/services'>
                    <Services />
                </Route>
            </Switch>
        </div>
    )
}

export default App