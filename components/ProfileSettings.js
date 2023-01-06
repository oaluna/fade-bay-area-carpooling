import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Divider, Layout } from '@ui-kitten/components';


const ProfileSettings = ({hint, value}) => {


  const renderHintElement = () => (
    <Text
      appearance='hint'
      category='s1'>
      {hint}
    </Text>
  );

  return (
    <React.Fragment>
      <Layout
        level='1'
        style={styles.container}>
        {hint && renderHintElement()}
        <Text category='s1'>
          {value}
        </Text>
      </Layout>
      <Divider/>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default ProfileSettings