import React,{useState,useEffect} from 'react';
import {styles} from './CommonStyles';
import * as Font from 'expo-font';
import Icon from 'react-native-vector-icons/Ionicons';
import {View,TouchableOpacity,Text,TextInput} from 'react-native';
import { supabase } from './supabaseClient';

//переопределение экрана SignUp
const SignUp=({navigation})=>{

    //хуки
        const[password,setPassword]=useState('');
        const[isPasswordVisible,setPasswordVisible]=useState(false);

        const[isChecked,setChecked]=useState(false);

        const[email,setEmail]=useState('');
        const[error,setError]=useState('');

        //регулярное выражение для подтверждения email
        const emailPattern=/^[a-z0-9]+[a-z0-9]+.\[a-z]{2,}$/;

        const handleSignUp=async()=>{
            if(!emailPattern.test(email)){
                setError('Введите корректный email согласно шаблону name@domainname.ru');
                return;
            }
            if(password.length<6){
                setError('Длина пароля не менее 6 символов');
                return;
            }
            setError("");
            try{
                const {user,error}=await supabase.auth.signUp({
                    email,
                    password,
                });
                if(error){
                    setError(error.message);//выводим ошибку Supabase
                } else{
                    console.log('Регистрация прошла успешно!',user);
                    navigation.navigate('SignIn');
                }
            } catch(error){
                console.log('Ошибка при попытке регистрации');
                setError('Ошибка регистрации: ',error);
            };
        }
    
        //функция видимости пароля
        const togglePasswordVisible=()=>{
            setPasswordVisible(!isPasswordVisible);
        }

        //функция-чекбокс
        const toggleIsChecked=()=>{
            setChecked(!isChecked);
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
                    <TouchableOpacity style={styles.backButton}>
                        <Icon name='chevron-back-outline' size={24} color='black'/>
                    </TouchableOpacity>
                    <View style={styles.header}>
                        <Text style={styles.title}>Регистрация</Text>
                        <Text style={styles.subtitle}>Заполните Свои Данные Или{'\n'}
                            Продолжите Через Социальные Медиа
                        </Text>
                    </View>
            <View style={styles.content}>
                <Text style={styles.text}>Ваше имя</Text>
                <TextInput style={styles.input}
                placeholder='XXXXXXXX'
                />
                <Text style={styles.text}>Email</Text>
                                <TextInput style={styles.input}
                                placeholder='xyz@gmail.com'
                                keyboardType='email-address'
                                autoCapitalize='none'
                                value={email}
                                onChangeText={setEmail}/>
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
                                {error?<Text style={styles.errorText}>{error}</Text>:null}
                                <View style={styles.view}>
                <TouchableOpacity style={styles.checkboxContainer} onPress={toggleIsChecked}>
                    <Icon name={isChecked?'shield-checkmark':''}
                    size={9}
                    color={isChecked?'black':'gray'}
                    />
                </TouchableOpacity>
                <Text style={styles.label}>Даю согласие на обработку{'\n'}персональных данных</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                                <Text style={styles.buttonText}>Зарегистрироваться</Text>
            </TouchableOpacity>
                
            </View>
             <View style={styles.footer}>
                            <TouchableOpacity  onPress={()=>navigation.navigate('SignIn')}>
                                <Text style={styles.footerText}>Есть аккаунт{' '}<Text style={styles.linkText}>Войти</Text></Text>
                            </TouchableOpacity>
                        </View>
            
        </View>
    );
};

export default SignUp;