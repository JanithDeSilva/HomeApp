//import 'react-native-gesture-handler';
//naviag
import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {View, ImageBackground, TouchableOpacity, Dimensions, ScrollView} from 'react-native';

//new 2
import {FlatList, ImageBackgroundBase, SafeAreaView, StyleSheet, Text, TextInput, Modal, Button} from 'react-native';
import {ModalPicker} from './../components/ModalPicker'
import Icon from 'react-native-vector-icons/MaterialIcons';



//formik package install to form design
//import {Formik} from 'formik';

//icons 
import{Octicons, Ionicons, Fontisto} from '@expo/vector-icons';




//importing styled container we created
import{
    
    PageTitle,
    ViewHeader,
    
    
}from './../components/styles';//importing styles



import bgImage from './../assets/img/light.jpg';
import { color } from 'react-native-reanimated';

//import services from './services';
const LightPurchase = () => {
    const handlePress = () => false
    const [chooseData, setchooseData] = useState('Select Quantity');
    const [isModalVisible, setModalVisible] = useState(false);
    const changeModalVisibility = (bool) => {
        setModalVisible(bool)
    }
    //const [name, setName] = useState('ss');
    //const [age, setAge] = useState('1');


    const setData = (option) => {
        setchooseData(option)
    }


//colors
return(
    
    <View style={{flex:1}}>
        <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />

        
{/*-----*/}

    <ImageBackground style={{flex: 1}} source ={bgImage} style={{flex: 1, alignItems: 'center', height: null, width: null, tintColor: 'cyan',}}>

    
            <SafeAreaView style={styles.safecon}>
                <ViewHeader>
                    <Icon name="arrow-back" size={28} style={{paddingTop: 0, marginLeft: 5, color: 'white'}} />
                    
                    
                    <Text style={{fontSize: 20, fontWeight: 'bold', paddingLeft: -50, color: 'white', paddingTop: 0}}>Back</Text>
                    <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 170, color: 'white', paddingTop: 0}}>Username</Text>
                    <Icon name="person" size={35} style={{paddingTop: 0, color: 'white'}} />  
                </ViewHeader>
                    <PageTitle style={{color: 'white', fontSize: 35, alignItems: 'center'}}>Light On/Off</PageTitle>

{/*sub heading and desc*/}
                    <Text style={{color: 'white', fontSize: 14, justifyContent: 'center',  alignItems: 'center', textAlign: 'center', padding: 10}}>
                    Having an automatic home light control system will let you turn the lights on 
                    and off with just a tap of a button. Choose a quanitity and name the features according to your reference .
                    </Text>

                    <View style={styles.extraText}>
                    <Text style={styles.extraTextTo}>────────────────────</Text>
                    </View>

                    <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white', paddingTop: 10,marginBottom: 10, textAlign: 'left'}}>Put Your Quanitity :</Text>

                    <TouchableOpacity
                    onPress={() => changeModalVisibility(true)}
                    style={styles.touchableOpacity}
                    >
                    <Text style={styles.textdrop}>{chooseData}</Text>
                    </TouchableOpacity>

                    <Modal
                        translucent={true}
                        animationType='fade'
                        visible={isModalVisible}
                        nRequestClose={() => changeModalVisibility(false)}
                    >
                    
                    <ModalPicker
                        changeModalVisibility={changeModalVisibility}
                        setData={setData}
                    
                    />

                    </Modal>

                   <View style={styles.row}>
                        <View style={styles.inputWrap}>
                            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white', paddingTop: 30, paddingLeft: 20, textAlign: 'left'}}>Feature 1 :</Text>
                        </View>
                        <View style={styles.inputWrapText}>
                              <TextInput 
                              style={styles.input}
                              placeholder='eg. som' />
                        </View>
                    </View>  
                    <View style={styles.row}>
                        <View style={styles.inputWrap}>
                            <Text style={{fontSize: 24, fontWeight: 'bold', color: 'white', paddingTop: 10, paddingLeft: 20, textAlign: 'left'}}>Price</Text>
                        </View>
                        <View style={styles.inputWrapText}>
                        <Text style={{fontSize: 24, fontWeight: 'bold', color: 'white', paddingTop: 10, paddingLeft: -10, marginRight: 33}}>48,000LKR</Text>
                      
                        </View>
                    </View>    
                   
                    

                    <View style = {styles.containerButton}>
         <TouchableOpacity>
            <Text style = {styles.textButton}>
               Add to cart
            </Text>
         </TouchableOpacity>
      </View>

                    
                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
                    
            </SafeAreaView>

            
           
   
    
{/*-----*/}

   
</ImageBackground>
    </View>
);
        }

// styles
        const styles = StyleSheet.create({
            safecon: {
            
                
                alignItems: 'center',
                justifyContent: 'center',
                padding: 10,
                
                

            },

            touchableOpacity :{
                backgroundColor: '#1E90FF',
                alignSelf: 'stretch',
                paddingHorizontal: 15,
                marginHorizontal: 15,
                borderRadius: 40,
                alignItems: 'center',
                height: 70,
                opacity: 0.9,
                height: 68,
                
                
               
            
                
            },

            textdrop :{
                marginVertical: 20,
                fontSize: 25,
                color: 'white',
                fontWeight: 'bold',
                height: 150
                
                
            },

            row: {
                
                flexDirection: 'row',
                paddingLeft: -15,
                
                    
            },

            inputWrap: {
                flex: 1,
                paddingLeft: -15,
                padding: -8,
                marginLeft: -10
                
                
              },
              inputWrapText: {
                paddingLeft: -15,
                padding: -8,
                marginLeft: -40
              },

            input: {
                
                backgroundColor: 'white',
                padding: 8,
                margin: 22,
                width: 180,
                borderRadius: 20,
                alignItems: 'center',
                paddingLeft: 55,
                
                
                
            },
            extraText: {
                justifyContent: 'center',
                flexDirection: 'row',
                alignItems: 'center',
                
            },

            extraTextTo: {
                
                justifyContent: 'center',
                alignContent: 'center',
                color: 'white',
                fontSize: 25
            },

            buttonAddToCart: {
                
                padding: 4,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 40,
                marginVertical: 5,
                height: 50,
            },
            containerButton: {
                
                marginTop: 10,
                alignItems: 'center',
                
            },
            textButton: {
                
                padding: 10,
                backgroundColor: '#FF8C00',
                borderRadius: 15,
                color: 'white',
                fontWeight: 'bold',
                
              
            }

            

        });


export default LightPurchase;





