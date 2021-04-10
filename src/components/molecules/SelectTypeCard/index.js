import React from 'react';

import { CardContainer, CheckCircle, CheckView, TextView } from './styles';

import { CardTitle, RegularText } from '../../atoms';

export const SelectTypeCard = ({ selected, title, description }) => {
  return (
    <CardContainer selected={selected}>
      <CheckView>
        <CheckCircle selected={selected} />
      </CheckView>

      <TextView>
        <CardTitle>{title}</CardTitle>
        <RegularText>
          {String(description).length >= 135
            ? `${String(description).slice(0, 135)}...`
            : description}
        </RegularText>
      </TextView>
    </CardContainer>
  );
};
