import React from 'react';

import { AuthWrapper, Button, Title } from '~/components';

import { Container, SuccessImg } from './styles';

import checkImg from '~/assets/img/checkSuccess.png';

export const CreateAccountSuccessScreen = ({ navigation }) => {
  const goToLogin = () => navigation.navigate('Login');

  return (
    <AuthWrapper
      bottomChildren={<Button onPress={goToLogin}>ACESSAR O APP</Button>}>
      <Container>
        <SuccessImg source={checkImg} />
        <Title mt={16} align="center">
          Conta criada com sucesso!
        </Title>
      </Container>
    </AuthWrapper>
  );
};
