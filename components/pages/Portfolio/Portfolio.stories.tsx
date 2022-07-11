import React from 'react';

import { Portfolio } from './index';

export default {
  title: 'pages/Portfolio',
  component: Portfolio,
  argTypes: {
  },
};

const Template = (args) => <Portfolio {...args} />;

export const Default = Template.bind({});

