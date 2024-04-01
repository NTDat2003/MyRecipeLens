import React from "react";
import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { HomeContainer } from "@/Screens/Home";
// import { WelcomeContainer } from "@/Screens/Welcome";
import { Onboarding_0 } from "@/Screens/Onboarding_0"
import { Onboarding_1, Onboarding_2 } from "@/Screens/Onboarding_1";
import { Welcome } from "@/Screens/Welcome";
import { RootScreens } from "@/Screens";
// import { Onboarding_2 } from "@/Screens/Onboarding_1/Onboarding_2";

export type RootStackParamList = {
  [RootScreens.MAIN]: undefined;
  [RootScreens.WELCOME]: undefined;
  [RootScreens.ONBOARDING_0]: undefined;
  [RootScreens.ONBOARDING_1]: undefined;
  [RootScreens.ONBOARDING_2]: undefined;
};
// Create a native stack navigator
const RootStack = createNativeStackNavigator<RootStackParamList>();

// @refresh reset
const ApplicationNavigator = () => {
  return (
    // Component manage navigation tree
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar />
        {/* Navigator is the component to contain the Sreens to render */}
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
          {/* <RootStack.Screen
            name={RootScreens.WELCOME}
            component={Welcome}
          /> */}
          <RootStack.Screen
            name={RootScreens.ONBOARDING_0}
            component={Onboarding_0}
          />
          <RootStack.Screen
            name={RootScreens.ONBOARDING_1}
            component={Onboarding_1}
          />
          <RootStack.Screen
            name={RootScreens.ONBOARDING_2}
            component={Onboarding_2}
          />
          {/* <RootStack.Screen
            name={RootScreens.MAIN}
            component={HomeContainer}
            options={{}}
          /> */}
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export { ApplicationNavigator };
