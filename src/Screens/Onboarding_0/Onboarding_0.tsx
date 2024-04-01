import * as React from 'react';
import { View, Image, Text , StyleSheet, ImageBackground, Pressable} from 'react-native';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
// import assets
import background from "assets/Background/Onboarding_0_cover.png";
import logo from "assets/Logo.png";
import arrow_right from "assets/Icons/arrow-right.png";
import Poppins_Black from "assets/Fonts//Poppins/Poppins-Black.ttf";
import Poppins_Regular from "assets/Fonts/Poppins/Poppins-Regular.ttf";
import Poppins_Bold from "assets/Fonts/Poppins/Poppins-Bold.ttf";

type Onboarding_0ScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList,
  RootScreens.ONBOARDING_0
>;

// const insets = useSafeAreaInsets();

export const Onboarding_0 = ({ navigation, }: Onboarding_0ScreenNavigatorProps) => {
    const [fontsLoaded] = useFonts({
        "Poppins_Black": Poppins_Black,
        "Poppins_Regular": Poppins_Regular,
        "Poppins_Bold": Poppins_Bold,
    })
    if (!fontsLoaded) {
        return (
            <Text>Loading...</Text>
        )
    }
    return (
        <View style={styles.container_view}>
            <ImageBackground source={background} resizeMode='cover' style={styles.background_image}>
                <SafeAreaView style={styles.upper_background_view}>
                    <Image source={logo} resizeMode='cover' style={styles.logo_image}/>
                    <Text style={styles.slogan_text}>
                        Cook smart 
                        Taste great
                    </Text>
                </SafeAreaView>
                <SafeAreaView style={styles.lower_background_view}>
                    {/* <View style={styles.findMore_button}> */}
                        <Pressable onPress={() => navigation.navigate(RootScreens.ONBOARDING_1)}
                        style={styles.findMore_button}>
                            <Text style={styles.findMore_text}>Tìm hiểu thêm</Text>
                        </Pressable>
                    {/* </View> */}
                    <Text style={styles.startNow_text}>
                        Hoặc bắt đầu ngay với RecipeLens
                        <Image source={arrow_right} resizeMode='cover'/>
                    </Text>
                </SafeAreaView>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container_view: {
        flex: 1,
        justifyContent: 'center',
    },
    background_image: {
        flex: 1,
    },
    upper_background_view: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
    },
    logo_image: {
        width: '51%',
        marginTop: 20,
    },
    slogan_text: {
        alignContent: 'center',
        fontFamily: 'Poppins_Black',
        fontSize: 45,
        color: "#fff",
    },
    lower_background_view: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
    },
    findMore_button: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 54,
        width: "90%",
        borderRadius: 20,
        marginBottom: 15,
        backgroundColor: '#008000',
    },
    findMore_text: {
        alignContent: "center",
        fontFamily: "Poppins_Bold",
        fontSize: 19,
        lineHeight: 27,
        color: '#fff',
    },
    startNow_text: {
        alignContent: "center",
        fontFamily: "Poppins_Regular",
        fontSize: 14,
        color: '#fff',
    },
})