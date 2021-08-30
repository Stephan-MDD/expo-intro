import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type LabelContainerProps = {
	children: any;
	label: string;
	alignLabel?: 'left' | 'center' | 'right';
	bottomLabel?: boolean;
};

export function LabelContainer({ label, alignLabel = 'left', children, bottomLabel = false }: LabelContainerProps) {
	const labelStyle = { textAlign: alignLabel };

	return (
		<View style={{ ...styles.container, flexDirection: bottomLabel ? 'column-reverse' : 'column' }}>
			<Text style={labelStyle}>{label}</Text>
			<View style={styles.childContainer}>{children}</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
	},
	childContainer: {},
});
