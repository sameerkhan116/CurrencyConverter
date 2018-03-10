import React, { Component } from 'react';
import { FlatList, View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { changeBaseCurrency, changeQuoteCurrency } from '../actions/currencies';
import { connect } from 'react-redux';

import { ListItem } from '../components/List';
import { Seperator } from '../components/List';
import currencies from '../data/currencies';

class CurrencyList extends Component {
  handlePress = currency => {
    const { type } = this.props.navigation.state.params;
    if (type === 'base') this.props.dispatch(changeBaseCurrency(currency));
    else if (type === 'quote')
      this.props.dispatch(changeQuoteCurrency(currency));
    this.props.navigation.goBack(null);
  };

  render() {
    let comparisonCurrency = this.props.baseCurrency;
    if (this.props.navigation.state.params.type === 'quote')
      comparisonCurrency = this.props.quoteCurrency;

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
              iconBackground={this.props.primaryColor}
              selected={item === comparisonCurrency}
              onPress={() => this.handlePress(item)}
            />
          )}
        />
      </View>
    );
  }
}

CurrencyList.propTypes = {
  navigation: PropTypes.object,
  dispatch: PropTypes.func,
  baseCurrency: PropTypes.string,
  quoteCurrency: PropTypes.string,
  primaryColor: PropTypes.string
};

const mapStateToProps = state => {
  return {
    baseCurrency: state.currencies.baseCurrency,
    quoteCurrency: state.currencies.quoteCurrency,
    primaryColor: state.theme.primaryColor
  };
};

export default connect(mapStateToProps)(CurrencyList);
