import React from 'react';

import {View} from 'react-native';
const FalseComponent = props => {
  let sizeComponent = 300 / props.size;
  if (props.size == 9) {
    sizeComponent = 300 / 6;
  }
  return (
    <View
      style={{
        width: sizeComponent,
        height: sizeComponent,
        margin: sizeComponent / 2,
      }}
    />
  );
};

export default FalseComponent;
