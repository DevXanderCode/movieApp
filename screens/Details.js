import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  ScrollView,
  Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';
import FastImage from 'react-native-fast-image';
import StarRating from 'react-native-star-rating';
import {getMovie} from '../services/services';

const placeholderImg = require('../assets/images/image-placeholder.png');
const {width, height} = Dimensions.get('screen');

const propTypes = {
  route: PropTypes?.object,
  navigation: PropTypes?.object,
};

const Detail = ({route, navigation}) => {
  const {movieId} = route?.params;
  const [movieDetail, setMovieDetail] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    getMovie(movieId)
      .then(movieData => {
        setMovieDetail(movieData);
        console.log('logging genre==> ', movieData?.title, movieData?.genres);
        setShowError(false);
      })
      .catch(err => {
        setShowError(true);
        setError(err);
      })
      .finally(() => {
        setLoaded(true);
      });
  }, [movieId]);
  return (
    <SafeAreaView style={styles?.container}>
      {loaded && (
        <ScrollView>
          <FastImage
            source={
              movieDetail?.poster_path
                ? {
                    uri: `https://image.tmdb.org/t/p/w500${movieDetail?.poster_path}`,
                  }
                : placeholderImg
            }
            style={styles?.imgStyle}
            resiezeMode="cover"
            placeholder={placeholderImg}
          />
          <View style={styles?.container}>
            <Text style={styles?.movieTitle}>{movieDetail?.title}</Text>
            {movieDetail?.genres && (
              <View style={styles?.genreContainer}>
                {movieDetail?.genres?.map(genre => (
                  <Text key={genre?.id} style={styles?.genre}>
                    {genre?.name}
                  </Text>
                ))}
              </View>
            )}

            <StarRating maxStars={5} rating={movieDetail?.vote_average} />
          </View>
        </ScrollView>
      )}
      {!loaded && <ActivityIndicator size="large" />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgStyle: {
    width,
    height: height / 2.5,
  },
  movieTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  genreContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignContent: 'center',
  },
  genre: {
    fontWeight: 'bold',
    marginRight: 10,
  },
});

Detail.propTypes = propTypes;

export default Detail;
