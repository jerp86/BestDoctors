import React from 'react';

import {
  AuthWrapper,
  BaseTouchContainer,
  Button,
  CardTitle,
  Input,
  RegularText,
} from '~/components';

export const ConfirmPhoneScreen = ({ navigation }) => {
  const goToCheckSuccess = () => navigation.navigate('CreateAccountSuccess');

  return (
    <AuthWrapper
      title="Confirme seu celular"
      bottomChildren={<Button onPress={goToCheckSuccess}>PRÓXIMO</Button>}>
      <RegularText>
        Enviamos um código de 6 dígitos para o seu celular. Confirme-o digitando
        no campo abaixo.
      </RegularText>
      <Input label="CÓDIGO" placeholder="XXX XXX" mt={24} mb={16} />

      <RegularText size={16}>Não recebeu o código?</RegularText>
      <BaseTouchContainer dir="row">
        <CardTitle mr={4}>Clique aqui</CardTitle>
        <RegularText size={16}>para enviar novamente.</RegularText>
      </BaseTouchContainer>
    </AuthWrapper>
  );
};
