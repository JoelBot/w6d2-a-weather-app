import React from 'react'
import classAutoBind from 'react-helpers/dist/classAutoBind'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'

class Editor extends React.Component {
    constructor(props) {
        super(props)
        // classAutoBind(this)
        this.updatePageText = this.updatePageText.bind(this)

        this.state = sharedState()
        // this.state = {
        //     pageText: ''
        // }
        // console.log('creating...')
    }
    componentDidMount() {
        attachSharedState(this)
    }
    componentWillUnmount() {
        detachSharedState(this)
    }
    updatePageText(e) {
        sharedState({
            pageText: e.target.value
        })
    }

    render() {
        return <div>
        <h1>Editor View</h1>
        <textarea className="form-control" onChange={this.updatePageText} value={this.state.pageText}></textarea>
        <p>{this.state.pageText}</p>
        </div>
    }

}

export default Editor
