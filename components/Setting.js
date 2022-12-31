import React from 'react';
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Divider, Text } from '@ui-kitten/components';


const Setting = ({hint, children, ...touchableOpacityProps}) => {


  return (

    <React.Fragment>
      <TouchableOpacity
        activeOpacity={1.0}
        {...touchableOpacityProps}
        style={styles.container}>
        <Text
          category='s2'>
          {hint}
        </Text>
        {children}
      </TouchableOpacity>
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

export default Setting