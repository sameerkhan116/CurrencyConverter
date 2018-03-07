import React, { Component } from 'react';
import {
  Platform,
  View,
  Image,
  ImageBackground,
  Text,
  Keyboard,
  Animated
} from 'react-native';

import styles from './styles';

const ANIMATION_DURATION = 250;

class Logo extends Component {
  constructor(props) {
    super(props);

    this.containerImageWidth = new Animated.Value(styles.$largeContainerSize);
  }

  componentDidMount() {
    const showListener =
      Platform.OS === 'android' ? 'keyboardDidShow' : 'keyboardWillShow';
    const hideListener =
      Platform.OS === 'android' ? 'keyboardDidHide' : 'keyboardWillHide';

    this.keyboardShowListener = Keyboard.addListener(
      showListener,
      this.keyboardShow
    );
    this.keyboardHideListener = Keyboard.addListener(
      hideListener,
      this.keyboardHide
    );
  }

  componentWillUnmount() {
    this.keyboardShowListener.remove();
    this.keyboardHideListener.remove();
  }

  keyboardShow = () => {
    Animated.timing(this.containerImageWidth, {
      toValue: styles.$smallContainerSize,
      duration: ANIMATION_DURATION
    }).start();
  };

  keyboardHide = () => {
    Animated.timing(this.containerImageWidth, {
      toValue: styles.$largeContainerSize,
      duration: ANIMATION_DURATION
    }).start();
  };

  render() {
    const containerImageStyle = [
      styles.containerImage,
      { width: this.containerImageWidth, height: this.containerImageWidth }
    ];

    return (
      <View style={styles.container}>
        <Animated.Image
          resizeMode="contain"
          style={containerImageStyle}
          source={require('./images/background.png')}
        />
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    );
  }
}

export default Logo;
