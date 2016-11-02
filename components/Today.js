import React from 'react'
import { Link } from 'react-router' // Allows you to link to different routes realtime
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'
import classAutoBind from 'react-helpers/dist/classAutoBind'

// var weatherData = {}
class Today extends React.Component {
    constructor(props) {
        super(props)
        // this.updateTemp = this.updateTemp.bind(this)
        // this.callAPI = this.callAPI.bind(this)
        classAutoBind(this)

        this.state = sharedState()

    }

    componentDidMount() {
        attachSharedState(this)
        console.log("mounted")

        console.log("callling API")
        callAPI()

    }
    componentWillUnmount() {
        detachSharedState(this)
    }

    callAPI() {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=Indianapolis&units=imperial&appid=8efbef4cef85817b47d9fc8301e2f2de')
        .then(response => response.json())
        .then(response => updateTemp(response))
    }
    updateTemp(temperature) {
        console.log(temperature)
        this.setState({
            temp: temperature.main.temp
        })
    }

    render() {
        return <div>
        <h1 className="col-sm-12 text-center primaryTextColor giantTemp" onChange={this.updateTemp}>{this.state.temp}</h1>
        <h1 className="col-sm-12 text-center secondaryTextColor">Mostly Cloudy</h1>
        </div>
    }
}

export default Today
