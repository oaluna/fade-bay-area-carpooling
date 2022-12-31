import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Layout, Toggle } from '@ui-kitten/components';
import  Setting  from '../components/Setting';

const { width, height } = Dimensions.get('window');

const EditProfileScreen = () => {

  const [soundEnabled, setSoundEnabled] = React.useState(false);

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
  };

  return (
    <Layout style={styles.container}>
      <Setting
        style={styles.setting}
        hint='Edit Profile'
      />
      <Setting
        style={styles.setting}
        hint='Change Password'
      />
      <Setting
        style={[styles.setting, styles.section]}
        hint='Notification'
      />
      <Setting
        style={styles.setting}
        hint='Privacy'
      />
      <Setting
        style={[styles.setting, styles.section]}
        hint='Sound Enabled'
        onPress={toggleSound}>
        <Toggle
          checked={soundEnabled}
          onChange={toggleSound}
        />
      </Setting>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height
  },
  setting: {
    padding: 16,
  },
  section: {
    paddingTop: 32,
  },
});

export default EditProfileScreen