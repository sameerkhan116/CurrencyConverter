import EStylSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

export default EStylSheet.create({
  $underlayColor: '$border',
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '$white'
  },
  checkIcon: {
    width: 18
  },
  text: {
    fontSize: 16,
    color: '$darkText'
  },
  seperator: {
    marginLeft: 20,
    backgroundColor: '$border',
    flex: 1,
    height: StyleSheet.hairlineWidth
  },
  icon: {
    backgroundColor: 'transparent',
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconVisible: {
    backgroundColor: '$primaryBlue'
  }
});
