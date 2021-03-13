import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Button, Title, Paragraph} from 'react-native-paper';
import {
  Tabs,
  TabScreen,
  useTabIndex,
  useTabNavigation,
} from 'react-native-paper-tabs';
import Spacer from '../../utils/Spacer';

import LessonTitle from '../LessonTitle';
import DiscussionTitle from '../DiscussionTitle';

const theme = {colors: {primary: '#1792EB'}};

export default function TopTabNavLessons() {
  return (
    <Tabs theme={theme} uppercase={false} style={{backgroundColor: '#fff'}}>
      <TabScreen label="Info">
        <InfoTab />
      </TabScreen>
      <TabScreen label="Lessons">
        <LessonTab />
      </TabScreen>
      <TabScreen label="Discuss">
        <DiscussTab />
      </TabScreen>
      <TabScreen label="Live">
        <LiveTab />
      </TabScreen>
    </Tabs>
  );
}

const InfoTab = () => {
  return (
    <View style={{padding: 20, flex: 1}}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          paddingBottom: 10,
          color: 'black',
        }}>
        Fractions for kids
      </Text>
      <Text>
        Get ready for fun in this fractions learning video for kids! Math
        doesn't have to be tricky! Learn what a fraction is, what the numerator
        and denominator is and how to use fractions in word problem situations.
        Great for 2nd, 3rd and even 4th grade students. Even a first grader will
        get a ton out of this video!
      </Text>
    </View>
  );
};
const LessonTab = () => {
  return (
    <View style={{flex: 1, padding: 20}}>
      <Text
        style={{
          fontSize: 15,
          paddingBottom: 10,
          color: 'black',
          fontWeight: 'bold',
        }}>
        Available
      </Text>
      <LessonTitle title="Dividing by 2" />
      <Spacer />
      <LessonTitle title="Dividing by 3" />
      <Spacer />
      <Spacer />
      <Text
        style={{
          fontSize: 15,
          paddingBottom: 10,
          color: 'black',
          fontWeight: 'bold',
        }}>
        Pending
      </Text>
      <LessonTitle title="Dividing by 5" locked={true} />
      <Spacer />
      <LessonTitle title="Dividing by 10" locked={true} />
    </View>
  );
};
const DiscussTab = () => {
  return (
    <View style={{flex: 1, padding: 20}}>
      <DiscussionTitle
        question="What about dividing by 0"
        answer="We will look at that in the next course"
      />
      <Spacer />
      <DiscussionTitle
        question="Can you add fractions"
        answer="Yes but we will cover in a different lesson"
      />
      <Spacer />
    </View>
  );
};
const LiveTab = () => {
  return (
    <View style={{flex: 1, padding: 20}}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          paddingBottom: 10,
          color: 'black',
        }}>
        Theses Lessons will be taught live
      </Text>
      <Spacer />
      <Text
        style={{
          fontSize: 15,
          paddingBottom: 10,
          color: 'black',
        }}>
        15/03/2021
      </Text>
      <LessonTitle title="Dividing by 5" />
      <Spacer />
      <Text
        style={{
          fontSize: 15,
          paddingBottom: 10,
          color: 'black',
        }}>
        20/03/2021
      </Text>
      <LessonTitle title="Dividing by 10" />
    </View>
  );
};

function ExploreWitHookExamples() {
  const goTo = useTabNavigation();
  const index = useTabIndex();
  return (
    <View style={{flex: 1}}>
      <Title>Explore</Title>
      <Paragraph>Index: {index}</Paragraph>
      <Button onPress={() => goTo(1)}>Go to Flights</Button>
    </View>
  );
}
