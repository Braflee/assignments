import React from 'react'
import {ThemeConsumer} from './themeContext'

function Body(props) {
    return (
        <ThemeConsumer>
            {context => (
                <div className={`${context.theme}-theme`}>
                    <h1>Checkout these too super cool themes!</h1>
                    <button onClick={context.toggleTheme} className={`${context.theme}-theme`}>Toggle Theme</button>
                </div>
            )}
        </ThemeConsumer>
    )
}

export default Body