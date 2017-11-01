import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
// import Hourlys from './Hourlys';

const weatherCases = {
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

const handlePress = () => {
	alert("pressed")
}

function Weather({ temp, weatherName, city, hourlyForecast }) {

	// console.log("in weather", hourlyForecast)

	return (
	<LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
		
		<View style={styles.upper}>
			<Ionicons color="white" size={144} name={weatherCases[weatherName].icon}/>
			<Text style={styles.temp}>{temp}°F</Text>
			<Text style={styles.city}>{city}</Text>
		</View>

		<View style={styles.middle}>
			<Text style={styles.title}>{weatherCases[weatherName].title}</Text>
		</View>
		
		<Button style={styles.go} title="Press for Hourly Info" onPress={handlePress} />


	</LinearGradient>
	)
}


Weather.propTypes = {
	temp: PropTypes.number.isRequired,
	weatherName: PropTypes.string.isRequired,
	city: PropTypes.string.isRequired
};

export default Weather

// <View style={styles.lower}>
// <Hourlys hourlyForecast={hourlyForecast} />
// </View>

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
	middle: {
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'flex-end',
		paddingLeft: 10
	},
	lower: {
		flex: 1
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
	},
	go: {
		fontSize: 20,
		backgroundColor: 'transparent',
		color: 'white',
		marginBottom: 10,
		paddingLeft: 10
	}
})







