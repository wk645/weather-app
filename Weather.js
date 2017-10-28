import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import Forecast from './Forecast';

const weatherCases = {
	Rain: {
		colors: ['#00C6FB', '#005BEA', 'black'],
		title: 'Rainy',
		subtitle: 'More information?',
		icon: 'ios-rainy'
	},
	Clear: {
		colors: ['#FEF253', '#FF7300'],
		title: 'Sunny',
		subtitle: 'More information?',
		icon: 'ios-sunny'
	},
	Thunderstorm : {
		colors: ['#00ECBC', '#007ADF'],
		title: 'Thunderstorming',
		subtitle: 'More information?',
		icon: 'ios-thunderstorm'
	},
	Clouds: {
		colors: ['#D7D2CC', '#304352'],
		title: 'Cloudy',
		subtitle: 'More information?',
		icon: 'ios-cloudy',
	},
	Snow: {
		colors: ['#7DE2FC', '#B9B6E5'],
		title: 'Snowy',
		subtitle: 'More information?',
		icon: 'ios-snow'
	},
	Drizzle: {
		colors: ['#89F7FE', '#66A6FF'],
		title: 'Drizzling',
		subtitle: 'More information?',
		icon: 'ios-rainy-outline'
	},
	Mist: {
		colors: ['#89F7FE', '#66A6FF', 'navy'],
		title: 'Misting',
		subtitle: 'More information?',
		icon: 'md-rainy'
	},
	Haze: {
		colors: ['yellow', 'brown'],
		title: 'Haze',
		subtitle: 'More information?',
		icon: 'ios-cloudy'
	}
}

function Weather({ temp, weatherName, city, dayTwoTemperature, dayTwoName }) {

	return (
	<LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
		
		<View style={styles.upper}>
			<Ionicons color="white" size={144} name={weatherCases[weatherName].icon}/>
			<Text style={styles.temp}>{temp}°F</Text>
			<Text style={styles.city}>{city}</Text>
		</View>

		<View style={styles.lower}>
			<Text style={styles.title}>{weatherCases[weatherName].title}</Text>
			<Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
		</View>

		<View>
			<Forecast dayTwoTemperature={Math.floor(dayTwoTemperature - 231.15)} dayTwoName={dayTwoName}/>
		</View>

	</LinearGradient>
	)
}

Weather.propTypes = {
	temp: PropTypes.number.isRequired,
	weatherName: PropTypes.string.isRequired,
	city: PropTypes.string.isRequired
};

export default Weather

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	upper: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'transparent'
	},
	temp: {
		fontSize: 48,
		backgroundColor: 'transparent',
		color: 'white',
		marginTop: 10
	},
	city: {
		fontSize: 25,
		backgroundColor: 'transparent',
		color: 'white',
		marginTop: 10
	},
	lower: {
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'flex-end',
		paddingLeft: 25
	},
	title: {
		fontSize: 38,
		backgroundColor: 'transparent',
		color: 'white',
		marginBottom: 10,
		fontWeight: '300'
	},
	subtitle: {
		fontSize: 24,
		backgroundColor: 'transparent',
		color: 'white',
		marginBottom: 24
	}
})







