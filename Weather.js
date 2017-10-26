import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';

export default class Weather extends React.Component {

	render() {
		return (
			<LinearGradient colors={['#00C6FB', '#005BEA', 'black']} style={styles.container}>
		<View style={styles.upper}>
			<Ionicons color="white" size={144} name='ios-rainy'/>
			<Text style={styles.temp}>59°F</Text>
		</View>

		<View style={styles.lower}>
			<Text style={styles.title}>Rainy</Text>
			<Text style={styles.subtitle}>More information?</Text>
		</View>

		</LinearGradient>
		);
	}
}

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
		fontWeight: '300',
		// alignItems: 'center'
	},
	subtitle: {
		fontSize: 24,
		backgroundColor: 'transparent',
		color: 'white',
		marginBottom: 24,
		// alignItems: 'center'
	}
})







