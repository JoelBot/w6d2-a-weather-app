import React from 'react'
import ReactDOM from 'react-dom'

class Button extends React.Component {
    constructor(props) {
        super(props)
        this.addCounter = this.addCounter.bind(this)
        this.state = {
            counter: 0
        }
    }

    addCounter() {
        var updatedCounter = this.state.counter
        updatedCounter++
        this.setState({
            counter: updatedCounter
        })
    }
    render () {
        return <button type="button" className="btn btn-default btn-block" onClick={this.addCounter}>{this.state.counter}</button>
    }
}

ReactDOM.render(<Button />, document.getElementById('react'))
