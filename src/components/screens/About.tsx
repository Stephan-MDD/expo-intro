import * as React from 'react';
import { View, Text, Button } from 'react-native';

export function About({ navigation, route }: any) {
	const { val }: any = route.params;

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>About Screen {val}</Text>
			<Button title="Go to Home" onPress={() => navigation.push('Home')} />
			<Button title="Go back" onPress={() => navigation.goBack()} />
		</View>
	);
}
