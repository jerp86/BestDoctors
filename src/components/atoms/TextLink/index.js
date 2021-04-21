import React from 'react';
import { BaseContainer } from '../Container';
import { LinkText } from '../Text';

export const TextLink = ({ children, ...rest }) => (
  <BaseContainer h={24} align="flex-end" justify="flex-end" {...rest}>
    <LinkText>{children}</LinkText>
  </BaseContainer>
);
