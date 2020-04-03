/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {
  Router,
  Scene,
  Tabs,
  Actions
} from 'react-native-router-flux';
import SplashScreen from 'react-native-splash-screen';
import {Grid,Icon} from '@ant-design/react-native'


// 首页
import Home from './components/Home';
// 商品分类
import List from './components/List';
// 购物车
import Shopping from './components/Shopping';
// 个人中心
import Mycenter from './components/Mycenter2';
// 发布
import Fabu from './components/Fabu';
// 登录
import Login from './components/Login';
// 注册
import Register from './components/Register';
// 引导页
import SwiperPage from './components/SwiperPage';

console.disableYellowBox = true;

const App = () => {
  let [isLogin, setLogin] = useState(false);
  let [isInstall, setInstall] = useState(false);
  let now;
  
  useEffect(() => {
    init();
  },[]);

  let init = () => {
    // SplashScreen.show();

    AsyncStorage.getItem('isInstall')
    .then(res => {
      console.log('isinstall', res)
      if(res){
				setInstall(false);
			}
    })

    AsyncStorage.getItem('user')
    .then(res => {
      let user = JSON.parse(res);
      console.log(user);
      if(!user){
				SplashScreen.hide();
			}
      if (user && user.token == 0) {
        setLogin(true);
        SplashScreen.hide();
      }
    })
  }
  let afterInstall = () => {
    console.log('after install');
    setInstall(false);
  }
  
  if (isInstall) {
    return (
      <View style={{flex:1}}>
        <SwiperPage afterInstall={afterInstall}/>
      </View>
    )
  }
  return (
    <>
      <Router
        backAndroidHandler={() => {
          if (Actions.currentScene != 'home') {
            Actions.pop();
            return true;
          }
          else {
            if (new Date().getTime() - now < 2000) {
              BackHandler.exitApp();
            }
            else {
              ToastAndroid.show('确定要退出吗', 100);
              now = new Date().getTime();
              return true;
            }
          }
        }}
      >
          <Scene key="lrin" hideNavBar>
              <Scene initial={!isLogin} key="login" component={Login}/>
              <Scene key="register" component={Register}/>
          </Scene>
          <Scene key='root'>
          <Tabs
            hideNavBar
            key='tabbar'
            activeTintColor='red'
            inactiveTintColor='black'
            tabBarStyle={{backgroundColor:'#eee'}}
          >
            <Scene
              key='home'
              title='首页'
              icon={
                ({focused})=><Icon
                  size={20}
                  color={focused?'red':'black'}
                  name='home'
                />
              }
            >
              <Scene hideNavBar key='homekid' component={Home}/>
            </Scene>

            <Scene
              key='list'
              title='商品分类'
              icon={
                ({focused})=><Icon
                  size={20}
                  color={focused?'red':'black'}
                  name='home'
                />
              }
            >
              <Scene hideNavBar key='listkid' component={List}/>
            </Scene>

            <Scene 
              key='shopping'
              title='购物车'
              icon={
                ({focused})=><Icon
                  size={20}
                  color={focused?'red':'black'}
                  name='home'
                />
              }
            >
              <Scene hideNavBar key='shoppingkid' component={Shopping}/>
            </Scene>

            <Scene 
              key='mycenter'
              title='个人中心'
              icon={
                ({focused})=><Icon
                  size={20}
                  color={focused?'red':'black'}
                  name='home'
                />
              }
            >
              <Scene hideNavBar key='mycenterkid' component={Mycenter}/>
              <Scene hideNavBar key='fabu' component={Fabu}/>

            </Scene>
          </Tabs>
        </Scene>
      </Router>
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
