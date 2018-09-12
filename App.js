import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Image, ImageBackground, Button,Dimensions,TextInput, Switch,TouchableOpacity, FlatList, ScrollView } from 'react-native';
import {createStackNavigator,createBottomTabNavigator,createDrawerNavigator} from 'react-navigation';
import { Constants } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';
import { inject, observer, Provider } from 'mobx-react';
import { Camera, Permissions, ImagePicker, MapView  } from 'expo';

const CONST_HEIGHT = Dimensions.get('window').height;
const CONST_WIDTH = Dimensions.get('window').width;

import loginimage from './asset/image/login.jpg';
import rainbow from './asset/image/rainbow.jpg';
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
              <Icon style={{paddingLeft: 18,}} name="chevron-left" size={24} color="#91999c" />
            </TouchableOpacity>
          </View>


            <View style={{alignSelf: 'stretch', margin: 3, padding: 10,}}>
              <View style={{flexDirection: 'row',height: 45, padding:10, paddingLeft: 10, marginBottom:1, backgroundColor: 'rgba(255, 255, 255, 0.3)', borderRadius: 35,}}>
                <Icon style={{paddingLeft: 10,}} name="user" size={24} color="#91999c" />
                <TextInput underlineColorAndroid='transparent' style={{fontSize: 18,paddingLeft: 10,flex:1,color: 'white'}} placeholder='Email'></TextInput>
              </View>
            </View>

            <View style={{alignSelf: 'stretch', margin: 3, padding: 10,}}>
              <View style={{flexDirection: 'row',height: 45, padding:10, paddingLeft: 10, marginBottom:1, backgroundColor: 'rgba(255, 255, 255, 0.3)', borderRadius: 35,}}>
                <Icon style={{paddingLeft: 10,}} name="lock" size={24} color="#91999c" />
                <TextInput secureTextEntry={true} underlineColorAndroid='transparent' style={{fontSize: 18,paddingLeft: 10,flex:1,color: 'white'}} placeholder='Password'></TextInput>
              </View>
            </View>

            <View style={{alignSelf: 'stretch', margin: 3, padding: 10,}}>
              <View style={{flexDirection: 'row',height: 45, padding:10, paddingLeft: 10, marginBottom:1, backgroundColor: 'rgba(255, 255, 255, 0.3)', borderRadius: 35,}}>
                <Icon style={{paddingLeft: 10,}} name="lock" size={24} color="#91999c" />
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
                <Icon style={{paddingLeft: 10,}} name="user" size={24} color="#91999c" />
                <TextInput underlineColorAndroid='transparent' style={{fontSize: 18,paddingLeft: 10,flex:1,color: 'white'}} placeholder='Email'></TextInput>
              </View>
            </View>

            <View style={{alignSelf: 'stretch', margin: 3, padding: 10,}}>
              <View style={{flexDirection: 'row',height: 45, padding:10, paddingLeft: 10, marginBottom:1, backgroundColor: 'rgba(255, 255, 255, 0.3)', borderRadius: 35,}}>
                <Icon style={{paddingLeft: 10,}} name="lock" size={24} color="#91999c" />
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

class CameraActivation extends React.Component{
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type: this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                  });
                }}>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {' '}Flip{' '}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => this.props.navigation.goBack(null)}>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {' '}Back{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}
class ImagePickerActivation extends React.Component{
  state = {
    image: null,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    const { status2 } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  }

  render() {
    let { image } = this.state;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Pick an image from camera roll"
          onPress={this._pickImage}
        />
        <Button
          title="Back"
          onPress={()=>this.props.navigation.goBack(null)}
        />
        {image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>
    );
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

}
class Tab1 extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    return(
      <View style={{paddingTop:Constants.statusBarHeight + 5}}>
        <View style={{height:40, flexDirection:'row', justifyContent:'space-between'}}>

          <View style={{paddingLeft:16}}>
            <Icon name="camera" size={20}/>
          </View>
          <View>
            <Text>Dashboard</Text>
          </View>
          <View style={{paddingRight:16}}>
            <Icon name="info-circle" size={20}/>
          </View>

        </View>

        <FlatList
          numColumns={3}
          data={[
            {key:'a', name:'Ibrahim Fikry asjdhasjdhaskjdhaskj'},
            {key:'b', name:'Syimah Ismail' },
            {key:'c', name: 'Haziq Faris'},
            {key:'d', name:'Huhu'},
            {key:'e', name:'Haha'},
            {key:'f', name:'Hoho'},
            {key:'g', name:'Huhu'},
            {key:'h', name:'Haha'},
            {key:'i', name:'Hoho'},
            {key:'j', name:'Huhu'},
            {key:'k', name:'Haha'},
            {key:'l', name:'Hoho'},
            {key:'m', name:'Huhu'},
            {key:'n', name:'Haha'},
            {key:'o', name:'Hoho'},
            {key:'p', name:'Huhu'},
            {key:'q', name:'Haha'},
            {key:'r', name:'Hoho'},
          ]}
          renderItem={({item}) => <View style={{width:Dimensions.get('window').width/3}}><Image style={{height:Dimensions.get('window').width/3,width:Dimensions.get('window').width/3}} source={rainbow}/></View>
          }
        />


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

  _camera = () => {
    console.log("Open Camera");
    this.props.navigation.navigate("CameraActivation");
  }
  _imagepick = () => {
    console.log("Open ImagePicker");
    this.props.navigation.navigate("ImagePickerActivation");
  }




  render() {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Button title="Camera" onPress={this._camera}/>
      <Button title="ImagePicker" onPress={this._imagepick}/>
      </View>
    )
  }
}
class Tab4 extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    return(
      <View style={{paddingTop:Constants.statusBarHeight}}>

        <View style={{alignItems:'center'}}>
          <Text>Notifications</Text>
        </View>

      <FlatList
        data={[
          {key:'a', name:'Ibrahim Fikry'},
          {key:'b', name:'Syimah Ismail' },
          {key:'c', name: 'Haziq Faris'},
          {key:'d', name:'Ibrahim Fikry'},
          {key:'e', name:'Syimah Ismail' },
          {key:'f', name: 'Haziq Faris'},
        ]}
        renderItem={({item}) => <TouchableOpacity>

        <View style={{flexDirection:'row', borderBottomWidth:1,borderTopWidth:1,padding:8}}>



          <View style={{flex:3}}>
            <Text>Your Photo has been liked by {item.name}</Text>
          </View>

          <View style={{flex:1}}>
            <Image style={{height:50,width:50}} source={{uri:'https://www.ftdimg.com/pics/products/7SPNY_330x370.jpg'}} />
          </View>

        </View>
        </TouchableOpacity>
        }
      />
      </View>
    )
  }
}
class Tab5 extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      theme: false,
      notifications: false,
      hmm: true,
    }
  }

  _theme = (x) => {
    console.log("theme toggle");
    this.setState({theme:x})
  }
  _notifications = (x) => {
    console.log("noti toggle");
    this.setState({notifications:x})
  }
  _hmm = (x) => {
    console.log("hmm toggle");
    this.setState({hmm:x})
  }



  render() {
    return(
      <View style={{paddingTop:Constants.statusBarHeight}}>
        <View style={{alignItems:'center'}}>
          <Text>Settings</Text>
        </View>

        <ScrollView>
          <TouchableOpacity>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20,marginBottom:10}}>
            <View style={{flex:3,paddingLeft:16}}>
              <Text>Profile</Text>
            </View>
            <View style={{flex:1,paddingRight:16}}>
            </View>
          </View>
          </TouchableOpacity>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20,marginBottom:10}}>
            <View style={{flex:3,paddingLeft:16}}>
              <Text>Theme (Light/Black)</Text>
            </View>
            <View style={{flex:1,paddingRight:16}}>
              <Switch onValueChange={(x) => this._theme(x)} value={this.state.theme}/>
            </View>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20,marginBottom:10}}>
            <View style={{flex:3,paddingLeft:16}}>
              <Text>Notifications</Text>
            </View>
            <View style={{flex:1,paddingRight:16}}>
              <Switch onValueChange={(x) => this._notifications(x)} value={this.state.notifications}/>
            </View>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20,marginBottom:10}}>
            <View style={{flex:3,paddingLeft:16}}>
              <Text>Hmmm..??</Text>
            </View>
            <View style={{flex:1,paddingRight:16}}>
              <Switch onValueChange={(x) => this._hmm(x)} value={this.state.hmm}/>
            </View>
          </View>
        </ScrollView>

      </View>
    )
  }
}
class Tab6 extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    return(
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    )
  }
}
const CameraTab = createStackNavigator(
  {
    Tab3: {screen:Tab3,},
    CameraActivation: {screen:CameraActivation,},
    ImagePickerActivation: {screen:ImagePickerActivation,},
  },
  {
    headerMode: 'none',
  }
)

CameraTab.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  if(navigation.state.index > 0){
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  }
}

const TabHomePage = createBottomTabNavigator(
  {
    Tab1: {
      screen: Tab1,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: () => <Icon name="th" size={24} style={{color:'gray'}} />,
      },
    },
    Tab2: {
      screen: Tab2,
      navigationOptions: {
        tabBarLabel: 'Likes',
        tabBarIcon: () => <Icon name="heart" size={24} style={{color:'gray'}} />,
      },
    },
    Tab3: {
      screen: CameraTab,
      navigationOptions: {
        tabBarLabel: 'Camera',
        tabBarIcon: () => <Icon name="camera" size={24} style={{color:'gray'}} />,
      },
    },
    Tab4: {
      screen: Tab4,
      navigationOptions: {
        tabBarLabel: 'Notifications',
        tabBarIcon: () => <Icon name="bell" size={24} style={{color:'gray'}} />,
      },
    },
    Tab5: {
      screen: Tab5,
      navigationOptions: {
        tabBarLabel: false,
        tabBarIcon: () => <Icon name="gear" size={24} style={{color:'gray'}} />,
      },
    },
    Tab6: {
      screen: Tab6,
      navigationOptions: {
        tabBarLabel: 'Maps',
        tabBarIcon: () => <Icon name="globe" size={24} style={{color:'gray'}} />,
      },
    },
  },
  {
    tabBarOptions: {
      showLabel:false,
    },
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
