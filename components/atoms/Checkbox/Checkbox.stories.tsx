import React from 'react';

import { Checkbox } from './index';

export default {
  title: 'atoms/Checkbox',
  component: Checkbox,
  argTypes: {
    checked: { control: 'boolean', defaultValue: false },
    disabled: { control: 'boolean', defaultValue: false },
  },
};

const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
}
export const DefaultDisabled = Template.bind({});
DefaultDisabled.args = {
  disabled: true,
}
export const Checked = Template.bind({});
Checked.args = {
  checked: true,
}
export const CheckedDisabled = Template.bind({});
CheckedDisabled.args = {
  checked: true,
  disabled: true,
}

