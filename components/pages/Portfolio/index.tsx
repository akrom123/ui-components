import React from 'react';
import { Field } from '../../molecules/Field';
import { Select } from '../../molecules/Select';
import { Chips } from '../../molecules/Chips';
import { Text } from '../../atoms/Text';
import { MainLayout } from '../../templates/MainLayout';
import { StyledPortfolioActions, StyledPortfolioCards, StyledPortfolioForm, StyledPortfolioTables } from './styled';
import { PriceChangeCard } from '../../molecules/PriceChangeCard';
import { Accordion } from '../../molecules/Accordion';
import { CollapsibleTable } from '../../molecules/CollapsibleTable';
import { Column } from '../../molecules/CollapsibleTable/types';
import { Badge } from '../../atoms/Badge';
import { Tooltip } from '../../molecules/Tooltip';

const accounts = [
  {
    label: '223-567',
    value: 1
  },
  {
    label: '223-333',
    value: 2
  },
];
const currencies = [
  {
    label: 'USD',
    value: 1
  },
  {
    label: 'RUB',
    value: 2
  },
];

const chips = [
  {
    label: 'Все',
    value: 'option-1',
  },
  {
    label: 'Валюта',
    value: 'option-2',
  },
  {
    label: 'Акции',
    value: 'option-3',
  },
  {
    label: 'Облигации',
    value: 'option-4',
    disabled: true,
  },
  {
    label: 'Паи',
    value: 'option-3',
  },
  {
    label: 'Прочее',
    value: 'option-3',
  },
];

export const Portfolio: React.FC = () => {
  const collapsibleColumns: Column<TableRow>[] = [
    {
      id: 'name',
      title: 'Название',
      render: (row) => <Text variant="body1">{row.name}</Text>,
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
      title: <><div>Доля</div> <Tooltip content="Доля" /></>,
      width: '200px',
    },
    {
      id: 'change',
      title: <><div>Изменение за день</div> <Tooltip content="Изменение за день" /></>,
      render: (row) => <><Text color='positive'>{row.change}</Text> <Badge positive value={row.changePercent} /></>,
    },
  ];
  const collapsibleData: TableRow[] = [
    {
      currency: 'usd',
      name: 'Рубль РФ',
      quantity: '100 000 ₽ ',
      valuation: '100 000 ₽ ',
      share: '45%',
      change: '-200',
      changePercent: '-23%',
      children: <>213123</>
    }
  ];

  return <MainLayout title="Портфель">
    <StyledPortfolioActions>
      <StyledPortfolioForm>
        <Field label="Счёт">
          <Select options={accounts} noOptionsMessage={<>
            Такого счёта не существует. <br />
            Введите другой номер или выберете счёт из списка.
          </>} />
        </Field>
        <Field label="Валюта">
          <Select options={currencies} />
        </Field>
      </StyledPortfolioForm>
      <Chips options={chips} value={[1, 2]} />
    </StyledPortfolioActions>
    <StyledPortfolioCards>
      <PriceChangeCard label="Оценка позиции" value="500 000 ₽" badge={{ positive: true, value: '+12%' }} />
      <PriceChangeCard label="Результат за день" value="-1 200 ₽" badge={{ positive: false, value: '+12%' }} />
    </StyledPortfolioCards>
    <StyledPortfolioTables>
      <Accordion title="Валюты" open>
        <CollapsibleTable<TableRow> columns={collapsibleColumns} rows={collapsibleData} />
      </Accordion>
      <Accordion title="Акции">
        bbbb
      </Accordion>
      <Accordion title="Облигации">
        bbbb
      </Accordion>
    </StyledPortfolioTables>
  </MainLayout>
}

interface TableRow {
  currency: string;
  name: string;
  valuation: string;
  quantity: string;
  share: string;
  change: string;
  changePercent: string;
  children?: React.ReactNode;
}