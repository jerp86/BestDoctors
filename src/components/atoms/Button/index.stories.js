import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { Button } from './index';
import { Wrapper } from '../../wrapper';

storiesOf('Button', module)
  .addDecorator(getStory => <Wrapper>{getStory()}</Wrapper>)
  .add('Standard', () => {
    const value = text('Text to the Button', 'Your Text in Button');
    const outline = boolean('Outline', false);

    return <Button outline={outline}>{value}</Button>;
  });
