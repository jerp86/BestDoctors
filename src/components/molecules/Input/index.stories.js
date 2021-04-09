import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { Input } from './index';
import { Container } from '../../atoms/Container';

const story = storiesOf('Input', module);

story.addDecorator(getStory => <Container>{getStory()}</Container>);

story.add('Standard', () => {
  const label = text('Text to the Input Label', 'Label');
  const placeholder = text(
    'Text to the Input Placeholder',
    'Please, insert your text...',
  );

  return <Input label={label} placeholder={placeholder} />;
});
