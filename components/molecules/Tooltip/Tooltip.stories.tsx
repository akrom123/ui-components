import React from 'react';

import { Tooltip } from './index';

export default {
  title: 'molecules/Tooltip',
  component: Tooltip,
  argTypes: {
    content: { control: 'text', defaultValue: 'Hello World' },
  },
};

const Template = (args) => <Tooltip {...args} />;

export const Default = Template.bind({});
Default.args = {
}