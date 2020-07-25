import React, {Component} from 'react';
import {View, Dimensions, Text, Animated} from 'react-native';
import {CarousalItem, PageIndicator} from '../../components';
import LocalStyle from './styles';
import {Data} from './Data';

const {width} = Dimensions.get('screen');

export default class Home extends Component {
  state = {
    scrollX: new Animated.Value(0),
  };

  render() {
    const {scrollX} = this.state;

    return (
      <View style={LocalStyle.containerStyle}>
        <Animated.FlatList
          style={LocalStyle.listStyle}
          bounces={false}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          data={Data}
          renderItem={({item, index}) => {
            return (
              <CarousalItem
                key={`${index} item`}
                item={item}
                scrollX={scrollX}
                index={index}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return `${index}`;
          }}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: true},
          )}
          scrollEventThrottle={1}
        />

        <Text style={LocalStyle.pageTitle}>Iron Man</Text>

        <PageIndicator
          style={LocalStyle.pageIndicatorStyle}
          noOfItems={Data.length}
          scrollX={scrollX}
        />
      </View>
    );
  }
}
