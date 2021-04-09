import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { Button } from './index';

storiesOf('Button', module).add('Standard', () => (
  <Button>{text('TextButton', 'Your Text in Button')}</Button>
));
