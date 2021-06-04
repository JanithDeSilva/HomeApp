//import 'react-native-gesture-handler';
//naviag
import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {View, ImageBackground} from 'react-native';

//new 2
import {FlatList, ImageBackgroundBase, SafeAreaView, StyleSheet, Text} from 'react-native';
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



import bgImage from './../assets/img/bgi.jpg';

//import services from './services';
const Home = () => {

    const [services, setServices] = useState([ 
    {
        id: '1',
        name: 'Light Control',
        Price: '40,000 LKR',
        image: require('./../assets/img/img.jpg'),
    },

    {
        id: '2',
        name: 'Fan Control',
        Price: '40,000 LKR',
        image: require('./../assets/img/img.jpg'),
    },

    {
        id: '3',
        name: 'Sensor',
        Price: '40,000 LKR',
        image: require('./../assets/img/img.jpg'),
    },

    {
        id: '4',
        name: 'Water Tank',
        Price: '40,000 LKR',
        image: require('./../assets/img/img.jpg'),
    },
]);


//colors
return(
    
    <View style={{flex:1}}>
        <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />

{/*-----*/}

    <ImageBackground style={{flex: 1}} source ={bgImage} style={{flex: 1, justifyContent: 'center',  alignItems: 'center', height: null, width: null, tintColor: 'cyan',}}>

    

            <SafeAreaView>
                <ViewHeader>
                    <Icon name="arrow-back" size={28} style={{paddingTop: 30, marginLeft: 5, color: 'white'}} />
                    
                    
                    <Text style={{fontSize: 20, fontWeight: 'bold', paddingLeft: -50, color: 'white', paddingTop: 30}}>Back</Text>
                    <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 150, color: 'white', paddingTop: 30}}>Username</Text>
                    <Icon name="person" size={35} style={{paddingTop: 30, color: 'white'}} />  
                </ViewHeader>
                    <PageTitle style={{color: 'white', fontSize: 35, justifyContent: 'center',  alignItems: 'center'}}>Our Services</PageTitle>
            </SafeAreaView>
{/*-----*/}

    <FlatList
        keyExtractor={(item) => item.id}
        contentContainerStyle={{paddingBottom: 45}}
        data={services}
        renderItem={({ item }) => (
        <Text style={styles.item}>{item.name}</Text>

        )}
    />
</ImageBackground>
    </View>
);
        }

// styles
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: '#fff',
                paddingTop: 65,
                paddingHorizontal: 20,
                marginVertical: -40,
                

            },
            item: {
                marginTop: 40,
                padding: 30,
                backgroundColor: '#ffffff',
                fontSize: 24,
                marginHorizontal: 10,
                marginVertical: 10,
                marginTop:25,
                elevation: 15,
                borderRadius: 10,
                fontWeight: 'bold',
                fontSize: 19,
                paddingHorizontal: 10,
                justifyContent: 'center',
                width: 330,
                alignItems: 'center',
                opacity: 0.7,
                color: 'black',
                
                
            },
            

        });


export default Home;





