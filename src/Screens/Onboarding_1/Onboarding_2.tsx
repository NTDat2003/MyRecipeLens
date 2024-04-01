import { Text, StyleSheet, View, ImageBackground, Pressable } from 'react-native'
import React, { Component } from 'react'
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
// import assets
import background from "assets/Background/Onboarding_2_cover.png";
import Poppins_SemiBold from "assets/Fonts/Poppins/Poppins-SemiBold.ttf";
import Poppins_Regular from "assets/Fonts/Poppins/Poppins-Regular.ttf";
import Poppins_Bold from "assets/Fonts/Poppins/Poppins-Bold.ttf";

type Onboarding_2ScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList,
  RootScreens.ONBOARDING_2
>;

export const Onboarding_2 = ({navigation,} : Onboarding_2ScreenNavigatorProps) => {
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
                <Text style={styles.title_text}>Đề xuất đa dạng</Text>
                <Text style={styles.body_text}>Nhanh chóng - dinh dưỡng - tiện lợi</Text>
                <Text style={styles.body_text}>Bạn cần gì, RecipeLens đều có hết</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.lower_background_view}>
                <Pressable onPress={() => navigation.navigate(RootScreens.ONBOARDING_0)}>
                    <Text style={styles.skip_text}>Skip</Text>
                </Pressable>
                <Pressable onPress={() => navigation.navigate(RootScreens.ONBOARDING_2)}>
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