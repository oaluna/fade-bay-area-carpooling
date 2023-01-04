import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeStack, SettingsStack } from "./StackNavigator";
import { Dimensions } from "react-native";

import { Icon } from "react-native-elements";
import { colors, theme } from "../global/styles";

const { width, height } = Dimensions.get("screen");
const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator color={theme.colors.purple[6]}>
      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          title: "Home",
          drawerContentContainerStyle: {
            backgroundColor: theme.colors.purple[6],
            color: theme.colors.blue[4],
            height: height,
          },
          drawerIcon: ({ focused, size }) => (
            <Icon
              type={"material-community"}
              name="home-outline"
              color={
                focused ? theme.colors.neutral[0] : theme.colors.neutral[3]
              }
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
              color={focused ? "#7cc" : theme.colors.neutral[3]}
              size={size}
            />
          ),
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}
