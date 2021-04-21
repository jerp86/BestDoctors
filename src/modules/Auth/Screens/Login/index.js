import React from 'react';

import { AuthWrapper, Button, Input, TextLink } from '~/components';

export const LoginScreen = ({ navigation }) => {
  const goToCreateAccount = () => {
    navigation.navigate('CreateAccount');
  };

  return (
    <AuthWrapper
      title="Bem-vindo de volta!"
      bottomChildren={
        <>
          <Button>Entrar</Button>
          <Button outline mt={16} onPress={goToCreateAccount}>
            CRIAR NOVA CONTA
          </Button>
        </>
      }>
      <Input label="E-mail" placeholder="Insira seu melhor e-mail..." />
      <Input label="Senha" placeholder="Insira sua senha segura..." mt={24} />

      <TextLink mt={24}>Esqueceu sua senha?</TextLink>
    </AuthWrapper>
  );
};
