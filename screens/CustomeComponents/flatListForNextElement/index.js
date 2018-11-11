import React, { Component } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  Dimensions
} from "react-native";
const {width, height} = Dimensions.get('window');
import style from '../style'

class FlatListDataItem extends Component {
    render(){
      return(
        //   <TouchableOpacity onPress={()=>alert(this.props.company)}>
              <View style={{flex:1, flexDirection:'row', height:120}}>
                  <View style={{flex:30}}>
                  <Image 
                        //source={{uri: this.props.picture}}
                        source={require('../asset/img1.png')}
                        style={{width: 100, height: 100, borderRadius:7}} />
                  </View>
                  <View style={{flex:58}}>
                    <Text style={style.titleText}>{this.props.address} </Text>
                    <View style={{marginTop:10}}>
                        <Text style={style.descriptionText}>{this.props.about}</Text>
                    </View>
                  </View>
                  <View style ={{flex:12, alignItems:'flex-end' }}>
                  <Image
                    source={require('../asset/save.png')}
                    style ={{width:40, height:40, marginTop:-5}}
                    />
                  </View>
              </View>
          //</TouchableOpacity>
      )
    }
}

export default FlatListDataItem;