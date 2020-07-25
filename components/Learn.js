import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const Learn = (props) => {
  return (
    <Button onPress={props.inHome} icon="camera" mode="contained">
      {props.title}
    </Button>
  );
};

export default Learn;
