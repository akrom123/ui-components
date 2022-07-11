import React from 'react';

import { TextField } from './index';

export default {
  title: 'atoms/TextField',
  component: TextField,
  argTypes: {
    disabled: { control: 'boolean', defaultValue: false },
    hasError: { control: 'boolean', defaultValue: false },
  },
};

const Template = (args) => <TextField {...args} />;

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
}
export const HasError = Template.bind({});
Disabled.args = {
  hasError: true,
}
