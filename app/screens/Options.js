import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StatusBar, Platform, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { ListItem, Seperator } from '../components/List';
import { connectAlert } from '../components/Alert';

const ICON_PREFIX = Platform.OS === 'android' ? 'md' : 'ios';
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends Component {
  handleThemesPress = () => {
    this.props.navigation.navigate('Themes', { title: 'Themes' });
  };

  handleSitesPress = () => {
    Linking.openURL('https://fixer.io').catch(() =>
      this.props.alertWithType(
        'error',
        'Sorry!',
        'This URL cannot be opened right now.'
      )
    );
  };

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Themes"
          onPress={this.handleThemesPress}
          customIcon={
            <Ionicons
              name={`${ICON_PREFIX}-arrow-forward`}
              color={ICON_COLOR}
              size={ICON_SIZE}
            />
          }
        />
        <Seperator />
        <ListItem
          text="Fixer.io"
          onPress={this.handleSitesPress}
          customIcon={
            <Ionicons
              name={`${ICON_PREFIX}-link`}
              color={ICON_COLOR}
              size={ICON_SIZE}
            />
          }
        />
        <Seperator />
      </ScrollView>
    );
  }
}

Options.propTypes = {
  navigation: PropTypes.object,
  alertWithType: PropTypes.func
};

export default connectAlert(Options);
