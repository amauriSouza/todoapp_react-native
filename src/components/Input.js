import React from 'react';
import { TextInput } from 'react-native';

const Input = ({ onChangeText, value }) => (
  <TextInput
    placeholder="Tarefa..."
    onChangeText={onChangeText}
    value={value}
    underlineColorAndroid={'#39bcd3'}
  />
);

export default Input;
