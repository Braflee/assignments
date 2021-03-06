import React from 'react'
class States extends React.Component {
    constructor() {
        super()
        this.state = {
            randomImg: "",
            memeArray: []
        }
        this.shuffleButton = this.shuffleButton.bind(this)
    }
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(res => {
                const { memes } = res.data
                console.log(memes)
                this.setState({ memeArray: memes })
            })
    }
    shuffleButton = e => {
        e.preventDefault()
        const randomIndex = Math.floor(Math.random() * this.state.memeArray.length)
        const randMemeImg = this.state.memeArray[randomIndex].url
        this.setState({ randomImg: randMemeImg })
    }
    render() {
        return (
            <div>
                <form>
                    <button onClick={this.shuffleButton}>Shuffle</button>
                    <img src={this.state.randomImg} />
                </form>
            </div>
        )
    }
}
export default States