import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Avatar, Button } from '@ui-kitten/components';

export  const ProfileAvatar = () => {

  const renderEditButtonElement = () => (<Button style={styles.editButton}>
    <Text>Edit</Text>
  </Button>)
    

  return (
    <View>
      <Avatar
        style={styles.avatar}
        source={require("../assets/images/oscarluna.png")}
      />
      {renderEditButtonElement()}
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    alignSelf: 'center',
    resizeMode: "contain",
    borderRadius: 50
  },
  editButton: {
    position: 'absolute',
    alignSelf: 'flex-end',
    bottom: 0,
  },
});
