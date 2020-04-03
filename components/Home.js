import React, {Component} from 'react';
import {View,Text,Button,TextInput,StyleSheet,Dimensions,Image,ScrollView,TouchableOpacity} from 'react-native'
import {Grid,Icon} from '@ant-design/react-native'
export default class Home extends Component {
	render(){
		return(
			<View>
				<View 
					style={{
						backgroundColor:'#ff3333',
						height:60,
						flexDirection:'row'
					}}
				>
					<View
						style={{
							width:width*0.7,
							height:40,
							backgroundColor:'lightgray',
							opacity:0.7,
							top:10,
							left:width*0.1,
							borderRadius:25,
							flexDirection:'row'

						}}
					>
						<Icon style={styles.icon1} name='search' size={25}/>
						<TextInput
							placeholder='请输入您要搜索的关键字'
							placeholderTextColor='gray'
						/>
					</View>
					<Icon  style={styles.icon2} name='shopping' size={25}/>
				</View>

				<View style={{flex:1}}>
					<View style={{height:260}}>
						<ScrollView horizontal={true}>
							<View>
								<Image 
									style={styles.images} 
									source={require('../assets/images/banner1.png')}
								/>
							</View>
							<View>
								<Image 
									style={styles.images} 
									source={require('../assets/images/banner2.jpg')}
								/>
							</View>
							<View>
								<Image 
									style={styles.images} 
									source={require('../assets/images/banner3.jpg')}
								/>
							</View>
						</ScrollView>
					</View>
				</View>

				<View style={{backgroundColor:'lightgray',top:260}}>
					<View style={styles.box2}>
						<View style={[styles.box22,{backgroundColor:'#ffcccc'}]}>
							<Icon name='home' size={25}/>
						</View>
						<Text>居家维修保养</Text>
					</View>
					<View style={styles.box2}>
						<View style={[styles.box22,{backgroundColor:'#ffcc99'}]}>
							<Icon name='home' size={25}/>
						</View>
						<Text>住宿优惠</Text>
					</View>
					<View style={styles.box2}>
						<View style={[styles.box22,{backgroundColor:'#ccff99'}]}>
							<Icon name='home' size={25}/>
						</View>
						<Text>出行接送</Text>
					</View>
					<View style={styles.box2}>
						<View style={[styles.box22,{backgroundColor:'#ccffff'}]}>
							<Icon name='home' size={25}/>
						</View>
						<Text>E族活动</Text>
					</View>
				</View>

				<View 
					style={{
						top:300,
						justifyContent:'center',
						alignItems:'center'
					}}
				>
					<TouchableOpacity 
						style={{
							backgroundColor:'#ff3333',
							width:width*0.8,
							height:40,
							borderRadius:5,
							marginLeft:width*0.04,
							justifyContent:'center',
							alignItems:'center',
							bottom:30
						}}
					>
						<Text style={{color:'white'}}>发布需求</Text>
					</TouchableOpacity>
					<Text>E族之家 版权所有</Text>
				</View>
			</View>
		)
	}
}
const {width} = Dimensions.get('window');

const styles=StyleSheet.create({
	icon1:{
		top:5,
		left:5
	},
	icon2:{
		top:17,
		left:70
	},
	images:{
		width:width,
		height:260
	},
	box2:{
		width:width,
		height:width*0.15,
		backgroundColor:'white',
		flexDirection:'row',
		marginBottom:5,
		alignItems:'center'
	},
	box22:{
		width:width*0.1,
		height:width*0.1,
		// backgroundColor:'#ffcccc',
		borderRadius:width*0.05,
		left:width*0.05,
		marginRight:width*0.11,
		justifyContent:'center',
		alignItems:'center'
	}
})