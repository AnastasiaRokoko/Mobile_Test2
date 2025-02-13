import React from 'react';
import {View,Text,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {styles} from './CommonStyles';
import SignIn from './SignIn';
import SignUp from './SignUp';

//создание стека навигации
const Stack=createStackNavigator();

//переопределение экрана Apps
const Apps=({navigation})=>{
  return(
    <View style={styles.container}>
      <Text>Welcome to the Home Screen!</Text>
      <Button title="Go To Sign In" onPress={()=>navigation.navigate('SignIn')}/>
    </View>
  );
};

//корневая функция App
export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Apps' screenOptions={{headerShown:false}}>
        <Stack.Screen name='Apps' component={Apps}/>
        <Stack.Screen name='SignIn' component={SignIn}/>
        <Stack.Screen name='SignUp' component={SignUp}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}