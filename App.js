import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Image, ImageBackground, Dimensions,TextInput, TouchableOpacity } from 'react-native';
import {createStackNavigator,createBottomTabNavigator,createDrawerNavigator} from 'react-navigation';
import { Constants } from 'expo';
import Icon from 'react-native-vector-icons/EvilIcons';
import { inject, observer, Provider } from 'mobx-react';

const CONST_HEIGHT = Dimensions.get('window').height;
const CONST_WIDTH = Dimensions.get('window').width;

import loginimage from './asset/image/login.jpg';
import iconimage from './asset/image/icon.png';

import stores from "./stores";

class RegisterPage extends React.Component{
  constructor(props){
    super(props);
  }

  _back = () => {
    this.props.navigation.goBack(null);
  }


  render() {
    return(
      <View>
        <ImageBackground style={{width:CONST_WIDTH,height:CONST_HEIGHT}}source={loginimage}>



          <View style={{backgroundColor: 'rgba(0,0,0,0.85)', height: CONST_HEIGHT,width:CONST_WIDTH, flex:1,justifyContent:'center',alignItems:'center'}}>

          <View style={{alignSelf:'stretch',justifyContent:'flex-start'}}>
            <TouchableOpacity onPress={this._back}>
              <Icon style={{paddingLeft: 10,}} name="chevron-left" size={48} color="#91999c" />
            </TouchableOpacity>
          </View>


            <View style={{alignSelf: 'stretch', margin: 3, padding: 10,}}>
              <View style={{flexDirection: 'row',height: 45, padding:10, paddingLeft: 10, marginBottom:1, backgroundColor: 'rgba(255, 255, 255, 0.3)', borderRadius: 35,}}>
                <Icon style={{paddingLeft: 10,}} name="user" size={30} color="#91999c" />
                <TextInput underlineColorAndroid='transparent' style={{fontSize: 18,paddingLeft: 10,flex:1,color: 'white'}} placeholder='Email'></TextInput>
              </View>
            </View>

            <View style={{alignSelf: 'stretch', margin: 3, padding: 10,}}>
              <View style={{flexDirection: 'row',height: 45, padding:10, paddingLeft: 10, marginBottom:1, backgroundColor: 'rgba(255, 255, 255, 0.3)', borderRadius: 35,}}>
                <Icon style={{paddingLeft: 10,}} name="lock" size={30} color="#91999c" />
                <TextInput secureTextEntry={true} underlineColorAndroid='transparent' style={{fontSize: 18,paddingLeft: 10,flex:1,color: 'white'}} placeholder='Password'></TextInput>
              </View>
            </View>

            <View style={{alignSelf: 'stretch', margin: 3, padding: 10,}}>
              <View style={{flexDirection: 'row',height: 45, padding:10, paddingLeft: 10, marginBottom:1, backgroundColor: 'rgba(255, 255, 255, 0.3)', borderRadius: 35,}}>
                <Icon style={{paddingLeft: 10,}} name="lock" size={30} color="#91999c" />
                <TextInput secureTextEntry={true} underlineColorAndroid='transparent' style={{fontSize: 18,paddingLeft: 10,flex:1,color: 'white'}} placeholder='Confirm Password'></TextInput>
              </View>
            </View>

            <TouchableOpacity style={{alignSelf: 'stretch', margin: 20,marginTop: 1,marginBottom: 1,padding: 12,backgroundColor: 'blue',borderWidth: 1,borderColor: '#fff',borderRadius: 35,backgroundColor: 'rgba(255, 255, 255, 0.6)',}}>
              <Text style={{fontSize: 18,fontWeight: 'bold',textAlign: 'center',color: '#0c7d9f'}}> REGISTER </Text>
            </TouchableOpacity>


          </View>

        </ImageBackground>
      </View>

    )
  }
}
@inject('auth')
@observer
class LoginPage extends React.Component{
  constructor(props){
    super(props);
  }

  _register = () => {
    this.props.navigation.navigate("RegisterPage");
  }

  _skip = () => {
    console.log('skip');
    this.props.auth.setCheck(true);
  }

  render() {
    return(
      <View>
        <ImageBackground style={{width:CONST_WIDTH,height:CONST_HEIGHT}}source={loginimage}>

          <View style={{backgroundColor: 'rgba(0,0,0,0.85)', height: CONST_HEIGHT,width:CONST_WIDTH, flex:1,justifyContent:'center',alignItems:'center'}}>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image style={{height:120, width:120}} source= {iconimage} />
            </View>


            <View style={{alignSelf: 'stretch', margin: 3, padding: 10,}}>
              <View style={{flexDirection: 'row',height: 45, padding:10, paddingLeft: 10, marginBottom:1, backgroundColor: 'rgba(255, 255, 255, 0.3)', borderRadius: 35,}}>
                <Icon style={{paddingLeft: 10,}} name="user" size={30} color="#91999c" />
                <TextInput underlineColorAndroid='transparent' style={{fontSize: 18,paddingLeft: 10,flex:1,color: 'white'}} placeholder='Email'></TextInput>
              </View>
            </View>

            <View style={{alignSelf: 'stretch', margin: 3, padding: 10,}}>
              <View style={{flexDirection: 'row',height: 45, padding:10, paddingLeft: 10, marginBottom:1, backgroundColor: 'rgba(255, 255, 255, 0.3)', borderRadius: 35,}}>
                <Icon style={{paddingLeft: 10,}} name="lock" size={30} color="#91999c" />
                <TextInput secureTextEntry={true} underlineColorAndroid='transparent' style={{fontSize: 18,paddingLeft: 10,flex:1,color: 'white'}} placeholder='Password'></TextInput>
              </View>
            </View>

            <TouchableOpacity style={{alignSelf: 'stretch', margin: 20,marginTop: 1,marginBottom: 1,padding: 12,backgroundColor: 'blue',borderWidth: 1,borderColor: '#fff',borderRadius: 35,backgroundColor: 'rgba(255, 255, 255, 0.6)',}}>
              <Text style={{fontSize: 18,fontWeight: 'bold',textAlign: 'center',color: '#0c7d9f'}}> LOGIN </Text>
            </TouchableOpacity>

            <View style={{flexDirection:'row', alignSelf:'stretch', margin:20, justifyContent:'space-between'}}>
              <TouchableOpacity onPress={this._register}>
                <Text style={{color:'white'}}>Create Account</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={{color:'white'}}>Forgot Password</Text>
              </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row', alignSelf:'stretch', margin:20, justifyContent:'flex-end'}}>
              <TouchableOpacity onPress={this._skip}>
                <Text style={{color:'white'}}>Skip</Text>
              </TouchableOpacity>
            </View>




          </View>

        </ImageBackground>
      </View>
    )
  }
}
const RegisterAndLogin = createStackNavigator(
  {
    LoginPage: {screen:LoginPage,},
    RegisterPage: {screen:RegisterPage,},
  },
  {
    headerMode: 'none'
  }
)

class Tab1 extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    return(
      <View>
      <Text>This is homepage</Text>
      </View>
    )
  }
}
class Tab2 extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    return(
      <View>
      <Text>This is homepage</Text>
      </View>
    )
  }
}
class Tab3 extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    return(
      <View>
      <Text>This is homepage</Text>
      </View>
    )
  }
}

const TabHomePage = createBottomTabNavigator(
  {
    Tab1: {screen: Tab1,},
    Tab2: {screen: Tab2,},
    Tab3: {screen: Tab3,},
  }
)

@inject('auth')
@observer
class LoadingStackNav extends React.Component{
  constructor(props){
    super(props);

  }
  render() {

    if(this.props.auth.check == false){
      return <RegisterAndLogin/>
    }

    if(this.props.auth.check == true){
      return <TabHomePage/>
    }

    return(
      <View><Text>hmmm...</Text>
      </View>
    )
  }
}

export default class Master extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    return(
      <Provider {...stores}>
        <LoadingStackNav/>
      </Provider>
    )
  }
}


































































const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
