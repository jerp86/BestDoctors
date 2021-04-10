import React from 'react';

import { Container, Logo } from './styles';

import background from '~/assets/img/auth_background.png';
import logoImg from '~/assets/img/logo.png';

export const SplashScreen = () => {
  return (
    <Container source={background}>
      <Logo source={logoImg} />
    </Container>
  );
};
