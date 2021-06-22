import React, {Component} from 'react'

class TheForm extends Component {
    constructor() {
        super()
        this.state = {
            favFood: ''
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    placeholder="What's your favorite food?"
                    value={this.state.favFood}
                    name='favFood'
                    onChange={this.handleChange}
                />
                <button>Submit to List</button>
                <h1>{this.state.favFood}</h1>
                <ol>
                    <li>{this.state.favFood}</li>
                </ol>
            </form>
        )
    }
}

export default TheForm