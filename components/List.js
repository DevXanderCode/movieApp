import React from 'react';
import {Text, View, FlatList, StyleSheet, SafeAreaView} from 'react-native';
import Card from './Card';

class List extends React.PureComponent {
  render() {
    const {title, content} = this.props;
    return (
      <SafeAreaView style={styles?.listContainer}>
        <View>
          <Text style={styles?.listTitle}>{title}</Text>
        </View>
        <View>
          <FlatList
            data={content}
            horizontal={true}
            renderItem={({item}) => <Card item={item} />}
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
    paddingBottom: 20,
  },
});

export default List;
