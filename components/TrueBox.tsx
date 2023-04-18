import React from 'react';

import {View} from 'react-native';
const TrueComponent = props => {
  let sizeComponent = 300 / props.size;

  if (props.size == 1) {
    sizeComponent = 300 / 2;
  } else if (props.size == 9) {
    sizeComponent = 300 / 6;
  }

  return (
    <View
      style={{
        borderColor: 'white',
        width: sizeComponent,
        height: sizeComponent,
        margin: sizeComponent / 2,
        borderRadius: sizeComponent / 2,
        borderWidth: sizeComponent / 2,
      }}
    />
  );
};

export default TrueComponent;
