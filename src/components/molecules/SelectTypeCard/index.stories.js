import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { SelectTypeCard } from './index';
import { Container } from '../../atoms/Container';

const story = storiesOf('SelectTypeCard', module);

story.addDecorator(getStory => <Container>{getStory()}</Container>);

story.add('Standard', () => {
  const title = text('Title', 'Insert your Title');
  const description = text(
    'Description',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut esse quo atque porro itaque cupiditate vero provident debitis cum, excepturi recusandae voluptate12',
  );
  const selected = boolean('Selected', false);

  return (
    <SelectTypeCard
      title={title}
      description={description}
      selected={selected}
    />
  );
});
