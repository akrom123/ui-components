export interface Column<T> {
  id: string | number
  title: React.ReactElement | string
  width?: number | string
  render?: (row: T) => React.ReactNode
}

export interface ICollapsibleTableProps<T extends ColumnData> extends React.HTMLAttributes<HTMLDivElement> {
  columns: Column<T>[]
  rows: T[]
}

export type ColumnData = Record<string, any>

export interface RowProps {
  width: Array<number | string | undefined>
}