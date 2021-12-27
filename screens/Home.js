import * as React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {getPopularMovies, getUpcommingMovies} from '../services/services';

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
    <SafeAreaView style={{flex: 1}}>
      <SliderBox images={moviesImg} />
    </SafeAreaView>
  );
};

export default Home;
