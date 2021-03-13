import React from 'react';
import { View, Image, StyleSheet, Text, Dimensions} from 'react-native';
import badge from '../../images/png/chevron-1.png'

import TagInput from 'react-native-tags-input';

const mainColor = '#fff';


function Profile(){

    return( 
        <View >
            <Text style={{fontSize:30, fontWeight:'bold', marginLeft: 15}}>
                My Profile
            </Text>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
              <Image
                style={styles.logo}
                source={{uri: 'https://reactnative.dev/img/tiny_logo.png',}}
             />
            <Text style={styles.textGrey}> Student </Text>
            </View> 
            
        </View>
        );
}

class MyInterests extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        tags: {
          tag: '',
          tagsArray: ['Maths', 'English language', 'Physics']
        },
        tagsColor: '#c4c4c4',
        tagsText: '#fff',
      };
    }
  
    updateTagState = (state) => {
        this.setState({
          tags: state
        })
      };
  
    render() {
      return (
        <View style={styles.interestContainer}>
          <Text style = {{fontWeight: 'bold', fontSize: 25, alignSelf:'flex-start'}}>My Interests/Topics</Text>
          <TagInput
            updateState={this.updateTagState}
            tags={this.state.tags}
            placeholder="Tags..."                            
            label='Press comma & space to add a tag'
            labelStyle={{color: 'grey'}}
            containerStyle={{width: (Dimensions.get('window').width - 40)}}
            inputContainerStyle={[styles.textInput, {backgroundColor: this.state.tagsColor}]}
            inputStyle={{color: this.state.tagsText}}
            onFocus={() => this.setState({tagsColor: '#fff', tagsText: 'black'})}
            onBlur={() => this.setState({tagsColor: mainColor, tagsText: '#c4c4c4'})}
            autoCorrect={false}
            tagStyle={styles.tag}
            tagTextStyle={styles.tagText}
            keysForTag={', '}/>
        </View>
      );
    }
  }


function Badges(){
    return (
        <View>
            <Text style={{fontSize:28, fontWeight:'bold', marginLeft:15}}>Badges earned</Text>
            <View style={styles.badgeContainer}>
                <Image source = {badge} style = {styles.badge}/>
                <Image source = {badge} style = {styles.badge}/>
                <Image source = {badge} style = {styles.badge}/>
                <Image source = {badge} style = {styles.badge}/>
                <Image source = {badge} style = {styles.badge}/>
            </View>
        </View>
        
    );
}






const styles = StyleSheet.create({
    interestContainer: {
      margin: 15,
      flex: 1,
    },
    textInput: {
        height: 40,
        borderColor: 'transparent',
        borderWidth: 1,
        marginTop: 8,
        borderRadius: 5,
        padding: 3,
      },
    tag: {
        backgroundColor: '#c4c4c4'
    },
    tagText: {
        color: 'black'
    },
    logo: {
        alignSelf: 'flex-start',
        width: 66,
        height: 66,
        padding:70,
        borderRadius: 100,
        marginLeft: 10,
        marginTop: 10,
    },
        
    textGrey: {
        backgroundColor: '#c4c4c4',
        borderRadius: 12,
        height: 50,
        alignSelf: 'center',
        marginLeft:10,
        fontSize: 25,
        paddingRight: 120
    },
    badgeContainer: {
		margin:15,
		flexDirection: 'row',
		justifyContent: 'flex-start', 
		alignSelf: 'flex-start',		
	},

	badge:{
		marginRight:7,
		width:70,
		height:70,
		borderRadius:100,
		backgroundColor: '#c4c4c4',
	}
  });


  export default function MyProfile(){
        return(
            <View>
                <Profile/>
                <MyInterests/>
                <Badges/>
            </View>
            
        );
}
