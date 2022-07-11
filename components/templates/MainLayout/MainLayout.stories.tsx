import React from 'react';

import { MainLayout } from './index';

export default {
  title: 'templates/MainLayout',
  component: MainLayout,
  argTypes: {
    title: { control: 'text', defaultValue: 'Портфель' },
  },
};

const Template = (args) => <MainLayout {...args} />;

export const Default = Template.bind({});

