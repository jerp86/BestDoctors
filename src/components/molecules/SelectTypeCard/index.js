import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { CardContainer, CheckCircle, CheckView, TextView } from './styles';

import { CardTitle, RegularText } from '../../atoms';

import { theme } from '~/styles/theme';

export const SelectTypeCard = ({ selected, title, description, ...rest }) => {
  return (
    <CardContainer selected={selected} {...rest}>
      <CheckView>
        <CheckCircle selected={selected}>
          <Icon
            name="check"
            color={theme.colors.greyLight}
            size={theme.metrics.px(16)}
          />
        </CheckCircle>
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
