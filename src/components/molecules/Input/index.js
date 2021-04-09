import React, { useState } from 'react';

import { InputContainer, InputText } from './styles';

import { InputLabel } from '../../atoms';

export const Input = ({ label, ...rest }) => {
  const [focus, setFocus] = useState(false);

  return (
    <InputContainer focus={focus}>
      <InputLabel>{String(label).toUpperCase()}</InputLabel>

      <InputText
        {...rest}
        onFocus={() => setFocus(true)}
        onEndEditing={() => setFocus(false)}
      />
    </InputContainer>
  );
};
