import React from 'react';
import { StyleSheet, Text, View,TextInput ,TouchableOpacity ,Alert , Modal ,ScrollView, KeyboardAvoidingView} from 'react-native';
import firebase from'firebase';
import db from '../config'
export default class WelcomeScreen extends React.Component {
    constructor(){
        super();
        this.state={
            username:'',
            password:'',
            ConfirmPassword:'',
            emailId:'',
            MiddleName:'',
            Address:'',
            FirstName:'',
        }
    }
    userLogin=(username,password)=>{
        firebase.auth().signInWithEmailAndPassword(username,password)
        .then(()=>{
            return Alert.alert("Successfully Login")
        })
        .catch((error)=>{
            var errorCode=error.Code;
            var errorMessage= error.message;
            return Alert.alert(errorMessage)
        })
    }
    userSignUp=(username,password) =>{
        firebase.auth().signInWithEmailAndPassword(username,password)
        .then((response)=>{
            return Alert.alert("User Added Successfully ")
        }) 
        .catch((error)=>{
            var errorCode=error.Code;
            var errorMessage= error.message;
            return Alert.alert(errorMessage)
        }) 
    }
    render(){
        return(
            <View style={styles.container}>
             <View>  
        {/* <SantaAnimation /> */}
       <Text style={styles.heading}>Barter App</Text>
    </View>
    <View>
        <TextInput 
        style={styles.loginbox}
        placeholder="abc@yahoo.com"
        keyboardType='email-address'
        onChangeText={(text)=>{
        this.setState({
            username:text
        })
        }}
        />
         <TextInput 
        style={styles.loginbox}
        secureTextEntry={true}
        placeholder="Password"
        onChangeText={(text)=>{
        this.setState({
            password:text
        })
        }}
        />
        <TouchableOpacity style={[styles.button,{marginBottom:20,marginTop:20}]}
        onPress={()=>{this.userLogin(this.state.username,this.state.password)}}
        >
<Text style={styles.buttonText}>login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
        onPress={()=>{this.userSignUp(this.state.username,this.state.password)}}
        >
<Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>


    </View>
            </View>
        )
    }
}
   const styles = StyleSheet.create({ 
    container: {
      flex: 1,
      backgroundColor: "pink",
    },
    heading:{
        fontSize:60,
        fontWeight:'bold',
    paddingBottom:30,
      color:'red'
    },
    loginbox:{
        width:300,
        height:40,
        borderBottomWidth:1.5,
        borderColor:'#ff8a65',
        fontSize:20,
        margin:10,
        paddingLeft:10 
    },
    button:{
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:"yellow",
        shadowColor:"#000",
        shadowOffset:{width:0,height:8},
        shadowOpacity:0.30,
        shadowRadius:10.32,
        elevation:16
    }  ,
    buttonText:{
color:"blue",
fontWeight:'200',
fontSize:20
    },
    ModalContainer:{
        flex:1,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"yellow",
        marginRight:30,
        marginLeft:30,
        marginTop:80,
        marginBottom:80
    },
    title:{
        justifyContent:'center',
        alignSelf:'center',
        fontSize:30,
        color:'#453abc',
        margin:50
    },
    KeyboardAvoidingView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    TextInput:{
       
        width:"75%",
         height:35,
          alignSelf:'center',
          borderColor:'#ffab91',
           borderRadius:10, 
           borderWidth:1,
            marginTop:20, 
            padding:10
    },
    TouchableOpacity:{
        width:200, 
        height:40, 
        alignItems:'center',
         justifyContent:'center',
         borderWidth:1, 
         borderRadius:10, 
         marginTop:30
    }
  });     
