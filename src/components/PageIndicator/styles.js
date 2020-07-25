import {StyleSheet} from 'react-native';

export const DOT_SIZE = 10;
export const TRACING_DOT_SIZE = DOT_SIZE + 10;

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  trackingCircleContainerStyle: {
    position: 'absolute',
    top: 0,
    bottom: 0,
  },

  trackingCircle: {
    width: TRACING_DOT_SIZE,
    height: TRACING_DOT_SIZE,
    borderWidth: 2,
    borderRadius: TRACING_DOT_SIZE / 2,
    borderColor: 'white',
  },

  dotContainerStyle: {
    width: TRACING_DOT_SIZE,
    height: TRACING_DOT_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
  },

  dotStyle: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: DOT_SIZE / 2,
    margin: 5,
  },

  innerDotStyle: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: DOT_SIZE / 2,
  },
});

export default styles;
