import * as React from 'react';
import {Text, View, SafeAreaView, StyleSheet, Dimensions} from 'react-native';
import FastImage from 'react-native-fast-image';
import {SliderBox} from 'react-native-image-slider-box';
import {getPopularMovies, getUpcommingMovies} from '../services/services';

const {width, height} = Dimensions.get('screen');

const Home = () => {
  const [moviesImg, setMoviesImg] = React.useState([]);
  const [movie, setMovie] = React.useState('');
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
      .then(movie => {
        setMovie(movie[0]);
        setError(false);
      })
      .catch(err => {
        setError(err);
      });
  }, []);
  return (
    <SafeAreaView style={styles?.sliderContainer}>
      <SliderBox
        images={moviesImg}
        ImageComponent={FastImage}
        sliderBoxHeight={height / 1.5}
        autoplay={true}
        circleLoop={true}
        dotStyle={styles?.dotStyle}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    flex: 1,
  },
  dotStyle: {
    height: 0,
    width: 0,
  },
});

export default Home;
