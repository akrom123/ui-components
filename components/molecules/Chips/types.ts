import { HTMLAttributes } from "react"

export interface IChipProps extends HTMLAttributes<HTMLDivElement> {
  value: string | number
  label: string
  disabled?: boolean
  active?: boolean
}

export interface IChipsProps {
  options: IChipProps[]
  value: Array<string | number>
}