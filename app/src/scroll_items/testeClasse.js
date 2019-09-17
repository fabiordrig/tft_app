import React, { Component } from 'react';
import {
  View,
  Image,
  PanResponder,
  Animated,
  StyleSheet
} from 'react-native';

  import assassin from '../assets/Items/assassin.png';
  
  export default class Drag extends Component{

    constructor() {
        super();
      
        this.state = {
          pan: new Animated.ValueXY()
        };
        
      }
      

      UNSAFE_componentWillMount() {
        this.panResponder = PanResponder.create({
          onMoveShouldSetResponderCapture: () => true,
          onMoveShouldSetPanResponderCapture: () => true,
      
          // Initially, set the value of x and y to 0 (the center of the screen)
          onPanResponderGrant: (e, gestureState) => {
            this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
            console.log(gestureState);
            this.state.pan.setValue({x: 0, y: 0});
          },
      
          // When we drag/pan the object, set the delate to the states pan position
          onPanResponderMove: Animated.event([
            null, {dx: this.state.pan.x, dy: this.state.pan.y},
          ]),
      
          onPanResponderRelease: (e, {vx, vy}) => {
            this.state.pan.flattenOffset();
          }
        });
      }
    
  
  render() {
    const panStyle = {
        transform: this.state.pan.getTranslateTransform()
      }
      let { pan } = this.state;
      let [translateX, translateY] = [pan.x, pan.y];
      let imageStyle = {transform: [{translateX}, {translateY}]};

      return (
        <Animated.View style={imageStyle} {...this.panResponder.panHandlers}>
            <Image style={styles.imagem} source={assassin}/>
        </Animated.View>
    );
  } 
}

let CIRCLE_RADIUS = 30;
let styles = StyleSheet.create({
  circle: {
    backgroundColor: "skyblue",
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS
  },

  imagem:{
      height: 100,
        width:75
  }
});