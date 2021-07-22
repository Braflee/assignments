import React from 'react'
import {ThemeConsumer} from './themeContext'
function Footer(props) {
    return (
        <ThemeConsumer>
            {context => (
                <div className={`${context.theme}-theme`}>
                    <h1>FOOTER</h1>
                </div>      
            )}
        </ThemeConsumer>
    )
}

export default Footer