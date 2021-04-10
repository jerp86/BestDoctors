import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { CardTitle, InputLabel, LinkText, RegularText, Title } from './index';
import { Container } from '../Container';

const story = storiesOf('Text', module);

story.addDecorator(getStory => <Container>{getStory()}</Container>);

story.add('Title', () => {
  const value = text('Text to the Title', 'Your Title here');

  return <Title>{value}</Title>;
});

story.add('CardTitle', () => {
  const value = text('Text to the CardTitle', 'Your CardTitle here');

  return <CardTitle>{value}</CardTitle>;
});

story.add('LinkText', () => {
  const value = text('Text to the LinkText', 'Your LinkText here');

  return <LinkText>{value}</LinkText>;
});

story.add('RegularText', () => {
  const value = text(
    'Text to the RegularText',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut esse quo atque porro itaque cupiditate vero provident debitis cum, excepturi recusandae voluptate similique veniam consectetur? Laboriosam necessitatibus amet quaerat deleniti?',
  );

  return <RegularText>{value}</RegularText>;
});

story.add('InputLabel', () => {
  const value = text('Text to the InputLabel', 'Your InputLabel here');

  return <InputLabel>{value}</InputLabel>;
});
