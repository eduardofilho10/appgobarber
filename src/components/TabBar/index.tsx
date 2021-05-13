import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
	return (
		<View style={styles.container}>
			<Text>Home!</Text>
		</View>
	);
}

function ListScreen() {
	return (
		<View style={styles.container}>
			<Text>Categories!</Text>
		</View>
	);
}

function PostScreen() {
	return (
		<View style={styles.container}>
			<Text>New Post!</Text>
		</View>
	);
}

function NotificationsScreen() {
	return (
		<View style={styles.container}>
			<Text>Notifications!</Text>
		</View>
	);
}

function SettingsScreen() {
	return (
		<View style={styles.container}>
			<Text>Settings!</Text>
		</View>
	);
}

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name="Home" component={HomeScreen} />
				<Tab.Screen name="Categories" component={ListScreen} />
				<Tab.Screen name="Post" component={PostScreen} />
				<Tab.Screen name="Notifications" component={NotificationsScreen} />
				<Tab.Screen name="Settings" component={SettingsScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
});