import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import PropTypes from 'prop-types';

const placeholderImg = require('../assets/images/image-placeholder.png');

const propTypes = {
  item: PropTypes?.object,
  navigation: PropTypes?.object,
};

class Card extends React.PureComponent {
  render() {
    const {item, navigation} = this?.props;
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Details', {
            movieId: item?.id,
          });
        }}
        style={styles?.container}>
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

Card.propTypes = propTypes;

export default Card;
