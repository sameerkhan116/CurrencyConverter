import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native';

import styles from './styles';
import Icon from './Icon';

const ListItem = ({
  text,
  onPress,
  selected,
  checkmark = true,
  visible = true
}) => {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={styles.underlayColor}>
      <View style={styles.row}>
        <Text style={styles.text}>{text}</Text>
        {selected ? <Icon checkmark={checkmark} visible={visible} /> : <Icon />}
      </View>
    </TouchableHighlight>
  );
};

ListItem.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
  selected: PropTypes.bool,
  checkmark: PropTypes.bool,
  visible: PropTypes.bool
};

export default ListItem;
