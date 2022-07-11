import React from 'react';
import { TextField } from '../../atoms/TextField';

import { Field } from './index';

export default {
  title: 'molecules/Field',
  component: Field,
  argTypes: {
    label: { control: 'text', defaultValue: 'Label' },
    caption: { control: 'text', defaultValue: 'Caption' },
    hasError: { control: 'boolean', defaultValue: false },
  },
};

const Template = ({ hasError, ...args }) => <Field hasError={hasError} {...args}>
  <TextField hasError={hasError} />
</Field>;

export const Default = Template.bind({});

export const HasError = Template.bind({});
HasError.args = {
  hasError: true,
}