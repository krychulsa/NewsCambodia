import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  Dimensions,
  Platform
} from "react-native";
import {
  Header,
  Container,
  Left,
  Icon,
  Button,
  Body,
  Title,
  Right,
  Content,
  Toast,
  List,
  Item,
  Input
} from "native-base";
//import Icon from 'react-native-vector-icons/Ionicons';
import contentData from "../asset/data/contents.json";
import index from "../More/index.js";
import FlatListDataFirstItem from '../CustomeComponents/flatListForFirstElement'
import FlatListDataNextItem from '../CustomeComponents/flatListForNextElement'
import CategoryComponent from '../CustomeComponents/scrollviewByCategories/index'
import HeaderComponent from "../CustomeComponents/headerComponents/index.js";

const {width, height} = Dimensions.get('window');
const firstThumnail = width*337/512

class AboutScreen extends Component {
  static navigationOptions = {
    header: null,
    tabBarLabel: null,
    tabBarIcon: ({ tintColor }) => (
      <Icon name="settings" color={tintColor} size={24} />
    )
  };
  //Constructor
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: []
    };
  }


  
  componentDidMount() {
    return fetch(
      "http://www.json-generator.com/api/json/get/bZuAiFGmYy?indent=2"
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            data: responseJson
          },
          function() {}
        );
      })
      .catch(error => {
        console.warn(error);
      });
  }
  render() {
    // if (this.state.isLoading) {
    //   return (
    //     <Container style={styles.container}>
          
    //       <HeaderComponent/>

    //       <Content padder>
    //         <View style={{ flex: 1, alignItems: 'center' }}>
    //           <Image source = {require('../asset/Loading/loading.gif')}
    //           style={{width: width, height: firstThumnail}} 
    //           />
              
    //         </View>
    //         <View style={{ flex: 1, alignItems: 'center' }}>
    //           <Image source = {require('../asset/Loading/loading.gif')}
    //           style={{width: width, height: firstThumnail}} 
    //           />
    //           </View>

    //           <View style={{ flex: 1, alignItems: 'center' }}>
    //           <Image source = {require('../asset/Loading/loading.gif')}
    //           style={{width: width, height: firstThumnail}} 
    //           />
    //           </View>
    //       </Content>
    //     </Container>
    //   );
    // } else {
      return (
        <Container style={styles.container}>
          
          <HeaderComponent/>
          
          <Content padder>
            <List>
              <FlatList
                //data={this.state.data}
                data = {contentData}
                renderItem={({ item, index }) => (

                  index % 6 === 0 ?
                  <View>
                  <CategoryComponent/>
                  <TouchableOpacity onPress={()=>this.props.navigation.navigate("detail", item)} style={{marginBottom:20}}>
                    <FlatListDataFirstItem address={`${item.address.substring(0,75)}...`} company={item.company} picture={item.picture} about = {`${item.about.substring(0,90)}...`}/> 
                  </TouchableOpacity> 
                  </View> 
                    : 
                  <TouchableOpacity onPress={()=>this.props.navigation.navigate("detail", item)} style={{marginBottom:20}}>
                    <FlatListDataNextItem address={`${item.address.substring(0,45)}...`} company={item.company} picture={item.picture} about = {`${item.about.substring(0,75)}...`}/>
                  </TouchableOpacity>
                )}
                keyExtractor={({id}, index) => id}
              />
              
            </List>
          </Content>
        </Container>
      );
    }
  }
// }
export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
  },
  mb10: {
    marginBottom: 10
  },
  textColor: {
    color: "#fff"
  }
});
