import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';


//formik package install to form design
import {Formik} from 'formik';

//icons 
import{Octicons, Ionicons, Fontisto} from '@expo/vector-icons';




//importing styled container we created
import{
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    Colors,
    StyledButton,
    ButtonText,
    MsgBox,
    Line,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent

}from './../components/styles';//importing styles

import {View} from 'react-native';

//colors
const {brand, darkLight, primary} = Colors;

const Login = () => {
    const [hidePassword, setHidePassword] = useState(true);


    return(
    <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
            <PageLogo resizeMode="cover" source={require('./../assets/img/img.jpg')} />
            <PageTitle>Welcome!</PageTitle>
           {/* <SubTitle>Login from here</SubTitle> */}

            <Formik
            initialValues={{email:'', password: ''}}
            onSubmit={(values) => {
                console.log(values);
            }}
            >
            {({handleChange, handleBlur, handleSubmit, values}) => (<StyledFormArea>

                <MyTextInput 
                
                    label="Email Address"
                    icon="mail"
                    placeholder="your@mail.com"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    keyboardType="email-addrees"

                />
                <MyTextInput 
                
                label="Password"
                icon="lock"
                placeholder="* * * * * * * * *"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}

            />
            <MsgBox>...</MsgBox>

                <StyledButton onPress={handleSubmit}>
                    <ButtonText>Login</ButtonText>
                </StyledButton>
            
           

                

                <ExtraView>
                    <ExtraText>Forgot Password?</ExtraText>
                    <TextLink>
                    <TextLinkContent>Click here</TextLinkContent>
                    </TextLink>
                    
                </ExtraView>

                <StyledButton google={true} onPress={handleSubmit}>
                   {/*<Fontisto name="google" color={primary} size={25} />*/}
                    <ButtonText google={true}>Sign Up</ButtonText>
                </StyledButton>

            </StyledFormArea>)}

            

            </Formik>

        </InnerContainer>
    </StyledContainer>

    );
};

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) =>{
    return(
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                /* password visible and hide */
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight}  />
                </RightIcon>
            )}
        </View>);
};

export default Login;
