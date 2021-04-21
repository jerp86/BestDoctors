import React from 'react';

import { ButtonContainer, TextButton } from './styles';

export const Button = ({ children, outline, ...rest }) => (
  <ButtonContainer outline={outline} {...rest}>
    <TextButton outline={outline}>{String(children).toUpperCase()}</TextButton>
  </ButtonContainer>
);
