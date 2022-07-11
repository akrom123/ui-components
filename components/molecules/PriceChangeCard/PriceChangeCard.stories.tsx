import React from 'react';

import { PriceChangeCard } from './index';

export default {
  title: 'molecules/PriceChangeCard',
  component: PriceChangeCard,
  argTypes: {
    label: { control: 'text', defaultValue: 'Оценка позиции' },
    value: { control: 'text', defaultValue: '500 000 ₽' },
    badge: {
      control: 'object', defaultValue: {
        value: '+10%',
        positive: true,
      }
    },
  },
};

const Template = (args) => <PriceChangeCard {...args} />;

export const Default = Template.bind({});
