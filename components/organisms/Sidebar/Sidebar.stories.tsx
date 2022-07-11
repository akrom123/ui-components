import React from 'react';

import { Sidebar } from './index';

export default {
  title: 'organisms/Sidebar',
  component: Sidebar,
  argTypes: {
  },
};

const Template = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});

