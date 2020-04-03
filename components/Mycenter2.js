import React, {Component} from 'react';
import {View,Text,Button,TextInput,StyleSheet,Dimensions,Image,FlatList,TouchableOpacity} from 'react-native'
import {Grid,Icon} from '@ant-design/react-native'
import {Actions} from 'react-native-router-flux';
export default class Mycenter extends Component {
	render(){
		return(
			<View>
				<View style={styles.box1}>
					<View style={{width:width*0.2,height:width*0.2,borderRadius:width*0.1,overflow:'hidden'}}>
						<Image 
							source={require('../assets/images/banner3.jpg')}
							style={{width:width*0.2,height:width*0.2}}
						/>
					</View>
					<Text style={{color:'white',fontSize:20}}>BINNU DHILLON</Text>
				</View>

				<View style={{
					backgroundColor:'white',
					marginBottom:'0.5%'
				}}>
					<View style={{
						height:40,
						top:10,
						borderBottomWidth:0.5,
						borderColor:'lightgray',
					}}>
						<Icon style={styles.topicicon} name='home' size={25} color='gray'/>
						<Text style={styles.topictext}>我的个人中心</Text>
					</View>
					<FlatList
						data={
							[	
								{key:'账户管理'},{key:'收货地址'},{key:'我的信息'},
								{key:'我的订单'},{key:'我的二维码'},{key:'我的积分'},{key:'我的收藏'}
							]
						}
						numColumns={3}
						renderItem={
							({item})=><View style={styles.slide}>
								<Icon name='doc' size={20} color='gray'/>
								<Text>{item.key}</Text>
							</View>
						}
					/>
				</View>

				<View style={{backgroundColor:'white'}}>
					<View style={{
						height:40,
						top:10,
						borderBottomWidth:0.5,
						borderColor:'lightgray'
					}}>
						<Icon style={styles.topicicon} name='home' size={25} color='gray'/>
						<Text style={styles.topictext}>E族活动</Text>
					</View>
					<FlatList
						data={
							[	
								{key:'居家维修保养'},{key:'出行接送'},{key:'我的受赠人'},
								{key:'我的住宿优惠'},{key:'我的活动'},{key:'我的发布'}
							]
						}
						numColumns={3}
						renderItem={
							({item})=><View style={styles.slide}>
								<Icon name='doc' size={20} color='gray'/>
								<TouchableOpacity onPress={()=>Actions.fabu()}>
									<Text>{item.key}</Text>
								</TouchableOpacity>
							</View>
						}
					/>
				</View>

				<View style={styles.box4}>
					<Text>BINNU DHILLON丨退出</Text>
				</View>
			</View>
		)
	}
}
const {width} = Dimensions.get('window');

const styles=StyleSheet.create({
	box1:{
		width:width,
		height:'35%',
		backgroundColor:'#ff3333',
		justifyContent:'center',
		alignItems:'center'
	},
	topicicon:{
		marginTop:'1%',
		marginLeft:'2%'
	},
	topictext:{
		position:'absolute',
		marginLeft:'8%',
		marginTop:'1%'
	},
	slide:{
		width:width*0.13,
		marginLeft:width*0.1,
		marginRight:width*0.1,
		marginTop:'2%',
		marginBottom:'3%',
		alignItems:'center',
		justifyContent:'center'
	},
	box4:{
		alignItems:'center',
		justifyContent:'center',
		bottom:'-4%'
	},

})