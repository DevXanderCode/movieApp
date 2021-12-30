import * as React from 'react';
import {
  TouchableOpacity,
  View,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {SliderBox} from 'react-native-image-slider-box';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  getPopularMovies,
  getUpcommingMovies,
  getPopularTv,
  getFamilyMovies,
  getDocumentaryMovies,
} from '../services/services';
import {List, Error} from '../components';

const propTypes = {
  navigation: PropTypes?.object?.isRequired,
};

const {width, height} = Dimensions.get('screen');

const Home = ({navigation}) => {
  const [moviesImg, setMoviesImg] = React.useState([]);
  const [popularMovies, setPopularMovies] = React.useState([]);
  const [popularTv, setPopularTv] = React.useState([]);
  const [familyMovies, setFamilyMovies] = React.useState([]);
  const [documentaryMovies, setDocumentaryMovies] = React.useState([]);
  const [error, setError] = React.useState(false);
  const [showError, setShowError] = React.useState(false);
  const [loaded, setLoaded] = React.useState(false);

  const getData = () => {
    return Promise.all([
      getUpcommingMovies(),
      getPopularMovies(),
      getPopularTv(),
      getFamilyMovies(),
      getDocumentaryMovies(),
    ]);
  };

  React.useEffect(() => {
    getData()
      .then(
        ([
          upcommingMovies,
          popularMovies,
          popularTv,
          familyMovies,
          documentaryMovies,
        ]) => {
          const moviesImgArr = [];
          upcommingMovies.forEach(movie => {
            moviesImgArr.push(
              `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            );
          });
          setMoviesImg(moviesImgArr);

          setPopularMovies(popularMovies);
          setPopularTv(popularTv);
          setFamilyMovies(familyMovies);
          setDocumentaryMovies(documentaryMovies);
          setShowError(false);
        },
      )
      .catch(err => {
        setShowError(true);
        setError(err);
        console.error('Got this error ==>', err);
      })
      .finally(() => {
        setLoaded(true);
      });
  }, []);

  React.useLayoutEffect(() => {
    navigation?.setOptions({
      headerLeft: () => (
        <FastImage
          source={require('../assets/images/movies.png')}
          style={styles?.logo}
        />
      ),
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Search')}
          style={styles?.searchIcon}>
          <Icon name="search-outline" size={30} color={'#fff'} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return (
    <SafeAreaView style={styles?.container}>
      {loaded ? (
        !showError && (
          <ScrollView>
            {/* Upcomming movies slider box */}
            {moviesImg.length > 0 && (
              <View style={styles?.sliderContainer}>
                <SliderBox
                  images={moviesImg}
                  ImageComponent={FastImage}
                  sliderBoxHeight={height / 1.5}
                  autoplay={true}
                  circleLoop={true}
                  dotStyle={styles?.dotStyle}
                />
              </View>
            )}
            {/* Popular movies Carousel */}
            {popularMovies.length > 0 && (
              <View style={styles?.carouselContainer}>
                <List
                  title="Popular Movies"
                  content={popularMovies}
                  navigation={navigation}
                />
              </View>
            )}
            {/* Popular Tv Shows Carousel */}
            {popularTv.length > 0 && (
              <View style={styles?.carouselContainer}>
                <List
                  title="Popular Tv Shows"
                  content={popularTv}
                  navigation={navigation}
                />
              </View>
            )}
            {/* Family Shows Carousel */}
            {familyMovies.length > 0 && (
              <View style={styles?.carouselContainer}>
                <List
                  title="Popular Family Movies"
                  content={familyMovies}
                  navigation={navigation}
                />
              </View>
            )}
            {/* Documentary Movies */}
            {documentaryMovies.length > 0 && (
              <View style={styles?.carouselContainer}>
                <List
                  title="Popular Documentary Movies"
                  content={documentaryMovies}
                  navigation={navigation}
                />
              </View>
            )}
          </ScrollView>
        )
      ) : (
        <ActivityIndicator size="large" />
      )}
      {showError && <Error />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  sliderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotStyle: {
    height: 0,
    width: 0,
  },
  logo: {
    width: 40,
    height: 40,
    paddingVertical: 10,
    paddingLeft: 10,
  },
  searchIcon: {
    paddingVertical: 10,
    paddingRight: 10,
  },
});

Home.propTypes = propTypes;

export default Home;
