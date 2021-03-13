import React from 'react';
import { View, Image, StyleSheet, Text, Dimensions} from 'react-native';

//--------------------BADGE IMAGE IMPORTS-----------------
import badge from '../../images/png/chevron-1.png'
import badge2 from '../../images/png/chevron-10.png'
import badge3 from '../../images/png/chevron-11.png'
import badge4 from '../../images/png/chevron-12.png'


import TagInput from 'react-native-tags-input';


// ------------------ PROFILE SECTION --------------------
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

// ------------------ INTEREST TAG FUNCTIONALITY! --------------------
class MyInterests extends React.Component {
    // Tag states.
    constructor(props) {
      super(props);
      this.state = {
        tags: {
          tag: '',
          tagsArray: ['Maths', 'English language', 'Physics']//Holds all tags.
        },
        tagsColor: '#c4c4c4',
        tagsText: '#fff',
      };
    }
    
    // function to update the tags as they're added.
    updateTagState = (state) => {
        this.setState({
          tags: state
        })
      };
    
    
    render() {
      return (
        <View style={styles.interestContainer}>
          <Text style = {{fontWeight: 'bold', fontSize: 25, alignSelf:'flex-start'}}>My Interests/Topics</Text>
          {/* The tag component. allows user to input tags and will update tags. prop info can be found at:
                  https://morioh.com/p/f47c27d5e8ba
            */}
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
            onBlur={() => this.setState({tagsColor: '#fff', tagsText: '#c4c4c4'})}
            autoCorrect={false}
            tagStyle={styles.tag}
            tagTextStyle={styles.tagText}
            keysForTag={', '}/>
        </View>
      );
    }
  }


// ------------------ BADGES -------------------------
function Badges(){
    return (
        <View>
            <Text style={{fontSize:28, fontWeight:'bold', marginLeft:15, marginTop:170}}>Badges earned</Text>
            <View style={styles.badgeContainer}>
                <Image source = {badge} style = {styles.badge}/>
                <Image source = {badge2} style = {styles.badge}/>
                <Image source = {badge3} style = {styles.badge}/>
                <Image source = {badge4} style = {styles.badge}/>
                <Image source = {badge2} style = {styles.badge}/>
            </View>
        </View>
        
    );
}




//-----------STYLESHEETS FOR COMPONENTS------------------

const styles = StyleSheet.create({
    interestContainer: {
      margin: 30,
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
