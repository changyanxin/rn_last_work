import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import { Myfetch} from './Myfetch';

let rootUrl = 'https://www.fastmock.site/mock/aa23b8fb52e80986e88866462206eb29/api';
export default class Login extends Component {
    constructor() {
        super();
        this.state = {
          username: '',
          pwd: '',
          isloading:false
        }
      }
      userhandle = (text) => {
        this.setState({username: text})
      }
      pwdhandle = (text) => {
        this.setState({pwd: text})
      }
    login = () => {
        this.setState({isloading:true})
        Myfetch.post('/login',{
          username: this.state.username,
          pwd: this.state.pwd}
        ).then(res => {
          if (!res.data.status) {
            AsyncStorage.setItem('user', JSON.stringify(res.data))
            .then(() => {
              Actions.replace('home');
            })
          }
        })
      }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View
                    style={{ alignItems: 'center' }}>
                    <View
                        style={{
                            width: '80%',
                            marginRight: 10,
                            borderBottomColor: '#ccc',
                            borderBottomWidth: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingLeft: 20,
                        }}>
                        <Icon name="user" color="red" />
                        <TextInput placeholder="用户名" onChangeText={this.userhandle}/>
                    </View>
                    <View
                        style={{
                            width: '80%',
                            marginRight: 10,
                            borderBottomColor: '#ccc',
                            borderBottomWidth: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingLeft: 20,
                        }}>
                        <Icon name="user" color="red" />
                        <TextInput placeholder="密码" onChangeText={this.pwdhandle}/>
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
                        onPress={this.login}>
                        <Text>登录</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}