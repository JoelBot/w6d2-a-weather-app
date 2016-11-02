import React from 'react'
import { Link } from 'react-router' // Allows you to link to different routes realtime

// Come back to this to generate location automatically or by button press

class LocationDateTime extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        return <div>
        <h1 className="col-sm-12 text-center primaryTextColor giantTemp">42'</h1>
        <h1 className="col-sm-12 text-center secondaryTextColor">Mostly Cloudy</h1>
        </div>
    }
}

export default LocationDateTime
