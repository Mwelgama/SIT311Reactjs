import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
var d = new Date();
var currentTime = d.toDateString()
class WeatherInfoComponent extends React.Component {
    render() {

        if (this.props.weather) {
            var weather = this.props.weather;
           // var dateSunrise = new Date(weather.sys.sunrise * 1000).format('h:i:s')
            var dateSunrise = new Date(weather.sys.sunrise * 1e3).toISOString().slice(-13, -5)
            var dateSunset = new Date(weather.sys.sunset * 1e3).toISOString().slice(-13, -5)

            return (
                <React.Fragment>
                    <Card>
                        <Typography variant="h2" component="h1">
                            Weather in {weather.name}
                        </Typography>
                        <Typography variant="h3" component="h2">
                        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
                        {Math.round(weather.main.temp)}&deg;C
                        </Typography>
                        <Typography variant="subtitle1" component="h3">
                            {weather.weather[0].description}
                        </Typography>
                        <Typography variant="subtitle1" component="h3">
                            {currentTime}
                        </Typography>
                        <Table>
                            
                        <TableBody>
                            <TableRow>
                                <TableCell>Wind</TableCell>
                                <TableCell>{weather.wind.speed}m/s at {weather.wind.deg} Degrees</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Cloudiness</TableCell>
                                <TableCell>{weather.clouds.all}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Pressure</TableCell>
                                <TableCell>{weather.main.pressure} hpa</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Humidity</TableCell>
                                <TableCell>{weather.main.humidity}%</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Sunrise</TableCell>
                                <TableCell>{dateSunrise}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Sunset</TableCell>
                                <TableCell>{dateSunset}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Geo Coords</TableCell>
                                <TableCell> [{weather.coord.lat},{weather.coord.lon} ] </TableCell>
                            </TableRow>
                           
                        </TableBody>
                        </Table>
                    </Card>
                    </React.Fragment>
            )
        }
        else {
            return null;
        }
    }
}
WeatherInfoComponent.propTypes = {
    weather: PropTypes.object,
}
export default WeatherInfoComponent;