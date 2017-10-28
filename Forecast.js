import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';



const Forecast = ({ dayTwoTemperature, dayTwoName }) => {


let weatherCases = {
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

	console.log("in forecast", weatherCases[dayTwoName].icon)
	// <Ionicons color="white" size={50} name={weatherCases[dayTwoName].icon} />


	return (
		<View style={styles.lower}>
			<Ionicons color="white" size={50} name={weatherCases[dayTwoName].icon} />
			<Text style={styles.temp}>
				{dayTwoTemperature}°F
			</Text>
		</View>
	)
}

export default Forecast

const styles = StyleSheet.create({
	temp: {
		fontSize: 20,
		backgroundColor: 'transparent',
		color: 'white',
		marginTop: 10
	},
	lower: {
		// flex: 0,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'transparent'
	}
})