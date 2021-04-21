import React from 'react';

import { Container } from './styles';

import { Title } from '~/components/atoms';

import background from '~/assets/img/auth_background.png';

export const AuthWrapper = ({ children, title }) => {
  return (
    <Container source={background}>
      {title && (
        <Title w="100%" mb={64}>
          {title}
        </Title>
      )}

      {children}
    </Container>
  );
};
