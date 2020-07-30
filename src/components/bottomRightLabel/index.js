import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Text } from 'react-native';

import styles from './styles';

export default class Counter extends PureComponent {
	static propTypes = {
		title: PropTypes.string.isRequired,

		baseColor: PropTypes.string.isRequired,

		style: Text.propTypes.style,

		onPress: PropTypes.func,
	};

	render() {
		let { rightTitle, onPress, rightTextStyle } = this.props;

		if (!rightTitle) {
			return null;
		}

		return (
			<Text onPress={onPress} style={[styles.text, rightTextStyle]}>
				{rightTitle}
			</Text>
		);
	}
}