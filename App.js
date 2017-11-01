import React from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, StatusBar } from 'react-native';
import Weather from './Weather';

const API_KEY = "c460408cdd0cf3164a46d3dee35509f7";

export default class App extends React.Component {

  state = {
    isLoaded: false,
    error: null,
    homeTemperature: null,
    name: null,
    city: null,
    country: null,
    hourlyForecast: []
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.getWeather(position.coords.latitude, position.coords.longitude)
        this.getForecast(position.coords.latitude, position.coords.longitude)
      },
      error => {
        this.setState({
          error: error
        });
      }
    );
  }

  getWeather = (lat, long) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`)
    .then(res => res.json())
    .then(json => {
      // console.log("data", json)
      this.setState({
        homeTemperature: json.main.temp,
        name: json.weather[0].main,
        city: json.name,
        country: json.sys.country,
        isLoaded: true
      })
    });
  }

  getForecast = (lat, long) => {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&APPID=${API_KEY}`)
    .then(res => res.json())
    .then(json => {
      // console.log("hourly data", json)
      this.setState({
        hourlyForecast: json.list.map(data => ({
          temp: data.main.temp,
          date: data.dt_txt,
          name: data.weather[0].main
        }))
      })
    })
  }

  render() {

    // const { isLoaded, error, homeTemperature, name, city, hourlyForecast } = this.state;

    // console.log("app state", this.state.hourlyForecast)

    return (
      <View style={styles.container}>
        <StatusBar barStyle='dark-content' />
        {this.state.isLoaded ? <Weather weatherName={this.state.name} temp={Math.floor((9/5) * (this.state.homeTemperature - 273) + 32)} city={this.state.city} hourlyForecast={this.state.hourlyForecast} /> : <View style={styles.loading} >
          <Text style={styles.loadingText}>Fetching Weather Data</Text>
          {this.state.error ? <Text style={styles.errorText}>{this.state.error}</Text> : null }
          </View>}
      </View>
    );
  }
}

// kelvin to f° = 9/5 (K - 273) + 32

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  errorText: {
    color: 'red',
    backgroundColor: 'transparent',
    marginBottom: 40
  },
  loading: {
    flex: 1,
    backgroundColor: '#FDF6AA',
    justifyContent: 'flex-end',
    paddingLeft: 30
  },
  loadingText: {
    fontSize: 35,
    marginBottom: 24,

  }
});

// flexDirection: column (default)
// alignItems puts elements in the center of the page
// justifyContent puts it left center
// <ActivityIndicator />
