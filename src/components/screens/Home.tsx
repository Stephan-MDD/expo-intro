import * as React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { LabelContainer } from '../shared/LabelContainer';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export function Home({ navigation }: any) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<LabelContainer label="Username">
				<TextInput />
			</LabelContainer>

			<LabelContainer label="Password">
				<TextInput />
			</LabelContainer>

			<LabelContainer label="enter" alignLabel="center" bottomLabel>
				<Button title="Login" onPress={() => navigation.push('About', { val: 'hello expo' })} />
			</LabelContainer>

			<FontAwesomeIcon icon={faCoffee} />
		</View>
	);
}
