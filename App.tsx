import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import { Home } from './src/components/screens/Home';
import { About } from './src/components/screens/About';
import { Button } from 'react-native';

const Stack = createNativeStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerStyle: {
						backgroundColor: 'dodgerblue',
					},
					headerTintColor: '#fff',
					headerTitleStyle: {
						fontWeight: 'bold',
					},
				}}
			>
				<Stack.Screen name="Home" component={Home} options={{ headerLeft: () => <Button onPress={() => alert('This is a button!')} title="Info" color="#fff" /> }} />
				<Stack.Screen initialParams={{ val: 42 }} name="About" component={About} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
