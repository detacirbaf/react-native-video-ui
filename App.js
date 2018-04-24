import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Constants, Video, ScreenOrientation } from 'expo';
import { Header, ButtonGroup, Rating, List, ListItem} from 'react-native-elements'; // 0.19.1 
import VideoPlayer from '@expo/videoplayer'; // 0.4.0
import '@expo/vector-icons'; 
// 6.3.1 

export default class App extends Component {
  constructor () {
  super()
  this.state = {
    selectedIndex: 2
  }
  this.updateIndex = this.updateIndex.bind(this)
}

ratingCompleted(rating) {
  console.log("Rating is: " + rating)
}
updateIndex (selectedIndex) {
  this.setState({selectedIndex})
}
  render() {
    const buttons = ['Previous', 'Replay', 'Next']
  const { selectedIndex } = this.state
    return (
      <View style={styles.headerView}>
       <Header
          leftComponent={{
            icon: 'menu',
            color: '#fff',
            onPress: () => alert('ea'),
          }}
          centerComponent={{ text: 'LACIFITRA VIDEO PLAYER', style: { color: '#ffffff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
          backgroundColor="black"
        />
        
        
      <View style={styles.container}>
        <VideoPlayer
            videoProps={{  shouldPlay: true,
              resizeMode: Video.RESIZE_MODE_CONTAIN,
              source: { uri: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8' }, // Example Video, I wanted to test something other than YouTube
              isMuted: false}}
            isPortrait={true}
            playFromPositionMillis={0}
            switchToLandscape={()=>ScreenOrientation.allow(ScreenOrientation.Orientation.LANDSCAPE)}
            switchToPortrait={()=>ScreenOrientation.allow(ScreenOrientation.Orientation.PORTRAIT)}
            />
            <ButtonGroup
      onPress={this.updateIndex}
      selectedIndex={selectedIndex}
      buttons={buttons}
      containerStyle={{height: 30}}
    />
    
    <Rating
  type="heart"
  ratingCount={5}
  fractions={2}
  startingValue={4.6}
  imageSize={40}
  onFinishRating={this.ratingCompleted}
  showRating
  style={{ paddingVertical: 10 }}
  
/>

<View style={styles.listStyle}>
    <List>
      
          <ListItem
          roundAvatar
          avatar="https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
          title="Title"
        />
        <ListItem
          roundAvatar
          avatar="https://d3iw72m71ie81c.cloudfront.net/female-62.jpg"
          title="Title"
          badge={{ value: 0 }}
        />
        <ListItem
          roundAvatar
          avatar="https://d3iw72m71ie81c.cloudfront.net/natalia.JPG"
          title="Title"
        />
       
      
      </List>


           
    
      </View>
      </View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 212,
    backgroundColor: 'white',
  
  },
  headerView: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#ffffff',
  },
  
  listStyle: {
    
   height: 25,
   width: 370
    
    
  },

  
  
  
});
