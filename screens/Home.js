import * as React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {SliderBox} from 'react-native-image-slider-box';
import {
  getPopularMovies,
  getUpcommingMovies,
  getPopularTv,
  getFamilyMovies,
  getDocumentaryMovies,
} from '../services/services';
import {List} from '../components';

const {width, height} = Dimensions.get('screen');

const Home = () => {
  const [moviesImg, setMoviesImg] = React.useState([]);
  const [popularMovies, setPopularMovies] = React.useState([]);
  const [popularTv, setPopularTv] = React.useState([]);
  const [familyMovies, setFamilyMovies] = React.useState([]);
  const [documentaryMovies, setDocumentaryMovies] = React.useState([]);
  const [error, setError] = React.useState(false);

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

          setPopularTv(popularMovies);
          setPopularTv(popularTv);
          setFamilyMovies(familyMovies);
          setDocumentaryMovies(documentaryMovies);
        },
      )
      .catch(err => {
        setError(err);
      });
  }, []);
  return (
    <SafeAreaView style={styles?.container}>
      <ScrollView>
        {moviesImg.length && (
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
        {popularMovies.length && (
          <View style={styles?.carouselContainer}>
            <List title="Popular Movies" content={popularMovies} />
          </View>
        )}
        {popularTv.length && (
          <View style={styles?.carouselContainer}>
            <List title="Popular Tv Shows" content={popularTv} />
          </View>
        )}
        {familyMovies.length && (
          <View style={styles?.carouselContainer}>
            <List title="Popular Family Movies" content={familyMovies} />
          </View>
        )}
        {documentaryMovies.length && (
          <View style={styles?.carouselContainer}>
            <List
              title="Popular Documentary Movies"
              content={documentaryMovies}
            />
          </View>
        )}
      </ScrollView>
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
