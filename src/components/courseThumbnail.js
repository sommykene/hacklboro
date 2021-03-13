import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    borderRadius: 8,
    backgroundColor: 'grey',
    width: 250,
    height:90,
  },
  t: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 15,
    paddingLeft: 3,
  },
  s: {
    fontWeight: 'bold',
    fontSize:18,
    paddingLeft: 3,
  },
  d: {
    fontSize: 15,
    paddingLeft: 3,
  },
  img: {
    width: 50,
    height: 50,
    paddingRight:4,
  }
});

const ThumbnailDesign = () => {
  const teacher = 'M. Jones';
  const subject = 'Maths';
  const desc = 'This is a maths course';
  return (
    <View style={styles.container}>
      <Image style={styles.img}
        source={{uri:'https://cdn8.openculture.com/wp-content/uploads/2014/06/free-textbooks1.jpg'}}
      />
      <View>
        <Text>
          <Text>
            <Text style={styles.s}>{subject}</Text>
            <Text style={styles.d}>{'\n'}{desc}</Text>
          </Text>
        </Text>
        <Text>
          <Text style={styles.t}>{teacher}</Text>
        </Text>
      </View>
    </View>
  );
};

export default class Thumbnail extends Component {
  _onPressButton() {
    alert('Thumbnail pressed');
  }
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={this._onPressButton}
          underlayColour="blue">
          <ThumbnailDesign />
        </TouchableOpacity>
      </View>
    );
  }
}
