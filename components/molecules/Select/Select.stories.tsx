import React from 'react';

import { Select } from './index';

export default {
  title: 'molecules/Select',
  component: Select,
  argTypes: {
    options: {
      type: 'array',
      defaultValue: [
        {
          label: 'Option 1',
          value: 'option-1',
        },
        {
          label: 'Option 2',
          value: 'option-2',
        },
      ]
    },
    noOptionsMessage: {
      control: 'text',
      defaultValue: <>
        Такого счёта не существует. <br />
        Введите другой номер или выберете счёт из списка.
      </>
    }
  },
};

const Template = (args) => <Select {...args} />;

export const NoOptions = Template.bind({});
NoOptions.args = {
  options: [],
}

export const WithOptions = Template.bind({});

