import React from 'react';
import { Icon } from '../../atoms/Icon';
import {
  StyledCollapsibleTable,
  StyledCollapsibleTableHeader,
  StyledCollapsibleTableHeaderCell,
  StyledCollapsibleTableBody,
  StyledCollapsibleTableBodyRow,
  StyledCollapsibleTableBodyCell,
  StyledCollapsibleTableArrow
} from './styled';
import { ColumnData, ICollapsibleTableProps } from './types';

export function CollapsibleTable<T extends ColumnData>({
  columns = [],
  rows = [],
}: ICollapsibleTableProps<T>) {
  const open = true;
  return <StyledCollapsibleTable>
    <StyledCollapsibleTableHeader width={columns.map(c => c.width)}>
      {
        columns.map(column => <StyledCollapsibleTableHeaderCell key={column.id}>{column.title}</StyledCollapsibleTableHeaderCell>)
      }
    </StyledCollapsibleTableHeader>
    <StyledCollapsibleTableBody>
      {
        rows.map(row => <>
          <StyledCollapsibleTableBodyRow key={row.id} width={columns.map(c => c.width)}>
            {
              columns.map(column => (
                <StyledCollapsibleTableBodyCell key={column.id}>
                  {column.render ? column.render(row) : row[column.id]}
                </StyledCollapsibleTableBodyCell>
              ))
            }
            <StyledCollapsibleTableBodyCell>
              <StyledCollapsibleTableArrow open={open}>
                <Icon name={'arrow-down'} size={24} />
              </StyledCollapsibleTableArrow>
            </StyledCollapsibleTableBodyCell>
          </StyledCollapsibleTableBodyRow>
          {row.children}
        </>
        )
      }
    </StyledCollapsibleTableBody>
  </StyledCollapsibleTable>
}