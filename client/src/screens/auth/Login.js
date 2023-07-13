import React, {useState} from 'react';
import { View, TextInput, ActivityIndicator, Text, Image, TouchableOpacity, Alert } from 'react-native';
import AppStyle from '../../components/AppStyle.js';
import AppColor from '../../components/AppColors.js';
import { auth } from '../../utilis/Firebase-Config.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut } from 'firebase/auth';
import axios from 'axios';
const Login = props => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [isLoginView, setIsLoginView] = useState(true);
 
    const loginAction = async() => {
      if(email !=="" && password !==""){
         try {
           
          const user =await signInWithEmailAndPassword(auth, email, password);

         } catch (error) {
          Alert.alert("Authentication", error.message);
         }
      } else{
          Alert.alert("Authentication", "All input are required!!");
      }
  }

  const singupAction = async() => {   
    if(email !=="" && password !=="" && firstName !=="" && lastName !== ""){

      //const api = "http://10.0.0.15:3002/api/products/creatNewAccount";
     const api = "http://10.70.0.61:3002/api/products/creatNewAccount";
        try {
          
         const fbuser =await createUserWithEmailAndPassword(auth, email, password);
         
         const user = {
            firstName: firstName,
            lastName: lastName,
            uid: fbuser.user.uid,
            email: email,
            password: password

         }

         await axios.post(api, {user})
         .then(results => {
            console.log(results);
            Alert.alert("Authentication", results);
         })
         .catch(error => {
            console.log(error);
            Alert.alert("Authentication", error.message);
         })

        } catch (error) {
         Alert.alert("Authentication", error.message);
        }
     } else{
         Alert.alert("Authentication", "All input are required!!");
     }
}

    return(
        <View style={[AppStyle.container,{backgroundColor:AppColor.white}]}>
            <Image source={require('../../../assets/logo-store-1.png')} style={AppStyle.logo}/>
            {
            isLoginView ? (
               <View style={AppStyle.form_container}>
                  <Text style={AppStyle.Screen_titel}>Login</Text>
                  <Text style={AppStyle.Screen_context}>Type you email and password to signin</Text>
                  <TextInput style={AppStyle.input} 
                    keyboardType='email-address'
                    placeholder='Email address'
                    autoCapitalize='none'
                    value={email}
                    onChangeText={(e) => {setEmail(e)}}
                  />

                  <TextInput style={AppStyle.input} 
                    keyboardType='default'
                    placeholder='Password'
                    autoCapitalize='none'
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(e) => {setPassword(e)}}
                  />

                  <TouchableOpacity onPress={loginAction} style={[AppStyle.btnL, {marginTop:20,height:60}]}>
                     <Text style={[AppStyle.btn_text,{color:AppColor.Persimmon,fontSize:25}]}>Sing In</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => {setIsLoginView(!isLoginView)}} style={AppStyle.simple_btn}>
                    <Text style={AppStyle.simple_btn_text}>Don't have an account? Create one now!</Text>
                  </TouchableOpacity>

               </View>
            ) 
            : 
            (
                <View style={AppStyle.form_container}>
                  <Text style={AppStyle.Screen_titel}>SingUp</Text>
                  <Text style={AppStyle.Screen_context}>Type you full name, email and password to new account</Text>
                  <TextInput style={AppStyle.input} 
                    keyboardType='default'
                    placeholder='First Name'
                    value={firstName}
                    onChangeText={(e) => {setFirstName(e)}}
                  />

                  <TextInput style={AppStyle.input} 
                    keyboardType='default'
                    placeholder='Last Name'
                    value={lastName}
                    onChangeText={(e) => {setLastName(e)}}
                  />

                  <TextInput style={AppStyle.input} 
                    keyboardType='email-address'
                    placeholder='Email address'
                    autoCapitalize='none'
                    value={email}
                    onChangeText={(e) => {setEmail(e)}}
                  />

                  <TextInput style={AppStyle.input} 
                    keyboardType='default'
                    placeholder='Password'
                    autoCapitalize='none'
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(e) => {setPassword(e)}}
                  />

                  <TouchableOpacity onPress={singupAction} style={[AppStyle.btnL, {marginTop:20,height:60}]}>
                     <Text style={[AppStyle.btn_text,{color:AppColor.Persimmon,fontSize:25}]}>Sing Up</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => {setIsLoginView(!isLoginView)}} style={AppStyle.simple_btn}>
                    <Text style={AppStyle.simple_btn_text}>Back to Login</Text>
                  </TouchableOpacity>

               </View>
            )
           }
        </View>
    )
}

export default Login;