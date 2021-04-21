import React from 'react';

import { AuthWrapper, Button, Input, TextLink } from '~/components';
import { ButtonContainer, ContentContainer } from './styles';

export const LoginScreen = () => {
  return (
    <AuthWrapper title="Bem-vindo de volta!">
      <ContentContainer>
        <Input label="E-mail" placeholder="Insira seu melhor e-mail..." />
        <Input label="Senha" placeholder="Insira sua senha segura..." mt={24} />

        <TextLink mt={24}>Esqueceu sua senha?</TextLink>
      </ContentContainer>

      <ButtonContainer>
        <Button>Entrar</Button>
        <Button outline mt={16}>
          CRIAR NOVA CONTA
        </Button>
      </ButtonContainer>
    </AuthWrapper>
  );
};
