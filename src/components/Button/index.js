import React from 'react';

import * as Button from './styles';

export default function ButtonComponent({ onPress, children, ...rest }) {
  return (
    <Button.View onPress={onPress} {...rest}>
      <Button.Text>{children}</Button.Text>
    </Button.View>
  );
}