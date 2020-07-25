import React from 'react';
import {Image, Text, Animated, Dimensions} from 'react-native';
import LocalStyle from './styles';
import LinearGradient from 'react-native-linear-gradient';

const {width} = Dimensions.get('screen');

const AnimatedGradient = Animated.createAnimatedComponent(LinearGradient);

function getNonTranslatingStyle(animated: Animated.Value, inputRange) {
  const translationInterpolation = animated.interpolate({
    inputRange,
    outputRange: [-width, 0, width],
    extrapolate: 'clamp',
  });

  return {
    transform: [{translateX: translationInterpolation}],
  };
}

export default function CarousalItem({item, scrollX, index}) {
  const inputRange = [width * (index - 1), width * index, width * (index + 1)];
  const nonTranslationStyle = getNonTranslatingStyle(scrollX, inputRange);

  return (
    <Animated.View style={[LocalStyle.containerStyle]}>
      <Image
        style={LocalStyle.imageStyle}
        source={item.image}
        resizeMode="cover"
      />
      <AnimatedGradient
        colors={['#efefef00', '#606060']}
        locations={[0, 0.8]}
        style={[LocalStyle.gradientContainer, nonTranslationStyle]}>
        <Text style={LocalStyle.titleStyle}>{item.name}</Text>
        <Text
          style={LocalStyle.descriptionStyle}
          ellipsizeMode="tail"
          numberOfLines={6}>
          {item.description}
        </Text>
      </AnimatedGradient>
    </Animated.View>
  );
}
