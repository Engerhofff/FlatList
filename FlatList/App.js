import React, {Component} from "react";
import {View, Text, StyleSheet, FlatList} from 'react-native'

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      filmes: [

        {id: '1', nome: 'Sandman'},
        {id: '2', nome: 'Sabrina'},
        {id: '3', nome: 'Soul eater'},
        {id: '4', nome: 'Bleach'},
        {id: '5', nome: 'Chain saw man'},
        {id: '6', nome: 'One piece'},
        {id: '7', nome: 'Naruto'},
        {id: '8', nome: 'Boku no hero'},
        {id: '9', nome: 'Tokyo Revenge'},

        ]
      }
    }
 
    render(){
      return(
        <View style={StyleSheet.container}>

        <FlatList
       
        data={this.state.filmes}
        keyExtractor={(item) => item.id}
        renderItem= {({item}) =>
        <View style={styles.containerfilmes}>
         
          <Text style={styles.textfilmes}>{item.nome}</Text>
        
        </View>
      }
        
        />

        </View>
      )
    }  
} 

const styles = StyleSheet.create({
  container:{
  flex: 1,
  },

  containerfilmes:{
    backgroundColor:'orange',
    height:80,
    margin:10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },

  textfilmes:{
    color: 'white',
    fontSize: 20,
    fontweight: 'bold'
  }
});

