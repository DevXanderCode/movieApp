import React, {useState, useLayoutEffect} from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import {searchMovieTv} from '../services';

const propTypes = {
  navigation: PropTypes?.object?.isRequired,
};

const Search = ({navigation}) => {
  const [text, onChangeText] = useState('');

  const onSubmit = query => {};

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <Icon name="chevron-back" size={40} color={'#fff'} />
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
        <TouchableOpacity onPress={() => onsubmit(text)}>
          <Icon name="search-outline" size={30} />
        </TouchableOpacity>
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
});

export default Search;
