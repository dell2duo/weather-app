import React from 'react';
import { Text, View } from 'react-native';
import { HomeViewModel } from './ViewModel';

// import { Container } from './styles';
type Props = {
  homeViewModel: HomeViewModel
}

export const HomeView: React.FC<Props> = ({ homeViewModel }) => {
  return <View>
    <Text>Olá, mundo!</Text>
  </View>
}
