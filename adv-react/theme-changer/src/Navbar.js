import React from 'react'
import {ThemeConsumer} from './themeContext'

function Navbar(props) {
    return (
        <ThemeConsumer>
            {context => (
                <div className={`${context.theme}-theme`}>
                    <h1>About</h1>
                    <h1>Home</h1>
                    <h1>Contact</h1>
                </div>
            )}
        </ThemeConsumer>
    )
}

export default Navbar