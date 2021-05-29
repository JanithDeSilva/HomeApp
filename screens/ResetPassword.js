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
    TextLinkContent

}from './../components/styles';//importing styles

import {View} from 'react-native';

//colors
const {brand, darkLight, primary} = Colors;

const ResetPassword = () => {
    const [hidePassword, setHidePassword] = useState(true);


    return(
    <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
            <PageLogo resizeMode="cover" source={require('./../assets/img/img.jpg')} />
            <PageTitle>Reset Password</PageTitle>
           {/* <SubTitle>Login from here</SubTitle> */}

            <Formik
            initialValues={{newPassword:'', confirmPassword: ''}}
            onSubmit={(values) => {
                console.log(values);
            }}
            >
            {({handleChange, handleBlur, handleSubmit, values}) => (<StyledFormArea>

                <MyTextInput 
                
                label="New Password"
                icon="lock"
                placeholder="* * * * * * * * *"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('newPassword')}
                onBlur={handleBlur('newPassword')}
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
                value={values.password}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}

            />
            
                {/* Reset Password Button */}
                <StyledButton onPress={handleSubmit}>
                    <ButtonText>Reset Password</ButtonText>
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

export default ResetPassword;