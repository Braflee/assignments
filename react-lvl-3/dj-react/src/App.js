import React, {Component} from 'react'
import Square from './Square'
import './App.css'

class App extends Component {
    constructor() {
        super()
        this.state= {
            colors: ['white', 'white', 'white', 'white']
        }
    }

    smallClick = () => {
        this.setState(prevState => {
            return {
                colors: prevState.colors.map(color => {
                    if(color !== 'white'){
                        return 'white'
                    } else {
                        return 'black'
                    }
                })
            }
        })
    }

    partyClick = () => {
        this.setState({
            colors: ['purple', 'purple', this.state.colors[2], this.state.colors[3]]
        })
    }

    render(){
        const squareColor = this.state.colors.map(color => <Square key={color.index} color={color}/>)
        return (
            <div className='djTable'>
                <div className='squareCont'>
                    {squareColor}
                </div>
                <button onClick={this.smallClick}>Small Dj</button>
                <button onClick={this.partyClick}>Party Dj</button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
            </div>
        )
    }
}

export default App