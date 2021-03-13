import React from 'react';
import {StyleSheet, View} from 'react-native';

import VideoPlayer from '../components/VideoPlayer';
import TopTabNavLessons from '../components/navigation/TopTabNavLesson';

const ViewCourse = () => {
  return (
    <>
      <VideoPlayer videoID={'p33BYf1NDAE'} />
      <TopTabNavLessons />
    </>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     width: '70%',
//   },
// });

export default ViewCourse;
