
import React, { Component } from 'react';
import IconFA from 'react-native-vector-icons/FontAwesome';
import { 
    FlatList, Text,View,StyleSheet,Dimensions,Icon,Image,TouchableHighlight
 } from 'react-native';
 import MainView from "./MainView";
 import {
    StackNavigator,
  } from 'react-navigation';
 export default class DayListView extends Component {
    render(){
        return (
            <FlatList
                numColumns = {3}
                data={this.flatDatasource}
                renderItem={({item}) => this.DayListViewCellForRow({item})}
                ListHeaderComponent = {
                    <Image source={require('../../HelloRNResource/day2.png')} style = {styles.header} />
                }
            />
        );
    }

    constructor(props) {
        super(props);
        this.flatDatasource = [
            {
                key:0,
                title:"day0",
                isFA: true,
                icon: "star",
                size: 48,
                color: "#ff856c",
                hideNav: false,
            }
        ];
    }

    DayListViewCellForRow({item}){
        return (
            <TouchableHighlight style={styles.boxContainer} 
            onPress ={({item}) =>this.DayListViewCellClicked({item})} >
            <View>
                <Text style={styles.boxText}>{item.title}</Text>
                    {
                        item.isFA ? 
                                <IconFA size={item.size} name={item.icon} style={[styles.boxIcon,{color:item.color}]}></IconFA> :
                                <Icon size={item.size} name={item.icon} style={[styles.boxIcon,{color:item.color}]}></Icon>
                    }
            </View>
            </TouchableHighlight>
          );
    }
    

    DayListViewCellClicked({item}){
        const next = () => ({
            screen: MainView,
            navigationOptions: {
              headerTitle: 'Hello RN for day N ',
            }}
        );
        this.props.navigator.navigate(next);
    }
}

const styles = StyleSheet.create({
    header: {
      padding: 5,
      height: 120,
      width: Dimensions.get('window').width,
      borderWidth: 0.5,
      borderColor: '#ededed',
      justifyContent: 'center',
      backgroundColor:'#FFF'
    },
    text:{
        fontSize:11,
        color:'#bbbbbb',
        textAlign:"center",
        backgroundColor:'transparent',
    },
    boxIcon:{
        position:"relative",
        top:-10
      },
      boxText:{
        position:"absolute",
        bottom:15,
        width:Dimensions.get('window').width/3,
        textAlign:"center",
        left: 0,
        backgroundColor:"transparent"
      },
      boxContainer:{
        alignItems:"center",
        justifyContent:"center",
        width: Dimensions.get('window').width/3,
        height:Dimensions.get('window').width/3,
        direction:'ltr',
        borderWidth: 0.5,
        borderColor: '#ededed',
        backgroundColor:'#FFF'
      },
});
  