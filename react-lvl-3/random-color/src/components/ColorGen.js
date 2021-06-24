import React, {Component} from 'react'
import ColorBox from './ColorBox'

class ColorGen extends Component {
    state = {
        color: []
    }

    componentDidMount() {
        fetch(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    color: data.colors
                })
            })
        console.log(this.state.color);
    }

    render(){
        const newColor = this.state.color.map(colr => <ColorBox key={colr.id} colr={colr}/>)
        return(
            <div>
                {newColor}
            </div>
        )
    }

}

export default ColorGen