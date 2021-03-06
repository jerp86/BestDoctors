import React, { useState } from 'react';

import { InputContainer, InputText } from './styles';

import { ErrorLabel, InputLabel } from '../../atoms';

export const Input = ({ label, placeholder, error, ...rest }) => {
  const [focus, setFocus] = useState(false);

  return (
    <>
      <InputContainer focus={focus} {...rest} pl={6} pt={2} pb={2}>
        <InputLabel>{String(label).toUpperCase()}</InputLabel>

        <InputText
          placeholder={placeholder}
          onFocus={() => setFocus(true)}
          onEndEditing={() => setFocus(false)}
        />
      </InputContainer>
      {error && <ErrorLabel>{error}</ErrorLabel>}
    </>
  );
};
