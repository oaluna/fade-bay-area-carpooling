import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeStack, SettingsStack } from "./StackNavigator";
import { Dimensions } from "react-native";

import { Icon } from "react-native-elements";
import { colors } from "../global/styles";

const { width, height } = Dimensions.get("screen");
const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator color={colors.black}>
      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          title: "Home",
          
          drawerContentContainerStyle: {
            backgroundColor: colors.black,
            color: colors.blue,
            height: height
          },
          drawerIcon: ({ focused, size }) => (
            <Icon
              type={"material-community"}
              name="home-outline"
              color={focused ? colors.white : colors.grey2}
              size={size}
            />
          ),
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="SettingsStack"
        component={SettingsStack}
        options={{
          title: "Settings",
          
          drawerIcon: ({ focused, size }) => (
            <Icon
              type={"material-community"}
              name="cog-outline"
              color={focused ? "#7cc" : colors.grey2}
              size={size}
            />
          ),
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}
