import React, { useContext } from 'react';
import { Button } from 'react-native-paper';
import mainContext from '../context/mainContext';

const Learn = (props) => {
  const { inHome } = useContext(mainContext);
  return (
    <Button onPress={() => inHome()} icon="camera" mode="contained">
      {props.title}
    </Button>
  );
};

export default Learn;
