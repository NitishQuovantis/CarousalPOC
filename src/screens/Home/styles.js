import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: '#afafafaf',
  },

  listStyle: {
    ...StyleSheet.absoluteFillObject,
  },

  pageTitle: {
    position: 'absolute',
    left: 0,
    fontSize: 40,
    fontWeight: 'bold',
    bottom: 30,
    width: 200,
    textAlign: 'right',
    textTransform: 'uppercase',
    color: 'white',
    transform: [{translateX: -75}, {rotate: '-90deg'}, {translateX: 75}],
  },

  pageIndicatorStyle: {
    position: 'absolute',
    right: 30,
    bottom: 30,
  },
});

export default styles;
