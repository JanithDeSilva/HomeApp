import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';

//new 2
import {FlatList, SafeAreaView, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';



//formik package install to form design
import {Formik} from 'formik';

//icons 
import{Octicons, Ionicons, Fontisto} from '@expo/vector-icons';




//importing styled container we created
import{
    StyledContainer,
    InnerContainer,
    HomeLogo,
    PageTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    Colors,
    StyledButton,
    ButtonText,
    MsgBox,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent,
    ViewHeader,
    ViewCart,
    
    
}from './../components/styles';//importing styles
import services from './services';

import {View} from 'react-native';

//colors
const {brand, darkLight, primary} = Colors;

const Home = () => {
    const HomeCard = () => {
        return <ViewCart><HomeLogo resizeMode="cover" source={require('./../assets/img/img.jpg')} /></ViewCart>
        
    };


    return(
    <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
        {/*<HomeLogo resizeMode="cover" source={require('./../assets/img/img.jpg')} />*/}
            
           {/* <SubTitle>Login from here</SubTitle> */}

            <SafeAreaView style={{backgroundColor:Colors.primary, flex: 1}}>
                <ViewHeader>
                    <Icon name="arrow-back" size={28} />
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Back</Text>
                    
                </ViewHeader>
                <PageTitle>Our Services</PageTitle>

                <FlatList showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 80}}
                data={services}
                renderItem={({item}) => <HomeCard item={item} />}
                 />
                 <FlatList showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 80}}
                data={services}
                renderItem={({item}) => <HomeCard item={item} />}
                 />
                 <FlatList showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 80}}
                data={services}
                renderItem={({item}) => <HomeCard item={item} />}
                 />
                 <FlatList showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 80}}
                data={services}
                renderItem={({item}) => <HomeCard item={item} />}
                 />
            </SafeAreaView>
            

        </InnerContainer>
    </StyledContainer>

    );
};





export default Home;
