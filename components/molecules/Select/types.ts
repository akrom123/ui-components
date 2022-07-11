import { CommonProps, GroupBase } from 'react-select'

type Option = Record<string, any>

export interface ISelectProps extends Partial<CommonProps<Option, true, GroupBase<Option>>> {
  hasError?: boolean
  noOptionsMessage?: React.ReactNode
}