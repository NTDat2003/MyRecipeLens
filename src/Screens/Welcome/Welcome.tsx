import React from "react";
import { i18n, LocalizationKey } from "@/Localization";
import { View, Text, StyleSheet, Image } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Button } from "native-base";
import { RootScreens } from "..";
import { RootStackParamList } from "@/Navigation";
// import second from "assets/Background/Onboarding_1_cover.png"
// import second from "assets/Fonts/Poppins/Poppins-Black.ttf"

type WelcomeScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList,
  RootScreens.WELCOME
>;

export const Welcome = ({ navigation, }: WelcomeScreenNavigatorProps) => {
  return (
    <View style={styles.container}>
      <Text>{i18n.t(LocalizationKey.WELCOME)}</Text>
      <StatusBar style="auto" />
      <Button onPress={() => navigation.navigate(RootScreens.ONBOARDING_0)}>
        {i18n.t(LocalizationKey.START)}
      </Button>
      {/* <Image source={second}></Image> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
