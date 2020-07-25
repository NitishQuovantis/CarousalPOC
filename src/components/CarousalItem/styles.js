import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  containerStyle: {
    width,
    height: '100%',
    overflow: 'hidden',
  },

  imageStyle: {
    width,
    height: '100%',
    position: 'absolute',
  },

  gradientContainer: {
    width,
    minHeight: 400,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingBottom: 20,
    paddingLeft: 60,
    paddingTop: 200,
  },

  titleStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },

  descriptionStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default styles;
