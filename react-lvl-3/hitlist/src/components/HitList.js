import React, {Component} from 'react'
import Target from './Target'

class HitList extends Component {
    state = {
        marks: [{}]
    }

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    marks: data
                })
            })
    }

    render() {
        const hitCompiler = this.state.marks.map(mark => <Target key={mark} mark={mark}/>)
        return(
            <div className='hitList'>
                {hitCompiler}
            </div>
        )
    }

}

export default HitList