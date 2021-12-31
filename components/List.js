import React from 'react';
import {Text, View, FlatList, StyleSheet, SafeAreaView} from 'react-native';
import PropTypes from 'prop-types';
import Card from './Card';

const propTypes = {
  title: PropTypes?.string,
  content: PropTypes?.array,
  navigation: PropTypes?.object,
};

class List extends React.PureComponent {
  render() {
    const {title, content, navigation} = this.props;
    return (
      <SafeAreaView style={styles?.listContainer}>
        <View>
          <Text style={styles?.listTitle}>{title}</Text>
        </View>
        <View>
          <FlatList
            data={content}
            horizontal={true}
            renderItem={({item}) => (
              <Card item={item} navigation={navigation} />
            )}
            keyExtractor={item => item?.id}
          />
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  listContainer: {
    marginTop: 25,
  },
  listTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    paddingBottom: 15,
  },
});

List.propTypes = propTypes;

export default List;
