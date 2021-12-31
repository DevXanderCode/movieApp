import React, {useState, useEffect, useLayoutEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  ScrollView,
  Dimensions,
  Modal,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import FastImage from 'react-native-fast-image';
import StarRating from 'react-native-star-rating';
import dateFormat, {masks} from 'dateformat';
import Icon from 'react-native-vector-icons/Ionicons';
import {getMovie} from '../services/services';
import {PlayButton, Video, Navbar} from '../components';
import Colors from '../themes/Colors';

const placeholderImg = require('../assets/images/image-placeholder.png');
const {width, height} = Dimensions.get('screen');

const propTypes = {
  route: PropTypes?.object?.isRequired,
  navigation: PropTypes?.object?.isRequired,
};

const Detail = ({route, navigation}) => {
  const {movieId} = route?.params;
  const [movieDetail, setMovieDetail] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const toggleVideo = () => {
    setModalVisible(!modalVisible);
  };

  useEffect(() => {
    getMovie(movieId)
      .then(movieData => {
        setMovieDetail(movieData);
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

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <Icon name="chevron-back" size={40} color={Colors?.white} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return (
    <SafeAreaView style={styles?.container}>
      {loaded && (
        <View>
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
              <View style={styles?.playButton}>
                <PlayButton handlePress={() => toggleVideo()} />
              </View>
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
              <StarRating
                maxStars={5}
                rating={movieDetail?.vote_average / 2}
                starSize={30}
                disabled={true}
                fullStarColor="gold"
              />
              <Text style={styles?.overview}>{movieDetail?.overview}</Text>
              <Text style={styles?.release}>{`Release Date: ${dateFormat(
                movieDetail?.release_date,
                'mmmm dS, yyyy',
              )}`}</Text>
            </View>
          </ScrollView>

          <Modal
            animationType="slide"
            visible={modalVisible}
            supportedOrientation={['portrait', 'landscape']}>
            <View style={styles?.videoModal}>
              <Video toggleVideo={toggleVideo} navigation={navigation} />
            </View>
          </Modal>
        </View>
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
    paddingHorizontal: 15,
  },
  genreContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    alignContent: 'center',
    paddingHorizontal: 15,
  },
  genre: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  overview: {
    padding: 15,
  },
  release: {
    fontWeight: 'bold',
  },
  playButton: {
    position: 'absolute',
    top: -30,
    right: 20,
  },
  videoModal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Detail.propTypes = propTypes;

export default Detail;
