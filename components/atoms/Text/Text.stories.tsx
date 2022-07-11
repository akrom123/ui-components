import React from 'react';

import { Text } from './index';
import { color } from '../../../theme';

export default {
  title: 'atoms/Text',
  component: Text,
  argTypes: {
    variant: { control: 'select', options: ['h1', 'h2', 'h3', 'p', 'span'] },
    color: { control: 'select', options: [Object.keys(color.text)] },
    children: { control: 'text', defaultValue: 'Hello World' },
  },
};

const Template = (args) => <Text {...args} />;

export const H1 = Template.bind({});
H1.args = {
  variant: 'h1',
};

export const H2 = Template.bind({});
H2.args = {
  variant: 'h2',
};

export const H3 = Template.bind({});
H3.args = {
  variant: 'h3',
};

export const Body1 = Template.bind({});
Body1.args = {
  variant: 'body1',
};

export const Body2 = Template.bind({});
Body2.args = {
  variant: 'body2',
};

export const Caption1 = Template.bind({});
Caption1.args = {
  variant: 'caption1',
};

export const Caption2 = Template.bind({});
Caption2.args = {
  variant: 'caption2',
};

export const Colored = Template.bind({});
Colored.args = {
  variant: 'h1',
  color: 'negative',
};
