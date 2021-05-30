import styled from 'styled-components';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;


//colors using throughout the application
export const Colors = {
    primary: "#ffffff",
    secondary: "#E5E7EB",
    tertiary: "#1F2937",
    darkLight: "#9CA3AF",
    brand: "#6D28D9",
    green: "#10B981",
    red: "#FF8C00",
    
};

//define colors to easily use them
const {primary, secondary, tertiary, darkLight, brand, green, red} = Colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    paddingTop: ${StatusBarHeight + 0}px;
    background-color: ${primary};
    `

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    `;
    
//page image
export const PageLogo = styled.Image`
    width: 399px;
    height: 280px;
    borderRadius: 30;
    borderWidth: 10;
    borderColor: ${primary};

    `;
//page title
export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: ${brand};
    padding: 10px;
    
    
    `;

    export const SubTitle = styled.Text`
        font-size: 18px;
        margin-bottom: 20px;
        letter-spacing: 1px;
        
        color: ${tertiary};

    `;

    //form styles
    export const StyledFormArea = styled.View`
        width: 90%;

    `;
    

    export const StyledTextInput = styled.TextInput`
        background-color: ${secondary};
        padding: 15px;
        padding-left: 55px;
        padding-right: 55px;
        border-radius: 20px;
        font-size: 16px;
        height: 60px;
        margin-vertical: 3px;
        margin-bottom: 10px;
        color: ${tertiary};
    `;

    //input field icon styles
    export const StyledInputLabel = styled.Text`
        color: ${tertiary};
        font-size: 13px;
        text-align: left;

    `;
    export const LeftIcon = styled.View`
        left: 15px;
        top: 38px;
        position: absolute;
        z-index: 1;

    `;
    export const RightIcon = styled.TouchableOpacity`
        right: 15px;
        top: 38px;
        position: absolute;
        z-index: 1;

    `;
    //button styles
    export const StyledButton = styled.TouchableOpacity`
        padding: 4px;
        background-color: ${brand};
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        margin-vertical: 5px;
        height: 50px;

        ${(props) => props.google == true &&`
            background-color: ${green};
            flex-direction: row;
            justify-content: center;

        `}


    `;

    //text in the button
    export const ButtonText = styled.Text`
        color: ${primary};
        font-size: 16px;

        ${(props) => props.google == true &&`
        
        padding: 25px;
    `}
    `;

    //signup messagebox
    export const MsgBox = styled.Text`
        text-align: center;
        font-size: 13px;

    
    `;

    export const Line = styled.View`
        height: 1px;
        width: 100%;
        background-color: ${darkLight};
        margin-vertical: 10px;
    
    `;

    //forgot password?
    export const ExtraView = styled.View`
        justify-content: center;
        flex-direction: row;
        align-items: center;
        padding: 5px;
    `;

    export const ExtraText = styled.Text`
        justify-content: center;
        align-content: center;
        color: ${tertiary};
        font-size: 15px;

    `;

    export const TextLink = styled.TouchableOpacity`
        justify-content: center;
        align-items: center;
    
    `;

    export const TextLinkContent = styled.Text`
        color: ${brand};
        font-size: 15px;

    `;
//home page designs
    export const HomeLogo = styled.Image`
    width: 399px;
    height: 100px;
    borderRadius: 30;
    
    borderColor: ${primary};
   

    `;

    
     export const ViewHeader = styled.View`
    
        paddingVertical: 20;
        flexDirection: row;
        alignItems: center;
        marginHorizontal: 2;
 `;

 export const ViewCart = styled.View`
    height: 100;
    width: 320;
    elevation: 15;
    borderRadius: 10;
    backgroundColor: ${primary};
    marginVertical: 10;
    marginHorizontal: 20;
    paddingHorizontal: 10;
    flex-direction: row;
    justify-content: center;
    alignItems: center;
    

 
 `;







