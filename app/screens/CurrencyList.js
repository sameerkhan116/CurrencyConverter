import React, { Component } from 'react';
import { FlatList, View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import { ListItem } from '../components/List';
import { Seperator } from '../components/List';
import currencies from '../data/currencies';

const TEMP_CURRENT_CURRENCY = 'CAD';

class CurrencyList extends Component {
  handlePress = () => {
    this.props.navigation.goBack(null);
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" translucent={false} />
        <FlatList
          data={currencies}
          ItemSeparatorComponent={Seperator}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === TEMP_CURRENT_CURRENCY}
              onPress={this.handlePress}
            />
          )}
        />
      </View>
    );
  }
}

CurrencyList.propTypes = {
  navigation: PropTypes.object
};

export default CurrencyList;
