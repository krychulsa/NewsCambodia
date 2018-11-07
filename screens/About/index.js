import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions
} from "react-native";
import { Container, Header, Left, Icon, Body, Right, Button, Title, Content,} from "native-base"
import IconRn from 'react-native-vector-icons/Ionicons';
import styles from './Style'
const aboutText = `អគារខ្ពស់កប់ពពក«មជ្ឈមណ្ឌលពាណិជ្ជកម្ម ថៃប៊ុនរ៉ុង» កម្ពស់ ១៣៣ជាន់ ខ្ពស់ជាងគេនៅអាស៊ាន តម្លៃជាង៣ពាន់លានដុល្លារអាមេរិក ស្ថិតនៅតំបន់ Dream Land ទល់មុខអគារ Naga World  បានធ្វើពិធីបញ្ចុះសីមា សុំម្ចាស់ទឹកម្ចាស់ដីសម្រាប់ការសាងសង់ហើយកាលពីថ្ងៃទី ១៩ខែមីនាម្សិលមិញនេះ ។

លោកសាស្ត្រាចារ្យ ទួស សាភឿនជា​ប្រធាន​ក្រុម​ស្ថាបត្យករ និង​សំណង់​ប្រចាំ​ក្រុមហ៊ុន Thai Boon Rong Groupនិង ​ជា​អគ្គលេខាធិការរង​នៃ​​គណៈស្ថាបត្យករ​កម្ពុជា និង​ជា​សាកលវិទ្យាធិការរង​នៃ​សាកលវិទ្យាល័យ​វេស្ទើន បានបញ្ជាក់នៅលើហ្វេសបុគរបស់លោកថា  នេះជាព្រឹត្តការណ៏បើកការដ្ឋានដំបូង គឺសម្រាប់ការដ្ឋានគម្រោងជញ្ជាំងបេតុងទប់ដី ដើម្បីធ្វើគ្រឹះបង្ការកុំអោយមានការបាក់ច្រាំងនៅពេលការចាប់ផ្តើមសាងសង់សំណង់អាគារភ្លោះទាំងមូល ។
លោកបានបន្តថា គម្រោងនេះ សាងសង់នៅលើផ្ទៃដីទំហំ ៤៩.៧៣២ម៉ែត្រក្រឡា ដែលមានកំពស់៥៦១.៧ម៉ែត្រ, ១៣៣ជាន់ គឺគិតចំនួនផ្ទៃដែលប្រើប្រាស់បាន បើគិតបញ្ចូលទាំងកំពស់អង់តែន២៥ម៉ែត្រទៀតគឺមានកំពស់រហូតដល់៥៨៦.៧ម៉ែត្រឯណោះ។

គួររំលឹកថា មជ្ឈមណ្ឌលពាណិជ្ជកម្មលំដាប់ពិភពលោកនេះ រួមបញ្ចូលនូវសណ្ឋាគារកម្រិតផ្កាយ៥ ខុនដូប្រណីត អាផាតមិន ការិយាល័យលំដាប់អន្តរជាតិ ផ្សារទំនើបចំរុះ ភោជនីយដ្ឋាននិងសេវាកម្មកម្សាន្តលំដាប់ពិភពលោកជាច្រើនកន្លែង និងកន្លែងទេសចរណ៏គយគន់ទេសភាពរាជធានីភ្នំពេញ ។

លោកសាស្ត្រាចារ្យ ទួស សាភឿនបានធ្លាប់បញ្ជាក់ប្រាប់ពាណិជ្ជកម្មកម្ពុជាថា វត្តមាន គម្រោង​ ​អគារ​ពាណិជ្ជកម្ម​លំដាប់​ពិភពលោក នឹងផ្លាស់ប្តូរមុខមាត់រាជធានីភ្នំពេញ និងកម្ពុជាទាំងមូលទៅកាន់សកលលោក។

លោកបានបន្តថា “ គម្រោងអគារពាណិជ្ជកម្ម Thai Boon Rong Twin Towersនឹង​ក្លាយ​ជា​មោទនភាព​ និង​ជា​កិត្យានុភាព​សម្រាប់​ប្រទេស​កម្ពុជា​នៅ​លើ​ឆាក​អន្តរជាតិ និង​មុខមាត់​ប្រទេស​ជាតិ​ដែល​ជា​ប្រទេស​ធ្លាប់​មាន​អរិយធម៌​ខ្ពង់ខ្ពស់​” ។`
const {width, heigh} = Dimensions.get('window');
class AboutScreen extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <Header 
                    hasSubtitle 
                    noShadow
                    style={{backgroundColor:'#3866b8'}}
                    androidStatusBarColor="#3866b8"
                    iosBarStyle="light-content"
                >
                    <Left>
                        <Button transparent onPress={()=>this.props.navigation.goBack()}>
                            <Icon name="arrow-back" style={{ color: "#FFF" }}></Icon>
                        </Button>
                    </Left>
                    <Body>
                        <Title style={styles.textColor}>News Cambodia</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={()=>alert("Press Button Search")}>
                            <Icon name="call" size={30} style={{ color: "#FFF" }} />
                        </Button>
                        <Button transparent onPress={()=>alert("Press Button More")}>
                            <Icon name="share" style={{ color: "#FFF" }}></Icon>
                        </Button>
                    </Right>
                </Header>
                <Content>
                        <Image style={{width:width, height : 200}} source={require('../asset/background/KCTechnology.png')}></Image>
                        <View style={{flex:1, flexDirection:'row'}}>
                            <View style={{flex:20}}>
                                <Image style={{width:60, height : 60, borderRadius:30, marginLeft:10, marginTop:10}} source={require('../asset/Logo/newsCambodia.jpg')}></Image>
                            </View>
                            <View style={{flex:80, marginLeft:10, marginTop:25, alignItems:'stretch'}}>
                                <Text style={{fontWeight:"bold", fontSize:14}}>KC Technology</Text>
                                <Text style={{fontWeight:"bold", fontSize:11}}>The Premium technology of Choice</Text>
                            </View>
                        </View>

                        <Content padder>
                            <Text style={{padding:10}}>{aboutText}</Text>
                        </Content>
                        
                </Content>
            </Container>
            );
        }
    }
    export default AboutScreen;
