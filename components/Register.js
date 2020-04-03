import React, {Component} from 'react';
import { View,Text,Image,TextInput, AsyncStorage, ToastAndroid,TouchableOpacity,ToastAndroid} from 'react-native';
import {Grid,Icon} from '@ant-design/react-native'
import { Actions } from 'react-native-router-flux';
import { Myfetch} from './Myfetch';

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      pwd: ''
    }
  }
  userhandler = (text) => {
    this.setState({username: text})
  }
  pwdhandler = (text) => {
    this.setState({pwd: text})
  }
  register = () => {
    if (this.state.username == '' || this.state.pwd == '') {
      ToastAndroid.show('用户名和密码不能为空',5);
    } else {
      ToastAndroid.show('注册中',10);
      Myfetch.post('/register', {
        username: this.state.username,
        pwd: this.state.pwd}
      ).then(res => {
        Actions.replace('login');
      })
    }
  }

  render() {
    return (
      <View style={{flex: 1,justifyContent: 'center'}}>
        <View style={{ alignItems: 'center'}}>
          <Text>注册页</Text>
          <View style={{
            width: '80%',
            marginRight: 10,
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 20,
          }}>
            <Icon name="user" color="red"/>
            <TextInput 
              style={{width: '80%'}} 
              placeholder="用户名" 
              onChangeText={this.userhandler}
            />
          </View>
          <View style={{
            width: '80%',
            marginRight: 10,
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 20,
          }}>
            <Icon name="key" color="red"/>
            <TextInput 
              style={{width: '80%'}} 
              onChangeText={this.pwdhandler} 
              placeholder="密码" 
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity 
            style={{
              width: '80%',
              height: 40,
              backgroundColor: '#ccc',
              marginTop: 30,
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onPress={this.register}
          >
            <Text>注册</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={{
              width: '80%',
              height: 40,
              backgroundColor: '#ccc',
              marginTop: 30,
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onPress={() => {Actions.login()}}
          >
            <Text>返回登录页</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}