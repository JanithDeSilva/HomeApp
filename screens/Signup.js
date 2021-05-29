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

const Signup = () => {
    const [hidePassword, setHidePassword] = useState(true);


    return(
    <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
            
            <PageTitle>Create Your Account</PageTitle>
           {/* <SubTitle>Login from here</SubTitle> */}

            <Formik
            initialValues={{userName: '', email: '',phoneNumber: '',address: '',  password: '', confirmPassword: ''}}
            onSubmit={(values) => {
                console.log(values);
            }}
            >
            {({handleChange, handleBlur, handleSubmit, values}) => (<StyledFormArea>

                <MyTextInput 
                
                    label="User Name"
                    icon="person"
                    placeholder="User Name"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange('userName')}
                    onBlur={handleBlur('userName')}
                    value={values.userName}
                   

                />
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
                
                label="Phone Number"
                icon="device-mobile"
                placeholder="07X XXX XXXX"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('phoneNumber')}
                onBlur={handleBlur('phoneNumber')}
                value={values.phoneNumber}
                

                />
                
                <MyTextInput 
                
                    label="Address"
                    icon="location"
                    placeholder="your address here"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange('address')}
                    onBlur={handleBlur('address')}
                    value={values.address}
                    

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
                <MyTextInput 
                    
                    label="Confirm Password"
                    icon="lock"
                    placeholder="* * * * * * * * *"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                    value={values.confirmPassword}
                    secureTextEntry={hidePassword}
                    isPassword={true}
                    hidePassword={hidePassword}
                    setHidePassword={setHidePassword}

                />
            <MsgBox>...</MsgBox>

                <StyledButton onPress={handleSubmit}>
                    <ButtonText>Sign Up</ButtonText>
                </StyledButton>
            
           

                

                <ExtraView>
                    <ExtraText>Already have and account?</ExtraText>
                    <TextLink>
                    <TextLinkContent>Log In</TextLinkContent>
                    </TextLink>
                    
                </ExtraView>

                

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

export default Signup;
