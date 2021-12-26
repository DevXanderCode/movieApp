import * as React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {getPopularMovies} from './services/services';

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
