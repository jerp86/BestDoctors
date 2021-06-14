import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';

import { AuthWrapper, Button, Input } from '~/components';

export const CreateAccountScreen = ({ navigation }) => {
  const goToSelectAccountType = () => {
    navigation.navigate('SelectAccountType');
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Nome é Obrigatório')
      .min(3, 'Nome deve ter no mínimo 3 caracteres'),
    email: Yup.string()
      .required('Email é Obrigatório')
      .email('Email deve ter no mínimo 3 caracteres'),
    phoneNumber: Yup.string()
      .required('Celular é Obrigatório')
      .min(16, 'Celular deve ter no mínimo 16 caracteres'),
    password: Yup.string()
      .required('Senha é Obrigatório')
      .min(6, 'Senha deve ter no mínimo 6 caracteres'),
    confirmPassword: Yup.string()
      .required('Confirmar Senha é Obrigatório')
      .min(6, 'Confirmar Senha deve ter no mínimo 6 caracteres'),
  });

  const { values, handleSubmit, setFieldValue, errors } = useFormik({
    initialValues: {
      name: '',
      emamil: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: props => {
      goToSelectAccountType();
    },
  });

  return (
    <AuthWrapper
      title="Crie sua conta"
      bottomChildren={<Button onPress={handleSubmit}>PRÓXIMO</Button>}>
      <Input
        label="Nome"
        value={values.name}
        onChangeText={text => setFieldValue('name', text)}
        error={errors.name}
        placeholder="Insira seu nome completo"
      />
      <Input
        label="E-mail"
        value={values.email}
        onChangeText={text => setFieldValue('email', text)}
        error={errors.email}
        placeholder="Insira seu melhor e-mail"
        mt={24}
      />
      <Input
        label="Celular"
        value={values.phoneNumber}
        onChangeText={text => setFieldValue('phoneNumber', text)}
        error={errors.phoneNumber}
        placeholder="(00) 0 0000-0000"
        mt={24}
      />
      <Input
        label="Senha"
        value={values.password}
        onChangeText={text => setFieldValue('password', text)}
        error={errors.password}
        placeholder="Insira sua senha segura"
        mt={24}
      />
      <Input
        label="Confirmar Senha"
        value={values.confirmPassword}
        onChangeText={text => setFieldValue('confirmPassword', text)}
        error={errors.confirmPassword}
        placeholder="Confirme sua senha"
        mt={24}
      />
    </AuthWrapper>
  );
};
