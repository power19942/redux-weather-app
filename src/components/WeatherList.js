import React from 'react';
import {connect} from 'react-redux';
import Chart from './Chart';
import Map from './Map';
class WeatherList extends React.Component {
    renderWeather(cityData){
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp );
        const pressure = cityData.list.map(weather => weather.main.pressure );
        const humid = cityData.list.map(weather => weather.main.humidity );
        const lon = cityData.city.coord.lon;
        const lat = cityData.city.coord.lat;
        return(
            <tr key={cityData.city.name}>
                <td><Map lon={lon} lat={lat} /></td>
                <td><Chart data={temps} color="orange"/></td>
                <td><Chart data={pressure} color="green"/></td>
                <td><Chart data={humid} color="red"/></td>
            </tr>
        )
    }
    render(){
        console.log(this.props);
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <td>City</td>
                        <td>Temperature</td>
                        <td>Pressure</td>
                        <td>Humidity</td>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}
const mapStateToProps = ({weather}) => {
    return{
        weather
    }
};
export default connect(mapStateToProps)(WeatherList);