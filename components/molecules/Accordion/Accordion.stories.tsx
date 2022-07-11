import React from 'react';

import { Accordion } from './index';

export default {
  title: 'molecules/Accordion',
  component: Accordion,
  argTypes: {
    title: { control: 'text', defaultValue: 'Title' },
    open: { control: 'boolean', defaultValue: false },
    children: { control: 'text', defaultValue: 'Hello World' },
    onClick: { action: 'clicked' },
  },
};

const Template = (args) => <Accordion {...args} />;

export const Closed = Template.bind({});

export const Opened = Template.bind({});
Opened.args = {
  open: true,
};

