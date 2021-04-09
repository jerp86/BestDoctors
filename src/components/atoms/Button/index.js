import React from 'react';

import { ButtonContainer, TextButton } from './styles';

export const Button = ({ children }) => (
  <ButtonContainer>
    <TextButton>{String(children).toUpperCase()}</TextButton>
  </ButtonContainer>
);
