import React from "react";
import {
  ScrollView,
  View,
  Dimensions,
  StyleSheet,
  Pressable,
  FlatList,
  Button,
  TouchableOpacity,
  Easing,
  TouchableWithoutFeedback,
  Image
} from "react-native";
import { Icon } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import {  Layout, Text, Divider, Avatar } from "@ui-kitten/components";
import * as ImagePicker from 'expo-image-picker';
import { theme } from "../global/styles";
const PlaceholderImage = require('../assets/images/background.png');
const { width, height } = Dimensions.get("screen");


const data = [
  {
    id: 1,
    title: "Edit Contacts",
    value: "Manage the drivers and riders you are connected with",
  },
  {
    id: 2,
    title: "Verify my Driver's License",
    value: "You need to verify your driver's license to become a driver",
  },
  {
    id: 3,
    title: "Report an Incident",
    value: "Report all accidents and other incidents during a carpool here.",
  }
];




const EditProfileScreen = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [imageIsSelected, setImageIsSelected] = React.useState(false);
 

  const onDoneButtonPress = () => {
    navigation && navigation.goBack();
  };

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setImageIsSelected(true);
    } else {
      alert('You did not select any image.');
      setImageIsSelected(false);
    }
  };

 

  return (
    <LinearGradient
      start={{ x: 1, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      colors={[theme.colors.blue[8], theme.colors.blue[10]]}
      style={styles.container}
    >
    <View style={styles.topBarContainer}>
        <TouchableOpacity style={styles.floatLeft} onPress={() => navigation.goBack()}>
          <Icon
            type="antdesign"
            name="arrowleft"
            color="white"
            size={20}
          
            style={{width: 25, height: 25, padding: 0, }}
          />
        </TouchableOpacity>
        <Text style={styles.topBarText}>Safety Settings</Text>
      </View>
      <View style={styles.contentContainer}>

      <Pressable style={{flexDirection:"column", top: -350, position:"absolute", borderRadius: 25, width: width - 30, height: 50, backgroundColor: theme.colors.lightblue[4], alignItems:"center", justifyContent:"center"}} onPress={pickImageAsync}>
      <Text>Upload Driver's License</Text>
      </Pressable>

    <View style={{width: width, position:"absolute", top: -250}}>
    <ImageViewer
          placeholderImageSource={PlaceholderImage}
          selectedImage={selectedImage}
     
        />
        </View>

        <View style={styles.settingsSection}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View>
                <View style={styles.setting}>
                <View></View>
                  <Text style={styles.settingLabel}>{item.title}</Text>
                  <Text style={styles.settingValue}>{item.value}</Text>
                </View>
              </View>
            )}
            ItemSeparatorComponent={() => (
              <View
                style={{
                  height: 0.5,
                  width: width - 30,
                  borderColor: theme.colors.blue[2],
                  borderWidth: 0.5,
                  alignItems: "center",
                  marginVertical: 5,
                  marginHorizontal: 15,
                }}
              />
            )}
          />
          <LinearGradient
            start={{ x: 0.5, y: 1 }}
            end={{ x: 0.75, y: 1 }}
            colors={[theme.colors.lightblue[4], theme.colors.lightblue[6]]}
            style={styles.doneButton}
          >
            <Pressable onPress={() => navigation.goBack()}>
              <Text style={styles.buttonText}>Done</Text>
            </Pressable>
          </LinearGradient>
        </View>
      </View>
    </LinearGradient>
  );
};

const ImageViewer = ({ placeholderImageSource, selectedImage }) => {
  const imageSource = selectedImage !== null
    ? { uri: selectedImage }
    : placeholderImageSource;

  return <Image source={imageSource} style={{resizeMode:'cover', width: 150, height: 100, flexDirection:"row", alignSelf:"center", alignItems:"center", justifyContent: "center"}} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
  },
  editHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: width,
    height: 90,
    marginLeft: -95,
  },
  contentContainer: {
    flexDirection: "column",
    top: 0,
    position: "absolute",
    paddingBottom: 24,
    height: height,
    width: width,

    alignItems: "flex-start",
    justifyContent: "space-evenly",
  },
  photoSection: {
    flexDirection: "column",
    alignSelf: "flex-start",
    alignItems: "center",
    paddingHorizontal: 16,
    position: "absolute",
    top: 0,
    width: width,
    height: 300,
    backgroundColor: theme.colors.neutral[8],
    elevation: 2,
  },
  divider: {
    width: width * 0.64,
    alignSelf: "flex-end",
    marginVertical: 10,
    marginRight: 25,
    backgroundColor: theme.colors.lightblue[4],
  },
  photo: {
    alignSelf: "flex-start",
    height: 84,
    width: 84,
    borderRadius: 50,
    resizeMode: "cover",
    backgroundColor: theme.colors.lightblue[0],
    top: 15,
    marginRight: 5,
  },
  photoButton: {
    width: 32,
    height: 32,
    backgroundColor: theme.colors.red[5],
    borderRadius: 16,
    position: "relative",
  },
  nameSection: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: -60,
    textAlign: "right",
    width: width,
    height: 100,
    elevation: 2,
  },
  description: {
    padding: 24,
    backgroundColor: "transparent",
    height: 100,
  },
  doneButton: {
    marginHorizontal: 24,
    marginTop: 24,
    backgroundColor: theme.colors.lightblue[4],
    width: width - 30,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    elevation: 2,
  },
  buttonText: {
    fontSize: 20,
  },
  setting: {
    padding: 16,
    width: width,
    height: 60,
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection:"column",
    marginVertical: 5
  },
  settingLabel: {
    fontSize: 16,
    color: theme.colors.neutral[0],
    flexDirection:"column",
    width: width - 90
  },
  settingsSection: {
    marginTop: 20,
    width: width,
    height: 500,
   
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: theme.colors.neutral[8],
    elevation: 2,
    paddingVertical: 15,
  },
  settingValue: {
    fontSize: 16,
    textAlign: "left",
    paddingBottom: 0,
    color: theme.colors.neutral[2],
    width: width - 90,
    height: 40
  },
  topBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf:"flex-start",
    justifyContent: "space-evenly",
    width: width/1.5,
    paddingHorizontal: 15, 
    marginTop: 25
  },
  topBarText: {
fontSize: 20,


  },
  floatLeft: {
    marginRight: "auto",
  },
  floatRight: {
    marginLeft: "auto",
  },
  menuImageStyle: {
    width: 20,
    height: 20,
  },
  profileImageStyle: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  contentContainer: {
    marginTop: 12,
  },
  titleTextStyle: {
    fontSize: 46,
    color: theme.colors.neutral[0],
    fontWeight: "bold",
  },
  subtitleTextStyle: {
    fontSize: 13,
    marginTop: 5,
    fontWeight: "400",
    color: theme.colors.neutral[2],
  },
  searchBarStyle: {
    padding: 16,
    marginTop: 24,
    borderRadius: 50,
    flexDirection: "row",
    backgroundColor: theme.colors.neutral[0],
  },
  searchImageStyle: {
    width: 20,
    height: 20,
  },
  searchInputStyle: {
    marginLeft: 12,
    fontWeight: "500",
  },
});

export default EditProfileScreen;
