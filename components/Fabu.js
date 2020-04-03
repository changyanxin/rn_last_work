import React, {Component} from 'react';
import {View,ToastAndroid,Text,Button,TextInput,StyleSheet,Dimensions,Image,ScrollView,TouchableOpacity} from 'react-native'
import {Grid,Icon} from '@ant-design/react-native'
import {Actions} from 'react-native-router-flux';


export default class Home extends Component {
	constructor(){
		super();
		this.state={
			data:[],
			pageSize:10,
			pageCount:1
		}
	}
	next = () =>{
		if(this.state.pageCount==4){
			ToastAndroid.show('当前已为第4页',5);
		}else{
			this.setState({
				pageCount:this.state.pageCount+1
			})
		}
	}
	prev = () =>{
		if(this.state.pageCount==1){
			ToastAndroid.show('当前已为第1页',5);
		}else{
			this.setState({
				pageCount:this.state.pageCount-1
			})
		}
	}
	componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics')
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res.data
            });
        })
    }
	render(){
		return(
			<View style={{backgroundColor:'lightgray'}}>
				<View style={styles.ss}>
					<View style={{left:10}}>
						<Icon style={styles.ssi} name='home' size={20} onPress={()=>Actions.pop()}/>
					</View>
					<View style={{left:180}}>
						<Text style={styles.sst}>我的发布</Text>
					</View>
				</View>
				<View style={{backgroundColor:'white'}}>
					<View style={{width:width,height:600}}>
						{
							this.state.data.map((item,idx)=>{
								if(Math.floor(idx/this.state.pageSize)+1==this.state.pageCount){
									return(
										<View style={styles.content}>
											<Text style={{width:width*0.5}}>
												{
													item.title.length>15?item.title.substring(0,15)+'...':item.title
												}
											</Text>
											<Text style={{left:width*0.1}}>{item.create_at.substring(0,10)}</Text>
											<Text style={{left:width*0.2}}>glad</Text>
										</View>
									)
								}
							})
						}
					</View>
					<View style={styles.sp}>
						<TouchableOpacity onPress={this.prev} style={[styles.spt,styles.spt1]}><Text>上一页</Text></TouchableOpacity>
						<TouchableOpacity style={styles.spt}><Text>第{this.state.pageCount}页</Text></TouchableOpacity>
						<TouchableOpacity onPress={this.next} style={[styles.spt,styles.spt1]}><Text>下一页</Text></TouchableOpacity>
					</View>
				</View>
			</View>
		)
	}
}
const {width} = Dimensions.get('window');

const styles=StyleSheet.create({
	ss:{
		backgroundColor:'red',
		width:width,
		height:50
	},
	ssi:{
		position:'absolute',
		top:13
	},
	sst:{
		position:'absolute',
		top:13,
		color:'white',
		fontSize:20
	},
	sp:{
		width:width,
		height:30,
		flexDirection:'row'
	},
	spt:{
		left:width*0.15
	},
	spt1:{
		backgroundColor:'red',
		borderRadius:20,
		width:width*0.25,
		height:width*0.05,
		color:'white',
		alignItems:'center',
		justifyContent:'center'
	},
	content:{
		width:width,
		height:width*0.1,
		flexDirection:'row'
	}
})