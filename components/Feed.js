import React from "react";
import PropTypes from "prop-types";
import Stars from "react-native-stars";

import {
  Image,
  StyleSheet,
  Text,
  FlatList,
  Pressable,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { selectOrigin, selectDestination } from "../redux/slices/navSlice";
import { useSelector } from "react-redux";
import { theme } from "../global/styles";

const { width, height } = Dimensions.get("screen");

const data = [
  {
    type: "ride",
    id: 0,
    username: "oscarLuna",
    rating: 4.0,
    avatar: "../assets/images/oscarluna.png",
    date: "2022-12-12",
    start: "701 London St, San Francisco, CA 94112",
    end: "415 2nd St, San Francisco, CA 94107",
    time: "04:00 PM",
    seats: 3,
  },
  {
    type: "drive",
    id: 1,
    username: "oscarLuna",
    rating: 4.96,
    avatar: "../assets/images/oscarluna.png",
    date: "2022-12-12",
    start: "701 London St, San Francisco, CA 94112",
    end: "415 2nd St, San Francisco, CA 94107",
    time: "04:00 PM",
    seats: 3,
  },
  {
    type: "ride",
    id: 2,
    username: "oscarLuna",
    rating: 5.0,
    avatar: "../assets/images/oscarluna.png",
    date: "2022-12-12",
    start: "701 London St, San Francisco, CA 94112",
    end: "415 2nd St, San Francisco, CA 94107",
    time: "04:00 PM",
    seats: 3,
  },
  {
    type: "ride",
    id: 3,
    username: "oscarLuna",
    rating: 4.44,
    avatar: "../assets/images/oscarluna.png",
    date: "2022-12-12",
    start: "701 London St, San Francisco, CA 94112",
    end: "415 2nd St, San Francisco, CA 94107",
    time: "04:00 PM",
    seats: 3,
  },
  {
    type: "drive",
    id: 4,
    username: "oscarLuna",
    rating: 2,
    avatar: "../assets/images/oscarluna.png",
    date: "2022-12-12",
    start: "701 London St, San Francisco, CA 94112",
    end: "415 2nd St, San Francisco, CA 94107",
    time: "04:00 PM",
    seats: 3,
  },
];

const CardContainer = (props, ...data) => {
  const {
    title,
    width,
    height,
    subtitle,
    titleColor,
    borderRadius,
    dividerColor,
    leftSideTitle,
    leftSideValue,
    leftSideColor,
    subtitleColor,
    rightSideTitle,
    rightSideValue,
    rightSideColor,
    backgroundColor,
    leftSideValueColor,
    rightSideValueColor,
  } = props;

  const { type, id, username, avatar, date, start, end, time, seats } = data;

  const ImageContainer = (props) => {
    const { shadowStyle, source } = props;
    return (
      <View style={[styles.imageContainer, shadowStyle]}>
        <Image
          borderRadius={24}
          style={styles.imageStyle}
          source={{
            uri: "https://images.unsplash.com/photo-1538689621163-f5be0ad13ec7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
          }}
        />
      </View>
    );
  };

  const renderStarReview = () => {
    return (
      <View style={styles.starReviewStyle}>
        <Stars
          display={data.rating}
          spacing={5}
          count={5}
          starSize={24}
          fullStar={require("../assets/images/icon-filled-star.png")}
          emptyStar={require("../assets/images/icon-star-empty.png")}
          style={styles.reviewTextStyle}
        />
      </View>
    );
  };

  return (
    <View style={container(width, height, borderRadius, backgroundColor)}>
      <ImageContainer {...props} />
      <View style={styles.contentContainer}>
        <Text style={titleStyle(titleColor)}>{data.username}</Text>
        <Text style={subtitleStyle(subtitleColor)}>{subtitle}</Text>
        {renderStarReview()}
        <View style={styles.footerContainer}>
          <View style={styles.leftSideContainer}>
            <Text style={leftSideTitleStyle(leftSideColor)}>
              {leftSideTitle}
            </Text>
            <Text style={leftSideValueStyle(leftSideValueColor)}>
              {leftSideValue}
            </Text>
          </View>
          <View style={styles.rightSideContainer}>
            <View style={dividerStyle(dividerColor)} />
            <View style={styles.rightSideContainerGlue}>
              <Text style={rightSideTitleStyle(rightSideColor)}>
                {rightSideTitle}
              </Text>
              <Text style={rightSideValueStyle(rightSideValueColor)}>
                {rightSideValue}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const ImagedCardView = (props) => {
  const { onPress } = props;
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={onPress} style={styles.imagedCardView}>
          <CardContainer {...props} />
        </TouchableOpacity>
      )}
    />
  );
};

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);

  return (
    <View style={{ width: width, height: 400 }}>
      <View style={{ flex: 1, alignSelf: "flex-start" }}>
        <Text
          style={{
            color: theme.colors.blue[0],
            fontSize: 24,
            textAlign: "center",
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          Commute Feed
        </Text>
      </View>
      <View style={styles.feed}>
        <ImagedCardView onPress={() => navigation.navigate("CommuteListingScreen")}/>
      </View>
    </View>
  );
};

const container = (width, height, borderRadius, backgroundColor) => {
  return {
    width,
    height,
    borderRadius,
    marginTop: 25,
    marginLeft: 48,
    backgroundColor,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.4,
    shadowRadius: 6,
  };
};

const titleStyle = (titleColor) => {
  return {
    fontSize: 18,
    color: titleColor,
    fontWeight: "bold",
  };
};

const subtitleStyle = (subtitleColor) => {
  return {
    fontSize: 12,
    fontWeight: "400",
    color: subtitleColor,
  };
};

const leftSideTitleStyle = (leftSideColor) => {
  return {
    fontSize: 11,
    color: leftSideColor,
  };
};

const leftSideValueStyle = (leftSideValueColor) => {
  return {
    fontSize: 12,
    marginTop: 3,
    fontWeight: "bold",
    color: leftSideValueColor,
  };
};

const dividerStyle = (dividerColor) => {
  return {
    width: 1,
    height: 35,
    opacity: 0.75,
    marginLeft: 40,
    backgroundColor: dividerColor,
  };
};

const rightSideTitleStyle = (rightSideColor) => {
  return {
    fontSize: 11,
    color: rightSideColor,
  };
};

const rightSideValueStyle = (rightSideValueColor) => {
  return {
    marginTop: 3,
    fontSize: 12,
    fontWeight: "bold",
    color: rightSideValueColor,
  };
};

CardContainer.propTypes = {
  title: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  subtitle: PropTypes.string,
  titleColor: PropTypes.string,
  borderRadius: PropTypes.number,
  dividerColor: PropTypes.string,
  leftSideColor: PropTypes.string,
  leftSideTitle: PropTypes.string,
  subtitleColor: PropTypes.string,
  leftSideValue: PropTypes.string,
  rightSideValue: PropTypes.string,
  rightSideColor: PropTypes.string,
  rightSideTitle: PropTypes.string,
  backgroundColor: PropTypes.string,
  leftSideValueColor: PropTypes.string,
  rightSideValueColor: PropTypes.string,
};

CardContainer.defaultProps = {
  height: 135,
  borderRadius: 24,
  width: width * 0.75,
  titleColor: "white",
  username: data.username,
  leftSideTitle: "Days",
  subtitle: "Indonesia",
  leftSideColor: "white",
  dividerColor: "#c4c4c4",
  leftSideValue: "4 Days",
  rightSideColor: "white",
  rightSideValue: "$1500",
  rightSideTitle: "Price",
  subtitleColor: "#dbdbdb",
  backgroundColor: "#0a96ea",
  leftSideValueColor: "white",
  rightSideValueColor: "white",
};

const imageStyle = StyleSheet.create({
  shadowStyle: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
  imageStyle: {
    top: -24,
    left: -48,
    width: 145,
    height: 200,
    position: "absolute",
  },
});

const styles = StyleSheet.create({
  feed: {
    height: 330,
    marginLeft: -30,
  },
  bg: {
    backgroundColor: theme.colors.blue[8],
    borderRadius: 25,
    flexWrap: "wrap",
    height: 100,
   
    flexDirection: "row",
    color: theme.colors.neutral[0],
    fontSize: 10,
    textAlign: "center",
    width: width * 0.9,
    alignSelf: "center",
    justifyContent: "flex-start",
    position: "relative",
    elevation: 10,
  },
  image: {
    width: width / 3,
    height: 84,
    resizeMode: "contain",
    alignSelf: "center",
    display: "flex",

    alignItems: "flex-start",
    justifyContent: "flex-start",
    zIndex: 10,
  },
  text: {
    color: theme.colors.neutral[0],
    fontSize: 10,
    textAlign: "center",
    fontSize: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  cardText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: 0,
  },
  starReviewStyle: {
    marginTop: 16,
    alignSelf: "flex-start",
  },
  reviewTextStyle: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    flexDirection: "row",
    alignItems: "center",
  },
  contentContainer: {
    marginTop: 6,
    marginLeft: 80,
    flexDirection: "column",
  },
  footerContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignSelf: "flex-start",
    justifyContent: "space-around",
  },
  leftSideContainer: {
    alignSelf: "flex-start",
    flexDirection: "column",
  },
  rightSideContainer: { flexDirection: "row" },
  rightSideContainerGlue: {
    marginLeft: 10,
    alignSelf: "flex-start",
    flexDirection: "column",
  },
  shadowStyle: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
  imageContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
  imageStyle: {
    resizeMode: "contain",
    top: -10,
    left: -48,
    width: 100,
    height: 130,
    position: "absolute",
  },
  imagedCardViewContainer: {
    height: 100,
    width: width - 30,
    alignSelf: "center",
    justifyContent: "space-between",
    backgroundColor: "transparent",
  },
});

export default NavOptions;
