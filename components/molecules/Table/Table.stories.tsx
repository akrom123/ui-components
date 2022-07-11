import React from 'react';

import { Text } from '../../atoms/Text';
import { Badge } from '../../atoms/Badge';
import { CollapsibleTable } from './index';

export default {
  title: 'molecules/CollapsibleTable',
  component: CollapsibleTable,
  argTypes: {
    columns: {
      control: 'array', defaultValue: [
        {
          id: 'name',
          title: 'Название',
          render: (row: any) => <Text variant="body1">{row.name}</Text>,
          width: '180px',
        },
        {
          id: 'quantity',
          title: 'Количество',
          width: '200px',
        },
        {
          id: 'valuation',
          title: 'Оценка',
          width: '200px',
        },
        {
          id: 'share',
          title: 'Доля',
          width: '200px',
        },
        {
          id: 'change',
          title: 'Изменение за день',
          render: (row: any) => <><Text color='positive'>{row.change}</Text> <Badge positive value={row.changePercent} /></>,
        },
      ]
    },
    rows: {
      control: 'array', defaultValue: [
        {
          currency: 'usd',
          name: 'Рубль РФ',
          quantity: '100 000 ₽ ',
          valuation: '100 000 ₽ ',
          share: '45%',
          change: '-200',
          changePercent: '-23%',
        }
      ]
    },
  },
};

const Template = (args: any) => <CollapsibleTable {...args} />;

export const Default = Template.bind({});
Default.args = {
};