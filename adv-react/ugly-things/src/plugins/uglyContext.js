import React, {Component} from 'react'
import axios from 'axios'
const {Provider, Consumer} = React.createContext()

class UglyProvider extends Component {
    state = {
        uglyArr: [],
        title: '',
        description: '',
        imgUrl: '',
        isEdit: false
    }

    // getUglyData = () => {
    // }
    
    componentDidMount() {
        axios.get(`https://api.vschool.io/duffy/thing`)
            .then(res => res)
            .then(res => {
                this.setState({uglyArr: [...res.data]})
            })
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const newUggo = {
            title: this.state.title,
            description: this.state.description,
            imgUrl: this.state.imgUrl
        }

        axios.post(`https://api.vschool.io/duffy/thing`, newUggo)
            .then(res => {
                console.log(res)
                console.log(res.data)
                this.setState(prevState => ({
                    ...prevState,
                    uglyArr: [...prevState.uglyArr, res.data]
                }))
            })
        
        this.setState({
            title: '',
            description: '',
            imgUrl: ''
        })

    }
     
    handleDelete = (id) => {
        axios.delete(`https://api.vschool.io/duffy/thing/${id}`)
            .then(res => {
                console.log(res)
                console.log(res.data)
                const rmUggo = this.state.uglyArr.filter(item => item._id !== id)
                this.setState({uglyArr: rmUggo})
            })
    }

    handelEdit = (id, edits) => {
        const uggoEdit = this.state.uglyArr.map(item => 
                item._id === id ? {...item, edits} : item
            )

        axios.put(`https://api.vschool.io/duffy/thing/${id}`)
            .then(res => {
                this.setState(prevState => ({
                    ...prevState,
                    uglyArr: uggoEdit
                }))
            })
    }

    render() {
        return (
            <Provider value={{
                uglyArr: this.state.uglyArr,
                title: this.state.title,
                description: this.state.description,
                imgUrl: this.state.imgUrl,
                id: this.state._id,
                handleChange: this.handleChange,
                handleSubmit: this.handleSubmit,
                handleDelete: this.handleDelete
            }}>
                {this.props.children}
            </Provider>
        )
    }

}

export {UglyProvider, Consumer as UglyConsumer}
