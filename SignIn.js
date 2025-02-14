import React,{useState,useEffect} from 'react';
import {styles} from './CommonStyles';
import * as Font from 'expo-font';
import Icon from 'react-native-vector-icons/Ionicons';
import {View,TouchableOpacity,Text,TextInput} from 'react-native';

//переопределение экрана SignIn
const SignIn=({navigation})=>{


    //хуки
    const[password,setPassword]=useState('');
    const[isPasswordVisible,setPasswordVisible]=useState(false);

    //функция видимости пароля
    const togglePasswordVisible=()=>{
        setPasswordVisible(!isPasswordVisible);
    }

    //шрифты
    useEffect(()=>{
        Font.loadAsync({
            'Raleway_font':require('./assets/Raleway-Medium.ttf'),
            'Poppins_font':require('./assets/Poppins-Medium.ttf'),
        });
    },[]);

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={()=>navigation.goBack()}>
                <Icon name='chevron-back-outline' size={24} color='black'/>
            </TouchableOpacity>
            <View style={styles.header}>
                <Text style={styles.title}>Привет!</Text>
                <Text style={styles.subtitle}>Заполните Свои Данные Или{'\n'}
                    Продолжите Через Социальные Медиа
                </Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.text}>Email</Text>
                <TextInput style={styles.input}
                placeholder='xyz@gmail.com'
                keyboardType='email-address'
                autoCapitalize='none'/>
                <View>
                    <Text style={styles.text}>Пароль</Text>
                    <TextInput style={styles.input}
                    placeholder='Пароль'
                    autoCapitalize='none'
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!isPasswordVisible}//видимость пароля
                    />
                    <TouchableOpacity onPress={togglePasswordVisible}>
                    <Icon style={styles.iconContainer}
                    name={isPasswordVisible?'eye-outline':'eye-off-outline'}
                    size={24}
                    />
                    </TouchableOpacity>
                    
                </View>
                <TouchableOpacity>
                    <Text style={styles.restoreText}>Восстановить</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Войти</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity  onPress={()=>navigation.navigate('SignUp')}>
                    <Text style={styles.footerText}>Вы впервые?{' '}<Text style={styles.linkText}>Создать пользователя</Text></Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SignIn;