import React from 'react';
import { useState } from 'react';

import { AuthWrapper, Button, SelectTypeCard } from '~/components';

export const SelectAccountTypeScreen = ({ navigation }) => {
  const [accountType, setAccountType] = useState();

  const changeAccountType = type => setAccountType(type);

  const goToConfirmPhone = () => navigation.navigate('ConfirmPhone');

  return (
    <AuthWrapper
      title="Escolha o tipo de conta"
      bottomChildren={<Button onPress={goToConfirmPhone}>PRÓXIMO</Button>}>
      <SelectTypeCard
        title="PACIENTE"
        description="Vou buscar as clínicas e médicos próximos a mim para agendar consultas e ter um histórico."
        selected={accountType === 'patient'}
        mb={24}
        onPress={() => changeAccountType('patient')}
      />

      <SelectTypeCard
        title="MÉDICO"
        description="Irei cadastrar meu perfil médico para anteder meus pacientes e me associar à uma clinica (opcional)."
        selected={accountType === 'doctor'}
        mb={24}
        onPress={() => changeAccountType('doctor')}
      />

      <SelectTypeCard
        title="CLÍNICA MÉDICA"
        description="Irei cadastrar minha clinica e os colaboradores médicos para atender meus clientes."
        selected={accountType === 'clinic'}
        onPress={() => changeAccountType('clinic')}
      />
    </AuthWrapper>
  );
};
