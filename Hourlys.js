import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Hourly from './Hourly'

const Hourlys = (props) => {

	// console.log(props.hourlyForecast)

	let hourly = props.hourlyForecast.map((hourly, index) => <Hourly key={index} hourly={hourly} />)

	let weatherCases = {
		Rain: {
			colors: ['#00C6FB', '#005BEA', 'black'],
			title: 'Rainy',
			icon: 'ios-rainy'
		},
		Clear: {
			colors: ['#FEF253', '#FF7300'],
			title: 'Sunny',
			icon: 'ios-sunny'
		},
		Thunderstorm : {
			colors: ['#00ECBC', '#007ADF'],
			title: 'Thunderstorming',
			icon: 'ios-thunderstorm'
		},
		Clouds: {
			colors: ['#D7D2CC', '#304352'],
			title: 'Cloudy',
			icon: 'ios-cloudy',
		},
		Snow: {
			colors: ['#7DE2FC', '#B9B6E5'],
			title: 'Snowy',
			icon: 'ios-snow'
		},
		Drizzle: {
			colors: ['#89F7FE', '#66A6FF'],
			title: 'Drizzling',
			icon: 'ios-rainy-outline'
		},
		Mist: {
			colors: ['#89F7FE', '#66A6FF', 'navy'],
			title: 'Misting',
			icon: 'md-rainy'
		},
		Haze: {
			colors: ['yellow', 'brown'],
			title: 'Haze',
			icon: 'ios-cloudy'
		}
	}

	return (
		<View style={styles.lower}>
			<Text style={styles.future}>Hourly Forecast</Text>
			<View style={styles.hourly}>{hourly}</View>
		</View>


	)
}

// <Ionicons color="white" size={50} name='ios-rainy' />
// <Text style={styles.temp}>
	// °F
// </Text>

export default Hourlys

const styles = StyleSheet.create({
	temp: {
		fontSize: 20,
		backgroundColor: 'transparent',
		color: 'white',
		marginTop: 10
	},
	hourly: {
		flex: 1
	},
	lower: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'transparent'
	},
	future: {
		backgroundColor: 'transparent',
		color: 'white',
		marginTop: 10
	}
})




