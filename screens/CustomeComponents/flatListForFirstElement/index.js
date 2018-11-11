import React, { Component } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  Dimensions
} from "react-native";
import style from '../style'

const {width, height} = Dimensions.get('window');
class FlatListDataFirstItem extends Component {
  render(){
    return(
        // <TouchableOpacity onPress={()=>this.props.navigate("search")} style={{marginBottom:20}}>
            <View>
                <View>
                    <Image 
                      //source={{uri: this.props.picture}}
                      source={require('../asset/img2.png')}
                      style={{width: width - 20, height: 200, borderRadius:5}} />
                </View>
                <View padder style={{ flex:1, flexDirection:'row', marginTop:5}}>
                  <View style={{flex:88}}>
                    <Text style = {style.titleText}>{this.props.address} </Text>
                  </View>
                  <View style={{flex:12, alignItems:'flex-end'}}>
                  <Image
                    source={require('../asset/save.png')}
                    style ={{width:40, height:40, marginTop:-5}}
                    />
                  </View>
                </View>
                <View padder style={{marginTop:5}}>
                  <Text style = {style.descriptionText}>{this.props.about}</Text>
                </View>
            </View>
        // </TouchableOpacity>
    )
  }
}

export default FlatListDataFirstItem;