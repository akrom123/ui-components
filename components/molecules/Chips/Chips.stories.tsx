import React from 'react';

import { Chips } from './index';

export default {
  title: 'molecules/Chips',
  component: Chips,
  argTypes: {
    options: {
      control: 'object',
      defaultValue: [
        {
          label: 'Все',
          value: 'option-1',
        },
        {
          label: 'Валюта',
          value: 'option-2',
        },
        {
          label: 'Акции',
          value: 'option-3',
        },
        {
          label: 'Облигации',
          value: 'option-4',
          disabled: true,
        },
        {
          label: 'Паи',
          value: 'option-3',
        },
        {
          label: 'Прочее',
          value: 'option-3',
        },
      ]
    },
    value: {
      control: 'object',
      defaultValue: ['option-1']
    }
  },
};

const Template = (args) => <Chips {...args} />;

export const Default = Template.bind({});
Default.args = {
};