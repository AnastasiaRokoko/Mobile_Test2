import { StyleSheet } from "react-native";

export const styles=StyleSheet.create({

    container:{
        flex:1,
        marginTop:-70,
        padding:20,
        backgroundColor:'#FFFFFF',
        justifyContent:'center',
    },

    backButton:{
        top:130,
        left:20,
        padding:8,
        position:'absolute',
        width:44,
        height:44,
        borderRadius:40,
        backgroundColor:'#F7F7F9',
        alignItems:'center',
    },

    header:{
        height:450,
        justifyContent:'center',
    },

    title:{
        fontFamily:'Raleway_font',
        fontWeight:700,
        fontSize:32,
        lineHeight:37.57,
        textAlign:'center',
        color:'#2B2B2B',
        marginBottom:15,
    },

    subtitle:{
        fontFamily:'Poppins_font',
        fontWeight:400,
        fontSize:16,
        lineHeight:24,
        textAlign:'center',
        color:'#707B81',
        marginBottom:30,
    },

    content:{
        flex:1,
        marginTop:-40,
        marginBottom:-90,
        justifyContent:'center',
    },

    text:{
        fontFamily:'Raleway_font',
        fontWeight:500,
        fontSize:16,
        lineHeight:20,
        textAlign:'left',
        color:'#2B2B2B',
        marginBottom:15,
    },

    input:{
        paddingHorizontal:15,
        borderRadius:14,
        height:50,
        backgroundColor:'#F7F7F9',

        fontFamily:'Poppins_font',
        fontWeight:500,
        fontSize:14,
        lineHeight:16,
        color:'#6A6A6A',
        marginBottom:30,

    },

    iconContainer:{
        marginLeft:310,
        alignSelf:'center',
        color:'#6A6A6A',
        marginTop:-65,
    },

    restoreText:{
        fontFamily:'Poppins_font',
        fontWeight:400,
        fontSize:12,
        textAlign:'right',
        lineHeight:16,
        color:'#707B81',
        marginBottom:30,
        marginTop:-10,
    },

    button:{
        backgroundColor:'#48B2E7',
        borderRadius:14,
        height:50,
        justifyContent:'center',
    },

    buttonText:{
        fontFamily:'Raleway_font',
        fontWeight:600,
        fontSize:14,
        textAlign:'center',
        lineHeight:22,
        color:'#F7F7F9',
    },

    footer:{
        height:450,
        justifyContent:'center',
    },

    footerText:{
        fontFamily:'Raleway_font',
        fontWeight:500,
        fontSize:16,
        alignSelf:'center',
        lineHeight:18.78,
        color:'#6A6A6A',
        marginTop:160,
        position:'absolute',
    },
    linkText:{
        color:'#2B2B2B',
    },

    view:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:-15,
    },
    checkboxContainer:{
        borderRadius:6,
        justifyContent:'center',//выравнивание по вертикали
        alignItems:'center',//выравнивание по горизонтали
        position:'absolute',
        backgroundColor:'#F7F7F9',
        width:18,
        height:18,

        
    },

    label:{
        textDecorationLine:'underline',
        marginLeft:20,
        marginBottom:15,
        padding:8,
        color:'#6A6A6A',

        fontFamily:'Raleway_font',
        fontWeight:500,
        fontSize:16,
        lineHeight:18.78,
        color:'#6A6A6A',
    },

    errorText:{
        fontFamily:'Poppins_font',
        fontSize:14,
        fontWeight:500,
        textAlign:'left',
        color:'green',
        marginTop:15,
    }
});