import React from 'react';
import Button from '@material-ui/core/Button';
import './App.css';
import WeatherInfoComponent from './ WeatherInfoComponent';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
const fetch = require("node-fetch")
const API_KEY = '9a5353d5ffd464c21555efe9457c5c30'


class App extends React.Component {
  state = {
    city: "Melbourne",
  }

  handleChanges = (event) => {
    this.setState({ city: event.target.value })
  }

  getWeather = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}
&appid=${API_KEY}&units=metric`)
      .then(response => response.json())
      .then(data => {
        this.setState({ weather: data })
      })
      .catch(error => {
      })
  }

  render() {
    return (
    
      <div className="App">
        <div className="App-content">
        <Container maxWidth="sm">
          <WeatherInfoComponent weather={this.state.weather} />
        </Container>
        </div>

        <TextField
        id="standard-with-placeholder"
        onChange={this.handleChanges}
        label="Enter a City"
        placeholder="Example: Melbourne"
        margin="normal"
        variant="filled"
      />
          <Button type="button" 
            onClick={this.getWeather} 
            variant="contained" 
            size="small"
            color='secondary'>
              Get Weather
            </Button>
      </div>
    )
  }
}
export default App;