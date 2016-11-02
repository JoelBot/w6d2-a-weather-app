import React from 'react'
import { Link } from 'react-router' // Allows you to link to different routes realtime

// var temp = {
//     weatherData: updateWeatherData
// }
// var updateWeatherData

class Weather extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className="locationDateTime">
              <div className="row">
                <div className="col-sm-12 text-center primaryTextColor"><h3>Indianapolis</h3></div>
              </div>
              <div className="row">
                <div className="col-sm-12 text-center primaryTextColor">November 2nd at 9:19am</div>
              </div>
              {this.props.children}
            </div>
    }
}

export default Weather
