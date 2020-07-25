import React from 'react';
import {View, Dimensions, Animated} from 'react-native';
import LocalStyle, {TRACING_DOT_SIZE} from './styles';

const {width} = Dimensions.get('screen');

export default function PageIndicator({noOfItems, scrollX, style}) {
  const dummyData = Array.from({length: noOfItems}, (item, index) => index);

  const inputRange = [0, width * noOfItems];

  const tracingInterpolation = scrollX.interpolate({
    inputRange,
    outputRange: [0, TRACING_DOT_SIZE * noOfItems],
  });

  return (
    <View style={[LocalStyle.containerStyle, style]}>
      {dummyData.map((_, index) => {
        return <Dot key={index} scrollX={scrollX} index={index} />;
      })}

      <Animated.View
        style={[
          LocalStyle.dotContainerStyle,
          LocalStyle.trackingCircleContainerStyle,
          {transform: [{translateX: tracingInterpolation}]},
        ]}>
        <View style={[LocalStyle.trackingCircle]} />
      </Animated.View>
    </View>
  );
}

function Dot({scrollX, index}) {
  const inputRange = [width * (index - 1), width * index, width * (index + 1)];
  const backgroundInterpolation = scrollX.interpolate({
    inputRange,
    outputRange: [0, 1, 0],
  });

  return (
    <View style={LocalStyle.dotContainerStyle}>
      <Animated.View style={LocalStyle.dotStyle}>
        <Animated.View
          style={[LocalStyle.innerDotStyle, {opacity: backgroundInterpolation}]}
        />
      </Animated.View>
    </View>
  );
}
