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

    dayTwoTemperature: null,
    dayTwoName: null,
    dayTwoDate: null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.getWeather(position.coords.latitude, position.coords.longitude),
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
      this.setState({
        dayTwoTemperature: json.list[0].main.temp,
        dayTwoName: json.list[0].weather[0].main
      })
    })
  }

  render() {

    const { isLoaded, error, homeTemperature, name, city, dayTwoTemperature, dayTwoName } = this.state;

    console.log("in App", dayTwoName)

    return (
      <View style={styles.container}>
        <StatusBar barStyle='dark-content' />
        {isLoaded ? <Weather weatherName={name} temp={Math.floor(homeTemperature - 231.15)} city={city} dayTwoTemperature={dayTwoTemperature} dayTwoName={dayTwoName} /> : <View style={styles.loading} >
          <Text style={styles.loadingText}>Fetching Weather Data</Text>
          {error ? <Text style={styles.errorText}>{error}</Text> : null }
          </View>}
      </View>
    );
  }
}

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
