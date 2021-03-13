import React from 'react';

import AddCourse from './AddCourse';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Thumbnail from '../components/courseThumbnail';
import Spacer from '../utils/Spacer';
import UserHeader from '../components/Header';
import TopSearchBar from '../components/Searchbar';

const SearchPage = ({navigation}) => {
  return (
    <>
      <UserHeader />
      <View style={{flex: 1, margin: 20}}>
        <TopSearchBar />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  buttons: {
    padding: 20,
    backgroundColor: '#1792EB',
    borderRadius: 15,
  },
});
export default SearchPage;
