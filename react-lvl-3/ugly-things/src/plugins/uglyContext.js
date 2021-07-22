import React, {Component} from 'react'
import axios from 'axios'
const {Provider, Consumer} = React.createContext()

class UglyProvider extends Component {
    state = {
        uglyArr: [],
        title: '',
        description: '',
        imgUrl: ''
    }

    componentDidMount() {
        axios.get(`https://api.vschool.io/duffy/thing`)
            .then(res => res)
            .then(res => {
                this.setState({uglyArr: [...res.data]})
            })
            console.log(this.uglyArr);
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    handleSubmit = () => {
        const newUggo = {
            title: this.state.title,
            description: this.state.description,
            imgUrl: this.state.imgUrl
        }

        axios.post(`https://api.vschool.io/duffy/thing`, {newUggo})
            .then(res => console.log(res.data))
            .catch(res => console.log(res.data))

    }
     
    render() {
        return (
            <Provider value={{
                uglyArr: this.state.uglyArr,
                title: this.state.title,
                description: this.state.description,
                imgUrl: this.state.imgUrl,
                id: this.state.id,
                handleChange: this.handleChange,
                handleSubmit: this.handleSubmit
            }}>
                {this.props.children}
            </Provider>
        )
    }

}

export {UglyProvider, Consumer as UglyConsumer}
