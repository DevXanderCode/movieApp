import React, {useState, useLayoutEffect} from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Text,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import {searchMovieTv} from '../../services/services';
import {Card} from '../../components';
import Colors from '../../themes/Colors';

const propTypes = {
  navigation: PropTypes?.object?.isRequired,
};

const Search = ({navigation}) => {
  const [text, onChangeText] = useState('');
  const [searchResult, setSearchResult] = useState(false);
  const [loaded, setLoaded] = useState(true);
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = query => {
    setLoaded(false);
    Promise.all([searchMovieTv(query, 'movie'), searchMovieTv(query, 'tv')])
      .then(([movies, tv]) => {
        setSearchResult([...movies, ...tv]);
        setShowError(false);
      })
      .catch(err => {
        setSearchResult([]);
        setShowError(true);
        setError(err);
      })
      .finally(() => setLoaded(true));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <Icon name="chevron-back" size={40} color={Colors?.lightGray} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return (
    <SafeAreaView>
      <View style={styles?.container}>
        <View style={styles?.form}>
          <TextInput
            style={styles?.input}
            value={text}
            onChangeText={onChangeText}
            placeholder="Search Movie or TV Show"
          />
        </View>
        <TouchableOpacity onPress={() => text?.length > 0 && onSubmit(text)}>
          <Icon name="search-outline" size={30} />
        </TouchableOpacity>
      </View>
      <View style={styles?.searchItem}>
        {/* search results */}
        {loaded && searchResult?.length > 0 && (
          <React.Fragment>
            <Text style={styles?.title}>Search Result</Text>

            <FlatList
              numColumns={3}
              data={searchResult}
              renderItem={({item}) => (
                <Card navigation={navigation} item={item} />
              )}
              keyExtractor={item => item?.id}
            />
          </React.Fragment>
        )}

        {/* when searched but no result */}
        {loaded && searchResult?.length === 0 && (
          <View style={[styles?.empty, {paddingTop: 20}]}>
            <Text>No Result that match your criteria</Text>
            <Text>Try different keywords</Text>
          </View>
        )}

        {loaded && !searchResult && (
          <View style={styles?.empty}>
            <Text>Type something to start searching!</Text>
          </View>
        )}

        {!loaded && (
          <View style={styles?.loaderContainer}>
            <ActivityIndicator size="large" />
          </View>
        )}

        {loaded && showError && <Error />}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    borderWidth: 0.5,
    height: 40,
    padding: 8,
    borderRadius: 15,
  },
  form: {
    flexBasis: 'auto',
    flexGrow: 1,
    paddingRight: 8,
  },
  loaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10,
  },
  searchItem: {
    padding: 5,
  },
});

export default Search;
