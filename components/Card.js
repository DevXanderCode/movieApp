import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import FastImage from 'react-native-fast-image';

const placeholderImg = require('../assets/images/image-placeholder.png');

class Card extends React.PureComponent {
  render() {
    const {item} = this?.props;
    return (
      <TouchableOpacity onPress={() => {}} style={styles?.container}>
        <FastImage
          source={
            item?.poster_path
              ? {uri: `https://image.tmdb.org/t/p/w500${item?.poster_path}`}
              : placeholderImg
          }
          style={styles?.imgStyle}
          resiezeMode="cover"
          placeholder={placeholderImg}
        />
        {!item?.poster_path && (
          <Text style={styles?.movieName}>{item?.title}</Text>
        )}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    position: 'relative',
    height: 200,
    alignItems: 'center',
  },
  imgStyle: {
    width: 120,
    height: 200,
    borderRadius: 20,
  },
  movieName: {
    position: 'absolute',
    textAlign: 'center',
    top: 10,
  },
});

export default Card;
