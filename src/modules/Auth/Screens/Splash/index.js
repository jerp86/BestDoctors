import React, { useEffect } from 'react';

import { Container, Logo } from './styles';

import background from '~/assets/img/background.png';
import logoImg from '~/assets/img/logo.png';

export const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => navigation.navigate('Login'), 1000);
  });

  return (
    <Container source={background}>
      <Logo source={logoImg} />
    </Container>
  );
};
