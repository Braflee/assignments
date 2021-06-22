import React, {Component} from 'react'

class TheForm extends Component {
    constructor() {
        super()
        this.state = {
            currentFood: '',
            foods: []
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
        this.setState(prevState => ({
            foods: [...prevState.foods, prevState.currentFood]
        }))
    }

    render() {
        const allFoods = this.state.foods.map(food => {
           return (<li>
                {food}
            </li>)
        })

        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    placeholder="What's your favorite food?"
                    value={this.state.currentFood}
                    name='currentFood'
                    onChange={this.handleChange}
                />
                <button>Submit to List</button>
                <h1>{this.state.currentFood}</h1>
                <ol>
                    {allFoods}
                </ol>
            </form>
        )
    }
}

export default TheForm