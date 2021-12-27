import * as React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {SliderBox} from 'react-native-image-slider-box';
import {getPopularMovies, getUpcommingMovies} from '../services/services';
import {List} from '../components';

const {width, height} = Dimensions.get('screen');

const Home = () => {
  const [moviesImg, setMoviesImg] = React.useState([]);
  const [popularMovies, setPopularMovies] = React.useState([]);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    getUpcommingMovies()
      .then(movies => {
        const moviesImgArr = [];
        movies.forEach(movie => {
          moviesImgArr.push(
            `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          );
        });
        setMoviesImg(moviesImgArr);
      })
      .catch();
    getPopularMovies()
      .then(movies => {
        setPopularMovies(movies);
        // console.log('Logging popular movies', movies);
        setError(false);
      })
      .catch(err => {
        setError(err);
      });
  }, []);
  return (
    <SafeAreaView style={styles?.container}>
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
      <View style={styles?.carouselContainer}>
        <List title="Testing title" content={popularMovies} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});

export default Home;
