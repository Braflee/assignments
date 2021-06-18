import React, {Component} from 'react'
import DiceBox from './DiceBox'

class App extends Component {
    constructor(){
        super()
        this.state = {
            numbers:[{
                num1: 0,
                num2: 0,
                num3: 0,
                num4: 0,
                num5: 0
            }]
        }
    }

    roll = () => {
        this.setState(prevState => {
            return {
                numbers: [{
                    num1: prevState.num1 = Math.floor(Math.random() * 6),
                    num2: prevState.num2 = Math.floor(Math.random() * 6),
                    num3: prevState.num3 = Math.floor(Math.random() * 6),
                    num4: prevState.num4 = Math.floor(Math.random() * 6),
                    num5: prevState.num5 = Math.floor(Math.random() * 6)
                }]
            }
        })
    }

    reset = () => {
        this.setState(prevState => {
            return {
                numbers: [{
                    num1: 0,
                    num2: 0,
                    num3: 0,
                    num4: 0,
                    num5: 0
                }]
            }
        })
    }

    render(){
        const diceDisplay = this.state.numbers.map(number => <DiceBox key={number.index} number={number}/>)
        return(
            <div>
                {diceDisplay}
                <button onClick={this.roll}>Roll</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}

export default App