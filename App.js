import * as React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import axios from 'axios';

const getPopularMovies = async () => {
  const res = await axios.get(
    'https://api.themoviedb.org/3/movie/popular?api_key=06e864e959ef3841f17579868f21a540',
  );
  return res.data.results;
};

const App = () => {
  const [movie, setMovie] = React.useState('');
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
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
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Movie Name: {movie.original_title}</Text>
        <Text>Language: {movie.original_language}</Text>
        <Text>Release Date: {movie.release_date}</Text>
        {error && (
          <Text style={{color: 'red'}}>
            errors in the server: {error.message}
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default App;
