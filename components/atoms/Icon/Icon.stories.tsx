import React, { CSSProperties } from 'react';

import { Icon, iconsCache } from './index';

export default {
  title: 'atoms/Icon',
  component: Icon,
  argTypes: {
    size: { control: 'number', defaultValue: 24 },
  }
};

const WrapperStyles: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gridGap: '5px'
}
const IconWrapperStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '10px',
  width: '100px',
  height: '100px',
  border: '1px solid #eee',
  gridGap: '30px'
}

const Template = (args: any) => {
  return <div style={WrapperStyles}>
    {
      Object.keys(iconsCache).map(key => <div style={IconWrapperStyles}>
        <Icon name={key} key={key} {...args} />
        <span>{key}</span>
      </div>)
    }
  </div>
};

export const AllIcons = Template.bind({});

