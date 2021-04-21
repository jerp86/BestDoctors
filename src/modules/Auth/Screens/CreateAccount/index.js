import React from 'react';

import { AuthWrapper, Button, Input } from '~/components';

export const CreateAccountScreen = ({ navigation }) => {
  const goToSelectAccountType = () => {
    navigation.navigate('SelectAccountType');
  };

  return (
    <AuthWrapper
      title="Crie sua conta"
      bottomChildren={<Button onPress={goToSelectAccountType}>PRÓXIMO</Button>}>
      <Input label="Nome" placeholder="Insira seu nome completo" />
      <Input label="E-mail" placeholder="Insira seu melhor e-mail" mt={24} />
      <Input label="Celular" placeholder="(00) 0 0000-0000" mt={24} />
      <Input label="Senha" placeholder="Insira sua senha segura" mt={24} />
      <Input label="Confirmar Senha" placeholder="Confirme sua senha" mt={24} />
    </AuthWrapper>
  );
};
