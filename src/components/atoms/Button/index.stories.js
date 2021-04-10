import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { Button } from './index';
import { Container } from '../Container';

const story = storiesOf('Button', module);

story.addDecorator(getStory => <Container>{getStory()}</Container>);

story.add('Standard', () => {
  const value = text('Text to the Button', 'Your Text in Button');
  const outline = boolean('Outline', false);

  return <Button outline={outline}>{value}</Button>;
});
