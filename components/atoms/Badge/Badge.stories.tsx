import React from 'react';

import { Badge } from './index';

export default {
  title: 'atoms/Badge',
  component: Badge,
  argTypes: {
    positive: { control: 'boolean', defaultValue: true },
    value: { control: 'text', defaultValue: '1.55%' },
  },
};

const Template = (args) => <Badge {...args} />;

export const Positive = Template.bind({});

export const Negative = Template.bind({});
Negative.args = {
  positive: false,
}

