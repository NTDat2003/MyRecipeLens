import * as React from 'react';
import { View, Image, Text , StyleSheet, ImageBackground, Pressable} from 'react-native';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
// import second from 
// import assets
import background from "assets/Background/Onboarding_1_cover.png";
import Poppins_SemiBold from "assets/Fonts/Poppins/Poppins-SemiBold.ttf";
import Poppins_Regular from "assets/Fonts/Poppins/Poppins-Regular.ttf";
import Poppins_Bold from "assets/Fonts/Poppins/Poppins-Bold.ttf";

type Onboarding_1ScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList,
  RootScreens.ONBOARDING_1
>;

export const Onboarding_1 = ({navigation,} : Onboarding_1ScreenNavigatorProps) => {
    const [fontsLoaded] = useFonts({
        "Poppins_SemiBold": Poppins_SemiBold,
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
                    <Text style={styles.title_text}>Nhận diện dễ dàng</Text>
                    <Text style={styles.body_text}>Nhập nhanh tất cả nguyên liệu</Text>
                    <Text style={styles.body_text}>chỉ trong vài giây</Text>
                </SafeAreaView>
                <SafeAreaView style={styles.lower_background_view}>
                    <Pressable onPress={() => navigation.navigate(RootScreens.ONBOARDING_0)}>
                        <Text style={styles.skip_text}>Skip</Text>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate(RootScreens.ONBOARDING_1)}>
                        <Text style={styles.next_text}>Tiếp theo</Text>
                    </Pressable>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container_view: {
        flex: 1,
        justifyContent: "center",
    },
    background_image: {
        flex: 1,
    },
    upper_background_view: {
        flex: 15,
        alignItems: "center",
    },
    title_text: {
        marginTop: 16,
        marginBottom: 17,
        fontFamily: "Poppins_SemiBold",
        fontSize: 27,
        lineHeight: 38,
        color: "#FFF",
    },
    body_text: {
        alignContent: "center",
        fontFamily: "Poppins_Regular",
        fontSize: 16,
        lineHeight: 22,
        color: "#FFF",
    },
    lower_background_view: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "baseline",
    },
    skip_text: {
        paddingLeft: 37,
        fontFamily: "Poppins_Bold",
        fontSize: 18,
        lineHeight: 25,
        color: "#FFF",
    },
    next_text: {
        paddingRight: 37,
        paddingLeft: 37,
        fontFamily: "Poppins_Bold",
        fontSize: 18,
        lineHeight: 25,
        color: "#00D03A",
    },
})