import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';

class Card extends React.PureComponent {
  render() {
    const {item} = this?.props;
    return (
      <TouchableOpacity onPress={() => {}} style={styles?.container}>
        <FastImage
          source={{uri: `https://image.tmdb.org/t/p/w500${item?.poster_path}`}}
          style={styles?.imgStyle}
          resiezeMode="cover"
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    position: 'relative',
  },
  imgStyle: {
    width: 120,
    height: 200,
    borderRadius: 20,
  },
});

export default Card;
