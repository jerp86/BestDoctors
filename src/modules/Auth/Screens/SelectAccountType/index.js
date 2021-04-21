import React from 'react';

import { AuthWrapper, Button, SelectTypeCard } from '~/components';

export const SelectAccountTypeScreen = () => {
  return (
    <AuthWrapper
      title="Escolha o tipo de conta"
      bottomChildren={<Button>PRÓXIMO</Button>}>
      <SelectTypeCard
        title="PACIENTE"
        description="Vou buscar as clínicas e médicos próximos a mim para agendar consultas e ter um histórico."
        selected={false}
        mb={24}
      />

      <SelectTypeCard
        title="MÉDICO"
        description="Irei cadastrar meu perfil médico para anteder meus pacientes e me associar à uma clinica (opcional)."
        selected={false}
        mb={24}
      />

      <SelectTypeCard
        title="CLÍNICA MÉDICA"
        description="Irei cadastrar minha clinica e os colaboradores médicos para atender meus clientes."
        selected={false}
      />
    </AuthWrapper>
  );
};
