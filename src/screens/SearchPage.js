import React, {useState} from 'react';

import AddCourse from './AddCourse';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Thumbnail from '../components/courseThumbnail';
import Spacer from '../utils/Spacer';
import UserHeader from '../components/Header';
import TopSearchBar from '../components/Searchbar';

import courseData from '../utils/courseData.json';

const SearchPage = ({navigation}) => {
  const [search, setSearch] = useState('');

  var arr = [];

  Object.keys(courseData).forEach((key) => {
    arr.push(courseData[key]);
  });

  const [courseList, updateCourseList] = useState(arr);

  var results = courseList.map((item, i) =>
    item.type === 'Student' ? (
      <>
        <Thumbnail
          key={item.courseTitle}
          courseTitle={item.courseTitle}
          courseDescription={item.courseDescription}
          courseTeacher={item.courseTeacher}
          onPress={() => navigation.navigate('ViewCourse')}
        />
        <Spacer />
      </>
    ) : null,
  );

  return (
    <>
      <UserHeader />
      <View style={{flex: 1, margin: 20}}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            borderRadius: 10,
            elevation: 2,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TextInput
            style={{paddingLeft: 20}}
            onChangeText={(text) => setSearch(text)}
            onClear={(text) => setSearch('')}
            placeholder="Search Courses..."
            value={search}
          />
          <Image
            style={{
              height: 30,
              width: 30,
              resizeMode: 'contain',
              marginRight: 20,
            }}
            source={require('../images/search.png')}
          />
        </View>
        <Spacer />
        <Spacer />

        {search.length > 5 ? (
          <>
            <Thumbnail />
            <Spacer />
            <Thumbnail />
          </>
        ) : search.length > 3 ? (
          <>
            <Thumbnail />
            <Spacer />
            <Thumbnail />
            <Spacer />
            <Thumbnail />
          </>
        ) : (
          <>{results}</>
        )}
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
