import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import color from 'color';

import styles from './styles';

const InputWithButton = props => {
  const { onPress, buttonText, editable = true, tcolor } = props;
  const containerStyles = [styles.container];
  if (editable === false) {
    containerStyles.push(styles.containerDisabled);
  }

  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
    styles.$buttonBackgroundColorModifier
  );

  const textColor = [styles.buttonText];
  if (tcolor) {
    textColor.push({ color: tcolor });
  }

  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.buttonContainers} onPress={onPress}>
        <Text style={textColor}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        {...props}
      />
    </View>
  );
};

InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool,
  tcolor: PropTypes.string
};

export default InputWithButton;
