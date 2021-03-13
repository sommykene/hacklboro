import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
  } from 'react-native';
import {
    Button,
    Title,
    Paragraph,
  } from 'react-native-paper';
  import {
    Tabs,
    TabScreen,
    useTabIndex,
    useTabNavigation,
  } from 'react-native-paper-tabs';
  
  export default function TopTabNavLessons() {
      return (
        <Tabs
          // uppercase={false} // true/false | default=true | labels are uppercase
          // showTextLabel={false} // true/false | default=false (KEEP PROVIDING LABEL WE USE IT AS KEY INTERNALLY + SCREEN READERS)
          // iconPosition // leading, top | default=leading
          style={{ backgroundColor:'#fff', }} // works the same as AppBar in react-native-paper
          // dark={false} // works the same as AppBar in react-native-paper
          // theme={} // works the same as AppBar in react-native-paper
          // mode="scrollable" // fixed, scrollable | default=fixed
        >
            {/* could have icon="compass" */}
           <TabScreen label="Overview" >  
             <ExploreWitHookExamples />
          </TabScreen>
          <TabScreen label="Lessons">
            <View style={{ backgroundColor: 'black', flex:1 }} />
          </TabScreen>
          <TabScreen label="Discuss">
             <View style={{ backgroundColor: 'red', flex:1 }} />
          </TabScreen>
          <TabScreen label="Test">
             <View style={{ backgroundColor: 'red', flex:1 }} />
          </TabScreen>
        </Tabs>
      )
  }
  
  function ExploreWitHookExamples() {
    const goTo = useTabNavigation();
    const index = useTabIndex();
    return (
      <View style={{ flex:1 }}>
        <Title>Explore</Title>
        <Paragraph>Index: {index}</Paragraph>
        <Button onPress={() => goTo(1)}>Go to Flights</Button>
      </View>
    );
  }
  