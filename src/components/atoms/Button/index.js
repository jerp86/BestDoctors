import React from 'react';

import { ButtonContainer, TextButton } from './styles';

export const Button = ({ children, outline }) => (
  <ButtonContainer outline={outline}>
    <TextButton outline={outline}>{String(children).toUpperCase()}</TextButton>
  </ButtonContainer>
);
