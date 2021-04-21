import React from 'react';
import { BaseTouchContainer } from '../Container';
import { LinkText } from '../Text';

export const TextLink = ({ children, ...rest }) => (
  <BaseTouchContainer h={24} align="flex-end" justify="flex-end" {...rest}>
    <LinkText>{children}</LinkText>
  </BaseTouchContainer>
);
