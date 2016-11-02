import React from 'react'
import { Link } from 'react-router' // Allows you to link to different routes realtime
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'
import moment from 'moment'
// import classAutoBind from 'react-helpers/dist/classAutoBind'

// var weatherData = {}
class Forecast extends React.Component {
    constructor(props) {
        super(props)
        this.updateForecast = this.updateForecast.bind(this)
        // this.callAPI = this.callAPI.bind(this)
        // classAutoBind(this)
        this.state = {
            days: [],
            condition: '--'
        }

        // this.state = sharedState()

    }

    componentDidMount() {  // this runs after the first render
        attachSharedState(this)
        console.log("mounted")

        console.log("callling API")
        // callAPI()
        fetch('http://api.openweathermap.org/data/2.5/forecast?q=Indianapolis&units=imperial&appid=8efbef4cef85817b47d9fc8301e2f2de')
        .then(response => response.json())
        // .then(response => updateTemp(response)
        .then(this.updateTemp)

    }
    componentWillUnmount() {
        detachSharedState(this)
    }

    // callAPI() {
    //     fetch('http://api.openweathermap.org/data/2.5/weather?q=Indianapolis&units=imperial&appid=8efbef4cef85817b47d9fc8301e2f2de')
    //     .then(response => response.json())
    //     .then(response => updateTemp(response))
    // }
    updateForecast(temperature) {
        console.log(temperature)
        this.setState({
            days: temperature.main.temp,
            condition: temperature.weather[0].description
        })
    }

    render() {

        return <div>
        <h1 className="col-sm-12 text-center primaryTextColor giantTemp">{this.state.temp}</h1>
        <h1 className="col-sm-12 text-center secondaryTextColor">{this.state.condition}</h1>
        </div>
    }
}

export default Forecast
