import React, {Component} from 'react';
import {View,Text,Button,TextInput,StyleSheet,Dimensions,Image} from 'react-native'
import {Grid,Icon} from '@ant-design/react-native'
export default class List extends Component {
	render(){
		return(
			<View style={{borderColor:'gray'}}>
				<View style={styles.box1}>
					<TextInput 
						placeholder='请输入商品名称'
					/>
					<Icon style={styles.searchIcon} name='search'/>
				</View>

				<View style={{
					flexDirection:'row',
					justifyContent:"space-evenly",
					flexWrap:'wrap',
					marginTop:20,
					marginBottom:10,
					borderTopWidth:1,
					borderColor:'lightgray'
				}}>
					<View><Text style={{fontSize:19,color:'red'}}>综合</Text></View>
					<View><Text style={{fontSize:18}}>销量</Text></View>
					<View><Text style={{fontSize:18}}>新品</Text></View>
					<View><Text style={{fontSize:18}}>价格</Text></View>
					<View><Text style={{fontSize:18}}>信用</Text></View>
				</View>

				<View style={styles.container}>
					<View style={styles.box3}>
						<View style={styles.innerBox}>
							<Image style={{left:30,height:190}} source={require('../assets/images/1.png')}/>
							<Text>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
							<Text style={{color:'red'}}>36.00</Text>
						</View>
						<View style={styles.innerBox}>
							<Image style={{left:30,height:190}} source={require('../assets/images/2.png')}/>
							<Text>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
							<Text style={{color:'red'}}>36.00</Text>
						</View>
					</View>	
					<View style={styles.box3}>
						<View style={styles.innerBox}>
							<Image style={{left:30,height:190}} source={require('../assets/images/1.png')}/>
							<Text>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
							<Text style={{color:'red'}}>36.00</Text>
						</View>
						<View style={styles.innerBox}>
							<Image style={{left:30,height:190}} source={require('../assets/images/2.png')}/>
							<Text>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
							<Text style={{color:'red'}}>36.00</Text>
						</View>
					</View>	
					<View style={styles.box3}>
						<View style={styles.innerBox}>
							<Image style={{left:30,height:190}} source={require('../assets/images/1.png')}/>
							<Text>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
							<Text style={{color:'red'}}>36.00</Text>
						</View>
						<View style={styles.innerBox}>
							<Image style={{left:30}} source={require('../assets/images/2.png')}/>
							<Text>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
							<Text style={{color:'red'}}>36.00</Text>
						</View>
					</View>	
				</View>
			</View>
		)
	}
}
const {width} = Dimensions.get('window');

const styles=StyleSheet.create({
	box1:{
		top:10,
		left:width*0.05,
		width:width*0.9,
		backgroundColor:'gray',
		opacity:0.4,
		color:'black',
		borderRadius:10,
		bottom:10
	},
	searchIcon:{
		color:'black',
		position:'absolute',
		left:width*0.8,
		top:15
	},
	container:{
		backgroundColor:'lightgray',
		flexDirection:'column',
		flexWrap:'wrap',
		justifyContent:'center',
		alignItems:'center'
	},
	box3:{
		marginTop:5,
		flexDirection:'row',
	},
	innerBox:{
		width:width*0.47,
		marginLeft:width*0.02,
		height:250,
		backgroundColor:'white'
	}
})