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

    proClickLeft = () => {
        this.setState({
            colors: [this.state.colors[0], this.state.colors[1], 'blue', this.state.colors[3]]
        })
    }

    proClickRight = () => {
        this.setState({
            colors: [this.state.colors[0], this.state.colors[1], this.state.colors[2], 'blue']
        })
    }

    randOne = () => {
        this.setState({
            colors: ['chocolate', 'cyan', 'purple', 'yellow']
        })
    }

    randTwo = () => {
        this.setState({
            colors: ['coral', 'firebrick', 'salmon', 'darkorange']
        })
    }

    randThree = () => {
        this.setState({
            colors: ['limegreen', 'lime', 'olive', 'mediumseagreen']
        })
    }

    randFour = () => {
        this.setState({
            colors: ['dodgerblue', 'midnightblue', 'mediumslateblue', 'darkslateblue']
        })
    }

    render(){
        const squareColor = this.state.colors.map(color => <Square key={color.index} color={color}/>)
        return (
            <div className='djTable'>
                <div className='squareCont'>
                    {squareColor}
                </div>
                <div className='btnCont'>
                <button onClick={this.smallClick}>Small Dj</button>
                <button onClick={this.partyClick}>Party Dj</button>
                <button onClick={this.proClickLeft}>Left Blue</button>
                <button onClick={this.proClickRight}>Right Blue</button>
                <button onClick={this.randOne}>Rando One</button>
                <button onClick={this.randTwo}>Rando Two</button>
                <button onClick={this.randThree}>Rando Three</button>
                <button onClick={this.randFour}>Rando Four</button>
                </div>
            </div>
        )
    }
}

export default App