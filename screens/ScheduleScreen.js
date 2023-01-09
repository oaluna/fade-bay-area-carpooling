import { View, Text, Dimensions, Platform, Button, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "react-native-elements";
const { width, height } = Dimensions.get("screen");
import { theme } from "../global/styles";
import * as Calendar from "expo-calendar";
import CalendarPicker from "react-native-calendar-picker";

const ScheduleScreen = ({ navigation }) => {
  const [selectedStartDate, setSelectedStartDate] = React.useState(null);
  const [created, setCreated] = React.useState(false);

  const startDate = selectedStartDate
    ? selectedStartDate.format("YYYY-MM-DD").toString()
    : "";

  React.useEffect(() => {
    (async () => {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      if (status === "granted") {
        const calendars = await Calendar.getCalendarsAsync(
          Calendar.EntityTypes.EVENT
        );
        console.log("Here are all your calendars:");
        console.log({ calendars });
      }
    })();
  }, []);

  const getDefaultCalendarSource = async () => {
    const defaultCalendar = await Calendar.getDefaultCalendarAsync();
    return defaultCalendar.source;
  };

  const createCalendar = async () => {
    const defaultCalendarSource =
      Platform.OS === "ios"
        ? await getDefaultCalendarSource()
        : { isLocalAccount: true, name: "Expo Calendar" };
    const newCalendarID = await Calendar.createCalendarAsync({
      title: "Expo Calendar",
      color: "blue",
      entityType: Calendar.EntityTypes.EVENT,
      sourceId: defaultCalendarSource.id,
      source: defaultCalendarSource,
      name: "internalCalendarName",
      ownerAccount: "personal",
      accessLevel: Calendar.CalendarAccessLevel.OWNER,
    });
    setCreated(true);
    console.log(`Your new calendar ID is: ${newCalendarID}`);
  };

  return (
    <LinearGradient
      start={{ x: 1, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      colors={[theme.colors.blue[8], theme.colors.blue[10]]}
      style={{
        alignSelf: "center",
        alignItems: "center",
        height: height,
        width: width,
      }}
    >
      <View
        style={styles.header}
      >
        <Icon
          type="antdesign"
          name="arrowleft"
          style={{ width: 20, height: 20 }}
          onPress={() => navigation.goBack()}
          color={"white"}
        />
        <Text style={{ color: theme.colors.neutral[0], fontSize: 20 }}>
          My Upcoming Carpools
        </Text>
      </View>
      <View style={{ marginTop: 150 }}>
        <Button title="Create a new calendar" onPress={createCalendar} />
      </View>
      {created === true && (
        <View
          style={{
            marginTop: 20,
            backgroundColor: theme.colors.neutral[5],
          }}
        >
          <CalendarPicker onDateChange={setSelectedStartDate} />
        </View>
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems:"center",
    justifyContent: "space-between",
    width: width -30,
    height: 90
  },
})

export default ScheduleScreen;
