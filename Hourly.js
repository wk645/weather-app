import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Hourly = (props) => {

	return (
		<View style={styles.hourlyContainer}>
			<Text style={styles.date}>{props.hourly.date}</Text>
			<Text style={styles.temp}>{props.hourly.temp}{"\n"}</Text>
		</View>
	)
} 

export default Hourly

const styles = StyleSheet.create({
	hourlyContainer: {
		flex: 1,
		alignItems: 'center'
	},
	date: {
		backgroundColor: 'transparent',
		fontSize: 20,
		color: 'white'
	},
	temp: {
		backgroundColor: 'transparent',
		fontSize: 20,
		color: 'white'
	}
})