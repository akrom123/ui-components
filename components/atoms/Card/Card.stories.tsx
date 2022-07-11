import React from 'react';

import { Card } from './index';

export default {
  title: 'atoms/Card',
  component: Card,
  argTypes: {
    children: { control: 'text', defaultValue: 'Hello World' },
  },
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});

